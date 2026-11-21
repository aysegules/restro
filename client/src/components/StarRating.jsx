import { Star } from "lucide-react";

const StarRating = ({ rating = 0 }) => {
  return (
    <div>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => {
          return (
            <Star
              key={index}
              className={`size-3.5 ${index <= rating ? "fill-orange-500 text-orange-500" : "fill-white text-white"}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
