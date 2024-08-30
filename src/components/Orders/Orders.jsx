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
              src="https://img.freepik.com/free-vector/purchase-ban-online-store-website-error-cancel-buying-order-placing-inability-buy-limit-budget-line-online-buyer-cartoon-character_335657-1173.jpg?t=st=1725045218~exp=1725048818~hmac=a45bceaf05d3f278a16ce506a91e52cb136ce25840a37dbd0efa17f45c923675&w=826"
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
              src="https://img.freepik.com/free-vector/purchase-ban-online-store-website-error-cancel-buying-order-placing-inability-buy-limit-budget-line-online-buyer-cartoon-character_335657-1173.jpg?t=st=1725045218~exp=1725048818~hmac=a45bceaf05d3f278a16ce506a91e52cb136ce25840a37dbd0efa17f45c923675&w=826"
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
