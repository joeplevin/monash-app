
import React from "react";
import EditCharityProfileForm from "@/app/components/admin/EditCharityProfileForm";
import { getCharity, getCharityById } from "@/lib/actions/charityActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


  const EditCharityProfilePage = async ({params}) => {
   
   const charity = await getCharityById(params.id)
   
   return (
     <>
       <EditCharityProfileForm charity={charity}></EditCharityProfileForm>
       </>
        
   )
  }


  
  export default EditCharityProfilePage;

  