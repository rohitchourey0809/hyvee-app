// components/ProductDetails.js
import { Box, Button, Text, Center } from "@chakra-ui/react";
import productService from "@/app/services/productService";
import { fetchProducts, resetProducts } from "@/app/store/productsSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await productService.deleteProduct(product.id);
      toast.success("Product deleted successfully");
      dispatch(resetProducts());
      dispatch(fetchProducts());
      router.push("/");
    } catch (error) {
      toast.error("Error deleting product");
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Center minHeight="100vh" bg="gray.100">
      <MotionBox
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        width="100%"
        maxWidth="600px"
      >
        <Box
          border="1px"
          p={4}
          my={2}
          borderRadius="md"
          _hover={{ bg: "gray.100" }}
        >
          <Text fontSize="xl" fontWeight="bold">
            {product.name}
          </Text>
          <Text mt={2} fontSize="md" color="gray.600">
            {product.description}
          </Text>
          <Text mt={2} fontSize="lg" color="gray.800">
            ${product.productPrice}
          </Text>
        </Box>
        <Button
          mt={4}
          colorScheme="teal"
          onClick={() => router.push(`/products/edit/${product.id}`)}
        >
          Edit
        </Button>
        <Button mt={4} ml={2} colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      </MotionBox>
    </Center>
  );
};

export default ProductDetails;
