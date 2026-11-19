import { Star } from "lucide-react";

const StarRating = () => {
  return (
    <div>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((star, index) => {
          return (
            <Star
              key={star}
              className="size-3.5 fill-orange-500 text-orange-500"
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
