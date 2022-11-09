import React, { useRef, useContext, useCallback } from "react";
import { InputContext } from "./context/InputContextProvider";
import "../styles/SearchInput.css";
import axios from "axios";

export default function SearchInput() {
    const inputRef = useRef();
    const ctx = useContext(InputContext);

    const fetchMeanings = useCallback(async (word) => {
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );

            ctx.setResults(response.data);
            ctx.setError(null);
        } catch (error) {
            ctx.setResults([]);
            ctx.setError(error.response.data.message);
        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value;

        fetchMeanings(inputValue);

        inputRef.current.value = "";
        inputRef.current.focus();
    };

    return (
        <section>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter your word..."
                    id="word-search"
                    ref={inputRef}
                />
            </form>
        </section>
    );
}
