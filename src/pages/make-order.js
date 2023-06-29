import styles from "@/styles/pages/make-order.module.css"
import global from "@/styles/global.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Grid from "@/components/Grid";
import {useState} from "react";
import Thanks from "@/components/Thanks";
import {useRouter} from "next/router";

function MakeOrder() {

    const router = useRouter()

    const [isPay, setIsPay] = useState(false)

    const back = () => {
        router.back()
    }

    return (
        <Grid>
            <HeightWrapper>
                {isPay ?
                    <Thanks />
                    :
                    <>
                        <div className={global.margin} />
                        <div className={global.up_line}>
                            <p className={global.head}>Make order</p>
                            <button
                                onClick={back}
                                className={styles.button_back}
                            >
                                <svg
                                    className={styles.back_svg}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                >
                                    <path d="M372-108 21-459q-5-5-7-10t-2-11q0-6 2-11t7-10l351-351q11-11 28-11t28 11q12 12 12 28.5T428-795L113-480l315 315q12 12 11.5 28.5T428-109q-12 12-28.5 12T372-108Z"/>
                                </svg>
                                Back
                            </button>
                        </div>
                        <div className={styles.data_block}>
                            <div className={styles.to_pay}>To pay: <p className={styles.pay_price}>16.00 $</p></div>
                            <div className={styles.input_wrapper}>
                                <input className={styles.input} type="text" placeholder="Your name"/>
                            </div>
                            <div className={styles.input_wrapper}>
                                <input className={styles.input} type="email" placeholder="E-Mail"/>
                            </div>
                            <p className={styles.ps}>A copy of the book will be sent to this E-Mail</p>
                        </div>
                        <div className={styles.button_line}>
                            <button onClick={() => setIsPay(true)} className={styles.button_pay}>
                                Pay
                            </button>
                        </div>
                    </>
                }
            </HeightWrapper>
        </Grid>
    );
}

export default MakeOrder;