import { Product } from "@/types/data";
import Link from "next/link";
import { HomeProductsCard } from "@/app/home/components/HomeProductsCard";

interface IProps {
  products: Product[];
}

export const HomeProducts = ({ products }: IProps) => {
  return (
    <>
      <h2 className='text-4xl dark:text-white text-center font-bold mb-8'>
        FOR YOUR HOME
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {
          products?.map((product: Product, i: number) => {
            return (
              <li
                key={product._id}
                className={
                  i > 3
                    ? 'hidden sm:block self-stretch transition-colors hover:bg-toxic'
                    : 'self-stretch transition-colors hover:bg-toxic'
                }
              >
                <HomeProductsCard product={product} />
              </li>
            )
          })
        }
      </ul>
      <Link
        className='block mt-2 w-fit mx-auto text-lg dark:text-white font-bold transition-colors dark:hover:text-toxic hover:text-blue-600'
        href='/categories/home'
      >
        SEE MORE
      </Link>
    </>
  )
}
