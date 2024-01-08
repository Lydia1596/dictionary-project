import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div className="synonyms">
        <h5>Synonyms:</h5>
        <ul>
          {props.data.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
