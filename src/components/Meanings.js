import React, { Fragment } from "react";
import "../styles/Meanings.css";

export default function Meanings({ meaningInfo }) {
    return (
        <Fragment>
            <div className="part-of-speech">
                <h3>{meaningInfo.partOfSpeech}</h3>
            </div>

            <ul>
                {meaningInfo.definitions.map((element, index) => {
                    return (
                        <li key={index} className="meaning">
                            <p>{element.definition}</p>
                            {element.example && (
                                <p className="example">{`"${element?.example}"`}</p>
                            )}
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
}
