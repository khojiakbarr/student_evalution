"use client";

import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarTop() {
  return (
    <Flowbite>
      <Navbar fluid className="bg-gray-50">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Student Icon
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link
              className="flex items-center justify-center h-full"
              active
            >
              Studens
            </Navbar.Link>
          </Link>
          <Link to={"/evalution"}>
            <Navbar.Link className="flex items-center justify-center h-full">
              Evaluation
            </Navbar.Link>
          </Link>
          <Link to={"/service"}>
            <Navbar.Link className="flex items-center justify-center h-full">
              Services
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar>
    </Flowbite>
  );
}
