import React, {useEffect} from 'react';
import HeightWrapper from "@/components/HeightWrapper";
import Thanks from "@/components/Thanks";
import {checkForPayOrder} from "@/api/orderApi";
import {getCookie} from "cookies-next";
import {HOME} from "@/utils/routes";
import {wrapper} from "@/store";
import {checkBasketToken} from "@/functions/functions";
import {cleanBasket} from "@/api/basketApi";
import {useRouter} from "next/router";

function Paid({ order }) {

    const router = useRouter()

    useEffect(() => {
        if (!order) {
            router.push(HOME).then()
        }
    }, [order])

    if (order) {
        return (
            <HeightWrapper>
                <Thanks order={order} />
            </HeightWrapper>
        );
    } else {
        return (
            <HeightWrapper />
        )
    }
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({query, req, res, ...etc}) => {

    const {token} = query

    const basketToken = getCookie( 'token',{ req, res } )

    let order = undefined
    if (token) {
        order = await checkForPayOrder(token)
    }

    if (basketToken && order) {
        await cleanBasket(basketToken)
    }

    await checkBasketToken({req, res}, store.dispatch)

    return {
        props: {order}
    }
})

export default Paid;