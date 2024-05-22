import React from "react";
import style from "./index.module.css";

function Loader() {
  const generateSquares = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <div key={index} className={style.square}></div>
    ));
  };
  return <div className={style.loader}>{generateSquares(9)}</div>;
}

export default Loader;
