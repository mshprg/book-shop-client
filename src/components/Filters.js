import {CSSTransition} from "react-transition-group";
import styles from "@/styles/components/Filters.module.css"
import {useEffect, useRef, useState} from "react";
import Slider from "@/components/Slider";

const Filters = ({visible, setVisible, save, setSaveFilters}) => {

    const profileRef = useRef(null)

    const min = 2.5
    const max = 10

    const [minPrice, setMinPrice] = useState(min)
    const [maxPrice, setMaxPrice] = useState(max)

    useEffect(() => {
        if (minPrice > maxPrice) {
            const tmp = maxPrice
            setMaxPrice(minPrice)
            setMinPrice(tmp)
        }
    }, [minPrice, maxPrice])

    const updateMinPrice = (value) => {
        setMinPrice(value)
    }

    const updateMaxPrice = (value) => {
        setMaxPrice(value)
    }

    const closePopup = () => {
        setVisible(false)
    }

    return (
        <CSSTransition
            in={visible}
            timeout={580}
            classNames="popup-back"
            mountOnEnter
            unmountOnExit
        >
            <div className={styles.background + ' popup-back'}>
                <div ref={profileRef} className={styles.window}>
                    <div className={styles.filters_area}>
                        <div className={styles.price_line}>
                            <p className={styles.head_text}>Price</p>
                            <div className={styles.range_slider_block}>
                                <p className={styles.price}>{minPrice.toFixed(2)} $</p>
                                <Slider
                                    min={min}
                                    max={max}
                                    step={0.5}
                                    minPrice={minPrice}
                                    maxPrice={maxPrice}
                                    setMaxPrice={(value) => updateMaxPrice(value)}
                                    setMinPrice={(value) => updateMinPrice(value)}
                                />
                                <p className={styles.price}>{maxPrice.toFixed(2)} $</p>
                            </div>
                        </div>
                        <div className={styles.genres_filter}>
                            <p className={styles.head_text}>Genres</p>
                            <div className={styles.genres_list}>
                                <p className={styles.genre}>Pets</p>
                                <p className={styles.genre + ' ' + styles.genre_current}>Nature</p>
                                <p className={styles.genre}>Music</p>
                                <p className={styles.genre}>Law</p>
                                <p className={styles.genre}>Games</p>
                                <p className={styles.genre}>Study</p>
                                <p className={styles.genre}>Pets</p>
                                <p className={styles.genre + ' ' + styles.genre_current}>Nature</p>
                                <p className={styles.genre}>Music</p>
                                <p className={styles.genre}>Law</p>
                                <p className={styles.genre}>Games</p>
                                <p className={styles.genre}>Study</p>
                                <p className={styles.genre}>Pets</p>
                                <p className={styles.genre + ' ' + styles.genre_current}>Nature</p>
                                <p className={styles.genre}>Music</p>
                                <p className={styles.genre}>Law</p>
                                <p className={styles.genre}>Games</p>
                                <p className={styles.genre}>Study</p>
                                <p className={styles.genre}>Pets</p>
                                <p className={styles.genre + ' ' + styles.genre_current}>Nature</p>
                                <p className={styles.genre}>Music</p>
                                <p className={styles.genre}>Law</p>
                                <p className={styles.genre}>Physic</p>
                                <p className={styles.genre}>Study</p>
                                <p className={styles.genre + ' ' + styles.genre_current}>Nature</p>
                                <p className={styles.genre}>Music</p>
                                <p className={styles.genre}>Law</p>
                                <p className={styles.genre}>Games</p>
                                <p className={styles.genre}>Study</p>
                                <p className={styles.genre}>Pets</p>
                                <p className={styles.genre + ' ' + styles.genre_current}>Nature</p>
                                <p className={styles.genre}>Music</p>
                                <p className={styles.genre}>Law</p>
                                <p className={styles.genre}>Physic</p>
                                <p className={styles.genre}>Study</p>
                                <p className={styles.genre + ' ' + styles.genre_current}>Nature</p>
                                <p className={styles.genre}>Music</p>
                                <p className={styles.genre}>Law</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.under_line}>
                        <button
                            className={styles.button + ' ' + styles.close}
                            onClick={closePopup}
                        >
                            Close
                        </button>
                        <button className={styles.button + ' ' + styles.reset}>Reset</button>
                        <button className={styles.button + ' ' + styles.save}>Save</button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Filters;