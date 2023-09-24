import React, {useState} from "react";
import reactDOM from "react-dom";
import Home from "./home";
import Books from "./books";
import Sign from "./sign";
import Cart from "./cart";
import AfterSignedIn from "./aftersignedin.js"
import { NavLink } from "react-router-dom";
import { auth, db } from "./firebase.js";
import "../styles/header.css";
import {BsFillCartFill} from "react-icons/bs";
import { AiFillHome} from "react-icons/ai";
import {BiLibrary} from "react-icons/bi";
import { FcLibrary } from "react-icons/fc";


function Header(){
    const [isUserSigned, setIsUserSigned] = useState(false);
    auth.onAuthStateChanged((user) => {
        if (user) setIsUserSigned(true);
        else {
        setIsUserSigned(false);
        }
    });
    return(
        <div className="navigation">
            <div className="heading">
                <h2>LibraryHUB</h2>
            </div>
            <ul>
                <li className="items">
                <NavLink to="/" className="link">
                {<AiFillHome/>} Home
                </NavLink>
                </li>
                <li className="items">
                <NavLink to="/books" className="link">
                {<BiLibrary/>} Books
                </NavLink>
                </li>
                <li className="items">
                <NavLink to="/cart" className="link">
                {<BsFillCartFill/>} Cart
                </NavLink>
                </li>
            </ul>
            <div className="signin">
              {!isUserSigned ? <Sign /> : <AfterSignedIn />}
            </div>
        </div>
    );
}


export default Header;


{/* <nav>
            <a href="#">HOME</a>
            <a href="#">BOOKS</a>
            <a href="#">ABOUT</a>
            <a href="" class="button">SignUp</a>
            <div id="indicator"></div>
            </nav> */}