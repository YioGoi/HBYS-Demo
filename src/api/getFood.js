// Redux imports
import store from '../redux/store'

// Redux actions
import {
    getFoodRequest,
    getFoodFailure,
    getFoodSuccess
} from '../redux'


export default function getFood() {

    store.dispatch(getFoodRequest())

    fetch("https://random-data-api.com/api/food/random_food?size=100", { credentials: 'omit', mode: 'cors' })
        .then(
            function (response) {
                if (response.status !== 200) {
                    store.dispatch(getFoodFailure(''))
                    return
                }

                response.json().then(function (data) {
                    store.dispatch(getFoodSuccess(data))
                })
            }
        )
        .catch(err => {
            store.dispatch(getFoodFailure(err))
        })
}