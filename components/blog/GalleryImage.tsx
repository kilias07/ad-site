import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { NextPage } from "next";
import { PostImages } from "../../types/PostImages";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import type { Swiper as SwiperType } from "swiper";

const GalleryImage: NextPage<{ postImages: PostImages[] }> = ({
  postImages,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="mx-auto xl:max-w-6xl">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {postImages.map((image) => (
          <SwiperSlide key={image.public_id}>
            <Image
              src={image.url}
              height={image.height}
              width={image.width}
              quality={80}
              layout="responsive"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={3}
        slidesPerView={postImages.length > 8 ? 8 : postImages.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        lazy={true}
      >
        {postImages.map((image) => (
          <SwiperSlide key={image.public_id}>
            <div className="relative mx-auto">
              <Image
                quality={30}
                src={image.url}
                objectFit="cover"
                width={200}
                height={200}
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryImage;
