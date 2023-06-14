import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../redux/thunk/productThunk";
import ProductsItem from "../components/ProductsItem";

export default function Products() {
  const productsList = useSelector(
    ({ productsList }: RootState) => productsList.products
  );
  const isLoading = useSelector(
    ({ productsList }: RootState) => productsList.isLoading
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {productsList.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
}
