import SideNavBar from "../SideNavBar/SideNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useMediaQuery } from "react-responsive";
import "./Returns.css";

const returnProducts = [
  {
    id: 1,
    productName: "Wireless Earbuds",
    reasonForReturn: "Defective Item",
    status: "Pending",
    price: 59.99,
    orderDate: "2024-08-01",
    returnDate: "2024-08-15",
    returnMethod: "Courier Pickup",
    customerName: "John Doe",
    customerContact: "john@example.com",
    returnTrackingNumber: "RT123456789",
    refundAmount: 59.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697624125/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/256351_klwf70.png?tr=w-360", // Random image placeholder
  },
  {
    id: 2,
    productName: "Smart Watch",
    reasonForReturn: "Incorrect Size",
    status: "Approved",
    price: 199.99,
    orderDate: "2024-07-20",
    returnDate: "2024-08-10",
    returnMethod: "Drop-off at Store",
    customerName: "Jane Smith",
    customerContact: "jane@example.com",
    returnTrackingNumber: "RT987654321",
    refundAmount: 199.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1720973789/Croma%20Assets/Wearable/Wearable%20Devices/Images/308373_qefrwm.png?tr=w-360",
  },
  {
    id: 3,
    productName: "Bluetooth Speaker",
    reasonForReturn: "Changed Mind",
    status: "Rejected",
    price: 129.99,
    orderDate: "2024-07-25",
    returnDate: "2024-08-05",
    returnMethod: "Courier Pickup",
    customerName: "Bob Johnson",
    customerContact: "bob@example.com",
    returnTrackingNumber: "RT112233445",
    refundAmount: 0,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718802710/Croma%20Assets/Computers%20Peripherals/Speakers%20and%20Media%20Players/Images/301439_0_awmdap.png?tr=w-360",
  },
  {
    id: 4,
    productName: "Laptop Stand",
    reasonForReturn: "Damaged on Arrival",
    status: "Pending",
    price: 49.99,
    orderDate: "2024-08-05",
    returnDate: "2024-08-20",
    returnMethod: "Courier Pickup",
    customerName: "Alice Davis",
    customerContact: "alice@example.com",
    returnTrackingNumber: "RT556677889",
    refundAmount: 49.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1638254154/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/241681_kwzpcz.png?tr=w-360",
  },
  {
    id: 5,
    productName: "Portable Charger",
    reasonForReturn: "Not as Described",
    status: "Approved",
    price: 29.99,
    orderDate: "2024-07-30",
    returnDate: "2024-08-12",
    returnMethod: "Drop-off at Store",
    customerName: "Michael Brown",
    customerContact: "michael@example.com",
    returnTrackingNumber: "RT998877665",
    refundAmount: 29.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686844847/Croma%20Assets/Communication/Mobile%20Accessories/Images/270540_0_hprkje.png?tr=w-640",
  },
];

function Returns() {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="returns-container">
            <h1 className="returnHeading">Returns</h1>
            {returnProducts.length > 0 ? (
              <ul className="returns-list">
                {returnProducts.map((product) => (
                  <li key={product.id} className="return-item">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h2>{product.productName}</h2>
                      <p>Reason: {product.reasonForReturn}</p>
                      <p>
                        Status:
                        <span
                          className={`status ${product.status.toLowerCase()}`}
                        >
                          {product.status}
                        </span>
                      </p>
                      <p>Price: ${product.price.toFixed(2)}</p>
                      <p>Return Date: {product.returnDate}</p>
                      <p>Return Method: {product.returnMethod}</p>
                      <p>Refund Amount: ${product.refundAmount.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No return products available.</p>
            )}
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="returns-container">
            <h1 className="returnHeading">Returns</h1>
            {returnProducts.length > 0 ? (
              <ul className="returns-list">
                {returnProducts.map((product) => (
                  <li key={product.id} className="return-item">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h2>{product.productName}</h2>
                      <p>Reason: {product.reasonForReturn}</p>
                      <p>
                        Status:
                        <span
                          className={`status ${product.status.toLowerCase()}`}
                        >
                          {product.status}
                        </span>
                      </p>
                      <p>Price: ${product.price.toFixed(2)}</p>
                      <p>Return Date: {product.returnDate}</p>
                      <p>Return Method: {product.returnMethod}</p>
                      <p>Refund Amount: ${product.refundAmount.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No return products available.</p>
            )}
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Returns;
