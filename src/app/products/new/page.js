// pages/products/new.js
"use client";
import ProductForm from "@/app/components/ProductForm";
import productService from "@/app/services/productService";
import { fetchProducts } from "@/app/store/productsSlice";
import { Box, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const NewProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    try {
      await productService.createProduct(formData);
      dispatch(fetchProducts());
      toast.success("Product created successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Error creating product");
      console.error("Error creating product:", error);
    }
  };

  return (
    <Center>
      <Box>
       
        <ProductForm
          onSubmit={handleSubmit}
          initialValues={{ name: "", description: "", price: "" }}
        />
      </Box>
    </Center>
  );
};

export default NewProduct;
