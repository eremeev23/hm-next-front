"use client";

// @ts-ignore
import { Pagination } from "swiper";
import { Category } from "@/types/data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainCategoriesCard } from "@/app/home/components/MainCategoriesCard";

interface Props {
  categories: Category[];
}

export const MainCategories = ({ categories }: Props) => {
  return (
    <>
      <h2 className='text-4xl dark:text-white text-center font-bold mb-8'>
        POPULAR CATEGORIES
      </h2>
      <div className='hidden sm:flex items-center justify-between gap-2'>
        {
          categories?.map((category) => (
            <MainCategoriesCard
              key={category.slug}
              category={category}
            />
          ))
        }
      </div>
      <div className='relative mb-10 block sm:hidden'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            el: '.main-categories-swiper-pagination',
            type: 'bullets',
            clickable: true
          }}
        >
          {
            categories?.map((category) => (
              <SwiperSlide key={category.slug}>
                <MainCategoriesCard
                  category={category}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className='main-categories-swiper-pagination'></div>
      </div>
      <Link
        className='block mt-2 w-fit mx-auto text-lg font-bold dark:text-white transition-colors dark:hover:text-toxic hover:text-blue-600'
        href='/categories'
      >
        SEE ALL
      </Link>
    </>
  )
}
