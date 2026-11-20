import About from "../components/About";
import BookingProcess from "../components/BookingProcess";
import Dishes from "../components/Dishes";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
    </div>
  );
};

export default Home;
