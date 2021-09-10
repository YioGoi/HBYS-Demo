import {
    SET_CUSTOMERS,
    SET_INPUT_NAME_VALUE,
    SET_SELECTED_COMPANY,
    SET_ACTIVITY,
    SET_STATUS,
    SAVE_CUSTOMER_INFORMATION,
    SET_SELECTED_DATA_TABLE_OPTION,
    SET_SAVED_TEXT,
    SET_IS_ANT_MODAL_VISIBLE,
    UPDATED_CUSTOMERS_DATA_GRID,
    GET_RANDOM_QUOTES_REQUEST,
    GET_RANDOM_QUOTES_FAILURE,
    GET_RANDOM_QUOTES_SUCCESS,
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_FAILURE,
    GET_ADDRESS_SUCCESS,
    GET_COFFEE_REQUEST,
    GET_COFFEE_FAILURE,
    GET_COFFEE_SUCCESS,
    GET_FOOD_REQUEST,
    GET_FOOD_FAILURE,
    GET_FOOD_SUCCESS,
    GET_DEVICE_REQUEST,
    GET_DEVICE_FAILURE,
    GET_DEVICE_SUCCESS,
} from "./formActionTypes"

// initial state
const initialState = {
    customers: null,
    inputNameValue: null,
    selectedCompany: null,
    selectedActivity: null,
    selectedStatus: null,
    selectedDataTableOption: null,
    savedText: null,
    isAntModalVisible: false,
    getRandomQuoteLoading: false,
    getRandomQuoteFailure: null,
    getRandomQuoteSuccess: null,
    getAddressLoading: false,
    getAddressFailure: null,
    getAddressSuccess: null,
    getCoffeeLoading: false,
    getCoffeeFailure: null,
    getCoffeeSuccess: null,
    getFoodLoading: false,
    getFoodFailure: null,
    getFoodSuccess: null,
    getDeviceLoading: false,
    getDeviceFailure: null,
    getDeviceSuccess: null

}

// Form Reducer
const formReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            }
        case SET_INPUT_NAME_VALUE:
            return {
                ...state,
                inputNameValue: action.payload
            }
        case SET_SELECTED_COMPANY:
            return {
                ...state,
                selectedCompany: action.payload
            }
        case SET_ACTIVITY:
            return {
                ...state,
                selectedActivity: action.payload
            }
        case SET_STATUS:
            return {
                ...state,
                selectedStatus: action.payload
            }
        case SAVE_CUSTOMER_INFORMATION:
            const newCustomer = {
                "dataIndex": state.customers.length,
                "id": state.customers.length,
                "name": state.inputNameValue,
                "country": {
                    "name": "",
                    "code": ""
                },
                "company": state.selectedCompany,
                "date": "",
                "status": state.selectedStatus,
                "activity": state.selectedActivity,
                "representative": {
                    "name": "",
                    "image": ""
                }
            }

            const cloneOfCustomers = Object.assign([], state.customers)
            cloneOfCustomers.unshift(newCustomer)

            return {
                ...state,
                customers: cloneOfCustomers
            }
        case SET_SELECTED_DATA_TABLE_OPTION:
            return {
                ...state,
                selectedDataTableOption: action.payload
            }
        case SET_SAVED_TEXT:
            return {
                ...state,
                savedText: action.payload
            }
        case SET_IS_ANT_MODAL_VISIBLE:
            return {
                ...state,
                isAntModalVisible: action.payload
            }
        case UPDATED_CUSTOMERS_DATA_GRID:
            return {
                ...state,
                customers: action.payload
            }
        case GET_RANDOM_QUOTES_REQUEST:
            return {
                ...state,
                getRandomQuoteLoading: true
            }
        case GET_RANDOM_QUOTES_FAILURE:
            return {
                ...state,
                getRandomQuoteLoading: false,
                getRandomQuoteFailure: action.payload
            }
        case GET_RANDOM_QUOTES_SUCCESS:
            return {
                ...state,
                getRandomQuoteLoading: false,
                getRandomQuoteFailure: false,
                getRandomQuoteSuccess: action.payload
            }
        case GET_ADDRESS_REQUEST:
            return {
                ...state,
                getAddressLoading: true
            }
        case GET_ADDRESS_FAILURE:
            return {
                ...state,
                getAddressLoading: false,
                getAddressFailure: action.payload
            }
        case GET_ADDRESS_SUCCESS:
            return {
                ...state,
                getAddressLoading: false,
                getAddressFailure: false,
                getAddressSuccess: action.payload
            }
        case GET_COFFEE_REQUEST:
            return {
                ...state,
                getCoffeeLoading: true
            }
        case GET_COFFEE_FAILURE:
            return {
                ...state,
                getCoffeeLoading: false,
                getCoffeeFailure: action.payload
            }
        case GET_COFFEE_SUCCESS:
            return {
                ...state,
                getCoffeeLoading: false,
                getCoffeeFailure: false,
                getCoffeeSuccess: action.payload
            }
        case GET_FOOD_REQUEST:
            return {
                ...state,
                getFoodLoading: true
            }
        case GET_FOOD_FAILURE:
            return {
                ...state,
                getFoodLoading: false,
                getFoodFailure: action.payload
            }
        case GET_FOOD_SUCCESS:
            return {
                ...state,
                getFoodLoading: false,
                getFoodFailure: false,
                getFoodSuccess: action.payload
            }
        case GET_DEVICE_REQUEST:
            return {
                ...state,
                getDeviceLoading: true
            }
        case GET_DEVICE_FAILURE:
            return {
                ...state,
                getDeviceLoading: false,
                getDeviceFailure: action.payload
            }
        case GET_DEVICE_SUCCESS:
            return {
                ...state,
                getDeviceLoading: false,
                getDeviceFailure: false,
                getDeviceSuccess: action.payload
            }
        default:
            return state
    }
}

export default formReducer
