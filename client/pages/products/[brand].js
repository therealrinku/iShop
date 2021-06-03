import axios from "axios";
import { useRouter } from "next/router";
import Item from "../../components/Item";
import styles from "../../styles/ProductsPage.module.css";

export default function Products({ products }) {
  const router = useRouter();
  const { brand } = router.query;

  return (
    <div className={styles.products}>
      <u>{brand} PRODUCTS</u>

      <section>
        {products.map((product) => {
          return (
            <Item
              key={product.productId}
              imageURL={product.product_image_url}
              name={product.product_name}
              price={product.product_price}
            />
          );
        })}
      </section>
    </div>
  );
}

Products.getInitialProps = async () => {
  const data = await axios.get("https://phonyoxx.herokuapp.com/product/fetchAll");
  return { products: data.data };
};
