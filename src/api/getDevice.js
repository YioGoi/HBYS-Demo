// Redux imports
import store from '../redux/store'

// Redux actions
import {
    getDeviceRequest,
    getDeviceFailure,
    getDeviceSuccess
} from '../redux'


export default function getDevice() {

    store.dispatch(getDeviceRequest())

    fetch("https://random-data-api.com/api/device/random_device?size=100", { credentials: 'omit', mode: 'cors' })
        .then(
            function (response) {
                if (response.status !== 200) {
                    store.dispatch(getDeviceFailure(''))
                    return
                }

                response.json().then(function (data) {
                    store.dispatch(getDeviceSuccess(data))
                })
            }
        )
        .catch(err => {
            store.dispatch(getDeviceFailure(err))
        })
}