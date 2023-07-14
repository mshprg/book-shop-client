import axios from 'axios'
import {HOST} from "@/utils/routes";

const $host = axios.create({
    baseURL: HOST
})

export {
    $host,
}