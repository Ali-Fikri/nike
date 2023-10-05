interface Props {
  shoeImages: { thumbnail: string; bigShoe: string };
  handleClick: (img: string) => void;
  bigShoeImage: string;
}
const ShoeCard = ({ shoeImages, handleClick, bigShoeImage }: Props) => {
  return (
    <div
      onClick={() => handleClick(shoeImages.bigShoe)}
      className={`rounded-xl border-2 ${
        shoeImages.bigShoe === bigShoeImage
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer bg-${shoeImages.thumbnail} bg-card bg-center bg-cover`}
    >
      <div className="flex justify-center items-center max-sm:py-4 max-sm:px-3">
        <img
          src={shoeImages.thumbnail}
          alt="Shoe Image"
          width={127}
          height={103.34}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
