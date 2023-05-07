import React, { useState } from "react";
import PetsPage from "./components/pages/PetsPage/PetsPage";
import HomePage from "./components/pages/HomePage/HomePage";
import SignInPage from "./components/pages/SignInPage/SignInPage";
import PetInfoPage from "./components/pages/PetInfoPage/PetInfoPage";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";

function App() {
  const [selectedPet, setSelectedPet] = useState(null);

  // function to update selectedPet when a pet is selected
  function handlePetSelection(pet) {
    setSelectedPet(pet);
  }

  const routeDefinitions = createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignInPage />} />
      <Route path="/pets" element={<PetsPage selectedPet={selectedPet} setSelectedPet={setSelectedPet} handlePetSelection={handlePetSelection} />} />
      <Route path="/pets-info" element={selectedPet ? <PetInfoPage selectedPet={selectedPet} /> : null} />
      <Route path="*" element={<HomePage />} />
    </Route>
  );
  
  
  const router = createBrowserRouter(routeDefinitions);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
