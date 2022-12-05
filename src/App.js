import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import MenuProduct from "./components/pages/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery/Gallery";
import Aksiya from "./components/pages/Aksiya/Aksiya";
import { useEffect } from "react";
import { useState } from "react";
import firebase from "./firebase";
import Contact from "./components/pages/Contact/Contact";
import SignIn from "./components/pages/auth/SignIn";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  // FIREBASE START
  const ref = firebase.firestore().collection("developers");

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  // FIREBASE END

  return (
    <>
      {user ? (
        <Router>
          <div className="app">
            <Routes>
              {/* Home page */}
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <About />
                    <Shop />
                    <Menu />
                    <Clients />
                    <Prices />
                  </>
                }
              />

              {/* Menu page */}
              <Route path="/menu" element={<MenuProduct user={user} />} />

              {/* Branches page */}
              <Route path="/galereya" element={<Gallery />} />

              {/* Aksiya page */}
              <Route path="/aksiya" element={<Aksiya />} />

              {/* Contact page */}
              <Route path="/aloqa" element={<Contact />} />

              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </Router>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
