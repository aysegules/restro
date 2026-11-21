import About from "../components/About";
import BookingProcess from "../components/BookingProcess";
import Dishes from "../components/Dishes";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Timing from "../components/Timing";
import FAQs from "../components/FAQs";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <Testimonials />
      <FAQs />
      <Banner />
    </div>
  );
};

export default Home;
