import React from "react";
import Header from "./components/header";
import "./App.css";
import Home from "./components/home";
import Books from "./components/books";
import Sign from "./components/sign";
import User from "./components/userinfo";
import Cart from "./components/cart"
import AfterSignedIn from "./components/aftersignedin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth, db } from "./components/firebase.js";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="main">
        <div classsName="nav">
          <nav>
            <Header/>
          </nav>
        </div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="sign" element={<Sign />} />
            <Route path="cart" element={<Cart />} />
            <Route path="userInfo" element={<User />} />
          </Routes>
        </section>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
