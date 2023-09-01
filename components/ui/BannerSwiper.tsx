"use client";
import React from "react";
// @ts-ignore
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "@/types/data";
import { BannerSwiperSlide } from "@/components/ui/BannerSwiperSlide";
import ArrowLeft from "@material-ui/icons/ArrowBackIosSharp";
import ArrowRight from "@material-ui/icons/ArrowForwardIosOutlined";

export const BannerSwiper = ({ slides }: { slides: Product[] }) => {
  return (
    <div className="relative border-b-3">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          el: ".banner-swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        className="banner-swiper"
      >
        {slides.map((product: Product) => (
          <SwiperSlide key={product.code}>
            <BannerSwiperSlide slide={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="banner-swiper-button banner-prev prev">
        <ArrowLeft />
      </button>
      <button className="banner-swiper-button banner-next next">
        <ArrowRight />
      </button>
      <div className="banner-swiper-pagination"></div>
    </div>
  );
};
