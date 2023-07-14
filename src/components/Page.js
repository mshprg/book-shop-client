import styles from "@/styles/components/Page.module.css"
import {useSelector} from "react-redux";
import {useActions} from "@/hooks/useActions";
import {useRouter} from "next/router";
import {CATALOG} from "@/utils/routes";

const Page = ({ currentPage, page, setPage }) => {

    const router = useRouter()

    const setCurrentPage = () => {
        setPage(page)
        router.push({
            pathname: CATALOG,
            query: { page: page }
        }).then()
    }

    return (
        <>
            {page === currentPage ?
                <p
                    onClick={setPage}
                    style={{color: "white", backgroundColor: "black"}}
                    className={styles.block}
                >
                    {page}
                </p>
                :
                <p
                    onClick={setCurrentPage}
                    className={styles.block}
                >
                    {page}
                </p>
            }
        </>
    );
};

export default Page;