import Animated from "./Animated";
import { testimonials } from "../data/data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-auto mt-44">
      <div className="text-center mb-14">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium mb-4 uppercase">
            LOVED BY FOOD LOVERS
          </p>
        </Animated>

        <Animated delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto  capitalize font-medium text-zinc-800 text-balance">
            What Our Guests Say
          </h2>
        </Animated>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            index={index}
            rating={testimonial.rating}
            review={testimonial.review}
            name={testimonial.name}
            avatar={testimonial.avatar}
            location={testimonial.location}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
