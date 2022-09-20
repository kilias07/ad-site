import * as React from "react";
import { ISlider } from "../../src/@types/contentful";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = ({ slider }: { slider: ISlider[] }) => {
  const images = slider.map((slide) => slide.fields.image[0]);
  console.log(images);
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.public_id}>
            <div className="relative flex justify-center">
              <Image
                src={image.url}
                width={1920}
                height={1000}
                objectPosition="center"
                objectFit="cover"
                priority={true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
