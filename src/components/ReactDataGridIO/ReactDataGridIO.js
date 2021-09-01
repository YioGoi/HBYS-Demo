import React, { useEffect, useState } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'

import '@inovua/reactdatagrid-community/index.css'

// API service
import { CustomerService } from '../AdvancedFilterDataGrid/CustomerService'

export default function ReactDataGridIO() {
    // Local State
    const [customers, setCustomers] = useState([])
    const customerService = new CustomerService()

    const columns = [
        { name: 'dataIndex', header: 'Index' },
        { name: 'name', header: 'Name' },
        { name: 'company', header: 'Company' },
        { name: 'activity', header: 'Activity' },
        { name: 'status', header: 'Status' }
    ]

    const gridStyle = { minHeight: 4085 }

    const rowStyle = ({ data }) => {
        return {
            width: '100vw'
        }
    }

    useEffect(() => {
        customerService.getCustomersLarge().then(data => {
            let dataWithIndex = data.map((item, index) => {
                item.dataIndex = index
                return item
            })
            setCustomers(dataWithIndex);
        })

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ReactDataGrid
            idProperty="id"
            columns={columns}
            dataSource={customers}
            style={gridStyle}
            rowStyle={rowStyle}
        />
    )
}
