import styles from "../styles/LandingPage.module.css";
import HeroImage from "../assets/hero.jpg";
import Item from "../components/Item";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useState } from "react";

export default function LandingPage({ hottestProducts }) {
  const [visibleHottestItems, setVisibleHottestItems] = useState(hottestProducts);
  const [slideIndex, setSlideIndex] = useState(0);

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
          {visibleHottestItems.slice(slideIndex).map((product) => {
            return (
              <Item
                itemId={product.productId}
                itemName={product.productName}
                itemPrice={product.price}
                itemImageURL={product.productImageURL}
                key={product.productId}
              />
            );
          })}
          <button onClick={() => setSlideIndex((prev) => prev + 1)} disabled={slideIndex === 6}>
            <MdChevronRight />
          </button>
        </article>
      </section>
    </main>
  );
}

LandingPage.defaultProps = {
  hottestProducts: [
    { productName: "Iphone 12", productImageURL: "https://bit.ly/3wF70WS", productId: 1, price: 1299 },
    { productName: "Samsung Galaxy S9", productImageURL: "https://bit.ly/3wF70WS", productId: 2, price: 999 },
    { productName: "Iphone X", productImageURL: "https://bit.ly/3wF70WS", productId: 3, price: 799 },
    { productName: "Pixel 2", productImageURL: "https://bit.ly/3wF70WS", productId: 4, price: 899 },
    { productName: "Huawei Mate 20 Lite", productImageURL: "https://bit.ly/3wF70WS", productId: 5, price: 1199 },
    { productName: "ZenPhone 3", productImageURL: "https://bit.ly/3wF70WS", productId: 6, price: 499 },
    { productName: "Sony Ericsson XC12", productImageURL: "https://bit.ly/3wF70WS", productId: 7, price: 399 },
    { productName: "Vivo V5", productImageURL: "https://bit.ly/3wF70WS", productId: 8, price: 299 },
  ],
};
