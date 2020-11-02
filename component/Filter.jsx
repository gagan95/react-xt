import React from "react";
import styles from "../styles/Filter.module.css";
import FilterCategory from "./FilterCategory";
function Filter() {
  const [data] = React.useState([
    {
      type: "launch_year",
      displayName: "Launch Year",
      data: new Array(new Date().getFullYear() - 2005)
        .fill()
        .map((a, i) => 2006 + i),
    },
    {
      type: "launch_success",
      displayName: "Successful Launch",
      data: ["true", "false"],
    },
    {
      type: "land_success",
      displayName: "Successful Landing",
      data: ["true", "false"],
    },
  ]);
  const filterCategories = data.map((category) => (
    <FilterCategory
      filterValues={category.data}
      filerType={category.type}
      key={category.type}
      filterDisplayName={category.displayName}
    />
  ));
  console.log(data);
  return (
    <div className={styles.filters}>
      <h2>Filters</h2>
      {filterCategories}
    </div>
  );
}

export default Filter;
