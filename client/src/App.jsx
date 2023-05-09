import React, { useState } from "react";
import PetsPage from "./components/pages/PetsPage/PetsPage";
import HomePage from "./components/pages/HomePage/HomePage";
import LogInPage from "./components/pages/LogInPage/LogInPage";
import PetInfoPage from "./components/pages/PetInfoPage/PetInfoPage";
import ThankYouPage from './components/pages/PetInfoPage/ThankYouPage/ThankYouPage';
import AdminDashboard from "./components/pages/AdminDashboard/AdminDashboard";
import UploadPage from "./components/pages/UploadPage/UploadPage";
import EditPage from "./components/pages/EditPage/EditPage";
import DeletedPage from "./components/pages/EditPage/DeletedPage/DeletedPage";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
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
      <Route path="/login" element={<LogInPage />} />
      <Route path="/pets" element={<PetsPage selectedPet={selectedPet} setSelectedPet={setSelectedPet} handlePetSelection={handlePetSelection} />} />
      <Route path="/pets-info" element={selectedPet ? <PetInfoPage selectedPet={selectedPet} /> : null} />
      <Route path="/thank-you" element={<ThankYouPage selectedPet={selectedPet} />} />
      <Route path="/admin" element={<AdminDashboard selectedPet={selectedPet} setSelectedPet={setSelectedPet} handlePetSelection={handlePetSelection} />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/edit" element={selectedPet ? <EditPage selectedPet={selectedPet} /> : null} />
      <Route path="/deleted" element={<DeletedPage selectedPet={selectedPet} />} />

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
