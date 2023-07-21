import styles from "@/styles/pages/contact-us.module.css"
import global from "@/styles/global.module.css"
import Grid from "@/components/Grid";
import HeightWrapper from "@/components/HeightWrapper";
import Link from "next/link";
import {OFFER} from "@/utils/routes";

function ContactUs() {
    return (
        <Grid>
            <div className={global.pd}>
                <HeightWrapper>
                    <div className={global.margin}/>
                    <h1 className={global.head}>Контакты</h1>
                    <p className={styles.text}>
                        Если у вас возникли проблемы с работой сайта, то вы можете написать на нашу почту, мы ответим в кратчайшие сроки.
                    </p>
                    <p className={styles.hp_text}>Мы рады помочь вам!</p>
                    <div className={styles.wrap}>
                        <div className={styles.det_wrap}>
                            <div className={styles.email_wrapper}>
                                <a href="mailto:bookbytes@yandex.ru?subject=Support" className={styles.email}>bookbytes@yandex.ru</a>
                            </div>
                            <p className={styles.det_text}>Подробно опишите проблему</p>
                        </div>
                    </div>
                    <div className={styles.offer_block}>
                        <Link href={OFFER} className={styles.offer}>Публичная оферта</Link>
                    </div>
                </HeightWrapper>
            </div>
        </Grid>
    );
}

export default ContactUs;