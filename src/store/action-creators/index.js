import * as NotificationActionCreators from "./notification"
import * as BasketItemActionCreators from "./basketItem"
import * as PageActionCreators from "./page"
import * as FinderActionCreators from "./finder"

export default {
    ...NotificationActionCreators,
    ...BasketItemActionCreators,
    ...PageActionCreators,
    ...FinderActionCreators
}