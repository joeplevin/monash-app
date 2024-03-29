"use client";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentCharities, setCurrentCharities] = useState([]);

  useEffect(() => {
    // Fetch charities from your backend API
    const fetchCharities = async () => {
      try {
        const response = await fetch('../api/getCharities');
        if (response.ok) {
          const data = await response.json();
          setCurrentCharities(data); // Update state with fetched charities
        } else {
          console.error('Failed to fetch charities');
        }
      } catch (error) {
        console.error('Error fetching charities:', error);
      }
    };

    fetchCharities(); 
  }, []); 
  
  const charityUsers = currentCharities.filter(charity => charity.role === 'charity');

  const navigateToCreateCharity = () => {
    window.location.href = '/admin/add-new-charity';
  };


  const navigateToEditCharityProfile = (charityId, charityData) => {
    if (!charityData) {
      console.error('Charity data not available');
      return;
    }
    window.location.href = `/EditCharityProfile?id=${charityId}&charityName=${encodeURIComponent(charityData.charityName)}&charityDescription=${encodeURIComponent(charityData.charityDescription)}&charityLocation=${encodeURIComponent(charityData.charityLocation)}&charityWebsite=${encodeURIComponent(charityData.charityWebsite)}`;
  };
  

  // Function to handle deletion of a charity
  const deleteCharity = async (charityId) => {
    try {
      const response = await fetch(`../api/deleteCharityRoute?id=${charityId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCurrentCharities(prevCharities =>
          prevCharities.filter(charity => charity.id !== charityId)
        );
        console.log('Charity deleted');
      } else {
        console.error('Error deleting charity');
      }
    } catch (error) {
      console.error('Error deleting charity:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Current Charities</h1>
      {/* Render charityUsers instead of currentCharities */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {charityUsers.map(charity => (
          <li key={charity.id} className="bg-white rounded-md shadow-md p-6">
            <p className="text-lg font-semibold">{charity.charityName}</p>
            <div className="mt-4 flex justify-between">
              <button onClick={() => navigateToEditCharityProfile(charity.id, charity)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2">
                Edit
              </button>
              <button onClick={() => deleteCharity(charity.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button onClick={navigateToCreateCharity} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Add New Charity
        </button>
      </div>
    </div>
  );
};

export default Home;
