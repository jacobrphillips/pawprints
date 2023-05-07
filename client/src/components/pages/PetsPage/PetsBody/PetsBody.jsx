import React, { useState, useEffect } from "react";
import styles from "./PetsBody.module.css";
import PetsCards from "./PetsCards/PetsCards";

const PetsBody = ({ petsData, setSelectedPet }) => {
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

  return (
    <section className={styles["pets-container"]}>
      <div className={styles["pets-hero-container"]}>
        <span className={styles["hero-statement"]}>
          <img
            className={styles["paw-pets"]}
            src="../../../../src/assets/img/paw.png"
            alt="paw"
          />
          pawprints <br /> Adoptable{" "}
          <span className={styles["shelter-highlight"]}>Pets</span>
        </span>
      </div>
      <div className={styles["pets-statement-container"]}>
        <div className={styles["pets-statement"]}>
          <span>
            By adopting an animal in need, you can make a difference in their
            lives and bring joy to your own.
          </span>
        </div>
      </div>
      <div className={styles["pets-buttons-container"]}>
        <div className={styles["facebook-button"]}>
          <a href="#">
            <i className="devicon-facebook-plain"></i>
          </a>
        </div>
        <div className={styles["twitter-button"]}>
          <a href="#">
            <i className="devicon-twitter-original"></i>
          </a>
        </div>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["pet-cards-container"]}>
       
          {petsData.map((pet) => (
           <PetsCards
           key={pet.id}
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
    </section>
  );
};

export default PetsBody;
