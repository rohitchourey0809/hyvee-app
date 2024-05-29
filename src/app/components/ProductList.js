// components/ProductList.js
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <Box>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Box
            border="1px"
            p={4}
            my={2}
            borderRadius="md"
            _hover={{ bg: "gray.100" }}
          >
            <Text fontWeight="bold">{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ProductList;
