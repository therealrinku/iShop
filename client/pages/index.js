import styles from "../styles/LandingPage.module.css";
import HeroImage from "../assets/hero.jpg";

export default function LandingPage() {
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
    </main>
  );
}
