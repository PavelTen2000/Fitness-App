import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div id="ourclasses"></div>
      <div id="home"></div>
    </div>
  );
};

export default App;
