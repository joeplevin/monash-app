import React, { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions";
import PDFView from "@/app/components/PDFView";
// Assume runPythonScript can somehow be called on the client-side or through an API endpoint

const ViewCV = () => {
  const [resumeSkills, setResumeSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getServerSession(authOptions);
        const user = session?.user;
        if (user) {
          const student = await getStudent(user.id);
          // Assuming runPythonScript is adjusted to be callable from the client side or triggers an API call
          const skills = await runPythonScript(student.Cv?.cvUrl);
          setResumeSkills(skills || []);
          console.log("view cv", student.Cv?.cvUrl);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* You might want to uncomment this if PDFView should be shown regardless of skills */}
      {/* student.Cv?.cvUrl && <PDFView cvUrl={student.Cv?.cvUrl} /> */}
      {resumeSkills.length > 0 ? (
        <ul>
          {resumeSkills.map((skill, index) => (
            <li key={index}>{skill}</li> // Using index as key; prefer unique ids if available
          ))}
        </ul>
      ) : (
        <p>No skills found.</p>
      )}
    </div>
  );
};

export default ViewCV;
