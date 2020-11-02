import React from "react";
import FilterBtn from "./FilterBtn";
import styles from "../styles/Filter.module.css";

function FilterCategory(props) {
  const onFilterClick = (value) => {
    props.onFilterApply(props.filerType, value);
  };
  const filterItems = props.filterValues.map((filter) => (
    <FilterBtn
      value={filter}
      key={filter}
      isActive={filter === props.activeItem}
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
