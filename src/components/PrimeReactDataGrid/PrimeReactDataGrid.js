import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Redux imports
import store from '../../redux/store'

// Redux actions
import {
    setCustomers,
    updateCustomersDataGrid
} from '../../redux'

// API service
import { CustomerService } from '../../components/AdvancedFilterDataGrid/CustomerService'

// Styles
import './PrimeReactDataGrid.css'

// Prime Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'

// Ant Design Components
import { Menu, Dropdown, Button, InputNumber } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'

export default function PrimeReactDataGrid() {
    // Global State
    const customers = useSelector(state => state.form.customers)

    // Local State
    const [loading, setLoading] = useState(false)
    const [inputNumberValue, setInputNumberValue] = useState(null)

    const companies = [
        "Benton, John B Jr",
        "Chanay, Jeffrey A Esq",
        "Chemel, James L Cpa",
        "Feltz Printing Service"
    ]

    const statuses = [
        "new",
        "proposal",
        "qualified",
        "unqualified",
        "renewal"
    ]

    const customerService = new CustomerService()

    const handleMenuClick = (e, value, props, field) => {
        let updatedResults = [...props.value]
        updatedResults[props.rowIndex][props.field] = value

        store.dispatch(updateCustomersDataGrid(updatedResults))
    }

    const menu = (props, type, field) => {
        return (
            <Menu>
                {
                    type.map((value, index) => {
                        return (
                            <Menu.Item
                                key={index}
                                icon={<UserOutlined />}
                                onClick={e => handleMenuClick(e, value, props, field)}
                            >
                                {value}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }

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
        let updatedProducts = [...props.value]
        updatedProducts[props.rowIndex][props.field] = value
        store.dispatch(setCustomers((updatedProducts)))
    }

    const nameEditor = (productKey, props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(productKey, props, e.target.value)} />
    }

    const companyEditor = (productKey, props, field) => {
        return (
            <Dropdown overlay={menu(props, companies, field)} trigger={['click']}>
                <Button trigger={['click']}>
                    {props.rowData[field]} <DownOutlined />
                </Button>
            </Dropdown>
        )
    }

    const handleInputNumberChange = value => {
        setInputNumberValue(value)
    }

    const handleInputNumberOnBlur = (e, props) => {
        let updatedProducts = [...props.value]
        updatedProducts[props.rowIndex][props.field] = e.target.value
        store.dispatch(setCustomers((updatedProducts)))
    }

    const activityEditor = (productKey, props, field) => {
        return (
            <InputNumber
                min={0}
                max={100}
                value={inputNumberValue || props.rowData[field]}
                onChange={handleInputNumberChange}
                onBlur={(e) => handleInputNumberOnBlur(e, props)}
            />
        )
    }

    const statusEditor = (productKey, props, field) => {
        return (
            <Dropdown overlay={menu(props, statuses)} trigger={['click']}>
                <Button trigger={['click']}>
                    {props.rowData[field]} <DownOutlined />
                </Button>
            </Dropdown>
        )
    }

    return (
        <DataTable reorderableColumns className="customers-grid" value={customers} loading={loading} editMode="cell" scrollable scrollHeight="200px">
            <Column field="dataIndex" header="Index" sortable filter></Column>
            <Column field="name" header="Name" editor={(props) => nameEditor('customers', props, 'name')} sortable filter></Column>
            <Column field="company" header="Company" editor={(props) => companyEditor('customers', props, 'company')} sortable filter></Column>
            <Column field="activity" header="Activity" editor={(props) => activityEditor('customers', props, 'activity')} sortable filter></Column>
            <Column field="status" header="Status" editor={(props) => statusEditor('customers', props, 'status')} sortable filter></Column>
        </DataTable>
    )
}
