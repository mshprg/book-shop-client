import styles from "@/styles/pages/catalog.module.css"
import Grid from "@/components/Grid";
import HeightWrapper from "@/components/HeightWrapper";
import {motion} from "framer-motion";
import Book from "@/components/Book";
import Pagination from "@/components/Pagination";
import {useEffect, useState} from "react";
import Filters from "@/components/Filters";
import {getBooksByFilter, getLastBook, getPrices} from "@/api/bookApi";
import {getAllGenres} from "@/api/genreApi";
import {HOST} from "@/utils/routes";
import {wrapper} from "@/store";
import {add_notification, checkBasketToken, routerPushCatalogQueryParams} from "@/functions/functions";
import {useActions} from "@/hooks/useActions";
import {useSelector} from "react-redux";
import {getCookie} from "cookies-next";
import {createBasketItem} from "@/api/basketApi";
import {SET_CURRENT_PAGE, SET_PAGES_COUNT} from "@/store/reducers/pageReducer/pageReducerActions";
import {SET_FIND_BOOK} from "@/store/reducers/finderReducer/finderReducerActions";
import {useRouter} from "next/router";

function Catalog({ maxQ, minQ, max, min, genreIds, queryPage, pageCount, books, genres, last_book }) {

    const router = useRouter()

    const [filtersVisible, setFiltersVisible] = useState(false)

    const [findHeight, setFindHeight] = useState("0")
    const [findOpacity, setFindOpacity] = useState(0)
    const [findDisplay, setFindDisplay] = useState("none")

    const [page, setPage] = useState({page: queryPage, count: pageCount})

    const {addBasketItem, addNotification, setFinderText} = useActions()
    const {_basketItems} = useSelector(state => state.basketItems)
    const {find} = useSelector(state => state.finder)

    const [booksArray, setBooksArray] = useState([])

    const [filters, setFilters] = useState({
        max: maxQ, min: minQ, genreIds: genreIds
    })

    useEffect(() => {
        setBooksArray(books)
    }, [books])

    useEffect(() => {
        //setPage({...page, page: 1})
        routerPushCatalogQueryParams(router, 1, filters.max, filters.min, JSON.stringify(filters.genreIds), find)
    }, [filters, find])

    useEffect(() => {
        routerPushCatalogQueryParams(router, page.page, filters.max, filters.min, JSON.stringify(filters.genreIds), find)
    }, [page])

    useEffect(() => {
        if (find) {
            setFindDisplay("flex")
            setFindHeight("3.6rem")
            setTimeout(() => {
                setFindOpacity(1)
            }, 1000)
        }
    }, [find])

    const updatePage = (value) => {
        setPage({...page, page: value})
    }

    const cleanFinder = () => {
        setFindOpacity(0)
        setTimeout(() => {
            setFindHeight("0")
            setTimeout(() => {
                setFindDisplay("none")
                setFinderText("")
            }, 500)
        }, 500)
    }

    const updateFilters = (value) => {
        setFilters(value)
    }

    const updateFiltersVisible = (value) => {
        setFiltersVisible(value)
    }

    const addGenre = (id) => {
        setFilters({...filters, genreIds: [id]})
    }

    const addToCart = () => {
        const token = getCookie('token')
        if (token) {
            if (_basketItems.findIndex(el => el.basketToken === token && el.bookId === last_book.id) === -1) {
                createBasketItem(token, last_book.id).then(basketItem => {
                    addBasketItem(basketItem)
                    add_notification("Книга добавлена", "Книга добавлена в корзину", 0, addNotification)
                })
            } else {
                add_notification("Книга уже в корзине", "Эта книга уже добавлена в корзину", 0, addNotification)
            }
        }
    }

    const src_last_book = HOST + 'image/' + last_book.image

    return (
        <Grid>
            <Filters
                save={filters}
                genres={genres}
                setSaveFilters={(value) => updateFilters(value)}
                visible={filtersVisible}
                setVisible={(value) => updateFiltersVisible(value)}
                maxDt={max}
                minDt={min}
            />
            <HeightWrapper>
                <div className={styles.large_blocks}>
                    <div className={styles.large_block}>
                        <div className={styles.large_book_img_block}>
                            <img
                                className={styles.large_book_img}
                                src={src_last_book}
                                alt="book"
                            />
                        </div>
                        <div className={styles.description_block}>
                            <h1 className={styles.name_block}>{last_book.name}</h1>
                            <p className={styles.description_book}>
                                {last_book.description}
                            </p>
                            <button
                                onClick={addToCart}
                                className={styles.add_to_card}
                            >
                                В корзину
                            </button>
                        </div>
                    </div>
                    <div className={styles.large_block + ' ' + styles.ml_auto + ' ' + styles.padding_genres}>
                        <div className={styles.line_genres}>
                            <h1
                                style={{marginBottom: 0}}
                                className={styles.name_block}
                            >
                                Жанры
                            </h1>
                            <div className={styles.finder_genres_block}>
                                <div className={styles.finder_wrapper}>
                                    <input
                                        type="text"
                                        className={styles.finder_genres}
                                        placeholder="Поиск по жанрам..."
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className={styles.find_svg}
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={styles.genres_list}>
                            {genres.map(genre =>
                                <p
                                    onClick={() => addGenre(genre.id)}
                                    className={styles.genre}
                                >
                                    {genre.name}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.filter_block}>
                    <motion.div
                        className={styles.finder_text}
                        initial={{height: 0, opacity: 0, display: "none"}}
                        animate={{height: findHeight, opacity: findOpacity, display: findDisplay}}
                    >
                        {find}
                        <svg
                            onClick={cleanFinder}
                            className={styles.finder_svg}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                        >
                            <path d="M480.435-421.652 278.522-219.739q-13.131 13.13-29.892 13.13-16.76 0-28.891-13.13-13.13-12.131-13.13-28.891 0-16.761 13.13-28.892l202.348-202.913-202.783-202.347q-12.13-12.131-12.13-29.174 0-17.044 12.13-29.174 11.566-12.131 28.609-12.131 17.044 0 30.174 12.131L480-538.652l202.478-203.044q12.131-12.13 28.892-12.13 16.76 0 29.891 12.13 12.13 13.131 12.13 30.109t-12.13 29.109L538.783-480.565l201.913 202.913q12.695 12.695 12.695 29.456t-12.695 28.892q-12.131 12.695-29.174 12.695-17.044 0-28.174-12.695L480.435-421.652Z"/>
                        </svg>
                    </motion.div>
                    <button
                        onClick={() => setFiltersVisible(true)}
                        className={styles.filter_button}
                    >
                        Настроки
                        {filters.max !== maxQ || filters.min !== minQ || filters.genreIds.length !== 0 ?
                            <svg
                                className={styles.filter_svg}
                                style={{fill: '#CB2903'}}
                                xmlns="http://www.w3.org/2000/svg"
                                enable-background="new 0 0 24 24"
                                viewBox="0 0 24 24"
                            >
                                <g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g>
                            </svg>
                            :
                            <svg
                                className={styles.filter_svg}
                                xmlns="http://www.w3.org/2000/svg"
                                enable-background="new 0 0 24 24"
                                viewBox="0 0 24 24"
                            >
                                <g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g>
                            </svg>
                        }
                    </button>
                </div>
                <div className={styles.books}>
                    {books.length !== 0 ?
                        <>
                            {booksArray.map(book =>
                                <Book
                                    book={book}
                                />
                            )}
                        </>
                        :
                        <motion.div
                            className={styles.empty_block}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className={styles.empty_text}>Книг не найдено, пожалуйста измените настройки</p>
                        </motion.div>
                    }
                </div>
                {booksArray.length !== 0 &&
                    <Pagination pageState={page} setPage={(value) => updatePage(value)} />
                }
            </HeightWrapper>
        </Grid>
    );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({query, req, res, ...etc}) => {

    await checkBasketToken({req, res}, store.dispatch)

    const page = query.page ? Number(query.page) : 1
    let maxQ = query.max
    let minQ = query.min
    let genreIds = query.gIds
    let finder = query.finder ? query.finder : ""

    const {max, min} = await getPrices()

    if (!maxQ)
        maxQ = max
    else
        maxQ = Number(maxQ)
    if (!minQ)
        minQ = min
    else
        minQ = Number(minQ)

    if (!genreIds)
        genreIds = []
    else
        genreIds = JSON.parse(query.gIds)

    const books_row = await getBooksByFilter(page, maxQ, minQ, JSON.stringify(genreIds), finder)
    const books = books_row.rows

    store.dispatch({type: SET_PAGES_COUNT, payload: books_row.pageCount})
    store.dispatch({type: SET_CURRENT_PAGE, payload: page})
    store.dispatch({type: SET_FIND_BOOK, payload: finder})

    const genres = await getAllGenres()

    const last_book = await getLastBook()

    const queryPage = page
    const pageCount = books_row.pageCount

    return {
        props: {maxQ, minQ, max, min, queryPage, pageCount, genreIds, books, genres, last_book}
    }
})

export default Catalog;