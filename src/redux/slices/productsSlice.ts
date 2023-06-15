import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/type";

type InitialState = {
  products: Product[];
  isLoading: boolean;
  product: Product;
  favoritesList: Product[];
  cartList: Product[];
};

const initialState: InitialState = {
  products: [],
  isLoading: true,
  product: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    rating: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
  favoritesList: [],
  cartList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload;
      state.isLoading = false;
    },
    fetchProductDetail: (state, { payload }: PayloadAction<Product>) => {
      state.product = payload;
      state.isLoading = false;
    },
    setFavoritesList: (state, { payload }: PayloadAction<Product[]>) => {
      state.favoritesList = payload;
    },
    setCartList: (state, { payload }: PayloadAction<Product[]>) => {
      state.cartList = payload;
    },
  },
});

export const { fetchProducts, fetchProductDetail, setFavoritesList, setCartList } = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
