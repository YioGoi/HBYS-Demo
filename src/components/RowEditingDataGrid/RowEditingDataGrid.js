import React, { useState, useEffect } from 'react'

// Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './RowEditingDataGrid.css'

// API
import ProductService from '../ColAndRowReorderingDataGrid/ProductService';

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function RowEditingDataGrid() {
    const [products3, setProducts3] = useState(null)
    const [editingRows, setEditingRows] = useState({})
    const [selectedProducts4, setSelectedProducts4] = useState(null)

    let originalRows = {};

    const dataTableFuncMap = {
        'products3': setProducts3
    };

    const productService = new ProductService();

    useEffect(() => {
        fetchProductData('products3')
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchProductData = (productStateKey) => {
        productService.getProductsSmall().then(data => dataTableFuncMap[`${productStateKey}`](data));
    }

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];

    const onRowEditInit = (event) => {
        originalRows[event.index] = { ...products3[event.index] };
    }

    const onRowEditCancel = (event) => {
        let products = [...products3];
        products[event.index] = originalRows[event.index];
        delete originalRows[event.index];

        setProducts3(products);
    }

    const onEditorValueChange = (productKey, props, value) => {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        dataTableFuncMap[`${productKey}`](updatedProducts);
    }

    const inputTextEditor = (productKey, props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(productKey, props, e.target.value)} />;
    }

    const codeEditor = (productKey, props) => {
        return inputTextEditor(productKey, props, 'code');
    }

    const nameEditor = (productKey, props) => {
        return inputTextEditor(productKey, props, 'name');
    }

    const getStatusLabel = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData && rowData.inventoryStatus);
    }

    const statusEditor = (productKey, props) => {
        return (
            <Dropdown value={props.rowData['inventoryStatus']} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => onEditorValueChange(productKey, props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowData && rowData.price);
    }

    const priceEditor = (productKey, props) => {
        return <InputNumber value={props.rowData['price']} onValueChange={(e) => onEditorValueChange(productKey, props, e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const setActiveRowIndex = (selectedProducts) => {
        let products = [...products3]
        let _editingRows = null

        selectedProducts.forEach(product => {
            let selectedProductIndex = products.findIndex(pd => pd.id === product.id)
            originalRows[selectedProductIndex] = { ...products[selectedProductIndex] }
            _editingRows = { ..._editingRows, ...{ [`${products[selectedProductIndex].id}`]: true } }
        })

        setEditingRows(_editingRows)
    }

    const onRowEditChange = (event) => {
        setEditingRows(event.data);
    }

    return (
        <div className="card">
            <Button onClick={() => setActiveRowIndex(selectedProducts4)} className="p-button-text" label="Edit selected rows" />
            <DataTable
                value={products3}
                editingRows={editingRows}
                editMode="row"
                dataKey="id"
                onRowEditInit={onRowEditInit}
                onRowEditCancel={onRowEditCancel}
                onRowEditChange={onRowEditChange}
                selectionMode="multiple"
                //cellSelection
                selection={selectedProducts4}
                onSelectionChange={e => setSelectedProducts4(e.value)}
            >
                <Column field="code" header="Code" editor={(props) => codeEditor('products3', props)}></Column>
                <Column field="name" header="Name" editor={(props) => nameEditor('products3', props)}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(props) => statusEditor('products3', props)}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(props) => priceEditor('products3', props)}></Column>
                <Column rowEditor headerStyle={{ width: '7rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    )
}
