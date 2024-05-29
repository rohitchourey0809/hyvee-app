// components/ProductForm.js
import { Box, Input, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";

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
    <Box as="form" onSubmit={handleSubmit}>
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
        placeholder="productPrice"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        required
        mb={3}
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default ProductForm;
