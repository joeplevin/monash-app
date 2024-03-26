"use client";
import React from "react";

const EditCharityProfileForm = (charity) => {
  console.log("charity", charity);
  return (
    <div>
      <h1>Charity ID: {charity.charity.id}</h1>
      <h1>Edit Charity Profile</h1>
    </div>
  );
};

export default EditCharityProfileForm;
