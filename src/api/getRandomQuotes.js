// Redux imports
import store from '../redux/store'

// Redux actions
import {
    getRandomQuotesRequest,
    getRandomQuotesFailure,
    getRandomQuotesSuccess
} from '../redux'


export default function getRandomQuotes() {

    store.dispatch(getRandomQuotesRequest())

    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1", { credentials: 'omit', mode: 'cors' })
        .then(
            function (response) {
                if (response.status !== 200) {
                    store.dispatch(getRandomQuotesFailure(''))
                    return
                }

                response.json().then(function (data) {
                    store.dispatch(getRandomQuotesSuccess(data))
                })
            }
        )
        .catch(err => {
            store.dispatch(getRandomQuotesFailure(err))
        })
}