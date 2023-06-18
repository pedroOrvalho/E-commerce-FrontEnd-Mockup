import { useEffect } from "react";

import ProductsItem from "../components/ProductsItem";

import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../redux/thunk/productThunk";

export default function Products() {
  const productsList = useSelector(
    ({ productsList }: RootState) => productsList.products
  );
  const isLoading = useSelector(
    ({ productsList }: RootState) => productsList.isLoading
  );
  const dispatchThunk = useDispatch<AppDispatch>();

  useEffect(() => {
    if (productsList.length === 0) {
      dispatchThunk(fetchProductsData());
    }
  }, [dispatchThunk, productsList.length]);

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  return (
    <div className="products_container">
      {productsList.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
}
