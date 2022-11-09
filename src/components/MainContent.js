import React, { useContext } from "react";
import { InputContext } from "./context/InputContextProvider";
import Meanings from "./Meanings";
import "../styles/MainContent.css";

export default function MainContent() {
    const { results } = useContext(InputContext);

    return (
        <section id="meaning-section">
            <div className="word-container">
                <h2>{results[0].word}</h2>
                <h5>
                    {results[0]?.phonetic || results[0]?.phonetics[1]?.text}
                </h5>
            </div>
            <div className="scrollable-container">
                <div className="word-meaning-container">
                    {results[0].meanings.map((meaning, index) => {
                        return (
                            <div className="meaning-card" key={index}>
                                <Meanings meaningInfo={meaning} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
