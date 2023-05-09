import React, { useState, useEffect } from "react";
import styles from "./AdminBody.module.css";
import { Link } from "react-router-dom";
import PetsCardsEdit from "./PetsCardsEdit/PetsCardsEdit";

const AdminBody = ({ petsData, setSelectedPet }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Math.ceil(petsData.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(petsData.length / 3) - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles["pets-container"]}>
      <div className={styles["pets-hero-container"]}>
        <span className={styles["hero-statement"]}>
          <img
            className={styles["paw-pets"]}
            src="../../../../src/assets/img/paw.png"
            alt="paw"
          />
          pawprints <br /> Admin{" "}
          <span className={styles["shelter-highlight"]}>Dashboard</span>
        </span>
      </div>
      <div className={styles["pets-statement-container"]}>
        <div className={styles["upload-container"]}>
          <h6>Upload Pet</h6>
          <p>Upload a new Pet into pawprint's database</p>
          <Link to="/upload">
             <button className={styles["upload-container-btn"]}>
              Upload Pet
            </button> 
          </Link>
        </div>
        <div className={styles["edit-container"]}>
          <h6>Edit or Delete Pet</h6>
          <p>
            Click on a Pet below to edit their details or remove them from
            pawprint's database
          </p>
        </div>
      </div>
      <div className={styles["pets-buttons-container"]}></div>
      <div className={styles["table-container"]}>
        <button className={styles["prev-button"]} onClick={handlePrevSlide}>
          Prev
        </button>
        <div className={styles["pet-cards-container"]}>
          <div
            className={styles["pet-cards-wrapper"]}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {petsData.map((pet) => (
              <PetsCardsEdit
                key={pet.id}
                id={pet.id}
                name={pet.name}
                type={pet.type}
                breed={pet.breed}
                colour={pet.colour}
                age={pet.age}
                weight={pet.weight}
                gender={pet.gender}
                image_url={pet.image_url}
                setSelectedPet={setSelectedPet}
              />
            ))}
          </div>
        </div>
        <button className={styles["next-button"]} onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </section>
  );
};

export default AdminBody;
