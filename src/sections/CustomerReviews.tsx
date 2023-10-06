import { ReviewCard } from "../components";
import { reviews } from "../data";

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <div className="flex flex-col justify-center items-center gap-4  text-center">
        <h2 className="section-heading">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="info-text max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 max-lg:flex-col  mt-12">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
