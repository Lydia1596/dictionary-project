import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div className="synonyms">
        <p>
          <strong>Synonyms:</strong>
          <ul>
            {props.data.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
