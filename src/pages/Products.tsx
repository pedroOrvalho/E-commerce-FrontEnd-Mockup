import { useEffect, useState } from "react";

import ProductsItem from "../components/ProductsItem";

import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../redux/thunk/productThunk";
import { setFavoritesList, setCartList } from "../redux/slices/productsSlice";

import { Product } from "../types/type";

export default function Products() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const productsList = useSelector(({ productsList }: RootState) => productsList.products);
  const isLoading = useSelector(({ productsList }: RootState) => productsList.isLoading);
  const dispatchThunk = useDispatch<AppDispatch>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartList(cart));
  }, [dispatch, cart]);

  useEffect(() => {
    dispatch(setFavoritesList(favorites));
  }, [dispatch, favorites]);

  useEffect(() => {
    dispatchThunk(fetchProductsData());
  }, [dispatchThunk]);

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
        <ProductsItem
          key={product.id}
          product={product}
          favorites={favorites}
          setFavorites={setFavorites}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}
