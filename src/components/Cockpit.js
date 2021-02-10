import { useEffect, useState } from "react";
import { VscAdd } from "react-icons/all";
import "../css/Cockpit.css";

const Cockpit = () => {
  const products = [
    {
      productName: "Iphone12",
      productImage: "https://bit.ly/39VLnZC",
      productShortDescription: `A14 Bionic, the fastest chip in a smartphone.
    An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. 
    And Night mode on every camera. `,
    },
    {
      productName: "Google Pixel",
      productImage: "https://bit.ly/2YTjEmh",
      productShortDescription: `The Qualcomm Snapdragon 730G processor and 6 gigs of RAM inside deliver 
      impressive performance with very few stutters, even when gaming, the 3,140-mAh 
      battery capacity easily lasts a full day.`,
    },
    {
      productName: "Lenovo k9",
      productImage: "https://lnv.gy/3oVhHAr",
      productShortDescription: `A battery that lasts full day,
    a camera that save your amazing memories and a RAM that saves your day.`,
    },
  ];
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveProductIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
  }, []);

  return (
    <div className="cockpit">
      <main>
        <section>
          <img
            src={products[activeProductIndex].productImage}
            alt="product-name"
          />
        </section>
        <section>
          <h1>{products[activeProductIndex].productName}</h1>
          <p>{products[activeProductIndex].productShortDescription}</p>
          <button>
            <VscAdd />
            <p>Add to Cart</p>
          </button>
        </section>
      </main>
      <section className="toggler">
        {products.map((_, i) => {
          return (
            <button
              style={
                activeProductIndex === i
                  ? { background: "rgba(0, 0, 0, 0.5)" }
                  : null
              }
              onClick={() => setActiveProductIndex(i)}
            ></button>
          );
        })}
      </section>
    </div>
  );
};

export default Cockpit;
