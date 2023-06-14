import { fetchProductDetail, fetchProducts } from "../slices/productsSlice";
import { AppDispatch } from "../store";

const productsUrl = "https://dummyjson.com/products";

export function fetchProductsData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productsUrl);
    const data = await response.json();
    dispatch(fetchProducts(data.products));
  };
}

export function fetchProductDetailData(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    dispatch(fetchProductDetail(data));
  };
}
