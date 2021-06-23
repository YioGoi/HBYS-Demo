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
            <DataTable value={products} scrollable style={{width: '1300px'}} frozenWidth="500px">
                <Column field="code" header="Code" sortable style={{width:'250px', height: '25px'}}></Column>
                <Column field="name" header="Name" sortable style={{width:'250px', height: '25px'}}></Column>
                <Column field="category" header="Category" frozen style={{width:'250px', height: '25px'}}></Column>
                <Column field="quantity" className='quantity-column' header="Quantity" frozen sortable style={{width:'250px', height: '25px'}}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{width:'250px', height: '25px'}}></Column>
                <Column field="description" header="Description" style={{width:'250px', height: '25px'}}></Column>
                <Column field="inventoryStatus" header="Inventory Status" sortable style={{width:'250px', height: '25px'}}></Column>
            </DataTable>
        </div>
    )
}
