import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import CarouselEffect from "../../components/Carousel/carousel";
import Category from "../../components/Category/Category";
import Product from "../../components/Products/Product";

function Landing() {
  return (
    <div>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
      </LayOut>
    </div>
  );
}

export default Landing;
