import React, { useState } from "react";
import { createContext } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import topsellers from "./database/topsellers";
import TopSellers from "./Components/TopSellers";
import ScalingCards from "./Components/ScalingCards";

export const resource = createContext(null);

function Main() {
  const [topsel, setTopSel] = useState(topsellers);
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  // );
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useState(getCurrentTheme());
  console.log(theme);
  // console.log(theme);
  return (
    <resource.Provider value={{ topsel, theme, setTheme }}>
      <Header />
      <TopSellers />
      <ScalingCards />
      <Footer />
    </resource.Provider>
  );
}

export default Main;
