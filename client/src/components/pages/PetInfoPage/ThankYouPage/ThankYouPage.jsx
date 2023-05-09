import React from "react";
import styles from "./ThankYouPage.module.css";
import { Link } from "react-router-dom";

const ThankYouPage = ({ selectedPet }) => {
  return (
    <div className={styles["thank-you-page"]}>
      <div className={styles["thank-you-container"]}>
        <h1 className={styles["thank-you-header"]}>
          Thank You for Adopting {selectedPet.name}!
        </h1>
        <div className={styles["btn-container"]}>
          {" "}
          <Link to="/home">
            {" "}
            <button className={styles["home-btn"]}>Return Home</button>
          </Link>
          <Link to="/pets">
            <button className={styles["pets-btn"]}>Return to Pets</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
