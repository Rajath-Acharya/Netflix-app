import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import List from "./components/List";
import requests from "./config";
import Navbar from "./components/Navbar";
import fire from "./firebase";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPassError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use ":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <div className="main">
          <Navbar handleLogout={handleLogout} />
          <Banner />
          <List
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeList={true}
          />
          <List title="Trending" fetchUrl={requests.fetchTrending} />
          <List title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <List title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <List title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <List title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <List title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passError={passError}
        />
      )}
    </>
  );
}

export default App;
