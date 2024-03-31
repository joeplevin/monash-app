"use client";
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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SigninButton from "./SigninButton";
import { useState } from "react";
import RoleNav from "./RoleNav3";

const Nav = () => {
  // Render normal navigation bar, then role navigation bar
  return (
    <>
      <Navbar isBordered maxWidth="full">
        <NavbarContent
          className="lg: w-100 h-50 md: w-50 h-25 sm:w-25 h-12.5 flex"
          justify="start"
        >
          <NavbarItem>
            <Link color="foreground" href="/">
              <Image
                src={"/logo_monash.png"}
                width={100}
                height={50}
                className="lg: w-100 h-50 md: w-50 h-25 sm:w-25 h-12.5"
                alt="Logo Monash"
              />
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="sm:flex gap-4" justify="end">
          <NavbarItem>
            <SigninButton className="sm:flex gap-4" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <RoleNav />
    </>
  );
};

export default Nav;
