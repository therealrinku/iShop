import styles from "../styles/Item.module.css";

export default function Item({ imageURL, name, price }) {
  return (
    <div className={styles.item}>
      <img src={imageURL} alt="item_image" />
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
}
