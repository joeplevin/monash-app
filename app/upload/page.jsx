import React from 'react'


const UploadCV = () => {
  return (
    <>
        <p className=" text-xl leading-8 text-grey-900 mx-10 mt-10">Please upload your resume down bellow this has to be a PDF file.</p>
        <div className="col-span-full mt-6">
              <label htmlFor="cover-photo" className="text-l font-bold tracking-tight sm:text-xl leading-6 text-gray-900 mx-10 ">
              Resume Upload
              </label>
              <div class="mt-2 flex justify-center">
        <div class="ml-2 rounded-lg border border-solid border-gray-900/50 px-4 py-2 flex items-center" style={{ width: "400px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
         <span class="text-xs leading-5 text-gray-600">Upload CV</span>
        </div>
        <div class="rounded-lg border border-solid border-gray-900/50 px-1 py-1 flex items-center" style={{  width: "35px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
         <label for="file-upload" class="relative cursor-pointer">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
            </svg></span>
          <input id="file-upload" name="file-upload" type="file" class="sr-only" ></input>
         </label>
        </div>
        </div>


</div>
    </>
    
  )
}

export default UploadCV