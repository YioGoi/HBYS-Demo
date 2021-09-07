// Redux imports
import store from '../redux/store'

// Redux actions
import {
    getAddressRequest,
    getAddressFailure,
    getAddressSuccess
} from '../redux'


export default function getAddress() {

    store.dispatch(getAddressRequest())

    fetch("https://random-data-api.com/api/address/random_address?size=100", { credentials: 'omit', mode: 'cors' })
        .then(
            function (response) {
                if (response.status !== 200) {
                    store.dispatch(getAddressFailure(''))
                    return
                }

                response.json().then(function (data) {
                    store.dispatch(getAddressSuccess(data))
                })
            }
        )
        .catch(err => {
            store.dispatch(getAddressFailure(err))
        })
}