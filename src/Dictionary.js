import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState(null);
  const [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function Search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(handleResponse);
  }
  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="container">
      <section>
        <form onSubmit={Search}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Enter a word..."
            onChange={handleKeyWord}
          ></input>
        </form>
      </section>
      <Results data={results} />
    </div>
  );
}
