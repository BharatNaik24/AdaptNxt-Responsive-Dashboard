import { useContext } from "react";
import { Link } from "react-router-dom";
import ConfigurationContext from "../../context/ConfigurationContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SideNavBar.css";

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

const SideNavBar = ({ children }) => {
  const { showLeftNavbar } = useContext(ConfigurationContext);

  return (
    <div className={`body_container ${showLeftNavbar ? "shifted" : ""}`}>
      <div className={`left_navbar ${showLeftNavbar ? "show" : ""}`}>
        <h1 className="body_header_text">Responsive Dashboard</h1>
        <ul className="list_item">
          {dashboardItems.map((item, index) => (
            <li key={index} className="item">
              <Link
                to={item.path}
                className="sidebar-link"
                aria-label={item.name}
              >
                <i className={item.icon} style={{ fontSize: "1rem" }}></i>
                <span className="sidebar-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="main_content">{children}</div>
    </div>
  );
};

export default SideNavBar;
