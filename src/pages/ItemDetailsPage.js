import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import "../css/ItemDetailsPage.css";

const ItemDetailsPage = ({ products }) => {
  const params = useParams();
  const product = products.filter((p) => p.productId === params.productId)[0];

  return (
    <div className="item--details--page">
      <Navbar />
      <main>
        <section>
          <img src={product.productImageURL} alt={`${product.productName}`} />
        </section>

        <section>
          <h4>{product.productName}</h4>
          <p>${product.productPrice}</p>
          {product.productSpecs.map((spec, i) => {
            return <li key={i}>{spec}</li>;
          })}
          <button>Add to Bag</button>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(ItemDetailsPage);