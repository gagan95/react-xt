import React from "react";
import styles from "../styles/Filter.module.css";
import { useRouter } from "next/router";

function FilterBtn(props) {
  const router = useRouter();
  const { launch_year, launch_success, land_success } = router.query;

  return (
    <button
      className={
        router.query[props.filerType] == props.value
          ? styles.btnactive
          : styles.btn
      }
      onClick={() => {
        props.onClick(props.value);
      }}
    >
      {props.value}
    </button>
  );
}

export default FilterBtn;
