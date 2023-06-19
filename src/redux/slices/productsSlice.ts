import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../../types/type";

type InitialState = {
  products: Product[];
  isLoading: boolean;
  product: Product;
  favoritesList: Product[];
  cartList: CartProduct[];
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

    setFavoriteList: (state, { payload }: PayloadAction<Product[]>) => {
      state.favoritesList = payload;
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const existingCartItemIndex = state.cartList.findIndex(
        (item) => item.cartProduct.product.id === id
      );
      if (existingCartItemIndex !== -1) {
        state.cartList[existingCartItemIndex].cartProduct.quantity += 1;
      } else {
        state.cartList.push({
          cartProduct: {
            product: action.payload,
            quantity: 1,
          },
        });
      }
    },

    deleteFromCart: (state, actions: PayloadAction<Product>) => {
      const isInCart = state.cartList.some(
        (item) => item.cartProduct.product.id === actions.payload.id
      );
      if (isInCart) {
        const newCart = state.cartList.filter(
          (cartItem) => cartItem.cartProduct.product.id !== actions.payload.id
        );
        state.cartList = newCart;
      }
    },

    deleteFromFavorite: (state, { payload }: PayloadAction<Product>) => {
      const isInFavorite = state.favoritesList.some((item) => item.id === payload.id);

      if (isInFavorite) {
        const newFavoriteList = state.favoritesList.filter(
          (favoriteItem) => favoriteItem.id !== payload.id
        );
        state.favoritesList = newFavoriteList;
      }
    },

    increment: (state, actions: PayloadAction<Product>) => {
      const { id } = actions.payload;
      const existingCartItem = state.cartList.find((item) => item.cartProduct.product.id === id);

      if (existingCartItem) {
        existingCartItem.cartProduct.quantity += 1;
      }
    },

    decrement: (state, actions: PayloadAction<Product>) => {
      const { id } = actions.payload;
      const existingCartItem = state.cartList.find((item) => item.cartProduct.product.id === id);

      if (existingCartItem) {
        if (existingCartItem.cartProduct.quantity > 0) {
          existingCartItem.cartProduct.quantity -= 1;
        }
      }
    },
  },
});

export const {
  fetchProducts,
  fetchProductDetail,
  setFavoriteList,
  addToCart,
  deleteFromCart,
  deleteFromFavorite,
  increment,
  decrement,
} = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
