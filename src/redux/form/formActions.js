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
    UPDATED_CUSTOMERS_DATA_GRID
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
