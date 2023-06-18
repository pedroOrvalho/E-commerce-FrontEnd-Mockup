import Slider from "react-slick";
import { Product } from "../../types/type";
import { useState } from "react";
import { Button } from "@mui/material";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

type Props = {
  product: Product;
};

export default function ProductVerticalSlider({ product }: Props) {
  const { images } = product;
  const isLoading = useSelector(
    (state: RootState) => state.productsList.isLoading
  );
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    vertical: true,
    verticalSwiping: true,
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  } else
    return (
      <div className="product_slider_container">
        <div className="vertical_slider_container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <Button key={index} onClick={() => handleImageClick(image)}>
                <img
                  src={image}
                  alt={`Product ${index}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </Button>
            ))}
          </Slider>
        </div>
        <div className="verticalSlider_img_container">
          <img
            className="vertical_slider_img"
            src={selectedImage}
            alt="Selected Product"
          />
        </div>
      </div>
    );
}
