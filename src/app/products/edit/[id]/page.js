// pages/products/edit/[id].js
"use client";
import { useDispatch, useSelector } from "react-redux";
// import ProductForm from "../../../components/ProductForm";
// import productService from "../../../services/productService";
// import { fetchProducts, resetProducts } from "../../../store/productsSlice";
import { Box, Heading } from "@chakra-ui/react";
import ProductForm from "@/app/components/ProductForm";
import { fetchProducts, resetProducts } from "@/app/store/productsSlice";
import productService from "@/app/services/productService";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditProduct = () => {
  const router = useRouter();
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => p.id === id);

  const handleSubmit = async (formData) => {
    try {
      await productService.updateProduct(id, formData);
      toast.success("Product Edit Successfully");
      dispatch(resetProducts());
      dispatch(fetchProducts());

      router.push("/");
    } catch (error) {
      toast.error("Error updating product");
      console.error("Error updating product:", error);
    }
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Edit Product</Heading>
      {product ? (
        <ProductForm onSubmit={handleSubmit} initialValues={product} />
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default EditProduct;
