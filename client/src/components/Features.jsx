import { assets } from "../assets/assets";
import { featuresData } from "../data/data";
import Animated from "./Animated";

const Features = () => {
  return (
    <section id="features" className="w-full max-w-5xl mt-44">
      <div className="text-center mb-16">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium mb-3.5 uppercase">
            WHAT SETS US APART
          </p>
        </Animated>

        <Animated>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto  capitalize font-medium text-zinc-800 text-balance">
            Crafting Memoreable Dining Experiences
          </h2>
        </Animated>
      </div>

      <div className="flex flex-col md:flex-row gap-14 md:gap-18 py-5 items-center justify-between max-w-7xl">
        <div className="space-y-10 max-w-md">
          {featuresData.map((feature, index) => {
            return (
              <Animated
                key={index}
                y={150}
                delay={index * 0.1}
                className="flex items-start gap-4 text-left"
              >
                {
                  <feature.icon className="text-orange-500 size-5 shrink-0 mt-0.5" />
                }

                <div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-zinc-600 max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </Animated>
            );
          })}
        </div>
        <Animated x={50} y={0}>
          <img
            src={assets.chef}
            alt="Chef"
            className="w-full max-w-sm object-cover rounded-3xl"
          />
        </Animated>
      </div>
    </section>
  );
};

export default Features;
