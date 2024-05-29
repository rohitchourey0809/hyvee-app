// services/productService.js
import axios from "axios";

const baseUrl = "https://65d5af42f6967ba8e3bc35a3.mockapi.io/blogs/v1/articles";

const getAllProducts = async (page = 1) => {
  return axios.get(`${baseUrl}?page=${page}&limit=10`);
};

const createProduct = async (product) => {
  return axios.post(baseUrl, product);
};

const updateProduct = async (id, product) => {
  return axios.put(`${baseUrl}/${id}`, product);
};

const deleteProduct = async (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAllProducts, createProduct, updateProduct, deleteProduct };
