import Image from "next/image";

async function getPopular() {
  const res = await fetch('https://package-json-l5vc.onrender.com/api/products/popular', {
    cache: "no-cache",
  });
  return res.json();
}

export default async function Popular (): Promise<JSX.Element> {
  const data = await getPopular();

  return(
    <main className="flex gap-4">

    </main>
  )
}
