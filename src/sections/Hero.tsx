import { useState } from "react";
import { ShoeCard, Button } from "../components";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../data";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer collections
        </p>
        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-palanquin font-bold py-8 z-10">
          <span className="xl:whitespace-nowrap xl:bg-white pr-8">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-4">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex flex-wrap gap-16 mt-20">
          {statistics.map(
            (stat: { value: string; label: string }, index: number) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="text-slate-gray font-montserrat">{stat.label}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center bg-hero bg-cover xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoeImage}
          alt="shoe image"
          width={610}
          height={502}
          className="object-contain"
        />
        <div className="flex justify-center items-center gap-6 absolute -bottom-[5%] left-[10%]">
          {shoes.map((shoe, index: number) => (
            <div key={index}>
              <ShoeCard shoeImages={shoe} bigShoeImage={bigShoeImage} handleClick={(img: string) => setBigShoeImage(img)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
