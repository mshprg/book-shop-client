import styles from "@/styles/pages/basket.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Grid from "@/components/Grid";
import global from "@/styles/global.module.css";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {MAKE_ORDER} from "@/utils/routes";
import BasketBook from "@/components/BasketBook";

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

    const [items, setItems] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
    ])

    const toMakeOrder = () => {
        router.push(MAKE_ORDER).then()
    }

    const deleteBasketItem = (id) => {
        setItems(items.filter(el => el.id !== id))
    }

    return (
        <div ref={layoutRef}>
            <Grid>
                <HeightWrapper>
                    <div ref={lineRef}>
                        <div className={global.margin}/>
                        <div className={styles.up_line}>
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
                            {items.map(item =>
                                <BasketBook
                                    items={items}
                                    item={item}
                                    itemRef={itemRef}
                                    deleteItem={(value) => deleteBasketItem(value)}
                                />
                            )}
                        </div>
                    </div>
                </HeightWrapper>
            </Grid>
        </div>
    );
}

export default Basket;