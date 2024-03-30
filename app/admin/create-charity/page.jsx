//import { useState, useEffect } from 'react';
import { getCharities, handleCharityDelete } from '@/lib/actions/charityActions';
import { Button } from '@nextui-org/react';
import Link from "next/link"
import DeleteComponent from '@/app/admin/delete-charity/[id]/page';

const Home = async () => {


  const charities = await getCharities();
  console.log(charities);


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Charities</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {charities.map(charity => (
          <li key={charity.id} className=" bg-gradient-to-br from-gray-100 to-gray-200 rounded-md shadow-md p-6">
            {/* charity.name to charity.charityName */}
            <p className="text-lg font-semibold">{charity.name}</p>
            <div className="mt-4 flex justify-between">
              <Button as={Link} href={`/admin/edit-charity-profile/${charity.id}`} color="success">Edit</Button>
              <DeleteComponent id={charity.id} /> {/* Render DeleteComponent with charity id */}
       
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button as={Link} href="/admin/add-new-charity" color="primary">Add New Charity</Button>
      
      </div>
    </div>
  );
};

export default Home;
