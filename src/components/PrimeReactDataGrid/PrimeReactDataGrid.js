import React, { useState, useEffect } from 'react'

// API service
import { CustomerService } from '../../components/AdvancedFilterDataGrid/CustomerService'

// Prime Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function PrimeReactDataGrid() {
    // Local State
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(false)

    const customerService = new CustomerService()

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then(data => {
            let dataWithIndex = data.map((item, index) => {
                item.dataIndex = index
                return item
            })
            setCustomers(dataWithIndex);
            setLoading(false);
        })

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={customers} loading={loading}>
                <Column field="dataIndex" header="Index"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="status" header="Status"></Column>
            </DataTable>
        </div>
    )
}
