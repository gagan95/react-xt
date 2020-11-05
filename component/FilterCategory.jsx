import React from "react";
import FilterBtn from "./FilterBtn";
import styles from "../styles/Filter.module.css";
import Router from "next/router";
import { useRouter } from "next/router";

function FilterCategory(props) {
  const router = useRouter();
  const onFilterClick = (value) => {
    let obj = {};
    obj = router.query;
    if (obj[props.filerType] == value) {
      delete obj[props.filerType];
      Router.push({
        pathname: "/",
        query: obj,
      });
    } else {
      obj[props.filerType] = value;

      Router.push({
        pathname: "/",
        query: obj,
      });
    }
  };
  const filterItems = props.filterValues.map((filter) => (
    <FilterBtn
      value={filter}
      key={filter}
      isActive={filter === props.activeItem}
      filerType={props.filerType}
      onClick={onFilterClick}
    />
  ));
  return (
    <section className={styles.section}>
      <h3 className={styles.type}>{props.filterDisplayName}</h3>
      <div className={styles.values}>{filterItems}</div>
    </section>
  );
}

export default FilterCategory;
