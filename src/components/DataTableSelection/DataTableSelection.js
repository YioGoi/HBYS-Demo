import React, { useState, useRef, useEffect } from 'react'

// Redux imports
import store from '../../redux/store'

import { useSelector } from 'react-redux'

// Redux actions
import {
    setSelectedDataTableOption
} from '../../redux'

// Ant Design Components
import {
    Menu,
    Dropdown,
    Button,
    DatePicker,
    Input,
    Switch,
    Slider,
    Avatar,
    Tooltip
} from 'antd'
import { UserOutlined, DownOutlined, AntDesignOutlined } from '@ant-design/icons'

// APIs
import getRandomQuotes from '../../api/getRandomQuotes'

// Style
import './DataTableSelection.css'

export default function DataTableSelection() {

    // Global State
    const getRandomQuoteSuccess = useSelector(state => state.form.getRandomQuoteSuccess)

    // Local State
    const [selectedOption, setSelectedOption] = useState("Select an option")
    const inputRef = useRef(null)
    const [input, setInput] = useState(false)
    const [inputValue, setInputValue] = useState(1)
    const [textAreaValue, setTextAreaValue] = useState(null)

    const sharedProps = {
        style: {
            width: '100%',
            height: '125px'
        },
        defaultValue: 'Hello world!',
        ref: inputRef,
    }

    const dataTableOptions = [
        "Address",
        "Commerce",
        "Users"
    ]

    useEffect(() => {
        if (getRandomQuoteSuccess) {
            setTextAreaValue(getRandomQuoteSuccess.quotes[0].text + '\n' + getRandomQuoteSuccess.quotes[0].author)
        }
    }, [getRandomQuoteSuccess])

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

    const datePickerOnChange = (date, dateString) => {
        console.log(date, dateString)
    }

    const handleTextAreaInput = (e) => {
        setTextAreaValue(e.target.value)
    }

    const handleGetRandomQuotes = () => {
        setTextAreaValue('')
        getRandomQuotes()
    }

    return (
        <div className="selection-drop-down">
            <div className="select-date">
                <span>Select date: </span>
                <DatePicker onChange={datePickerOnChange} />
            </div>
            <div className="switch-button">
                <div className="input-text-area-switch">
                    <Switch
                        checked={input}
                        checkedChildren="TextArea"
                        unCheckedChildren="Input"
                        onChange={() => {
                            setInput(!input)
                            if (!input) {
                                handleGetRandomQuotes()
                            }
                        }}
                    />
                </div>
                <div className="input-or-text-area">
                    {!input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} onChange={handleTextAreaInput} value={textAreaValue} />}
                </div>
            </div>
            <div className="input-number-slider">
                <Slider
                    min={1}
                    max={100}
                    onChange={(value) => {
                        if (isNaN(value)) {
                            return;
                        }
                        setInputValue(value)
                    }}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </div>
            <div className="avatar-group">
                <Avatar.Group
                    maxCount={2}
                    size="large"
                    maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }}
                >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                    >
                        K
                    </Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Avatar
                        style={{
                            backgroundColor: '#1890ff',
                        }}
                        icon={<AntDesignOutlined />}
                    />
                </Avatar.Group>
            </div>
            <div className="select-data-source">
                <span className="selection-title">Select your data source: </span>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button trigger={['click']}>
                        {selectedOption} <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
        </div >
    )
}
