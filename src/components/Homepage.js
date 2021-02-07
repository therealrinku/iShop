import Cockpit from "./Cockpit";
import Navbar from "./Navbar";
import Summary from "./Summary";

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
