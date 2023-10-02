import React from "react";
import "./Main.style.scss";

import Images from "../ImageGallery/ImageGallery";

const Main = ({sneakerAmount, addToCart, removeToCart, handleAddToCart}) => {
    return (
        <main>
            <div className="images">
                <Images />
            </div>
            <div className="right-side">
                <div className="wrapper">
                    <h3>SNEAKER COMPANY</h3>
                    <h className="title">
                        Fall Limited Edition <br /> Sneakers
                    </h>
                    <p className="main-text">
                        These low-profile sneakers are you perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand
                        everything the weather can offer.
                    </p>
                    <div className="prices">
                        <div className="price-and-discount">
                            <h2 className="price">$125.00</h2>
                            <h2 className="discount">50%</h2>
                        </div>
                        <p className="previous-price">$250</p>
                    </div>
                    <div className="buy-buttons">
                        <div className="amount">
                            <button id="decrease" onClick={removeToCart}>
                                -
                            </button>
                            <button id="amount-in-cart">{sneakerAmount}</button>
                            <button id="increase" onClick={addToCart}>
                                +
                            </button>
                        </div>
                        <div className="add-to-cart">
                            <button onClick={handleAddToCart}>
                                <img src="./images/icon-cart-white.svg" alt="" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
