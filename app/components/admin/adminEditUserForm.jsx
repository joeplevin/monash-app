"use client";
import React, { useState, useEffect } from 'react';

const EditAdminProfile = () => {
  const [userData, setUserData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    phone: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const queryString = window.location.search.substring(1);
    const userDataObj = Object.fromEntries(new URLSearchParams(queryString));
    setUserData(userDataObj);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch('../api/updateUserRoute', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User updated successfully');
        window.location.href = '/admin';
      } else {
        console.error('Error updating user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Edit Admin Profile</h1>
      
      <div className="grid grid-cols-1 gap-4">
        <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="First Name" className="border p-2" />
        <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Last Name" className="border p-2" />
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" className="border p-2" />
        <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" className="border p-2" />
        <input type="text" name="role" value={userData.role} onChange={handleChange} placeholder="Role" className="border p-2" />
        <input type="text" name="phone" value={userData.phone} onChange={handleChange} placeholder="Phone" className="border p-2" /> {/* Phone input field */}
        <button onClick={handleUpdateUser} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Update User
        </button>
      </div>
    </div>
  );
};

export default EditAdminProfile;
