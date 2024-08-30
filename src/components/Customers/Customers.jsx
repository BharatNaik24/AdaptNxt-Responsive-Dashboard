import { useMediaQuery } from "react-responsive";
import SideNavBar from "../SideNavBar/SideNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useEffect, useState } from "react";
import "./Customers.css";

function Customers() {
  const [customerData, setCustomerData] = useState([]);
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  useEffect(() => {
    getCustomerData();
  }, []);

  const getCustomerData = async () => {
    try {
      const url = "https://fake-json-api.mock.beeceptor.com/customers";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setCustomerData(data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="customers-container">
            <h1 className="customers-heading">Customer List</h1>
            {customerData.length > 0 ? (
              <ul className="customers-list">
                {customerData.map((customer) => (
                  <li key={customer.id} className="customer-item">
                    <h2>{customer.username}</h2>
                    <p>Email: {customer.email}</p>
                    <p>Phone: {customer.phone}</p>
                    <p>
                      Address:
                      {`${customer.address.street}, ${customer.address.city}, ${customer.address.country}, ${customer.address.zipcode}`}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No customer data available.</p>
            )}
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="customers-container">
            <h1 className="customers-heading">Customer List</h1>
            {customerData.length > 0 ? (
              <ul className="customers-list">
                {customerData.map((customer) => (
                  <li key={customer.id} className="customer-item">
                    <h2>{customer.name}</h2>
                    <p>Email: {customer.email}</p>
                    <p>Phone: {customer.phone}</p>
                    <p>
                      Address:
                      {`${customer.address.street}, ${customer.address.city}, ${customer.address.country}, ${customer.address.zipcode}`}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No customer data available.</p>
            )}
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Customers;
