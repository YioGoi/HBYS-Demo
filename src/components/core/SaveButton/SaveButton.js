import React, { useState } from 'react'

// Styles
import './SaveButton.css'

// Components
import { ToggleButton } from 'primereact/togglebutton'

export default function SaveButton() {
    const [checked, setChecked] = useState(true)

    return (
        <>
            <ToggleButton
                onLabel="Kaydet"
                offLabel="Kaydedildi"
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                onIcon="pi pi-save"
                offIcon="pi pi-check-square"
            />
        </>
    )
}
