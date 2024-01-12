import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <ul className="synonyms">
        {props.data.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
