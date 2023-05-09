import React, { useState, useEffect } from "react";
import AdminHeader from './AdminHeader/AdminHeader';
import AdminBody from './AdminBody/AdminBody';
import AdminFooter from './AdminFooter/AdminFooter';

const AdminDashboard = ({ handlePetSelection, selectedPet, setSelectedPet }) => {
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
    <AdminHeader />
    <AdminBody petsData={petsData} selectedPet={selectedPet} setSelectedPet={setSelectedPet} handlePetSelection={handlePetSelection} />
    <AdminFooter />
    </>
  )
}

export default AdminDashboard