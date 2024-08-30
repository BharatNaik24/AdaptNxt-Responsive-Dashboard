import { useEffect, useState } from "react";
import Products from "../Products/Products";

function ProductsItem() {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProductsData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <Products data={productsData} />
    </div>
  );
}

export default ProductsItem;
