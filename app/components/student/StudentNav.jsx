"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";

const StudentNav = () => {
  return (
    <Navbar isBordered maxWidth="full">
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="/student">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="/student/jobs">
            Jobs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="/student/charities">
            Charities
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default StudentNav;
