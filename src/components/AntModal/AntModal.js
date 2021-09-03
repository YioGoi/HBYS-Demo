import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import store from '../../redux/store'

import { setIsAntModalVisible } from '../../redux'

import { Modal } from 'antd'

export default function AntModal() {
    // Global state
    const isAntModalVisible = useSelector(state => state.form.isAntModalVisible)
    const savedText = useSelector(state => state.form.savedText)

    const handleCancel = () => {
        store.dispatch(setIsAntModalVisible(false))
    }

    return (
        <div>
            <Modal title="Saved notes" visible={isAntModalVisible} footer={null} onCancel={handleCancel}>
                <p>{savedText}</p>
                <p>
                    Burada çeşitli componentları kullanarak farklı dummy dataları göstermeyi amaçladık.
                    Componentlara gerekli verilerin girilmesinin ardından, performans sekmesi altında performans test sonuçları gözlemlenebilir.
                </p>
            </Modal>
        </div>
    )
}
