import styles from "@/styles/pages/catalog.module.css"
import Grid from "@/components/Grid";
import HeightWrapper from "@/components/HeightWrapper";
import Image from "next/image";
import Book from "@/components/Book";

function Catalog() {

    const genres = [
        {name: "Pets"},
        {name: "Nature"},
        {name: "Music"},
        {name: "Law"},
        {name: "Games"},
        {name: "Study"},
    ]

    return (
        <HeightWrapper>
            <Grid>
                <div className={styles.large_blocks}>
                    <div className={styles.large_block}>
                        <div className={styles.large_book_img_block}>
                            <Image
                                className={styles.large_book_img}
                                src={require("@/img/book.png")}
                                alt="book"
                            />
                        </div>
                        <div className={styles.description_block}>
                            <h1 className={styles.name_block}>The Power</h1>
                            <p className={styles.description_book}>
                                Suddenly - tomorrow or the day after - girls find that with a flick of their fingers, they can inflict agonizing pain and even death.
                            </p>
                            <button className={styles.add_to_card}>Add to card</button>
                        </div>
                    </div>
                    <div className={styles.large_block + ' ' + styles.ml_auto + ' ' + styles.padding_genres}>
                        <div className={styles.line_genres}>
                            <h1 className={styles.name_block}>Genres</h1>
                            <div className={styles.finder_genres_block}>
                                <div className={styles.finder_wrapper}>
                                    <input
                                        type="text"
                                        className={styles.finder_genres}
                                        placeholder="Find genres..."
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
                                <p className={styles.genre}>
                                    {genre.name}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.filter_block}>
                    <button className={styles.filter_button}>
                        Filters
                        <svg
                            className={styles.filter_svg}
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"
                            viewBox="0 0 24 24"
                        >
                            <g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g>
                        </svg>
                    </button>
                </div>
                <div className={styles.books}>
                    {[1,1,1,1,1,1,1,1,1,1].map(() =>
                        <Book />
                    )}
                </div>
            </Grid>
        </HeightWrapper>
    );
}

export default Catalog;