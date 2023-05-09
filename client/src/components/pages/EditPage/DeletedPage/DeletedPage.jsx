import React from "react";
import styles from "./DeletedPage.module.css";
import { Link } from "react-router-dom";

const DeletedPage = ({ selectedPet }) => {
  return (
    <div className={styles["thank-you-page"]}>
      <div className={styles["thank-you-container"]}>
        <h1 className={styles["thank-you-header"]}>
          You have deleted {selectedPet.name}!
        </h1>
        <div className={styles["btn-container"]}>
          {" "}
          <Link to="/admin">
            <button className={styles["pets-btn"]}>Return to Admin Dashboard</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default DeletedPage;
