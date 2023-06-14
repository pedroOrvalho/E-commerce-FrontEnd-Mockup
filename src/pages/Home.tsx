import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProductsData } from "../redux/thunk/productThunk";
import { useDispatch, useSelector } from "react-redux";
import HomeSlider from "../components/HomeSlider";

export default function Home() {
  const productList = useSelector(
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
    <div className="home_container">
       { <HomeSlider  product={productList[1]}/>}
    </div>
  );
}
