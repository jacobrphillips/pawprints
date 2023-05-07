import React from "react";
import styles from "./PetsCards.module.css";
import { Link } from "react-router-dom";
import PetInfoPage from "../../../PetInfoPage/PetInfoPage";

const PetsCards = ({ name, type, breed, colour, age, weight, gender, image_url, setSelectedPet }) => {
  return (
    <Link
    to="/pets-info"
    style={{textDecoration: 'none', color: '#454645'}}
  >
      <div
        className={styles["pet-card"]}
        style={{ backgroundImage: `url(${image_url})` }}
         onClick={() => setSelectedPet({ name, type, breed, colour, age, weight, gender, image_url })}
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
