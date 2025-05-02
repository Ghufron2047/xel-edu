"use client";

import NavBar from "./NavBar";
import DarkModeToggle from "./DarkModeToggle";
import SkayAssistant from "./SkayAssistant";

export default function ClientLayout({ children }) {
  return (
    <>
      <NavBar />
      <DarkModeToggle />
      
      <SkayAssistant />
    </>
  );
}
