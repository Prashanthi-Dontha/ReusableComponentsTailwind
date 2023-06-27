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
  return (
    <resource.Provider value={{ topsel }}>
      <Header />
      <TopSellers />
      <ScalingCards />
      <Footer />
    </resource.Provider>
  );
}

export default Main;
