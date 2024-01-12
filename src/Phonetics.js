import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.data.audio && props.data.text) {
    return (
      <div className="phonetics">
        <p>
          <ReactAudioPlayer src={props.data.audio} controls />
          <strong className="text">{props.data.text}</strong>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
