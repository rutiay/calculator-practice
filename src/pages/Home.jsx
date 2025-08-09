import Keys from "../components/Keys/Keys";
import Display from "../components/Display/Display";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Display />
      <Keys />
    </div>
  );
};

export default Home;
