import React, { useState } from "react";
import InputContextProvider from "./components/context/InputContextProvider";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainContent from "./components/MainContent";
import HeroText from "./components/HeroText";
import "./styles/App.css";

function App() {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    return (
        <main>
            <Header />

            <InputContextProvider
                results={results}
                setResults={setResults}
                error={error}
                setError={setError}
            >
                <SearchInput />
                {results.length > 0 && !error && <MainContent />}
            </InputContextProvider>

            {results.length === 0 && <HeroText errorMessage={error} />}
        </main>
    );
}

export default App;
