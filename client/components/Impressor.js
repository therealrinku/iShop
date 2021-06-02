import styles from "../styles/Impressor.module.css";
import { useRouter } from "next/router";

export default function Impressor({ imageURL, title, description, imagePos, buttonURL }) {
  const router = useRouter();

  return (
    <section className={imagePos === "right" ? styles.impressorReverse : styles.impressor}>
      {imagePos === "left" ? (
        <div>
          <img src={imageURL} alt="product_image" />
        </div>
      ) : null}

      <div>
        <u>{title}</u>
        <p>{description}</p>
        <button onClick={() => router.push(buttonURL)}>Shop Now</button>
      </div>

      {imagePos === "right" ? (
        <div className={styles.rightPosImage}>
          <img src={imageURL} alt="product_image" />
        </div>
      ) : null}
    </section>
  );
}
