"use client"
import React, { useState, useEffect } from 'react';

const AdminHome = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    const fetchAdminUsers = async () => {
      try {
        const response = await fetch('../api/getUsers');
        if (response.ok) {
          const data = await response.json();
          const adminUsersData = data.filter(user => user.role === 'admin');
          setAdminUsers(adminUsersData);
        } else {
          console.error('Failed to fetch admin users');
        }
      } catch (error) {
        console.error('Error fetching admin users:', error);
      }
    };

    fetchAdminUsers();
  }, []);

  const navigateToAddUser = () => {
    window.location.href = '../admin/create-user';
  };

  const navigateToAddCharity = () => {
    window.location.href = '../admin/create-charity';
  };

  const navigateToStudents = () => {
    window.location.href = '../admin/display-students';
  };

  const navigateToEditUser = (userId, userData) => {
    if (!userData) {
      console.error('User data not available');
      return;
    }
    const queryString = Object.keys(userData).map(key => `${key}=${encodeURIComponent(userData[key])}`).join('&');
    window.location.href = `/admin/EditAdminProfile?id=${userId}&${queryString}`;
  };
  
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`../api/deleteUserRoute?id=${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
    
        
        setAdminUsers(prevUsers =>
          prevUsers.filter(user => user.id !== userId)
        );
        
      } else {
        console.error('Error deleting admin user');
      }
    } catch (error) {
    
    }
  };
  

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Admin Users</h1>
        <div>
          <button onClick={navigateToAddCharity} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md mr-2">
            Browse Charities
          </button>
          <button onClick={navigateToStudents} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md">
            Browse Students
          </button>
        </div>
      </div>
      
      {adminUsers.length > 0 ? (
        <div className="overflow-x-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-md shadow-md">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-400 text-white">
                <th className="px-4 py-2 border-b text-left">First Name</th>
                <th className="px-4 py-2 border-b text-left">Last Name</th>
                <th className="px-4 py-2 border-b text-left">Email</th>
                <th className="px-4 py-2 border-b text-left">Role</th>
                <th className="px-4 py-2 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map(user => (
                <tr key={user.id} className="text-gray-700">
                  <td className="px-4 py-2 border-b">{user.firstName}</td>
                  <td className="px-4 py-2 border-b">{user.lastName}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">{user.role}</td>
                  <td className="px-4 py-2 border-b">
                    <button onClick={() => navigateToEditUser(user.id, user)} className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md mr-2">
                      Edit
                    </button>
                    <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                    Delete
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading users</p>
      )}

      <div className="mt-8">
        <button onClick={navigateToAddUser} className="bg-blue-700 hover:bg-blue-400 text-white py-2 px-4 rounded-md">
          Add New User
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
