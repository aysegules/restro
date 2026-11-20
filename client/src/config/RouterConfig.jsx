import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Map from "../components/Map";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
};

export default RouterConfig;
