import styles from "../styles/LandingPage.module.css";
import HeroImage from "../assets/hero.jpg";
import Item from "../components/Item";

export default function LandingPage({ hottestProducts }) {
  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <div>
          <img src={HeroImage} alt="new_product_image" />
        </div>

        <div>
          <u>ONE LOCATION ALL SOLUTION</u>
          <p>Get all the latest and hottest smartphones in one place, mobyoxx.</p>
          <button>Shop Now</button>
        </div>
      </section>

      <section className={styles.hottestSection}>
        <u>HOTTEST PRODUCTS</u>
        <article>
          {hottestProducts.map((product) => {
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
  ],
};
