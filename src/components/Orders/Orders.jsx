import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Orders.css";
import SideNavBar from "../SideNavBar/SideNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useMediaQuery } from "react-responsive";

function Orders() {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="no-orders">
            <img
              src="./public/images/download.svg"
              alt="No Orders"
              className="noOrders"
            />
            <h1>No Orders Yet. Add Products to see your Orders.</h1>
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="no-orders">
            <img
              src="./public/images/download.svg"
              alt="No Orders"
              className="noOrders"
            />
            <h1>No Orders Yet. Add Products to see your Orders.</h1>
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Orders;
