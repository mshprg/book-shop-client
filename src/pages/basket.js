import styles from "@/styles/pages/basket.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Grid from "@/components/Grid";
import global from "@/styles/global.module.css";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {MAKE_ORDER} from "@/utils/routes";

function Basket() {

    const router = useRouter()

    const [height, setHeight] = useState(0)

    const layoutRef = useRef(null)
    const lineRef = useRef(null)
    const itemRef = useRef(null)

    useEffect(() => {
        if (layoutRef && lineRef && itemRef) {
            const availableHeight = layoutRef.current.getBoundingClientRect().height - lineRef.current.getBoundingClientRect().height
            const itemHeight = itemRef.current.getBoundingClientRect().height
            let count = Math.trunc(availableHeight / itemHeight)
            if (count < 1) count = 1
            setHeight(count * itemHeight - 2)
        }
    }, [layoutRef, lineRef, itemRef])

    const toMakeOrder = () => {
        router.push(MAKE_ORDER).then()
    }

    return (
        <div ref={layoutRef}>
            <HeightWrapper>
                <Grid>
                    <div ref={lineRef}>
                        <div className={global.margin}/>
                        <div className={global.up_line}>
                            <p className={global.head + ' ' + styles.basket_text}>Shopping basket</p>
                            <p className={styles.total_price}>Total: 16.00 $</p>
                            <button
                                onClick={toMakeOrder}
                                className={styles.create_order}
                            >
                                Create order
                            </button>
                        </div>
                    </div>
                    <div className={styles.wrapper_items}>
                        <div
                            className={styles.items}
                            style={{maxHeight: height}}
                        >
                            {[1, 1, 1].map(() =>
                                <div
                                    ref={itemRef}
                                    className={styles.basket_item}
                                >
                                    <Image
                                        alt="book image"
                                        src={require("@/img/book.png")}
                                        className={styles.book_image}
                                    />
                                    <div className={styles.info_block}>
                                        <div className={styles.name_line}>
                                            <h1 className={styles.name}>The Power</h1>
                                            <div className={styles.delete}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 -960 960 960"
                                                    className={styles.delete_svg}
                                                >
                                                    <path d="M480-438 270-228q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522-480l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-438Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <p className={styles.description}>
                                            Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death. Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death.
                                        </p>
                                        <div className={styles.genres}>
                                            <p className={styles.genre}>Study</p>
                                        </div>
                                        <p className={styles.price}>8.00 $</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Grid>
            </HeightWrapper>
        </div>
    );
}

export default Basket;