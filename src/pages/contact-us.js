import styles from "@/styles/pages/contact-us.module.css"
import global from "@/styles/global.module.css"
import Grid from "@/components/Grid";
import HeightWrapper from "@/components/HeightWrapper";

function ContactUs() {
    return (
        <Grid>
            <HeightWrapper>
                <div className={global.margin}/>
                <h1 className={global.head}>Contacts</h1>
                <p className={styles.text}>
                    If you have any problems with the operation of the site, then you can write to our mail, we will respond as soon as possible.
                </p>
                <p className={styles.hp_text}>We are happy to help you!</p>
                <div className={styles.wrap}>
                    <div className={styles.det_wrap}>
                        <div className={styles.email_wrapper}>
                            <a href="mailto:digitalbooksmail@yandex.ru?subject=Support" className={styles.email}>digitalbooksmail@yandex.ru</a>
                        </div>
                        <p className={styles.det_text}>Describe your problem in detail</p>
                    </div>
                </div>
            </HeightWrapper>
        </Grid>
    );
}

export default ContactUs;