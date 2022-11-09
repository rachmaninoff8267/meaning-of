import React from "react";
import SearchImage from "../assets/icons8-search.svg";
import "../styles/HeroText.css";

export default function HeroText({ errorMessage }) {
    return (
        <section className="hero-container">
            {!errorMessage && (
                <div>
                    <img src={SearchImage} alt="" />
                    <h4>Meanings will appear here.</h4>
                </div>
            )}
            {errorMessage && (
                <div>
                    <h4>{errorMessage}</h4>
                </div>
            )}
        </section>
    );
}
