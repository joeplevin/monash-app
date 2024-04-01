"use client"
import React from 'react';
import { Button } from '@nextui-org/react';

const DeleteComponent = ({ id }) => {
  const deleteCharity = () => {
    if (!id) {
      console.error('Error: id is undefined');
      return;
    }

    console.log('Deleting charity with id:', id);

    if (window.confirm('Are you sure you want to delete this charity?')) {
      fetch(`/api/deleteCharity/${id}`, { method: "DELETE" })
        .then(() => {
          // Handle success, maybe refresh the page or show a success message
        })
        .catch((error) => {
          console.error('Error deleting charity:', error);
        });
    }
  };

  return (
    <Button onClick={deleteCharity}>Delete Charity</Button>
  );
};

export default DeleteComponent;
