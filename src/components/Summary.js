import Product from "./Product";
import "../css/Summary.css";

const Summary = () => {
  const techProducts = [
    {
      productName: "Iphone12",
      productImage: "https://bit.ly/39VLnZC",
      productPrice: 1120,
    },
    {
      productName: "Google Pixel",
      productImage: "https://bit.ly/2YTjEmh",
      productPrice: 999,
    },
    {
      productName: "Lenovo k9",
      productImage: "https://lnv.gy/3oVhHAr",
      productPrice: 678,
    },
    {
      productName: "Samsung s8",
      productImage: "https://bit.ly/3aS9KH0",
      productPrice: 1298,
    },
  ];
  return (
    <div className="summary">
      <h3>Tech Products</h3>
      <section className="hot--tech grid">
        {techProducts.map((product, i) => {
          return (
            <Product
              key={i}
              productImage={product.productImage}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Summary;
