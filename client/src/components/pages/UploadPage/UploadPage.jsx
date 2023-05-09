import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UploadPage.module.css";

const UploadPage = () => {
  const initialPetData = {
    name: "",
    type: "",
    breed: "",
    colour: "",
    age: "",
    weight: "",
    gender: "",
    image_url: "",
  };

  const [petData, setPetData] = useState(initialPetData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPetData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setPetData((prevState) => ({
      ...prevState,
      image_url: imgUrl,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const key in petData) {
      formData.append(key, petData[key]);
    }

    const requestOptions = {
      method: "POST",
      body: new URLSearchParams(formData),
    };

    try {
      const response = await fetch(
        "http://localhost:4000/api/pets",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      const data = await response.json();

      setPetData(initialPetData);
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
        style={{ backgroundImage: `url(${petData.image_url})` }}
      ></section>
      <input
        className={styles["upload-img"]}
        type="file"
        name="image_url"
        onChange={handleImageChange}
      />
      <section className={styles["pet-info-list-container"]}>
        <form onSubmit={handleFormSubmit}>
          <ul className={styles["pet-info-list"]}>
            <li className={styles["pet-info-name"]}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={petData.name}
                onChange={handleInputChange}
              />
            </li>
            <li className={styles["pet-info-type"]}>
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                id="type"
                name="type"
                value={petData.type}
                onChange={handleInputChange}
              />
            </li>
            <li className={styles["pet-info-breed"]}>
              <label htmlFor="breed">Breed:</label>
              <input
                type="text"
                id="breed"
                name="breed"
                value={petData.breed}
                onChange={handleInputChange}
              />
            </li>
            <li className={styles["pet-info-colour"]}>
              <label htmlFor="colour">Color:</label>
              <input
                type="text"
                id="colour"
                name="colour"
                value={petData.colour}
                onChange={handleInputChange}
              />
            </li>
            <li className={styles["pet-info-age"]}>
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={petData.age}
                onChange={handleInputChange}
              />
            </li>
            <li className={styles["pet-info-weight"]}>
              <label htmlFor="weight">Weight:</label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={petData.weight}
                onChange={handleInputChange}
              />
            </li>
            <li className={styles["pet-info-gender"]}>
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={petData.gender}
                onChange={handleInputChange}
              />
            </li>
          </ul>
        </form>
      </section>
      <section className={styles["upload-pet-container"]}>
        <button
          className={styles["upload-pet-btn"]}
          type="submit"
          onClick={handleFormSubmit}
        >
          Upload Pet
        </button>
        <Link className={styles['back-to-admin']} to="/admin">Back to admin page</Link>
      </section>
    </main>
  );
};

export default UploadPage;
