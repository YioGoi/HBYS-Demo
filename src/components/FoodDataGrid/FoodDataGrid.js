import React, { memo, useEffect, useState } from 'react'

// Styles
import './FoodDataGrid.css'

// Redux
import { useSelector } from 'react-redux'

// Core Components
import DataGrid from '../core/DataGrid/DataGrid'

function FoodDataGrid() {
    // Global State
    const getFoodSuccess = useSelector(state => state.form.getFoodSuccess)

    // Local State
    const [ columnArray, setColumnArray ] = useState([])

    useEffect(() => {
        if (getFoodSuccess) {
            setColumnArray(Object.getOwnPropertyNames(getFoodSuccess[0]))
        }
    }, [getFoodSuccess])

    return (
        <>
            <DataGrid 
                dataSource={getFoodSuccess}
                columns={columnArray}
                gridClassName='food-data-grid'
                scrollHeight='200px'
                gridWidth='calc(50vw - 2rem - 9px)'
                columnHeaderWidth='150px'
            />
        </>
    )
}

export default memo(FoodDataGrid)
