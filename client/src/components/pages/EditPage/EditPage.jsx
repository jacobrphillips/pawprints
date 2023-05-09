import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EditPage.module.css";

const EditPage = ({ selectedPet }) => {
  const [name, setName] = useState(selectedPet.name);
  const [type, setType] = useState(selectedPet.type);
  const [breed, setBreed] = useState(selectedPet.breed);
  const [colour, setColour] = useState(selectedPet.colour);
  const [age, setAge] = useState(selectedPet.age);
  const [weight, setWeight] = useState(selectedPet.weight);
  const [gender, setGender] = useState(selectedPet.gender);

  const handleUpdateRequest = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/pets/${selectedPet.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            type,
            breed,
            colour,
            age,
            weight,
            gender,
          }),
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRequest = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/pets/${selectedPet.id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles["pet-info-page"]}>
      <header className={styles["pet-info-header"]}>
        <div className={styles["back-arrow-container"]}>
          <Link to="/admin">
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
          <li className={styles["pet-info-name"]}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </li>
          <li className={styles["pet-info-type"]}>
            <input value={type} onChange={(e) => setType(e.target.value)} />
          </li>
          <li className={styles["pet-info-breed"]}>
            <input value={breed} onChange={(e) => setBreed(e.target.value)} />
          </li>
          <li className={styles["pet-info-colour"]}>
            <input value={colour} onChange={(e) => setColour(e.target.value)} />
          </li>
          <li className={styles["pet-info-age"]}>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
          </li>
          <li className={styles["pet-info-weight"]}>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </li>
          <li className={styles["pet-info-gender"]}>
            <input value={gender} onChange={(e) => setGender(e.target.value)} />
          </li>
        </ul>
        <Link to="/admin">
          <button
            className={styles["update-button"]}
            onClick={handleUpdateRequest}
          >
            Update
          </button>
        </Link>
        <Link to="/deleted">
          {" "}
          <button
            className={styles["delete-button"]}
            onClick={handleDeleteRequest}
          >
            Delete
          </button>
        </Link>
      </section>
    </main>
  );
};

export default EditPage;
