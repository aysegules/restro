import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";
import Animated from "./Animated";

const Banner = () => {
  const floatingDishes = [
    {
      id: 1,
      src: assets.dish1,
      alt: "dish1",
      className: "top-1/6 left-4 md:top-10 md:left-[6%] lg:left-[10%]",
    },
    {
      id: 2,
      src: assets.dish2,
      alt: "dish2",
      className: "bottom-1/6 left-1/4 md:bottom-10 md:left-[10%] lg:left-[14%]",
    },
    {
      id: 3,
      src: assets.dish3,
      alt: "dish3",
      className: "top-1/6 right-4 md:top-10 md:right-[10%] lg:right-[14%]",
    },
    {
      id: 4,
      src: assets.dish4,
      alt: "dish4",
      className:
        "bottom-1/6 right-1/4 md:bottom-10 md:right-[10%] lg:right-[14%]",
    },
  ];

  return (
    <section
      id="banner"
      className="mt-44 bg-orange-500 text-white min-h-screen md:min-h-110 relative overflow-hidden px-6 flex flex-col justify-center items-center text-center"
    >
      <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-auto">
        {floatingDishes.map((dish, _) => (
          <img
            key={dish.id}
            src={dish.src}
            alt={dish.alt}
            className={`absolute size-20 md:size-28 lg:size-35 rounded-full object-cover pointer-events-auto transition-all duration-300 hover:scale-105 ${dish.className}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <Animated delay={0.1}>
          <h1 className="font-urbanist capitalize font-medium text-3xl md:text-[40px] text-balance max-w-xl">
            Every Meal Is Made To Be Remembered
          </h1>
        </Animated>
        <Animated delay={0.2} y={20}>
          <p className="mt-4 max-w-sm mx-auto">
            Join us for fresh ingredients, signature recipes and an
            unforgettable dining experience.
          </p>
        </Animated>

        <Animated delay={0.3} className="flex items-center justify-center">
          <a
            href="#booking-process"
            role="button"
            className="flex items-center gap-2.5 bg-white text-black pl-5 pr-2 py-2 rounded-full mt-5.5 transition"
          >
            Book Your Table
            <span className="rounded-full bg-black ">
              <ArrowRight className="text-white" />
            </span>
          </a>
        </Animated>
      </div>
    </section>
  );
};

export default Banner;
