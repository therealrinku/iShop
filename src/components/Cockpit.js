import "../css/Cockpit.css";
import { useHistory } from "react-router-dom";

const Cockpit = () => {
  const history = useHistory();

  return (
    <div className="cockpit">
      <p>Get the best tech available in the market only on iShop.</p>
      <button onClick={() => history.push("/explore")}>See All Products</button>
    </div>
  );
};

export default Cockpit;
