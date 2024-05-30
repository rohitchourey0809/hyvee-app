// pages/products/edit/[id].js
"use client";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Center, Spinner } from "@chakra-ui/react";
import ProductForm from "@/app/components/ProductForm";
import { fetchProducts, resetProducts } from "@/app/store/productsSlice";
import productService from "@/app/services/productService";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect } from "react";

const EditProduct = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleSubmit = async (formData) => {
    try {
      await productService.updateProduct(id, formData);
      toast.success("Product edited successfully");
      dispatch(resetProducts());
      dispatch(fetchProducts());
      router.push("/");
    } catch (error) {
      toast.error("Error updating product");
      console.error("Error updating product:", error);
    }
  };

  return (
    <Center minHeight="100vh" bg="gray.100">
      <Box
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        width="100%"
        maxWidth="600px"
      >
        <Center>
          <Heading mb={5}>Edit Product</Heading>
        </Center>
        {product ? (
          <ProductForm onSubmit={handleSubmit} initialValues={product} />
        ) : (
          <Center>
            <Spinner />
            <p>Loading...</p>
          </Center>
        )}
      </Box>
    </Center>
  );
};

export default EditProduct;
