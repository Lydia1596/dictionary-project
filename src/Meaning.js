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
              <strong>Definition: </strong>{" "}
              <span className="definition">
                {definition.definition}
                <br />
              </span>
              <span className="example">
                <em>{definition.example}</em>
              </span>
            </p>
          </div>
        );
      })}
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
