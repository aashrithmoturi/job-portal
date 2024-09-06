import React from 'react'
import CSSProperties from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display: "block",
    margin: "100px auto",
};

const Spinner = () => {
  const color = '#4338ca';

  return (
      <ClipLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={150}
      />
  );
}

export default Spinner