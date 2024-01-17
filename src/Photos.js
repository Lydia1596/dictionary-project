import React from "react";

export default function Photos(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <section className="Photos">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
