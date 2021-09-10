import React, { memo, useEffect, useState } from 'react'

// Styles
import './DeviceDataGrid.css'

// Redux
import { useSelector } from 'react-redux'

// Core Components
import DataGrid from '../core/DataGrid/DataGrid'

function DeviceDataGrid() {
    // Global State
    const getDeviceSuccess = useSelector(state => state.form.getDeviceSuccess)

    // Local State
    const [ columnArray, setColumnArray ] = useState([])

    useEffect(() => {
        if (getDeviceSuccess) {
            setColumnArray(Object.getOwnPropertyNames(getDeviceSuccess[0]))
        }
    }, [getDeviceSuccess])

    return (
        <>
            <DataGrid 
                dataSource={getDeviceSuccess}
                columns={columnArray}
                gridClassName='device-data-grid'
                scrollHeight='200px'
                gridWidth='calc(50vw - 2rem - 9px)'
                columnHeaderWidth='150px'
            />
        </>
    )
}

export default memo(DeviceDataGrid)
