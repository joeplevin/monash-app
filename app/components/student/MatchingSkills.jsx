"use client";
import { Card, Button } from "@nextui-org/react";
import Link from "next/link";

const MatchingSkills = ({ matchedSkills }) => {
  console.log("matchedSkills", matchedSkills);
  return (
    <>
      <div className="center flex justify-center p-6 text-lg">
        <p> Matching Skills</p>
      </div>

      <Card className="grid grid-cols-3 col mr-5 justify-center border-1 border-solid rounded-20 shadow-2 m-5 p-3">
        {matchedSkills.length > 0 ? (
          matchedSkills.map((skill, index) => (
            <Button isDisabled className="col-span-1 m-5 p-1">
              {skill}
            </Button>
          ))
        ) : (
          <h1>No Matching Skills Found, sorrys</h1>
        )}
      </Card>
    </>
  );
};

export default MatchingSkills;
