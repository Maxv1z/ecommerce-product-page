import React, {useState} from "react";
import "./Navbar.style.scss";

const Navbar = ({sneakerAmountFinal, removeFromCart}) => {
    const [isMobile, setMobile] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const hamburgerHandleClick = () => {
        setMobile((current) => !current);
    };
    const cartActive = () => {
        setIsActive((current) => !current);
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
                    <div className="logo" onClick={() => console.log(sneakerAmountFinal)}>
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
                    <div className="cart" onClick={cartActive}>
                        <div className="cart-icon">
                            <img src="./images/icon-cart.svg" alt="" />
                            {sneakerAmountFinal > 0 && (
                                <div className="cart-badge">{sneakerAmountFinal}</div>
                            )}
                        </div>
                    </div>
                    <div className="avatar">
                        <img src="./images/image-avatar.png" alt="" />
                    </div>
                </div>
            </nav>
            <div className={isActive ? "cart-menu block" : "cart-menu"}>
                <div className="cart-header">
                    <h3>Cart</h3>
                </div>
                {sneakerAmountFinal > 0 ? (
                    <>
                        <div
                            className={
                                sneakerAmountFinal > 0
                                    ? "cart-component-active"
                                    : "cart-component"
                            }
                        >
                            <div>
                                <img
                                    src="./images/image-product-1-thumbnail.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="right-side">
                                <p>Fall limited Edition Sneakers</p>
                                <p>
                                    $125.00 x {sneakerAmountFinal}{" "}
                                    <b>${125 * sneakerAmountFinal}</b>
                                </p>
                            </div>
                            <div className="delete-button" onClick={removeFromCart}>
                                <img src="./images/icon-delete.svg" alt="" />
                            </div>
                        </div>
                        <button>Checkout</button>
                    </>
                ) : (
                    <>
                        <div className="cart-empty">
                            <p>Your cart is empty</p>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
