import Cockpit from "../components/Cockpit";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Cockpit />
      <Summary />
    </div>
  );
};

export default Homepage;
