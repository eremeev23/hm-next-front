"use client";

import Image from "next/image";
import { Product } from "@/types/data";
import Link from "next/link";
import {useState} from "react";

interface IProps {
  product: Product;
}

export const HomeProductsCard = ({ product }: IProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/categories/${product.categoryName}/${product.code}`}
      className='block dark:text-white dark:hover:text-black-600 dark:hover:border-white h-full px-2 py-4 border-3'
    >
      <div
        onMouseOver={product.galleryImages.length > 1 ? () => setHover(true) : () => {}}
        onMouseLeave={product.galleryImages.length > 1 ? () => setHover(false) : () => {}}
        className='relative h-[400px] mb-2 bg-gray-300'
      >
        <Image
          className={hover ? 'opacity-0 w-full h-full object-cover' : 'block w-full h-full object-cover transition-all duration-500'}
          src={product.galleryImages[0].baseUrl}
          alt=""
          width={330}
          height={498}
          quality={100}
        />
        {
          product.galleryImages[1]
            ? <Image
                className={
                  !hover
                    ? 'opacity-0 absolute top-0 left-0 w-full h-full object-cover'
                    : 'absolute top-0 left-0 block w-full h-full object-cover transition-all duration-500'
                }
                src={product.galleryImages[1].baseUrl}
                alt=""
                width={330}
                height={498}
                quality={100}
              />
            : <></>
        }

      </div>
      <div className='h-[90px] flex flex-col justify-between'>
        <h3 className='flex justify-between font-semibold text-lg'>
          <span className='block w-9/12 overflow-hidden'>
            { product.name }
          </span>
          <span className='text-xl font-bold'>
            { product.whitePrice.formattedValue }
          </span>
        </h3>
        <div className='flex gap-2' >
          {
            product.rgbColors.map((color: string, i: number) => {
              return (
                <div
                  key={i}
                  className='w-6 h-6 rounded-[50%] border-2'
                  style={{backgroundColor: color}}
                ></div>
              )
            })
          }
        </div>
      </div>
    </Link>
  )
}
