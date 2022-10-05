import React from "react";

const Masker = ({ url }) => {
  return (
    <>
      <div className="masker">
        <img src={url} alt="masker" className="masker_img" />
      </div>
    </>
  );
};

export default Masker;
