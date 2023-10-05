import { PopularProductCard } from "../components";
import { products } from "../data";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div>
        <h2 className="section-heading">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-8 font-montserrat text-slate-gray leading-6">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-6">
        {products.map((product) => (
          <PopularProductCard
            key={product.id}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            rate={product.rate}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
