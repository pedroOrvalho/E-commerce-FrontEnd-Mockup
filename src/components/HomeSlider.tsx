import Slider from "react-slick";
import { Product } from "../types/type";

type Props = {
  product: Product;
};

export default function HomeSlider({ product }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {product.images.map((image) => (
        <div>
          <img src={image} alt="Promo" />
        </div>
      ))}
    </Slider>
  );
}
