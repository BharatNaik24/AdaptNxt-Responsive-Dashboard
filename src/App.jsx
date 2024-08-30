import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ConfigurationContext from "./context/ConfigurationContext";
import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showLeftNavbar, setShowLeftNavbar] = useState(true);

  const onToggleShowLeftNavbar = () => {
    setShowLeftNavbar((prevShowLeftNavbar) => !prevShowLeftNavbar);
  };

  return (
    <Router>
      <ConfigurationContext.Provider
        value={{
          showLeftNavbar,
          onToggleShowLeftNavbar,
        }}
      >
        <div
          style={{
            flexGrow: "1",
          }}
        >
          <Layout />
        </div>
        <Footer />
      </ConfigurationContext.Provider>
    </Router>
  );
};

export default App;
