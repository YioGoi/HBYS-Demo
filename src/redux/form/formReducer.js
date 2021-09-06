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
    GET_RANDOM_QUOTES_SUCCESS
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
    getRandomQuoteSuccess: null
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
        default:
            return state
    }
}

export default formReducer
