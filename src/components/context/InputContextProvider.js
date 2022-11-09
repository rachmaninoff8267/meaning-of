import React, { useState } from "react";

export const InputContext = React.createContext();

export default function InputContextProvider({
    children,
    results,
    setResults,
    error,
    setError,
}) {
    return (
        <InputContext.Provider value={{ results, setResults, error, setError }}>
            {children}
        </InputContext.Provider>
    );
}
