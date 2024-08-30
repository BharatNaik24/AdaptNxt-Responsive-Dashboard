import { useContext } from "react";
import { Link } from "react-router-dom";
import ConfigurationContext from "../../context/ConfigurationContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./MobileNavBar.css";

const dashboardItems = [
  { name: "Dashboard", icon: "fas fa-tachometer-alt", path: "/" },
  { name: "Inventory", icon: "fas fa-boxes", path: "/inventory" },
  { name: "Order", icon: "fas fa-receipt", path: "/orders" },
  { name: "Returns", icon: "fas fa-undo", path: "/returns" },
  { name: "Customers", icon: "fas fa-users", path: "/customers" },
  { name: "Shipping", icon: "fas fa-shipping-fast", path: "/shipping" },
  { name: "Calculators", icon: "fas fa-calculator", path: "/calc" },
  { name: "Reports", icon: "fas fa-chart-line", path: "/reports" },
  { name: "Account", icon: "fas fa-user-circle", path: "/accounts" },
];

const MobileNavBar = ({ children }) => {
  const { showLeftNavbar } = useContext(ConfigurationContext);

  return (
    <div
      className={`container_default ${showLeftNavbar ? "container_shift" : ""}`}
    >
      <div className={`sidebar ${showLeftNavbar ? "sidebar_show" : ""}`}>
        <h1 className="sidebar_header">Responsive Dashboard</h1>
        <ul className="nav_list">
          {dashboardItems.map((item, index) => (
            <li key={index} className="nav_item">
              <Link to={item.path} className="nav_link" aria-label={item.name}>
                <i className={item.icon} style={{ fontSize: "1rem" }}></i>
                <span className="nav_text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="main_content_area">{children}</div>
    </div>
  );
};

export default MobileNavBar;
