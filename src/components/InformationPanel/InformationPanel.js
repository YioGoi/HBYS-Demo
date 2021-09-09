import React, { useState } from 'react'

// Redux imports
import store from '../../redux/store'

// Redux actions
import {
    setInputNameValue,
    setSelectedCompany,
    setActivity,
    setStatus,
    saveCustomerInformation
} from '../../redux'

// Style
import './InformationPanel.css'

// Ant Design Components
import { Input, Menu, Dropdown, Button, InputNumber, Radio } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

import DataTableSelection from '../DataTableSelection/DataTableSelection'

// API
import getAddress from '../../api/getAddress'
import getCoffee from '../../api/getCoffee'

export default function InformationPanel() {
    // local states
    const [nameValue, setNameValue] = useState(null)
    const [selectedCompanyName, setSelectedCompanyName] = useState("Select Company")
    const [inputNumberValue, setInputNumberValue] = useState(0)
    const [selectedStatus, setSelectedStatus] = useState(null)

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

    const handleMenuClick = (e, company) => {
        setSelectedCompanyName(company)
        store.dispatch(setSelectedCompany(company))
    }

    const menu = (
        <Menu>
            {
                companies.map((company, index) => {
                    return (
                        <Menu.Item key={index} icon={<UserOutlined />} onClick={e => handleMenuClick(e, company)} >
                            {company}
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )

    const handleInputOnChange = e => {
        setNameValue(e.target.value)
    }

    const handleInputOnBlur = e => {
        store.dispatch(setInputNameValue(e.target.value))
    }

    const handleInputNumberChange = value => {
        setInputNumberValue(value)
    }

    const handleInputNumberOnBlur = e => {
        store.dispatch(setActivity(e.target.value))
    }

    const handleRadioOnChange = e => {
        setSelectedStatus(e.target.value)
        store.dispatch(setStatus(e.target.value))
    }

    const handleInformations = () => {
        store.dispatch(saveCustomerInformation())
        getAddress()
        getCoffee()
    }

    return (
        <div className="information-container">
            <div className="box">
                <div className="information-name">
                    <Input
                        placeholder="Please enter your name"
                        prefix={<UserOutlined />}
                        onChange={handleInputOnChange}
                        onBlur={handleInputOnBlur}
                        value={nameValue}
                    />
                </div>
                <div className="information-company">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button trigger={['click']}>
                            {selectedCompanyName} <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="information-activity">
                    <InputNumber min={0} max={100} value={inputNumberValue} onChange={handleInputNumberChange} onBlur={handleInputNumberOnBlur} />
                </div>
                <div className="information-status">
                    <Radio.Group onChange={handleRadioOnChange} value={selectedStatus}>
                        {
                            statuses.map((status, index) => (
                                <Radio value={status} key={index}>{status}</Radio>
                            ))
                        }
                    </Radio.Group>
                </div>
                <div className="information-submit-button">
                    <Button className="save-button" onClick={handleInformations}>Save</Button>
                </div>
            </div>
            <div className="box">
                <DataTableSelection />
            </div>
        </div>
    )
}
