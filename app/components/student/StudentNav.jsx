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
    <Navbar isBordered maxWidth="full" className="pr-44 pl-44 ">
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="/student">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="/student/matching">
            Cv Matcher
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
    </Navbar>
  );
};
export default StudentNav;
