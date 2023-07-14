import styles from "@/styles/pages/basket.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Grid from "@/components/Grid";
import global from "@/styles/global.module.css";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {CATALOG, MAKE_ORDER} from "@/utils/routes";
import BasketBook from "@/components/BasketBook";
import {wrapper} from "@/store";
import {checkBasketToken} from "@/functions/functions";
import {getBooksByIds} from "@/api/bookApi";
import {removeBasketItem} from "@/api/basketApi";
import {useActions} from "@/hooks/useActions";
import Link from "next/link";
import {useSelector} from "react-redux";
import {getAllGenreByBookId} from "@/api/genreApi";

function Basket({ basketBooks }) {

    const router = useRouter()

    const {setBasketItems} = useActions()
    const {_basketItems} = useSelector(state => state.basketItems)

    const [basketItems, setArrayItems] = useState(basketBooks)
    const [totalPrice, setTotalPrice] = useState(0)

    const [height, setHeight] = useState(0)

    const layoutRef = useRef(null)
    const lineRef = useRef(null)
    const itemRef = useRef(null)

    useEffect(() => {
        if (layoutRef && lineRef && itemRef && basketItems.length !== 0) {
            const availableHeight = layoutRef.current.getBoundingClientRect().height - lineRef.current.getBoundingClientRect().height
            const itemHeight = itemRef.current.getBoundingClientRect().height
            let count = Math.trunc(availableHeight / itemHeight)
            if (count < 1) count = 1
            setHeight(count * itemHeight - 2)

            let fullPrice = 0
            basketItems.forEach(item => fullPrice += item.price)
            setTotalPrice(fullPrice)
        }
    }, [layoutRef, lineRef, itemRef, basketItems])

    const toMakeOrder = () => {
        router.push(MAKE_ORDER).then()
    }

    const deleteItem = (id) => {
        removeBasketItem(id).then(() => {
            setBasketItems(_basketItems.filter(el => el.id !== id))
            setArrayItems(basketItems.filter(el => el.basketItemId !== id))
        })
    }

    return (
        <div ref={layoutRef}>
            <Grid>
                <HeightWrapper>
                    {basketItems.length !== 0 ?
                        <>
                            <div ref={lineRef}>
                                <div className={global.margin}/>
                                <div className={styles.up_line}>
                                    <p className={global.head + ' ' + styles.basket_text}>Ваша корзина</p>
                                    <p className={styles.total_price}>В сумме: {totalPrice.toFixed(2)} ₽</p>
                                    <button
                                        onClick={toMakeOrder}
                                        className={styles.create_order}
                                    >
                                        Оформит заказ
                                    </button>
                                </div>
                            </div>
                            <div className={styles.wrapper_items}>
                                <div
                                    className={styles.items}
                                    style={{maxHeight: height, transition: "all 0s"}}
                                >
                                    {basketItems.map(item =>
                                        <BasketBook
                                            router={router}
                                            items={basketItems}
                                            item={item}
                                            itemRef={itemRef}
                                            deleteItem={(value) => deleteItem(value)}
                                        />
                                    )}
                                </div>
                            </div>
                        </>
                        :
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={styles.empty_basket_block}
                        >
                            <div className={styles.empty_basket_text}>
                                Корзина пуста <br/> <Link href={CATALOG} className={styles.href}>Добавьте книги в корзину</Link>
                            </div>
                        </motion.div>
                    }
                </HeightWrapper>
            </Grid>
        </div>
    );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({req, res, ...etc}) => {

    const basketItems = await checkBasketToken({req, res}, store.dispatch)

    let bookIds = []
    basketItems.forEach(item => {
        bookIds.push(item.bookId)
    })

    const books = await getBooksByIds(JSON.stringify(bookIds))

    let basketBooks = []
    for (let i = 0; i < basketItems.length; i++) {
        const book = books.find(el => el.id === basketItems[i].bookId)
        const genres = await getAllGenreByBookId(book.id)
        basketBooks.push({...book, basketItemId: basketItems[i].id, basketToken: basketItems[i].basketToken, genres})
    }

    return {
        props: {basketBooks}
    }
})

export default Basket;