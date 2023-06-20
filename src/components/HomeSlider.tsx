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
    adaptiveHeight: true,
  };

  if (!product) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  } else
    return (
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div key={index} className="slide_img_container">
            <img className="slide_img" src={image} alt="Promo" />
          </div>
        ))}
      </Slider>
    );
}
