import React from "react";
import DetailItem from "./DetailItem";
import styles from "../styles/Card.module.css";
import Image from "next/image";

function LaunchCard({ data }) {
  let Items = <div></div>;
  if (data && data.length) {
    Items = data.map((details, index) => {
      return (
        <div key={details.flight_number} className={styles.card}>
          <figure className={styles.figure}>
            <Image
              unsized
              className={styles.img}
              src={details.links.mission_patch_small}
              alt={details.mission_name}
            />
          </figure>
          <p className={styles.name}>
            {details.mission_name} #{details.flight_number}
          </p>
          <DetailItem value={details.mission_id} label="Mission Ids" />
          <DetailItem value={details.launch_year} label="Launch Year" />
          <DetailItem
            value={details.launch_success}
            label="Successful Launch"
          />
          <DetailItem
            value={details.landing_success}
            label="Successful Landing"
          />
        </div>
      );
    });
  } else {
    Items = (
      <div className={styles.noData}>
        <h2>No data found</h2>
      </div>
    );
  }
  return <div className={styles.container}>{Items}</div>;
}

export default LaunchCard;
