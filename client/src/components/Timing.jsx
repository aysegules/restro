import { timingData } from "../data/data";
import Animated from "./Animated";

const Timing = () => {
  return (
    <section id="timing" className="px-auto mt-44">
      <Animated
        scale={0.8}
        y={0}
        className="bg-[url('assets/restroTiming.png')] h-screen bg-cover bg-center w-full max-w-5xl rounded-3xl flex items-center justify-center md:justify-start px-6 md:px-14 overflow-hidden mx-auto"
      >
        <div className="bg-white rounded-3xl p-8 w-full max-w-xs">
          <Animated delay={0.2}>
            <h3 className="text-xl font-medium mb-8">Opening Time:</h3>
          </Animated>

          <div className="space-y-7">
            {timingData.map((time, index) => (
              <Animated
                delay={index * 0.15}
                className="flex justify-between items-center"
                key={index}
              >
                <span className="font-medium text-zinc-500">{time.day}</span>
                <span
                  className={`font-medium ${time.hours === "Closed" ? "text-zinc-400" : "text-zinc-500"} `}
                >
                  {time.hours}
                </span>
              </Animated>
            ))}
          </div>

          <Animated delay={0.2} className="mt-12 flex justify-center">
            <a
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition capitalize"
              href="#booking-process"
            >
              Book a table
            </a>
          </Animated>
        </div>
      </Animated>
    </section>
  );
};

export default Timing;
