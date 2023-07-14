import styles from "@/styles/components/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.block}>
            <div className={styles.link_block}>
                <p className={styles.link + ' ' + styles.href}>Контакты</p>
            </div>
            <div className={styles.link_block}>
                <p className={styles.link}>Digital Books 2023</p>
            </div>
            <div className={styles.link_block}>
                <p className={styles.link + ' ' + styles.href}>Оферта</p>
            </div>
        </div>
    );
};

export default Footer;