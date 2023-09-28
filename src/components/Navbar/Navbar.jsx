import React, {useState} from "react";
import "./Navbar.style.scss";

const Navbar = () => {
    const [isMobile, setMobile] = useState(false);

    const hamburgerHandleClick = () => {
        setMobile((current) => !current);
    };
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="hamburger" onClick={hamburgerHandleClick}>
                        <img
                            src={
                                isMobile
                                    ? "./images/icon-close.svg"
                                    : "./images/icon-menu.svg"
                            }
                            alt="menu"
                        />
                    </div>
                    <div className="logo">
                        <img src="./images/logo.svg" alt="" />
                    </div>

                    <div class={isMobile ? "nav_collection active" : "nav_collection"}>
                        <ul class="collection">
                            <li class="item">
                                <a href="#">Collections</a>
                            </li>
                            <li class="item">
                                <a href="#">Men</a>
                            </li>
                            <li class="item">
                                <a href="#">Women</a>
                            </li>
                            <li class="item">
                                <a href="#">About</a>
                            </li>
                            <li class="item">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="cart-and-avatar">
                    <div className="cart">
                        <img src="./images/icon-cart.svg" alt="" />
                    </div>
                    <div className="avatar">
                        <img src="./images/image-avatar.png" alt="" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
