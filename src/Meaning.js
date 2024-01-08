import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.data.partOfSpeech}</h4>
      <p>
        {props.data.definition} <br /> <em>{props.data.example}</em>
      </p>
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
