"use client"
import React from 'react'
import { Button } from '@nextui-org/react';

const DeleteComponent = ({id}) => {
const deleteCharity = (id) => {
  if(window.confirm('Are you sure you want to delete this charity?')) {
    fetch(`pages/api/deleteCharity${id}`,
     {method: "DELETE"}).then(() => {
      //window.location.href = '/admin/create-charity'

    }).catch((error) => {
      console.error('Error deleting charity:', error);
    })
  }
}
   

  return (
    <Button onClick={deleteCharity}>Delete Charity</Button>
  )
};

export default DeleteComponent;