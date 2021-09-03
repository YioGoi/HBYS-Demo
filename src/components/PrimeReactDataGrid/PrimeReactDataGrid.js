import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Redux imports
import store from '../../redux/store'

// Redux actions
import {
    setCustomers
} from '../../redux'

// API service
import { CustomerService } from '../../components/AdvancedFilterDataGrid/CustomerService'

// Styles
import './PrimeReactDataGrid.css'

// Prime Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'

export default function PrimeReactDataGrid() {
    // Global State
    const customers = useSelector(state => state.form.customers)

    // Local State
    const [loading, setLoading] = useState(false)

    const customerService = new CustomerService()

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then(data => {
            let dataWithIndex = data.map((item, index) => {
                item.dataIndex = index
                return item
            })
            store.dispatch(setCustomers(dataWithIndex))
            setLoading(false);
        })

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (productKey, props, value) => {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        store.dispatch(setCustomers((updatedProducts)))
    }

    const inputTextEditor = (productKey, props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(productKey, props, e.target.value)} />;
    }

    const fieldEditor = (productKey, props, field) => {
        return inputTextEditor(productKey, props, field);
    }

    return (
        <DataTable className="customers-grid" value={customers} loading={loading} editMode="cell" scrollable scrollHeight="200px">
            <Column field="dataIndex" header="Index"></Column>
            <Column field="name" header="Name" editor={(props) => fieldEditor('customers', props, 'name')}></Column>
            <Column field="company" header="Company" editor={(props) => fieldEditor('customers', props, 'company')}></Column>
            <Column field="activity" header="Activity" editor={(props) => fieldEditor('customers', props, 'activity')}></Column>
            <Column field="status" header="Status" editor={(props) => fieldEditor('customers', props, 'status')}></Column>
        </DataTable>
    )
}
