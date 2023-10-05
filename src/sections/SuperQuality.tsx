import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="section-heading lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br /> <br />
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-4">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center max-lg:mt-10">
        <img src={shoe8} alt="Shoe" />
      </div>
    </section>
  );
};

export default SuperQuality;
