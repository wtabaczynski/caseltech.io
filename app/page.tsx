import Intro from "@/components/Intro";
import Products from "@/components/Products";

import dynamic from "next/dynamic";
import Newsroom from "@/components/Newsroom";
import Contact from "@/components/Contact";
import Sectors from "@/components/Sectors";

// const Carousel = dynamic(() => import("@/Components/Carousel"), {
//   ssr: false,
// });
// const NewsCarousel = dynamic(() => import("@/Components/NewsCarousel"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <>
      <Intro />
      <Sectors />
      <Products />
      <Newsroom />
      <Contact />
    </>
  );
}
