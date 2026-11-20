import Animated from "./Animated";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="px-auto mt-44">
      <div className="flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto items-center">
        {/**Left Side : Main Image */}
        <Animated scale={0.8} y={0}>
          <img
            className="rounded-3xl object-cover w-full h-full max-w-137"
            src={assets.about}
            alt="Main dish"
          />
        </Animated>
        {/**Right Side : Content Details */}
        <div>
          <Animated
            scale={0.8}
            y={0}
            className="flex items-center justify-center gap-2"
          >
            <img src={assets.iconL} alt="Left crafted icon" />
            <span className="font-medium uppercase">Crafted with Passion</span>
            <img src={assets.iconR} alt="Right crafted icon" />
          </Animated>

          <Animated>
            <h2 className="mt-5 text-4xl md:text-5xl text-balance text-center capitalize">
              Experience dining beyond expectations
            </h2>
          </Animated>

          <div className="flex flex-col gap-3 md:flex-row justify-center items-center">
            <Animated delay={0.2}>
              <p className="mt-4.5 text-zinc-600 max-w-sm">
                We combine fresh local ingredients, creative recipes and elegant
                presentattion to deliver a memorable experience with every
                visit.
              </p>
            </Animated>

            <Animated className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit">
              <img
                src={assets.about}
                alt="Bistro Location Preview"
                className="size-15 rounded-lg object-cover shrink-0"
              />

              <div className="flex flex-col gap-2">
                <p className="font-medium">Bistro Loyale, NY</p>
                <Link to={"/map"}>View on Map</Link>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
