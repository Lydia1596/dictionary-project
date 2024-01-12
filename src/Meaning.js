import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong> {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
