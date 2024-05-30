"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../store/productsSlice";
// import ProductList from "../components/ProductList";
import { Box, Button, Center, Heading, Input, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchProducts, resetProducts } from "./store/productsSlice";
import ProductList from "./components/ProductList";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products.items);
   const hasMore = useSelector((state) => state.products.hasMore);
   const status = useSelector((state) => state.products.status);
   const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
     if (status === "idle") {
       dispatch(fetchProducts());
     }
   }, [status, dispatch]);

   const fetchMoreData = () => {
     dispatch(fetchProducts());
   };

   const handleSearch = (e) => {
     setSearchTerm(e.target.value);
     dispatch(resetProducts());
     dispatch(fetchProducts());
   };

   const filteredProducts = products.filter((product) =>
     product?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
   );
  return (
    <main>
      <Box padding={20}>
        <Center>
          <Heading mb={5}>Product List</Heading>
        </Center>
        <Center>
          <Link href="/products/new">
            <Button mb={5}>Create Product</Button>
          </Link>
        </Center>
        <Center>
          {" "}
          <Input
            placeholder="Search products"
            value={searchTerm}
            onChange={handleSearch}
            mb={5}
          />
        </Center>

        <InfiniteScroll
          dataLength={filteredProducts.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
          endMessage={<p>No more products</p>}
        >
          <ProductList products={filteredProducts} />
        </InfiniteScroll>
      </Box>
    </main>
  );
}
