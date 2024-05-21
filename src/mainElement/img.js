import React from "react";

function Image(props) {
  const { src } = props;
  return (
    <>
      <img className="img" src={src} />
    </>
  );
}

export default Image;
