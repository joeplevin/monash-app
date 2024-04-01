"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Link,
  Tooltip,
} from "@nextui-org/react";
import { PencilIcon } from "@heroicons/react/20/solid";

const CharityHomePageDetails = (charity) => {
  console.log("Charity Details", charity);
  return (
    <div className="flex flex-row justify-center w-[400px]">
      <Card className="w-96 h-90 m-2 justify-center">
        <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
        <div className="mb-10">
          <CardBody className="flex justify-between">
            <p className="text-large flex justify-left text-left w-[100px]">
              {charity.charity.name}
              <Tooltip content="Edit Charity Profile" placement="top">
                <Button
                  as={Link}
                  href="/charity/editcharityprofile"
                  className=" w-[10px] h-[30px] left-[200px]"
                >
                  <PencilIcon />
                </Button>
              </Tooltip>
            </p>
            <br></br>
            <p className="text-md">{charity.charity.description}</p>
            <br></br>
            <p className="text-md">{charity.charity.location}</p>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default CharityHomePageDetails;
