import { star } from "../assets/icons";

interface Props {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({imgURL, customerName, rating, feedback}: Props) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center mt-8">
      <div className="flex justify-center items-center">
        <img src={imgURL} alt="Customer" className="w-[120px] h-[120px] rounded-full" />
      </div>
      <p className="info-text max-w-sm">{feedback}</p>
      <div className="flex gap-2 text-slate-gray text-xl">
        <img src={star} alt="Star icon" />
        ({rating})
      </div>
      <h3 className="font-palanquin font-bold text-3xl leading-none">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
