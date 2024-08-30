import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Products.css";
import SideNavBar from "../SideNavBar/SideNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useMediaQuery } from "react-responsive";

function Products({ data }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="products-container">
            <h1 className="product-heading">Product List</h1>
            <div className="product-list-container">
              {data.length > 0 ? (
                <ul className="product-list">
                  {data.map((product) => (
                    <li key={product.id} className="product-item">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                      />
                      <h2 className="product-title">{product.title}</h2>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <p className="product-price">${product.price}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-products">No products available.</p>
              )}
            </div>
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="products-container">
            <h1 className="product-heading">Product List</h1>
            <div className="product-list-container">
              {data.length > 0 ? (
                <ul className="product-list">
                  {data.map((product) => (
                    <li key={product.id} className="product-item">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                      />
                      <h2 className="product-title">{product.title}</h2>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <p className="product-price">${product.price}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-products">No products available.</p>
              )}
            </div>
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Products;
