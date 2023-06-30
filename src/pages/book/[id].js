import styles from "@/styles/pages/book.module.css"
import global from "@/styles/global.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Grid from "@/components/Grid";
import {Col} from "react-bootstrap";
import Image from "next/image";

function Book() {
    return (
        <HeightWrapper>
            <Grid>
                <div className={global.margin + ' ' + styles.h0} />
                <Col
                    className={styles.book_image_block}
                    xxl={5} xl={5} lg={5} md={5} sm={5} xs={12}
                >
                    <Image
                        src={require("@/img/book.png")}
                        className={styles.book_image}
                        alt="Book image"
                    />
                </Col>
                <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                    <div className={styles.right_block}>
                        <h1 className={styles.name}>The Power</h1>
                        <p className={styles.small_description}>
                            Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death. Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death.
                        </p>
                        <div className={styles.genres}>
                            <p className={styles.genre}>Study</p>
                        </div>
                        <div className={styles.price_line}>
                            <button className={styles.add_to_card}>Add to card</button>
                            <p className={styles.price}>8.00 $</p>
                        </div>
                    </div>
                </Col>
                <Col
                    className={styles.large_description}
                    xxl={{span: 8, offset: 2}}
                >
                    Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death. Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death.
                    Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death. Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death...
                </Col>
            </Grid>
        </HeightWrapper>
    );
}

export default Book;