import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import Featured from "../../components/Featured/Featured";
import Slider from "../../components/Slider/Slider";
import "./home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Slider />
      <Featured type="Featured" />
      <Categories />
      <Featured type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
