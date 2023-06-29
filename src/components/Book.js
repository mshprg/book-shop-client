import {Col} from "react-bootstrap";
import styles from "@/styles/components/Book.module.css"
import Image from "next/image";

const Book = () => {
    return (
        <Col
            xxl={3} xl={3} lg={3} md={3} sm={4}
            className={styles.block}
        >
            <Image src={require("@/img/book.png")} className={styles.image}  alt="book preview"/>
            <h1 className={styles.name}>The Power</h1>
            <p className={styles.price}>8.00 $</p>
            <button className={styles.add_to_card}>
                Add to card
            </button>
        </Col>
    );
};

export default Book;