import styles from "../styles/LandingPage.module.css";
import HeroImage from "../assets/hero.jpg";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { RiDropLine } from "react-icons/ri";
import { AiOutlineCustomerService, AiOutlineMinus } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import axios from "axios";
import { useRouter } from "next/router";
import Item from "../components/Item";

export default function LandingPage({ hottestProducts }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const router = useRouter();

  //sliced hot items
  const slicedHotItems = hottestProducts.slice(slideIndex);

  const [qna, setQna] = useState([
    {
      showAnswer: false,
      question: "Is shipping completely free on every item?",
      answer:
        "Yes it absolutely is, it doesn't matter where you are buying from shipping cost is free ,at least for now but it will defintely stop one day.",
    },
    {
      showAnswer: false,
      question: "Does every product have 1 year warranty?",
      answer: "Off course it does, as long as it comes inside warranty rules.",
    },
    {
      showAnswer: false,
      question: "How long does it take to get delivery?",
      answer: "Usually it takes between 3-10 days depending on where you are ordering from.",
    },
    {
      showAnswer: false,
      question: "Can i get a refund after buying for some reasons?",
      answer:
        "If there is any fault in the device,which is unlikely in such case we offer 95% refund on every product, you can email us if such problem occurs.",
    },
  ]);

  const toggleAnswer = (index) => {
    const qnaCopy = [...qna];
    qnaCopy[index].showAnswer = !qna[index].showAnswer;
    setQna(qnaCopy);
  };

  return (
    <main className={styles.homePage}>
      <section className={styles.heroSection}>
        <div>
          <img src={HeroImage} alt="product_image" />
        </div>

        <div>
          <u>ONE LOCATION ALL SOLUTION</u>
          <p>Get all the latest and hottest smartphones in one place, phonyoxx.</p>
          <button onClick={() => router.push("/explore")}>Shop Now</button>
        </div>
      </section>

      <section className={styles.hottestSection}>
        <u>HOT PRODUCTS</u>

        <article>
          <button onClick={() => setSlideIndex((prev) => prev - 1)} disabled={slideIndex === 0}>
            <MdChevronLeft />
          </button>
          {slicedHotItems.map((product) => {
            return (
              <Item
                key={product.productId}
                imageURL={product.product_image_url}
                name={product.product_name}
                price={product.product_price}
              />
            );
          })}
          <button onClick={() => setSlideIndex((prev) => prev + 1)} disabled={slideIndex === 7}>
            <MdChevronRight />
          </button>
        </article>
      </section>

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

      <section className={styles.questionSection}>
        <u>SOME COMMON QUESTIONS</u>

        <div>
          {qna.map((qna, i) => {
            return (
              <div key={i}>
                <button onClick={() => toggleAnswer(i)}>
                  <p>{qna.question}</p>
                  {qna.showAnswer ? <AiOutlineMinus /> : <GrAdd />}
                </button>

                {qna.showAnswer ? <p>{qna.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>phonyoxx 2021 All rights reserved</p>
      </footer>
    </main>
  );
}

//https://bit.ly/3wF70WS

LandingPage.getInitialProps = async () => {
  const data = await axios.get("https://phonyoxx.herokuapp.com/product/fetchAll");
  return { hottestProducts: data.data };
};
