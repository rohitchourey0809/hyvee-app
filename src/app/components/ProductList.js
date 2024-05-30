// components/ProductList.js
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProductList = ({ products }) => {
  return (
    <Box padding={8} >
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <MotionBox
           
            border="1px"
            p={4}
            my={2}
            borderRadius="md"
            _hover={{ bg: "gray.100" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            cursor="pointer"
          >
            <Text fontSize="lg" fontWeight="bold">
              {product.name}
            </Text>
            <Text fontSize="md" color="gray.600" isTruncated>
              {product.description}
            </Text>
            <Text fontSize="sm" color="gray.500">
              ${product.productPrice}
            </Text>
          </MotionBox>
        </Link>
      ))}
    </Box>
  );
};

export default ProductList;
