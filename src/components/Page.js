import styles from "@/styles/components/Page.module.css"

const Page = ({ page }) => {



    return (
        <p className={styles.block}>{page}</p>
    );
};

export default Page;