import React from "react";
import styles from "./PetsCards.module.css";
import { Link } from "react-router-dom";

const PetsCards = ({ id, name, type, breed, colour, age, weight, gender, image_url, setSelectedPet }) => {
  return (
    <Link
      to="/pets-info"
      style={{textDecoration: 'none', color: '#454645'}}
    >
      <div
        key={id}
        className={styles["pet-card"]}
        style={{ backgroundImage: `url(${image_url})` }}
        onClick={() => setSelectedPet({ id, name, type, breed, colour, age, weight, gender, image_url })}
      >
        <div className={styles["pet-info-container"]}>
          <span className={styles["pet-name"]}>{name}</span>
          <span className={styles["pet-type"]}>{type}</span>
        </div>
      </div>
    </Link>
  );
};

export default PetsCards;
