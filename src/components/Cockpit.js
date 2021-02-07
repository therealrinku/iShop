import { useEffect, useState } from "react";
import "../css/Cockpit.css";

const Cockpit = () => {
  const products = [
    { productName: "Iphone12", productImage: "https://bit.ly/39VLnZC" },
    { productName: "Google Pixel", productImage: "https://bit.ly/2YTjEmh" },
    { productName: "Lenovo k9", productImage: "https://lnv.gy/3oVhHAr" },
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
          <button>See What's init</button>
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
