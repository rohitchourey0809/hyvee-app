// components/ProductDetails.js
import { Box, Button, Text } from "@chakra-ui/react";
import productService from "../services/productService";
import { fetchProducts, resetProducts } from "../store/productsSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const ProductDetails = ({ product }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleDelete = async () => {
      try {
        await productService.deleteProduct(product.id);
        dispatch(resetProducts());
        dispatch(fetchProducts());
        router.push("/");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };

  return (
    <Box>
      {/* <Text fontWeight="bold">{product.name}</Text> */}
      <Box
        border="1px"
        p={4}
        my={2}
        borderRadius="md"
        _hover={{ bg: "gray.100" }}
      >
        <Text fontWeight="bold">{product.name}</Text>
        <Text mt={2}>{product.description}</Text>
        <Text mt={2}>${product.price}</Text>
      </Box>
      <Button
        mt={4}
        onClick={() => router.push(`/products/edit/${product.id}`)}
      >
        Edit
      </Button>
      <Button mt={4} ml={2} colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

export default ProductDetails;
