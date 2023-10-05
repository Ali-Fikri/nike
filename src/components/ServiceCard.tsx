interface Props {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: Props) => {
  return (
    <div className="flex flex-col gap-2 max-container shadow-3xl w-fu py-20 px-10 rounded-2xl">
      <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
        <img src={imgURL} alt="icon" width={24} height={24} />
      </div>
      <h3 className="text-2xl font-palanquin font-bold">{label}</h3>
      <p className="info-text max-w-sm">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
