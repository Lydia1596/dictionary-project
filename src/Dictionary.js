import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState(null);
  const [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data);
  }
  function Search(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=34f2a007t4073b7ac44010a0e7f0b6co`;
    axios.get(url).then(handleResponse);
  }
  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="container">
      <form onSubmit={Search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word..."
          onChange={handleKeyWord}
        ></input>
      </form>
      <Results data={results} />
    </div>
  );
}
