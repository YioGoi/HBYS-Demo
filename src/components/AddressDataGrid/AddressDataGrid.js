import React, { useEffect, useState } from 'react'

// Styles
import './AddressDataGrid.css'

// Redux
import { useSelector } from 'react-redux'

// Core Components
import DataGrid from '../core/DataGrid/DataGrid'

function AddressDataGrid() {
    // Global State
    const getAddressSuccess = useSelector(state => state.form.getAddressSuccess)

    // Local State
    const [ columnArray, setColumnArray ] = useState([])

    useEffect(() => {
        if (getAddressSuccess) {
            setColumnArray(Object.getOwnPropertyNames(getAddressSuccess[0]))
        }
    }, [getAddressSuccess])

    return (
        <>
            <DataGrid 
                dataSource={getAddressSuccess}
                columns={columnArray}
                gridClassName='address-data-grid'
                scrollHeight='200px'
                gridWidth='calc(50vw - 2rem - 9px)'
                columnHeaderWidth='150px'
            />
        </>
    )
}

export default React.memo(AddressDataGrid)
