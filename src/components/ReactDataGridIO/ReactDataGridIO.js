import React, { useEffect, useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'

import '@inovua/reactdatagrid-community/index.css'

// API service
import { CustomerService } from '../AdvancedFilterDataGrid/CustomerService'

export default function ReactDataGridIO() {
    // Styles
    const gridStyle = { minHeight: 4085 }
    const rowStyle = ({ data }) => {
        return {
            width: '100vw'
        }
    }

    // Local State
    const [gridRef, setGridRef] = useState(null)
    const [customers, setCustomers] = useState([])
    const customerService = new CustomerService()

    const cellDOMProps = (cellProps) => {
        return {
            onClick: () => {
                gridRef.current.startEdit({ columnId: cellProps.id, rowIndex: cellProps.rowIndex })
            }
        }
    }

    const columns = [
        { name: 'dataIndex', header: 'Index', cellDOMProps },
        { name: 'name', header: 'Name', cellDOMProps },
        { name: 'company', header: 'Company', cellDOMProps },
        { name: 'activity', header: 'Activity', cellDOMProps },
        { name: 'status', header: 'Status', cellDOMProps }
    ]

    const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
        const data = [...customers];
        data[rowIndex][columnId] = value;

        setCustomers(data);
    }, [customers])

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
            onReady={setGridRef}
            idProperty="id"
            columns={columns}
            dataSource={customers}
            onEditComplete={onEditComplete}
            editable={true}
            style={gridStyle}
            rowStyle={rowStyle}
        />
    )
}
