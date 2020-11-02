import React from "react";
import styles from "../styles/Filter.module.css";

function FilterBtn(props) {
  return (
    <button
      className={props.isActive ? styles.btn.active : styles.btn}
      onClick={() => {
        props.onClick(props.value);
      }}
    >
      {props.value}
    </button>
  );
}

export default FilterBtn;
