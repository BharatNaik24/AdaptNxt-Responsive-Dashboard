import React from "react";

const ConfigurationContext = React.createContext({
  showLeftNavBar: true,
  onToggleShowLeftNavbar: () => {},
});

export default ConfigurationContext;
