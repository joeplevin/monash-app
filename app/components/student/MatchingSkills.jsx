"use client";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";

const MatchingSkills = ({ matchedSkills }) => {
  return (
    <>
      <Card className="m-5">
        <CardHeader className="justify-center bg-green-300">
          <h1 className="text-white w-full pl-3">Matching Skills</h1>
        </CardHeader>
        <CardBody>
          {matchedSkills.length > 0 ? (
            matchedSkills.map((skill, index) => (
              <Button isDisabled className="col-span-1 m-5 p-1">
                {skill}
              </Button>
            ))
          ) : (
            <h1>No Matching Skills Found, sorrys</h1>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default MatchingSkills;
