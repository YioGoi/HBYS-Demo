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
    GET_DEVICE_SUCCESS
} from './formActionTypes'

export const setCustomers = customers => {
    return {
        type: SET_CUSTOMERS,
        payload: customers
    }
}

export const setInputNameValue = name => {
    return {
        type: SET_INPUT_NAME_VALUE,
        payload: name
    }
}

export const setSelectedCompany = company => {
    return {
        type: SET_SELECTED_COMPANY,
        payload: company
    }
}

export const setActivity = activity => {
    return {
        type: SET_ACTIVITY,
        payload: activity
    }
}

export const setStatus = status => {
    return {
        type: SET_STATUS,
        payload: status
    }
}

export const saveCustomerInformation = () => {
    return {
        type: SAVE_CUSTOMER_INFORMATION,
    }
}

export const setSelectedDataTableOption = option => {
    return {
        type: SET_SELECTED_DATA_TABLE_OPTION,
        payload: option
    }
}

export const setSavedText = text => {
    return {
        type: SET_SAVED_TEXT,
        payload: text
    }
}

export const setIsAntModalVisible = visible => {
    return {
        type: SET_IS_ANT_MODAL_VISIBLE,
        payload: visible
    }
}

export const updateCustomersDataGrid = updatedResults => {
    return {
        type: UPDATED_CUSTOMERS_DATA_GRID,
        payload: updatedResults
    }
}

export const getRandomQuotesRequest = () => {
    return {
        type: GET_RANDOM_QUOTES_REQUEST
    }
}

export const getRandomQuotesFailure = error => {
    return {
        type: GET_RANDOM_QUOTES_FAILURE,
        payload: error
    }
}

export const getRandomQuotesSuccess = quote => {
    return {
        type: GET_RANDOM_QUOTES_SUCCESS,
        payload: quote
    }
}

export const getAddressRequest = () => {
    return {
        type: GET_ADDRESS_REQUEST
    }
}

export const getAddressFailure = error => {
    return {
        type: GET_ADDRESS_FAILURE,
        payload: error
    }
}

export const getAddressSuccess = address => {
    return {
        type: GET_ADDRESS_SUCCESS,
        payload: address
    }
}

export const getCoffeeRequest = () => {
    return {
        type: GET_COFFEE_REQUEST
    }
}

export const getCoffeeFailure = error => {
    return {
        type: GET_COFFEE_FAILURE,
        payload: error
    }
}

export const getCoffeeSuccess = coffee => {
    return {
        type: GET_COFFEE_SUCCESS,
        payload: coffee
    }
}

export const getFoodRequest = () => {
    return {
        type: GET_FOOD_REQUEST
    }
}

export const getFoodFailure = error => {
    return {
        type: GET_FOOD_FAILURE,
        payload: error
    }
}

export const getFoodSuccess = food => {
    return {
        type: GET_FOOD_SUCCESS,
        payload: food
    }
}

export const getDeviceRequest = () => {
    return {
        type: GET_DEVICE_REQUEST
    }
}

export const getDeviceFailure = error => {
    return {
        type: GET_DEVICE_FAILURE,
        payload: error
    }
}

export const getDeviceSuccess = device => {
    return {
        type: GET_DEVICE_SUCCESS,
        payload: device
    }
}
