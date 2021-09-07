// Redux imports
import store from '../redux/store'

// Redux actions
import {
    getCoffeeRequest,
    getCoffeeFailure,
    getCoffeeSuccess
} from '../redux'


export default function getCoffee() {

    store.dispatch(getCoffeeRequest())

    fetch("https://random-data-api.com/api/coffee/random_coffee?size=100", { credentials: 'omit', mode: 'cors' })
        .then(
            function (response) {
                if (response.status !== 200) {
                    store.dispatch(getCoffeeFailure(''))
                    return
                }

                response.json().then(function (data) {
                    store.dispatch(getCoffeeSuccess(data))
                })
            }
        )
        .catch(err => {
            store.dispatch(getCoffeeFailure(err))
        })
}