import Cockpit from "./Cockpit";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Summary from "./Summary";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Cockpit />
      <Summary />
      <Footer />
    </div>
  );
};

export default Homepage;
