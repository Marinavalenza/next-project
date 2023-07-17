import { GeneralContext } from "@/pages";
import { useContext, useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const context = useContext(GeneralContext);

  let username = "Pluto";
  const onUsernameEdit = (name) => (username = name);
  return (
    <ul className="Navbar">
      <li className="Home">Home</li>
      <li className="Products">Products</li>
      <li className="Contacts">Contacts</li>
    </ul>
  );
};

export default Navbar;
