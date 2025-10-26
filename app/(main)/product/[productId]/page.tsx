import { ProductCard } from "@/components/cards/product-card";
import Extradetails from "@/components/product/extra-details";
import ImageGallery from "@/components/product/image-gallery";
import ProductOrderSummary from "@/components/product/product-order-summary";
import ProductDetail from "@/components/product/product-detail";
import Modal from "@/context/modal-context";
import { forYouItems } from "@/data";
import { nanoid } from "nanoid";

// export async function generateMetadata({
//   params,
// }: {
//   params: { propertyId: string };
// }): Promise<Metadata> {
//   const property = await getProperty(params.propertyId);

//   return {
//     title: property?.name || "Property Detail",
//   };
// }
// md:max-w-[300px] w-full

export const metadata = {
  title: "Product Detail",
  description: "See product details.",
};

async function ProductDetailPage() {
  const foryouItems = await forYouItems();

  return (
    <Modal>
      <section className="w-9/10 mx-auto max-w-7xl pb-14 flex flex-col gap-14">
        <div className="grid gap grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_35%_30%] gap-5">
          <ImageGallery />
          <ProductDetail />
          <div className="lg:max-w-[300px] w-full md:col-span-2 lg:col-auto">
            <ProductOrderSummary />
          </div>
        </div>

        {/*ratings , reviews & comments */}
        <Extradetails />

        {/* <p className="font-bold font-qurova text-xl sm:text-2xl md:text-3xl uppercase text-center">
          Continue Shopping
        </p> */}

        {/*more product from vendor */}
        <div className="bg-white space-y-8 py-4 rounded-lg">
          <p className="font-semibold text-center text-xl md:text-2xl">
            More from Jaysloset{" "}
          </p>
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-3 scrollbar-hide">
            {foryouItems.map((item) => (
              <ProductCard
                key={nanoid()}
                {...item}
                className="min-w-52"
                showAddToCart
                allowShare
                imgTagText="Suggested for you"
              />
            ))}
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default ProductDetailPage;
