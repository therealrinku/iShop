import styles from "../styles/LandingPage.module.css";
import HeroImage from "../assets/hero.jpg";
import Item from "../components/Item";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

export default function LandingPage({ hottestProducts }) {
  const [slideIndex, setSlideIndex] = useState(0);

  //sliced hot items
  const slicedHotItems = hottestProducts.slice(slideIndex);

  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <div>
          <img src={HeroImage} alt="new_product_image" />
        </div>

        <div>
          <u>ONE LOCATION ALL SOLUTION</u>
          <p>Get all the latest and hottest smartphones in one place, phonyoxx.</p>
          <button>Shop Now</button>
        </div>
      </section>

      <section className={styles.hottestSection}>
        <u>HOT PRODUCTS</u>

        <article>
          <button onClick={() => setSlideIndex((prev) => prev - 1)} disabled={slideIndex === 0}>
            <MdChevronLeft />
          </button>
          {slicedHotItems.map((product) => {
            return (
              <Item
                itemId={product.product_id}
                itemName={product.product_name}
                itemPrice={product.product_price}
                itemImageURL={product.product_image_url}
                key={product.product_id}
              />
            );
          })}
          <button onClick={() => setSlideIndex((prev) => prev + 1)} disabled={slideIndex === 7}>
            <MdChevronRight />
          </button>
        </article>
      </section>
    </main>
  );
}

//https://bit.ly/3wF70WS

LandingPage.getInitialProps = async () => {
  const data = await axios.get("https://phonyoxx.herokuapp.com/product/fetchAll");
  return { hottestProducts: data.data };
};
