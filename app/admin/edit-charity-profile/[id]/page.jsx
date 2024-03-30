
import React from "react";
import EditCharityProfileForm from "@/app/components/admin/EditCharityProfileForm";
import { getCharity, getCharityById } from "@/lib/actions/charityActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


  const EditCharityProfilePage = async ({params}) => {
    console.log("params", params)
   const charity = await getCharityById(params.id)
   console.log("edit charity", charity)
   return (
     <>
       <EditCharityProfileForm charity={charity}></EditCharityProfileForm>
       </>
        
   )
  }


  
  export default EditCharityProfilePage;

  