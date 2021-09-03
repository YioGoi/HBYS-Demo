import {
    SET_CUSTOMERS,
    SET_INPUT_NAME_VALUE,
    SET_SELECTED_COMPANY,
    SET_ACTIVITY,
    SET_STATUS,
    SAVE_CUSTOMER_INFORMATION,
    SET_SELECTED_DATA_TABLE_OPTION,
    SET_SAVED_TEXT,
    SET_IS_ANT_MODAL_VISIBLE
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
    isAntModalVisible: false
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
        default:
            return state
    }
}

export default formReducer
