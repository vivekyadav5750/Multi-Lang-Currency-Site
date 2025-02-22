import Banner from "@/components/Banner";
import dynamic from "next/dynamic";
const ProductTemplate = dynamic(() => import("@/components/ProductTemplate"));

export default function ProductPage() {
  return (
    <>
      <Banner />
      <ProductTemplate />
    </>
  );
}
