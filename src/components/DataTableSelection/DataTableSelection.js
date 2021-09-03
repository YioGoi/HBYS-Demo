import React, { useState } from 'react'

// Redux imports
import store from '../../redux/store'

// Redux actions
import {
    setSelectedDataTableOption
} from '../../redux'

// Ant Design Components
import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

// Style
import './DataTableSelection.css'

export default function DataTableSelection() {
    // Local State
    const [selectedOption, setSelectedOption] = useState("Select an option")

    const dataTableOptions = [
        "Address",
        "Commerce",
        "Users"
    ]

    const handleMenuClick = (e, option) => {
        setSelectedOption(option)
        store.dispatch(setSelectedDataTableOption(option))
    }

    const menu = (
        <Menu>
            {
                dataTableOptions.map((option, index) => {
                    return (
                        <Menu.Item key={index} icon={<UserOutlined />} onClick={e => handleMenuClick(e, option)} >
                            {option}
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )

    return (
        <div className="selection-drop-down">
            <span className="selection-title">Select your data source:</span>
            <Dropdown overlay={menu} trigger={['click']}>
                <Button trigger={['click']}>
                    {selectedOption} <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    )
}
