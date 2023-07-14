import styles from "@/styles/components/OrderBook.module.css"
import Image from "next/image";
import {downloadBook} from "@/api/bookApi";
import {HOST} from "@/utils/routes";

const OrderBook = ({ itemRef, book }) => {

    const src = HOST + 'image/' + book.image

    const downloadPdf = () => {
        downloadBook(book.file, ".pdf").then(data => {
            const url = URL.createObjectURL(data)
            const link = document.createElement('a')
            link.href = url
            link.download = book.name
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
    }

    const downloadEpub = () => {
        downloadBook(book.file, ".epub").then(data => {
            const url = URL.createObjectURL(data)
            const link = document.createElement('a')
            link.href = url
            link.download = book.name
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
    }

    return (
        <div ref={itemRef}>
            <div className={styles.block}>
                <img
                    className={styles.image}
                    src={src}
                    alt="book image"
                />
                <div className={styles.description_block}>
                    <p className={styles.name}>{book.name}</p>
                    <p className={styles.description}>
                        {book.description}
                    </p>
                    <div>
                        {book.genres.map(genre =>
                            <p className={styles.genre}>{genre.name}</p>
                        )}
                    </div>
                    <div className={styles.downloads}>
                        <p
                            onClick={downloadPdf}
                            className={styles.download + ' ' + styles.pdf}
                        >
                            .pdf
                        </p>
                        <p
                            onClick={downloadEpub}
                            className={styles.download + ' ' + styles.epub}
                        >
                            .epub
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderBook;