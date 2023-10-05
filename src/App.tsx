import {
  Hero, 
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  // CustomerReviews,
  // Subscribe,
} from "./sections";

import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      
    </main>
  );
};

export default App;
