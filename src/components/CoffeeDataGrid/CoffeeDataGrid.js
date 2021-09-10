import React, { useEffect, useState, memo } from 'react'

// Styles
import './CoffeeDataGrid.css'

// Redux
import { useSelector } from 'react-redux'

// Core Components
import DataGrid from '../core/DataGrid/DataGrid'

function CoffeeDataGrid() {
    // Global State
    const getCoffeeSuccess = useSelector(state => state.form.getCoffeeSuccess)

    // Local State
    const [ columnArray, setColumnArray ] = useState([])

    useEffect(() => {
        if (getCoffeeSuccess) {
            setColumnArray(Object.getOwnPropertyNames(getCoffeeSuccess[0]))
        }
    }, [getCoffeeSuccess])

    return (
        <>
            <DataGrid 
                dataSource={getCoffeeSuccess}
                columns={columnArray}
                gridClassName='coffee-data-grid'
                scrollHeight='200px'
                gridWidth='calc(50vw - 2rem - 9px)'
                columnHeaderWidth='150px'
            />
        </>
    )
}

export default memo(CoffeeDataGrid)
