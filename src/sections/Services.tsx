import { ServiceCard } from "../components";
import { services } from "../data/index";

const Services = () => {
  return (
    <section className="flex max-xl:flex-wrap justify-center items-center gap-8 max-container">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
};

export default Services;
