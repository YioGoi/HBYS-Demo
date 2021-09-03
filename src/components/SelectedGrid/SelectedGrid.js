import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Styles
import './SelectedGrid.css'

// Prime Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { CustomerService } from '../AdvancedFilterDataGrid/CustomerService'

export default function SelectedGrid() {
    // Global state
    const selectedDataTableOption = useSelector(state => state.form.selectedDataTableOption)

    // Local state
    const [dataSource, setDataSource] = useState(null)
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const customerService = new CustomerService()

        let dataArray = []

        switch (selectedDataTableOption) {
            case "Address":
                customerService.getAddress().then(data => {
                    setDataSource(data)
                    dataArray = [
                        "id",
                        "city",
                        "country",
                        "time_zone",
                        "phone"
                    ]
                    setColumns(dataArray)
                })
                break;
            case "Commerce":
                customerService.getCommerce().then(data => {
                    setDataSource(data)
                    dataArray = [
                        "id",
                        "credit_card",
                        "currency",
                        "department",
                        "stock_name"
                    ]
                    setColumns(dataArray)
                })
                break;
            case "Users":
                customerService.getUsers().then(data => {
                    setDataSource(data)
                    dataArray = [
                        "id",
                        "first_name",
                        "last_name",
                        "email",
                        "gender",
                        "ip_address"
                    ]
                    setColumns(dataArray)
                })
                break;
            default:
                break;
        }
    }, [selectedDataTableOption])

    return (
        <DataTable className="selected-grid" value={dataSource} scrollable scrollHeight="200px">
            {
                columns.map((column, index) => (
                    <Column filter key={index} field={column} header={column}></Column>
                ))
            }
        </DataTable>
    )
}
