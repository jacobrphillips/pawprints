import React, { useState, useEffect } from "react";
import PetsHeader from "./PetsHeader/PetsHeader";
import PetsBody from "./PetsBody/PetsBody";
import PetsFooter from "./PetsFooter/PetsFooter";

const PetsPage = ({ handlePetSelection, selectedPet, setSelectedPet }) => {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/pets");
      const data = await response.json();
      setPetsData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <PetsHeader />
      <PetsBody petsData={petsData} selectedPet={selectedPet} setSelectedPet={setSelectedPet} handlePetSelection={handlePetSelection} />
      <PetsFooter />
    </>
  );
};

export default PetsPage;
