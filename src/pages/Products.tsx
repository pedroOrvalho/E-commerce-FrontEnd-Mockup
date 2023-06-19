import { useEffect, useState } from "react";

import ProductsItem from "../components/ProductsItem";

import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../redux/thunk/productThunk";
import SearchForm from "../components/SearchForm";
import { Product } from "../types/type";

export default function Products() {
  const [userSearch, setUserSearch] = useState<string>("");
  const productsList = useSelector(({ productsList }: RootState) => productsList.products);
  const isLoading = useSelector(({ productsList }: RootState) => productsList.isLoading);
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

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <div>
      <SearchForm userSearch={userSearch} setUserSearch={setUserSearch} />
      </div>
      <div className="products_container">
        {searchProductsList.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
