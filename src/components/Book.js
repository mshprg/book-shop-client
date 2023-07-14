import {Col} from "react-bootstrap";
import styles from "@/styles/components/Book.module.css"
import {useRouter} from "next/router";
import {BOOK, HOST} from "@/utils/routes";
import {getCookie} from "cookies-next";
import {createBasketItem} from "@/api/basketApi";
import {useActions} from "@/hooks/useActions";
import {add_notification} from "@/functions/functions";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

const Book = ({ book }) => {

    const router = useRouter()

    const {addBasketItem, addNotification} = useActions()
    const {_basketItems} = useSelector(state => state.basketItems)

    const src = HOST + 'image/' + book.image

    const clickOnBook = () => {
        router.push(BOOK + book.token).then()
    }

    const addToCart = () => {
        const token = getCookie('token')
        if (token) {
            if (_basketItems.findIndex(el => el.basketToken === token && el.bookId === book.id) === -1) {
                createBasketItem(token, book.id).then(basketItem => {
                    addBasketItem(basketItem)
                    add_notification("Книга добавлена", "Книга добавлена в корзину", 0, addNotification)
                })
            } else {
                add_notification("Книга уже в корзине", "Эта книга уже добавлена в корзину", 0, addNotification)
            }
        }
    }

    return (
        <Col
            xxl={3} xl={3} lg={3} md={3} sm={4} xs={6}
            className={styles.block}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <img
                    onClick={clickOnBook}
                    src={src}
                    className={styles.image}
                    alt="book preview"
                />
                <h1 className={styles.name}>{book.name}</h1>
                <p className={styles.price}>{book.price.toFixed(2)} ₽</p>
                <button
                    onClick={addToCart}
                    className={styles.add_to_card}
                >
                    В корзину
                </button>
            </motion.div>
        </Col>
    );
};

export default Book;