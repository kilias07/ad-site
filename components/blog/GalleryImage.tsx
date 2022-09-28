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
// Import Swiper styles

const GalleryImage: NextPage<{ postImages: PostImages[] }> = ({
  postImages,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  console.log(postImages.length);
  return (
    <div className="w-full h-[50rem]">
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
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={postImages.length > 8 ? 8 : postImages.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {postImages.map((image) => (
          <SwiperSlide key={image.public_id}>
            <div className="h-full w-full">
              <Image
                src={image.url}
                layout="fill"
                objectFit="contain"
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
