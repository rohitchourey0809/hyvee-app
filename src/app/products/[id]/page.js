// pages/products/[id].js

"use client";
import ProductDetails from "../../components/ProductDetails";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const Product = () => {
  const { id } = useParams();
  console.log("id", id);

  const products = useSelector((state) => state.products.items);
  console.log("products", products);
  const product = products.find((p) => p.id === id);

  return (
    <div>
  
      {product ? <ProductDetails product={product} /> : <div>Loading...</div>}
    </div>
  );
};

export default Product;
