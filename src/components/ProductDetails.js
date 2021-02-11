import { Link } from "react-router-dom";
import { VscAdd } from "react-icons/all";
import Navbar from "./Navbar";
import "../css/ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="product--details">
      <Navbar />

      <main>
        <section>
          <img src="https://bit.ly/39VLnZC" alt="product-name" />
        </section>
        <section>
          <h3>Iphone12</h3>
          <ul>
            <li>A14 Bionic, the fastest chip in a smartphone.</li>
            <li> An edge-to-edge OLED display.</li>
            <li>
              Ceramic Shield with four times better drop performance. And Night
              mode on every camera.
            </li>
          </ul>

          <section className="btns">
            <select>
              {[1, 2, 3, 4, 5].map((e) => {
                return (
                  <option value={e} key={e}>
                    {e}
                  </option>
                );
              })}
            </select>

            <button>
              <VscAdd />
              <p>Add to Cart</p>
            </button>
          </section>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
