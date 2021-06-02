import styles from "../styles/LandingPage.module.css";
import HeroImage from "../assets/hero.jpg";
import HeroImage2 from "../assets/hero2.jpg";
import Item from "../components/Item";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { RiDropLine } from "react-icons/ri";
import { AiOutlineCustomerService } from "react-icons/ai";
import axios from "axios";
import Impressor from "../components/Impressor";

export default function LandingPage({ hottestProducts }) {
  const [slideIndex, setSlideIndex] = useState(0);

  //sliced hot items
  const slicedHotItems = hottestProducts.slice(slideIndex);

  return (
    <main className={styles.homePage}>
      <Impressor
        buttonURL="/explore"
        imagePos="left"
        imageURL={HeroImage}
        title="ONE LOCATION ALL SOLUTION"
        description="Get all the latest and hottest smartphones in one place, phonyoxx."
      />

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

      <Impressor
        buttonURL="/product/iPhone12"
        imagePos="right"
        imageURL={HeroImage2}
        title="iPhone 12"
        description="Get the latest iPhone at cheaper price than anywhere."
      />

      <section className={styles.advantageSection}>
        <u>WHY CHOOSE US?</u>
        <div>
          <section>
            <BiDollar />
            <p>Free delivery around the globe</p>
          </section>

          <section>
            <RiDropLine />
            <p>One year warranty on every product</p>
          </section>

          <section>
            <AiOutlineCustomerService />
            <p>24x7 fast customer support</p>
          </section>
        </div>
      </section>
    </main>
  );
}

//https://bit.ly/3wF70WS

LandingPage.getInitialProps = async () => {
  const data = await axios.get("https://phonyoxx.herokuapp.com/product/fetchAll");
  return { hottestProducts: data.data };
};
