import { star } from "../assets/icons";

interface Props {
  imgURL: string;
  name: string;
  price: string;
  rate: number;
}

const PopularProductCard = ({ imgURL, name, price, rate }: Props) => {
  return (
    <div className="flex flex-col gap-3 font-montserrat w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="flex gap-3 mt-5">
        <img src={star} alt="rate" width={24} height={24} /> 
        <p className="text-xl text-slate-gray">({rate})</p>
      </div>
      <h3 className="font-palanquin font-semibold text-2xl leading-normal">{name}</h3>
      <p className="font-semibold text-2xl text-coral-red">{price}</p>
    </div>
  );
};

export default PopularProductCard;
