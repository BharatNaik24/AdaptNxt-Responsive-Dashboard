import { Routes, Route } from "react-router-dom";
import Body from "../Body/Body";
import Header from "../Header/Header";
import ProductsItem from "../ProductsItem/ProductsItem";
import Orders from "../Orders/Orders";
import Returns from "../Returns/Returns";
import Customers from "../Customers/Customers";
import Shipping from "../Shipping/Shipping";
import Calc from "../Calc/Calc";
import Reports from "../Reports/Reports";
import Account from "../Account/Account";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/inventory" element={<ProductsItem />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/returns" element={<Returns />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/calc" element={<Calc />} />
        <Route exact path="/reports" element={<Reports />} />
        <Route exact path="/Accounts" element={<Account />} />
      </Routes>
    </div>
  );
};

export default Layout;
