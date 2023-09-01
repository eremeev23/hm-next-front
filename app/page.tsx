import Head from "next/head";
import services from "@/services";
import { HomeProducts } from "@/app/home/components/HomeProducts";
import { HomeProductsSkeleton } from "@/app/home/components/HomeProductsSkeleton";
import { BannerSwiper } from "@/components/ui/BannerSwiper";
import { BannerSkeleton } from "@/components/ui/BannerSkeleton";
import { MainCategories } from "@/app/home/components/MainCategories";
import { CategoriesSkeleton } from "@/app/home/components/CategoriesSkeleton";

export const fetchCache = "force-no-store";

export default async function Home() {
  const [homeProducts, popularProducts, mainCategories] = await Promise.all([
    services.product.getProducts({
      categoryName: "Home All",
      page: 1,
      limit: 12
    }),
    services.product.getPopularProducts(),
    services.category.getMainCategories()
  ]);

  const popularProductsComponent = () => {
    if (popularProducts?.length) {
      return <BannerSwiper slides={popularProducts} />;
    } else {
      return <BannerSkeleton />;
    }
  };

  const mainCategoriesBlock = () => {
    if (mainCategories?.length) {
      return <MainCategories categories={mainCategories} />
    } else {
      return <CategoriesSkeleton />
    }
  }

  const homeBlock = () => {
    if (homeProducts?.results?.length) {
      return <HomeProducts products={homeProducts.results} />;
    } else {
      return <HomeProductsSkeleton />;
    }
  };

  return (
    <>
      <Head>
        <title>Wear this.</title>
      </Head>
      <main>
        <section>{ popularProductsComponent() }</section>
        <div className="custom-container mx-auto pt-20">
          <section className="pb-20">{ mainCategoriesBlock() }</section>
          <section className="pb-20">{ homeBlock() }</section>
        </div>
      </main>
    </>
  );
}
