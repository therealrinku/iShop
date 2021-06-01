import styles from "../styles/Item.module.css";

export default function Item({ itemImageURL, itemName, itemPrice, itemId }) {
  return (
    <div className={styles.item}>
      <img src={itemImageURL} alt="item_image" />
      <p>{itemName}</p>
      <p>${itemPrice}</p>
    </div>
  );
}
