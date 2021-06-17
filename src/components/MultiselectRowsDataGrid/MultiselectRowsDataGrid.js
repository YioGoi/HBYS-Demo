import React, { useEffect, useState } from 'react'

// Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './MultiselectRowsDataGrid.css'

// API
import ProductService from '../ColAndRowReorderingDataGrid/ProductService';

// Components
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function MultiselectRowsDataGrid() {
    const [products, setProducts] = useState([]);
    const [selectedProducts7, setSelectedProducts7] = useState(null);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <h5>Checkbox</h5>

            <h6>Row and Checkbox Selection</h6>
            <DataTable value={products} selection={selectedProducts7} onSelectionChange={e => setSelectedProducts7(e.value)} dataKey="id">
                <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    )
}
