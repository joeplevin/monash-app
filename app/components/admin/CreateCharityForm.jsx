"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Input } from "@nextui-org/react";

const CreateCharity = () => {
  const [charity, setCharityData] = useState({
    name: '',
    description: '',
    location: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharityData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    // Check if all fields are filled
  
    for (const key in charity) {
      if (!charity[key]) {
        setError(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
        return false;
      }
    }
    
    return true; // Form is valid
  };

  const createCharity = async () => {
    if (!validateForm()) {
  
      return; // Stop execution if form is not valid
    }
      try {
      
        const response = await fetch('../pages/api/createCharityRoute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(charity),
        });
    
        if (response.ok) {
          const data = await response.json();
       
          window.location.href = '/create-charity';
        } else {
          console.error('Error creating charity');
        }
      } catch (error) {
        console.error('Error creating charity:', error);
      }
    };
    
  
  return (
    <Card className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <CardHeader>
        <h1 className="text-center text-3xl font-bold mb-6">Create Charity</h1>
      </CardHeader>
      <CardBody>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Input
          type="text"
          name="name"
          value={charity.name}
          onChange={handleChange}
          label="Name"
          placeholder="Enter charity name"
          className="mb-4"
        />
        <Input
          type="text"
          name="description"
          value={charity.description}
          onChange={handleChange}
          label="Description "
          placeholder="enter description of charity"
          className="mb-4"
        />
        <Input
          type="text"
          name="location"
          value={charity.location}
          onChange={handleChange}
          label="Location"
          placeholder="Enter location here"
          className="mb-4"
        />
        <Button
          color="primary"
          size="large"
          onClick={createCharity}
          className="w-full"
        >
          Create Charity
        </Button>
      </CardBody>
    </Card>
  );
}

export default CreateCharity;
