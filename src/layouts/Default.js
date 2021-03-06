import React, { useState } from "react";
import Topline from "../components/topline/Topline";
import "./default.scss";
import Navbar from "../components/navbar/Navbar";

export const toggleNavContext = React.createContext(false);

const DefaultLayout = ({ children }) => {
  const [navVisible, setNavVisible] = useState(false);
  const navValue = { navVisible, setNavVisible };

  return (
    <div className="ui container">
      <toggleNavContext.Provider value={navValue}>
        <Topline />
        <main>{children}</main>
      </toggleNavContext.Provider>
      <footer className="footer"></footer>
    </div>
  );
};

export default DefaultLayout;
