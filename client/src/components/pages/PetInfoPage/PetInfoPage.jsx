import React from "react";
import { Link } from "react-router-dom";
import styles from "./PetInfoPage.module.css";

const PetInfoPage = ({ selectedPet }) => {

  const handleAdoptMeClick = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/pets/${selectedPet.id}`, {
        method: "DELETE",
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <main className={styles["pet-info-page"]}>
      <header className={styles["pet-info-header"]}>
        <div className={styles["back-arrow-container"]}>
          <Link to="/pets">
            <img src="../../../../src/assets/img/back-arrow.svg" alt="" />
          </Link>
        </div>
      </header>
      <section
        className={styles["pet-info-pic-container"]}
        style={{ backgroundImage: `url(${selectedPet.image_url})` }}
      ></section>
      <section className={styles["pet-info-list-container"]}>
        <ul className={styles["pet-info-title-list"]}>
          <li className={styles["pet-title-name"]}>Name:</li>
          <li className={styles["pet-title-type"]}>Type:</li>
          <li className={styles["pet-title-breed"]}>Breed:</li>
          <li className={styles["pet-title-colour"]}>Colour:</li>
          <li className={styles["pet-title-age"]}>Age:</li>
          <li className={styles["pet-title-weight"]}>Weight:</li>
          <li className={styles["pet-title-gender"]}>Gender:</li>
        </ul>
        <ul className={styles["pet-info-list"]}>
          <li className={styles["pet-info-name"]}>{selectedPet.name}</li>
          <li className={styles["pet-info-type"]}>{selectedPet.type}</li>
          <li className={styles["pet-info-breed"]}>{selectedPet.breed}</li>
          <li className={styles["pet-info-colour"]}>{selectedPet.colour}</li>
          <li className={styles["pet-info-age"]}>{selectedPet.age} years</li>
          <li className={styles["pet-info-weight"]}>{selectedPet.weight} kg</li>
          <li className={styles["pet-info-gender"]}>{selectedPet.gender}</li>
        </ul>
      </section>
      <section className={styles["adopt-me-container"]}>
        <Link to="/thank-you"> <button className={styles["adopt-me-btn"]} onClick={handleAdoptMeClick}>
          Adopt Me
        </button> </Link>
      </section>
    </main>
  );
};

export default PetInfoPage;
