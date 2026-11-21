import { bookingSteps, bookingTestimonial } from "../data/data";
import Animated from "./Animated";
import StarRating from "./StarRating";

const BookingProcess = () => {
  return (
    <section id="booking-process" className=" mt-44 px-auto">
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-25 max-w-7xl">
        {/**Booking Testimonial */}
        <div className="flex flex-col text-center md:text-left">
          <Animated delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-3.5">
              Table Reservation Process
            </p>
          </Animated>

          <Animated>
            <h2 className="text-4xl md:text-5xl max-w-lg mx-auto capitalize mb-16">
              Reserve your table in three simple steps
            </h2>
          </Animated>

          <Animated
            delay={0.2}
            className="flex flex-col items-center gap-5 px-5 md:items-start"
          >
            <StarRating rating={bookingTestimonial.rating} />

            <p className="text-zinc-600 max-w-xs max-md:mx-auto mb-4">
              "{bookingTestimonial.quote}"
            </p>

            <div className="flex items-center gap-3">
              <img
                src={bookingTestimonial.authorImg}
                alt="Author of booking testimonial"
                className="w-12 rounded-full object-cover"
              />
              <p className=" text-lg">{bookingTestimonial.authorName}</p>
            </div>
          </Animated>
        </div>
        {/**Booking Steps */}
        <div className="flex flex-col gap-10">
          {bookingSteps.map((step, _) => (
            <Animated
              delay={step.number * 0.1}
              key={step.number}
              className="flex flex-row text-xl"
            >
              <h3 className="text-orange-600 font-medium px-10">
                {step.number}
              </h3>

              <div>
                <h3>{step.title}</h3>
                <p className="text-zinc-600 text-sm py-5">{step.description}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
