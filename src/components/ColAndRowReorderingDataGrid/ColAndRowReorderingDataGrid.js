import React, { useState, useEffect, useRef } from 'react'

// Styles
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import './ColAndRowReorderingDataGrid.css'

// API
import ProductService from './ProductService'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function ColAndRowReorderingDataGrid() {
    const [products, setProducts] = useState([])
    const isMounted = useRef(false);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const productService = new ProductService();

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        console.log('Col reordered')
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
    }

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products} reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder}>
                    <Column rowReorder style={{ width: '3em' }} />
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    )
}
