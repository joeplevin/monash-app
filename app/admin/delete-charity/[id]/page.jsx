"use client"
import React from 'react'
import { Button } from '@nextui-org/react';

const DeleteComponent = ({id}) => {
const deleteCharity = () => {
  if(window.confirm('Are you sure you want to delete this charity?')) {
    fetch(`/pages/api/deleteCharityRoute/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if(response.ok) {
        window.location.href = '/admin/create-charity'
      } else {
        alert('Failed to delete charity')
      }
    })
  }
}

  return (
    <Button onClick={deleteCharity}>Delete Charity</Button>
  )
};

export default DeleteComponent;