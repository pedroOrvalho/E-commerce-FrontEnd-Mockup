import Slider from "react-slick";
import { Product } from "../types/type";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {
  product: Product;
};

export default function HomeSlider({ product }: Props) {
  const isLoading = useSelector(
    (state: RootState) => state.productsList.isLoading
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  return (
    <Slider {...settings}>
      {product.images.map((image) => (
        <div className="slide_img_container">
          <img className="slide_img" src={image} alt="Promo" />
        </div>
      ))}
    </Slider>
  );
}
