import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.data.audio && props.data.text) {
    return (
      <div className="phonetics">
        <ReactAudioPlayer src={props.data.audio} autoPlay controls />
        <h3>{props.data.text}</h3>
      </div>
    );
  } else {
    return null;
  }
}
