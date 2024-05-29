// pages/products/new.js
import { useDispatch } from "react-redux";
import ProductForm from "../components/ProductForm";
import { fetchProducts } from "../store/productsSlice";


const NewProduct = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    try {
      await productService.createProduct(formData);
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <ProductForm onSubmit={handleSubmit} initialValues={{}} />
    </div>
  );
};

export default NewProduct;
