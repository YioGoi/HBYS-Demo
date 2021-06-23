import React from 'react'

// Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './CustomButton.css'

// Prime Components
import { Button } from 'primereact/button'

export default function CustomButton({
    label,
    icon,
    iconPos,
    loading,
    loadingOptions,
    loadingIcon,
    onClick,
    className,
    badge,
    badgeClassName,
    tooltip,
    tooltipOptions
}) {
    return (
        <>
            <Button 
                label={label} 
                icon={icon}
                iconPos={iconPos}
                loading={loading}
                loadingOptions={loadingOptions}
                loadingIcon={loadingIcon}
                onClick={onClick}
                className={className}
                badge={badge}
                badgeClassName={badgeClassName}
                tooltip={tooltip}
                tooltipOptions={tooltipOptions}
            />
        </>
    )
}
