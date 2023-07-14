import styles from "@/styles/components/BasketBook.module.css";
import {motion, useMotionValue} from "framer-motion";
import {useEffect, useState} from "react";
import {BOOK, HOST} from "@/utils/routes";

const BasketBook = ({ itemRef, item, router, deleteItem }) => {

    const [opacity, setOpacity] = useState(1)
    const [height, setHeight] = useState(0)
    const [display, setDisplay] = useState(true)

    const src = HOST + 'image/' + item.image

    const deleteCurrentItem = () => {
        setOpacity(0)
        setTimeout(() => {
            setDisplay(false)
            setHeight(0)
            setTimeout(() => {
                deleteItem(item.basketItemId)
            }, 400)
        }, 400)
    }

    const clickOnItem = () => {
        router.push(BOOK + item.token).then()
    }

    useEffect(() => {
        if (itemRef) {
            setHeight(itemRef.current.getBoundingClientRect().height)
        }
    }, [itemRef])

    return (
        <motion.div
            animate={{
                opacity,
                height,
            }}
            ref={itemRef}
            className={styles.basket_item}
        >
            <img
                onClick={clickOnItem}
                style={{display: display ? "block" : "none"}}
                alt="book image"
                src={src}
                className={styles.book_image + ' ' + styles.padding_item}
            />
            <div
                style={{display: display ? "flex" : "none"}}
                className={styles.info_block + ' ' + styles.padding_item}
            >
                <div className={styles.name_line}>
                    <h1 className={styles.name}>{item.name}</h1>
                    <div className={styles.delete}>
                        <svg
                            onClick={deleteCurrentItem}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className={styles.delete_svg}
                        >
                            <path d="M480-438 270-228q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522-480l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-438Z"/>
                        </svg>
                    </div>
                </div>
                <p className={styles.description}>
                    {item.description}
                </p>
                {item.genres.map(genre =>
                    <div className={styles.genres}>
                        <p className={styles.genre}>{genre.name}</p>
                    </div>
                )}
                <p className={styles.price}>{item.price.toFixed(2)} ₽</p>
            </div>
        </motion.div>
    );
};

export default BasketBook;