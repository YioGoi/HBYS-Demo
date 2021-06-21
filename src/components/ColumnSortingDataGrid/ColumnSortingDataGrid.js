import React, { useState, useEffect }from 'react'

// Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './ColumnSortingDataGrid.css'

// API
import ProductService from '../ColAndRowReorderingDataGrid/ProductService';

// Components
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ColumnSortingDataGrid() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div className="card">
            <DataTable value={products}>
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                <Column field="description" header="Description"></Column>
                <Column field="inventoryStatus" header="Inventory Status" sortable></Column>
            </DataTable>
        </div>
    )
}
