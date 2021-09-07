import React, { useState, useRef } from 'react'

// Redux
import store from '../../redux/store'

import {
    setSavedText,
    setIsAntModalVisible
} from '../../redux'

// Prime Components
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

// Ant Components
import { Popconfirm } from 'antd'

// Style
import './PrimeEditor.css'

export default function PrimeEditor() {
    const [text, setText] = useState('Enter your text here!')
    const toast = useRef(null)

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Text saved', life: 3000 })
        store.dispatch(setSavedText(text))
        store.dispatch(setIsAntModalVisible(true))
    }

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'Text is not saved', life: 3000 })
    }

    return (
        <div className="editor-container">
            <div className="quill-editor">
                <Editor style={{ height: '100px' }} value={text} onTextChange={(e) => setText(e.textValue)} />
            </div>
            <div className="confirm-button-for-editor">
                <Toast ref={toast} />
                <Popconfirm
                    title="Are you sure you want to save this text?"
                    onConfirm={accept}
                    onCancel={reject}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button icon="pi pi-check" label="Confirm" className="p-mr-2"></Button>
                </Popconfirm>
            </div>
        </div>
    )
}
