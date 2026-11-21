import Animated from "./Animated";
import StarRating from "./StarRating";

const TestimonialCard = ({ rating, review, avatar, name, location, index }) => {
  return (
    <Animated
      delay={index * 0.1}
      y={80}
      className="border border-slate-300 hover:bg-slate-50/50 rounded-2xl p-6"
    >
      <StarRating rating={rating} />
      <p className="text-zinc-700 leading-relaxed mb-6 pt-3">"{review}"</p>

      <div className="flex gap-3 mt-5">
        <img
          src={avatar}
          alt={`${name}'s profile`}
          className="size-11 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-zinc-600">{location}</p>
        </div>
      </div>
    </Animated>
  );
};

export default TestimonialCard;
