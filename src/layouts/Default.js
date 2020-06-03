import React, { useState } from "react";
import Topline from "../components/topline/Topline";

export const toggleNavContext = React.createContext(false);

const DefaultLayout = ({ children }) => {
  const [navVisible, setNavVisible] = useState(false);
  const navValue = { navVisible, setNavVisible };

  return (
    <div className="ui container">
      <toggleNavContext.Provider value={navValue}>
        <Topline />
        <main onClick={() => setNavVisible(false)}>
          <div className="white_container">{children}</div>
        </main>
      </toggleNavContext.Provider>
      <footer className="footer">Impressum</footer>
    </div>
  );
};

export default DefaultLayout;
