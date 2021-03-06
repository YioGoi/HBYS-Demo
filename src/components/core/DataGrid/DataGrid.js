import React from 'react'

// Prime Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

function DataGrid({
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
                columns.map((column, index) => (
                    <Column 
                        key={index}
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

function areEqual (prevProps, nextProps) {
     
}

export default React.memo(DataGrid, areEqual)
