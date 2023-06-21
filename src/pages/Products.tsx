import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../redux/thunk/productThunk";

import ProductsItem from "../components/products/ProductsItem";
import SortProducts from "../components/products/SortProducts";

import SearchForm from "../components/SearchForm";

import { Product } from "../types/type";

export default function Products() {
  const [userSearch, setUserSearch] = useState<string>("");
  const productsList = useSelector(({ productsList }: RootState) => productsList.products);
  const isLoading = useSelector(({ productsList }: RootState) => productsList.isLoading);
  const [sort, setSort] = useState("");
  const dispatchThunk = useDispatch<AppDispatch>();

  useEffect(() => {
    if (productsList.length === 0) {
      dispatchThunk(fetchProductsData());
    }
  }, [dispatchThunk, productsList.length]);

  const searchProductsList: Product[] = userSearch
    ? productsList.filter(
        (product: Product) =>
          product.title.toLowerCase().includes(userSearch.toLowerCase()) ||
          product.brand.toLowerCase().includes(userSearch.toLowerCase()) ||
          product.category.toLowerCase().includes(userSearch.toLowerCase())
      )
    : productsList;

  let sortedProductList = [...searchProductsList];
  if (sort === "priceUp") {
    sortedProductList.sort((a: Product, b: Product) => a.price - b.price);
  } else if (sort === "priceDown") {
    sortedProductList.sort((a: Product, b: Product) => b.price - a.price);
  } else if (sort === "descending") {
    sortedProductList.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort === "ascending") {
    sortedProductList.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  return (
    <div style={{ minHeight: "65vh" }}>
      <div>
        <SearchForm userSearch={userSearch} setUserSearch={setUserSearch} />
        <SortProducts sort={sort} setSort={setSort} />
      </div>
      <div className="products_container">
        {sortedProductList.length > 0 ? (
          sortedProductList.map((product) => <ProductsItem key={product.id} product={product} />)
        ) : (
          <h1>No products found.</h1>
        )}
      </div>
    </div>
  );
}
