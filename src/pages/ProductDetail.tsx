import { useParams } from "react-router-dom";
import { fetchProductDetailData } from "../redux/thunk/productThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export default function ProductDetail() {
  const { id } = useParams();
  const product = useSelector((state: RootState) => state.productsList.product);
  const isLoading = useSelector(
    (state: RootState) => state.productsList.isLoading
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductDetailData(id));
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <img src={product.thumbnail} alt={product.description} />
    </div>
  );
}
