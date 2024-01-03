import React, { useState } from "react";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState(null);
  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
  }
  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <form onSubmit={Search}>
      <input
        type="search"
        autoFocus={true}
        placeholder="Enter a word..."
        onChange={handleKeyWord}
      ></input>
    </form>
  );
}
