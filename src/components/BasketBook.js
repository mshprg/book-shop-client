import styles from "@/styles/components/BasketBook.module.css";
import Image from "next/image";
import {motion, useMotionValue} from "framer-motion";
import {useEffect, useState} from "react";

const BasketBook = ({ itemRef, item, items, deleteItem }) => {

    const [opacity, setOpacity] = useState(1)
    const height = useMotionValue(0)
    const [display, setDisplay] = useState(true)

    const deleteCurrentItem = () => {
        setOpacity(0)
        setTimeout(() => {
            setDisplay(false)
            height.set(0)
            setTimeout(() => {
                deleteItem(item.id)
            }, 400)
        }, 400)
    }

    useEffect(() => {
        if (itemRef) {
            height.set(itemRef.current.getBoundingClientRect().height)
            console.log(height)
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
            <Image
                style={{display: display ? "block" : "none"}}
                alt="book image"
                src={require("@/img/book.png")}
                className={styles.book_image + ' ' + styles.padding_item}
            />
            <div
                style={{display: display ? "flex" : "none"}}
                className={styles.info_block + ' ' + styles.padding_item}
            >
                <div className={styles.name_line}>
                    <h1 className={styles.name}>The Power</h1>
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
                    Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death. Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death.
                </p>
                <div className={styles.genres}>
                    <p className={styles.genre}>Study</p>
                </div>
                <p className={styles.price}>8.00 $</p>
            </div>
        </motion.div>
    );
};

export default BasketBook;