import React from 'react'

// Prime Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function DataGrid({
    dataSource,
    columns,
    gridClassName,
    scrollHeight,
    gridWidth,
    columnHeaderWidth
}) {

    return (
        <DataTable 
            reorderableColumns 
            className={gridClassName}
            value={dataSource} 
            scrollable 
            scrollHeight={scrollHeight}
            style={{ width: gridWidth }}
        >
            {
                columns.map(column => (
                    <Column 
                        field={column} 
                        header={column}
                        filter
                        headerStyle={{ width: columnHeaderWidth }}
                    ></Column>
                ))
            }
        </DataTable>
    )
}
