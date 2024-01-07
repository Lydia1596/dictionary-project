import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.data.partOfSpeech}</h4>
      <p>
        {props.data.definition} <br /> <em>{props.data.example}</em>
      </p>
    </div>
  );
}
