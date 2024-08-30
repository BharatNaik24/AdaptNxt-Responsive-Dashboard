import SideNavBar from "../SideNavBar/SideNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useMediaQuery } from "react-responsive";
import "./Shipping.css";

const products = [
  {
    id: 1,
    productName: "Noise Cancelling Headphones",
    description:
      "Over-ear headphones with active noise cancellation and Bluetooth connectivity.",
    price: 249.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669124952/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262566_0_emihyi.png?tr=w-360",
    shippingStatus: "In Transit",
    estimatedDelivery: "2024-09-08",
  },
  {
    id: 2,
    productName: "4K Ultra HD Monitor",
    description: "27-inch monitor with 4K resolution and HDR support.",
    price: 399.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717061981/Croma%20Assets/Computers%20Peripherals/Monitor/Images/305759_0_cmvtyx.png?tr=w-360",
    shippingStatus: "Pending",
    estimatedDelivery: "2024-09-20",
  },
  {
    id: 3,
    productName: "Wireless Keyboard and Mouse Combo",
    description:
      "Compact wireless keyboard and mouse set with long battery life.",
    price: 89.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681413677/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/223014_0_daoggb.png?tr=w-360",
    shippingStatus: "Shipped",
    estimatedDelivery: "2024-08-22",
  },
  {
    id: 4,
    productName: "Smart Home Hub",
    description:
      "Central hub for smart home devices with voice control compatibility.",
    price: 149.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1605329948/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/8944799940638.png?tr=w-360",
    shippingStatus: "In Transit",
    estimatedDelivery: "2024-09-12",
  },
  {
    id: 5,
    productName: "Electric Kettle",
    description:
      "Fast boiling electric kettle with temperature control and stainless steel design.",
    price: 39.99,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722870681/Croma%20Assets/Small%20Appliances/Kettles/Images/304921_0_jssola.png?tr=w-360",
    shippingStatus: "Delivered",
    estimatedDelivery: "2024-08-10",
  },
];

function Shipping() {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="shipping-container">
            <h1 className="shipping-title">Shipping Details</h1>
            {products.length > 0 ? (
              <ul className="product-list">
                {products.map((product) => (
                  <li key={product.id} className="product-item">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="product-image"
                    />
                    <div className="product-details">
                      <h2 className="product-name">{product.productName}</h2>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <p className="product-price">
                        ${product.price.toFixed(2)}
                      </p>
                      <p
                        className={`shipping-status ${product.shippingStatus
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        Shipping Status: {product.shippingStatus}
                      </p>
                      <p className="estimated-delivery">
                        Estimated Delivery: {product.estimatedDelivery}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="shipping-container">
            <h1 className="shipping-title">Shipping Details</h1>
            {products.length > 0 ? (
              <ul className="product-list">
                {products.map((product) => (
                  <li key={product.id} className="product-item">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="product-image"
                    />
                    <div className="product-details">
                      <h2 className="product-name">{product.productName}</h2>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <p className="product-price">
                        ${product.price.toFixed(2)}
                      </p>
                      <p
                        className={`shipping-status ${product.shippingStatus
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        Shipping Status: {product.shippingStatus}
                      </p>
                      <p className="estimated-delivery">
                        Estimated Delivery: {product.estimatedDelivery}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Shipping;
