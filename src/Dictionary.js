import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "WXoO9cXuCQfOtqWSxDMrRh18nbw6aLRcCzPPoQdbSIiS9MllrzfU3QEd";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <Photos data={photos} />
    </div>
  );
}
