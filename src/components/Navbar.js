import styles from "@/styles/components/Navbar.module.css"
import {Container} from "react-bootstrap";
import {useState} from "react";
import { motion } from "framer-motion";

function Navbar() {

    const [isOpenFinder, setIsOpenFinder] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const [finderOpacity, setFinderOpacity] = useState(0)

    const [text, setText] = useState('')

    const openFinder = () => {
        setOpacity(0)
        setTimeout(() => {
            setIsOpenFinder(true)
            setFinderOpacity(1)
        }, 300)
    }

    const closeFinder = () => {
        setFinderOpacity(0)
        setTimeout(() => {
            setText('')
            setIsOpenFinder(false)
            setOpacity(1)
        }, 300)
    }

    return (
        <>
            <div className={styles.navbar}>
                <Container>
                    {isOpenFinder ?
                        <motion.div animate={{opacity: finderOpacity}} className={styles.row}>
                            <svg
                                className={styles.finder_svg}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                            <input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                type="text"
                                className={styles.finder}
                                placeholder="Find books"
                            />
                            <svg
                                onClick={closeFinder}
                                className={styles.finder_svg}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                            </svg>
                        </motion.div>
                        :
                        <motion.div animate={{opacity}} className={styles.row}>
                            <h1 className={styles.name}>Digital Books</h1>
                            <div className={styles.link_block}>
                                <p className={styles.link}>Home</p>
                                <p className={styles.link}>Books</p>
                                <p className={styles.link}>Order</p>
                                <p className={styles.link}>Support</p>
                            </div>
                            <div className={styles.svg_wrap}>
                                <svg
                                    onClick={openFinder}
                                    className={styles.svg + ' ' + styles.find}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                </svg>
                                <div className={styles.basket_block + ' ' + styles.svg}>
                                    <svg
                                        className={styles.svg + ' ' + styles.basket}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4.12815 17.6245C3.87936 17.6245 3.65819 17.5511 3.46465 17.4042C3.27112 17.2573 3.14325 17.0664 3.08104 16.8315L0.696982 8.27263C0.638107 8.04105 0.681288 7.83279 0.826524 7.64786C0.971746 7.46292 1.16543 7.37044 1.40759 7.37044H5.55932L9.35369 1.80523C9.43311 1.70529 9.52444 1.6252 9.62769 1.56496C9.73095 1.50473 9.84811 1.47461 9.97915 1.47461C10.1102 1.47461 10.2273 1.50473 10.3306 1.56496C10.4339 1.6252 10.5252 1.70529 10.6046 1.80523L14.3781 7.37044H18.634C18.8623 7.37044 19.0491 7.46292 19.1943 7.64786C19.3395 7.83279 19.3827 8.04105 19.3238 8.27263L16.9289 16.8315C16.8667 17.0664 16.7388 17.2573 16.5453 17.4042C16.3517 17.5511 16.1322 17.6245 15.8868 17.6245H4.12815ZM9.99998 13.7799C10.3572 13.7799 10.6598 13.6559 10.9078 13.4078C11.1559 13.1598 11.2799 12.8572 11.2799 12.5C11.2799 12.1428 11.1559 11.8402 10.9078 11.5922C10.6598 11.3441 10.3572 11.2201 9.99998 11.2201C9.6428 11.2201 9.34019 11.3441 9.09215 11.5922C8.84411 11.8402 8.72009 12.1428 8.72009 12.5C8.72009 12.8572 8.84411 13.1598 9.09215 13.4078C9.34019 13.6559 9.6428 13.7799 9.99998 13.7799ZM7.26946 7.37044H12.673L9.97417 3.42798L7.26946 7.37044Z"/>
                                    </svg>
                                    <p className={styles.count_item}>2</p>
                                </div>
                            </div>
                        </motion.div>
                    }
                </Container>
            </div>
            <div className={styles.help}></div>
        </>
    )
}

export default Navbar