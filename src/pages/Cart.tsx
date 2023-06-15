import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Cart() {
  const cartList = useSelector((state: RootState) => state.productsList.cartList);
  return (
    <div>
      {cartList.map((cartItem) => (
        <div>
          <p>{cartItem.title}</p>
          <img src={cartItem.thumbnail} alt={cartItem.description} />
        </div>
      ))}
    </div>
  );
}
