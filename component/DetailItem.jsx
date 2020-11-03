import React from "react";
import styles from "../styles/Card.module.css";

const DetailItem = React.memo((props) => {
  const isValueArray = Array.isArray(props.value);
  const detailValue = isValueArray ? (
    props.value.length ? (
      <ul className={styles.value}>
        {props.value.length ? (
          props.value.map((data) => <li key={data}>{data}</li>)
        ) : (
          <p className={styles.value}> NA </p>
        )}
      </ul>
    ) : (
      <p className={styles.value}> NA </p>
    )
  ) : (
    <p className={styles.value}>{props.value ? props.value + "" : " NA "}</p>
  );

  return (
    <div className={isValueArray ? styles.detail.list : styles.detail}>
      <p className={styles.label}>{props.label}:</p>
      {detailValue}
    </div>
  );
});

export default DetailItem;
