import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.scss";
import { TheHeader } from "@/components/base/TheHeader";
import { TheFooter } from "@/components/base/TheFooter";
import { Providers } from "@/components/Providers";
import services from "@/services";

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const { results: categories} = await services.category.getCategories();

  return (
    <html lang="en">
      <body>
        <Head>
          <title>Ecommerce | </title>
        </Head>
        <Providers>
          <TheHeader categories={categories} />
          <div>{children}</div>
          <TheFooter />
        </Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
