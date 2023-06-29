import styles from "@/styles/components/Thanks.module.css"
import {motion} from "framer-motion";
import {CONTACT_US} from "@/utils/routes";
import Link from "next/link";

const Thanks = () => {

    return (
        <motion.div
            div className={styles.block}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <p className={styles.thanks_text}>
                Thank you so much for your order!
            </p>
            <div className={styles.email_text}>
                The book has been sent to this E-Mail:
                <p className={styles.email}>examplemail@gmail.com</p>
            </div>
            <Link
                href={CONTACT_US}
                className={styles.contact}
            >
                Contact Us
            </Link>
        </motion.div>
    );
};

export default Thanks;