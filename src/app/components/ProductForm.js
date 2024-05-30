// components/ProductForm.js
"use client";
import { Box, Input, Textarea, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProductForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name || "");
  const [description, setDescription] = useState(
    initialValues.description || ""
  );
  const [productPrice, setProductPrice] = useState(
    initialValues.productPrice || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, productPrice });
  };

  return (
    <Center minHeight="100vh" bg="gray.100">
      <MotionBox
        as="form"
        onSubmit={handleSubmit}
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          mb={3}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          mb={3}
        />
        <Input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
          mb={3}
        />
        <Center>
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </Center>
      </MotionBox>
    </Center>
  );
};

export default ProductForm;
