import styles from "@/styles/pages/home.module.css"
import global from "@/styles/global.module.css"
import Grid from "@/components/Grid";
import HeightWrapper from "@/components/HeightWrapper";
import {Col} from "react-bootstrap";
import Image from "next/image";

const Home = () => {
    return (
        <HeightWrapper>
            <div className={global.margin} />
            <Grid>
                <div className={styles.wel_block}>
                    <h1 className={styles.welcome_head}>Welcome to our online store!</h1>
                    <p className={styles.welcome_text}>
                        In this store your one-stop destination for a vast collection of digital books! Explore the limitless world of literature from the comfort of your own home, with instant access to an extensive library of e-books spanning various genres.
                    </p>
                </div>
            </Grid>
            <Grid className={styles.grid}>
                <div className={styles.line_new_text}>
                    <div className={styles.new_text_wrapper}>
                        <p className={styles.text_new}>Novelty</p>
                    </div>
                </div>
                <div className={styles.book}>
                    <Col className={styles.image_wrapper} xxl={3}>
                        <Image className={styles.image} src={require("@/img/kandinsky.jpg")} alt="book image"/>
                    </Col>
                    <div className={styles.description_block}>
                        <h1 className={styles.name}>Whispers in the Shadows</h1>
                        <p className={styles.description_text}>
                            In this thrilling paranormal tale, Detective Sarah Morgan embarks on a harrowing investigation into a haunted mansion that hides dark secrets. Drawn to the eerie allure of the old estate, Sarah delves into its haunted past, encountering restless spirits, unexplained phenomena, and a malevolent entity hungry for power. Teaming up with a gifted medium, she confronts the forces of darkness, fighting for redemption and closure. As they navigate a treacherous journey between the living and the dead, Sarah's courage is tested, and the boundaries of reality are shattered. Will they triumph over the supernatural forces that haunt the mansion, or will they become trapped in a web of paranormal terror?
                        </p>
                        <button className={styles.view_book}>
                            View book
                        </button>
                    </div>
                </div>
                <div className={styles.under_text}>
                    All books can be found in the <p className={styles.link}>catalog</p>.
                </div>
            </Grid>
        </HeightWrapper>
    );
};

export default Home;