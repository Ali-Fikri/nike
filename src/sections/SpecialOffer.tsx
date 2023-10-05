import Button from '../components/Button';

import { offer } from "../assets/images";
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section id='special' className="flex justify-center items-center gap-10 max-xl:flex-col-reverse max-container">
      <div className="flex-1 max-xl:mt-10">
        <img src={offer} alt="Shoes Promotion" 
        width={773}
        height={687} />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="section-heading">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          <br />
          <br />
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-6 flex flex-wrap gap-4'>
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
