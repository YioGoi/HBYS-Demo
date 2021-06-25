import React, { useState, useEffect, useRef } from 'react';

// Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './AdvancedFilterDataGrid.css'
// Prime Utils
import { classNames } from 'primereact/utils'

// Prime Components
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { CustomerService } from './CustomerService';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { ContextMenu } from "primereact/contextmenu";
import { PrimeIcons } from 'primereact/api';

// Html Elements
import advancedFilterIcon from '../../htmlElements/advancedFilterIcon'
import advancedFilterListBox from '../../htmlElements/advancedFilterListBox'
import advancedFilterOutsideClick from '../../htmlElements/advancedFilterOutsideClick'

export default function AdvancedFilterDataGrid() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [customers, setCustomers] = useState(null);
    const [selectedRepresentative, setSelectedRepresentative] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [globalFilter, setGlobalFilter] = useState('');
    const [nameFilterMatchMode, setNameFilterMatchMode] = useState('contains');
    const [dateFilterMatchMode, setDateFilterMatchMode] = useState('equals');
    const dt = useRef(null);
    const cm = useRef(null);

    // // Advanced Fiters ClassNames
    const filterNameHeaderClassName = 'filter-header-name'
    const filterDateHeaderClassName = 'filter-header-date'

    const representatives = [
        { name: "Amy Elsner", image: PrimeIcons.ANDROID },
        { name: "Anna Fali", image: PrimeIcons.ARROW_UP },
        { name: "Asiya Javayant", image: PrimeIcons.BARS },
        { name: "Bernardo Dominic", image: PrimeIcons.BOOKMARK },
        { name: "Elwin Sharvill", image: PrimeIcons.CAMERA },
        { name: "Ioni Bowcher", image: PrimeIcons.CARET_UP },
        { name: "Ivan Magalhaes", image: PrimeIcons.CHEVRON_LEFT },
        { name: "Onyama Limba", image: PrimeIcons.CLOUD },
        { name: "Stephen Shaw", image: PrimeIcons.COMMENT },
        { name: "XuXue Feng", image: PrimeIcons.COPY }
    ];

    const menuModel = [
        {
            label: "View",
            icon: "pi pi-fw pi-search",
            //command: () => viewProduct(selectedProduct)
        },
        {
            label: "Delete",
            icon: "pi pi-fw pi-times",
            //command: () => deleteProduct(selectedProduct)
        },
        {
            label: "Copy",
            icon: "pi pi-copy pi-copy",
            command: () => copyToClipboard(selectedProduct)
        }
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => {
            setCustomers(data)
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Name Column Advanced Filter Icon
    useEffect(() => {
        // Advanced Fiters ClassNames
        const filterNameHeaderClassName = 'filter-header-name'
        const customNameFilterIconClassName = 'custom-name-filter-icon'
        advancedFilterIcon(filterNameHeaderClassName, customNameFilterIconClassName)
    }, [])

    // Name Column Advanced Filter ListBox
    useEffect(() => {
        // Advanced Fiters ClassNames
        const filterNameHeaderClassName = 'filter-header-name'
        const customNameFilterIconClassName = 'custom-name-filter-icon'
        const filterNameListboxWrapperClassName = 'af-name-listbox-list-wrapper'
        const filterNameListboxListClassName = 'af-name-listbox-list'
        const filterNameListboxItemClassName = 'af-name-listbox-item'

        const nameFilterOptions = [
            { name: 'StartsWith', code: 'startsWith' },
            { name: 'Contains', code: 'contains' },
            { name: 'EndsWith', code: 'endsWith' },
            { name: 'Equals', code: 'equals' },
            { name: 'NotEquals', code: 'notEquals' }
        ]

        advancedFilterListBox(
            filterNameHeaderClassName,
            filterNameListboxWrapperClassName,
            filterNameListboxListClassName,
            filterNameListboxItemClassName,
            customNameFilterIconClassName,
            nameFilterOptions,
            setNameFilterMatchMode,
            setDateFilterMatchMode
        )
    }, [])

    // Name Column OutsideClick
    useEffect(() => {
        // Advanced Fiters ClassNames
        const customNameFilterIconClassName = 'custom-name-filter-icon'
        const filterNameListboxWrapperClassName = 'af-name-listbox-list-wrapper'
        advancedFilterOutsideClick(customNameFilterIconClassName, filterNameListboxWrapperClassName)
    }, [])

    // date Column Advanced Filter Icon
    useEffect(() => {
        // Advanced Fiters ClassNames
        const filterDateHeaderClassName = 'filter-header-date'
        const customDateFilterIconClassName = 'custom-date-filter-icon'
        advancedFilterIcon(filterDateHeaderClassName, customDateFilterIconClassName)
    }, [])

    // date Column Advanced Filter ListBox
    useEffect(() => {
        // Advanced Fiters ClassNames
        const filterDateHeaderClassName = 'filter-header-date'
        const customDateFilterIconClassName = 'custom-date-filter-icon'
        const filterDateListboxWrapperClassName = 'af-date-listbox-list-wrapper'
        const filterDateListboxListClassName = 'af-date-listbox-list'
        const filterDateListboxItemClassName = 'af-date-listbox-item'

        const dateFilterOptions = [
            { name: 'Equals', code: 'equals' },
            { name: 'NotEquals', code: 'notEquals' },
            { name: 'LessThan', code: 'lt' },
            { name: 'LessThanEqual', code: 'lte' },
            { name: 'GreaterThan', code: 'gt' },
            { name: 'GreaterThanEqual', code: 'gte' }
        ]

        advancedFilterListBox(
            filterDateHeaderClassName,
            filterDateListboxWrapperClassName,
            filterDateListboxListClassName,
            filterDateListboxItemClassName,
            customDateFilterIconClassName,
            dateFilterOptions,
            setNameFilterMatchMode,
            setDateFilterMatchMode
        )
    }, [])

    // date Column OutsideClick
    useEffect(() => {
        // Advanced Fiters ClassNames
        const customDateFilterIconClassName = 'custom-date-filter-icon'
        const filterDateListboxWrapperClassName = 'af-date-listbox-list-wrapper'
        advancedFilterOutsideClick(customDateFilterIconClassName, filterDateListboxWrapperClassName)
    }, [])

    const filterDate = (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        switch (dateFilterMatchMode) {
            case 'equals':
                return value === formatDate(filter)
            case 'notEquals':
                return value !== formatDate(filter)
            case 'lt':
                return value < formatDate(filter)
            case 'lte':
                return value <= formatDate(filter)
            case 'gt':
                return value > formatDate(filter)
            case 'gte':
                return value >= formatDate(filter)
            default:
                return value === formatDate(filter)
        }
    }

    const formatDate = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    const copyToClipboard = (str) => {
        // Create new element
        var el = document.createElement("textarea");
        // Set value (string to be copied)
        el.value = str;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute("readonly", "");
        el.style = { position: "absolute", left: "-9999px" };
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand("copy");
        // Remove temporary element
        document.body.removeChild(el);
    };

    const onRepresentativesChange = (e) => {
        dt.current.filter(e.value, 'representative.name', 'in');
        setSelectedRepresentative(e.value);
    }

    const onDateChange = (e) => {
        dt.current.filter(e.value, 'date', 'custom');
        setSelectedDate(e.value);
    }

    const onStatusChange = (e) => {
        dt.current.filter(e.value, 'status', 'equals');
        setSelectedStatus(e.value);
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </React.Fragment>
        );
    }

    // Return class for adding rowClass
    const rowClass = (data) => {
        return {
            'row-accessories': data.country.name === 'Egypt'
        }
    }

    const countryBodyTemplate = (rowData) => {
        // Add ClassNames with classNames Utility
        const stockClassName = classNames({
            'outofstock': rowData.country.name === 'Algeria',
            'lowstock': rowData.country.name === 'Egypt',
            'instock': rowData.country.name === 'Slovenia'
        });

        // Change classNames with some condition
        let iconClassName = ''
        if (rowData.country.name === 'Algeria') {
            iconClassName = 'pi pi-angle-down'
        } else if (rowData.country.name === 'Egypt' || rowData.country.name === 'Slovenia') {
            iconClassName = 'pi pi-angle-up'
        }

        return (
            <div className={stockClassName}>
                <span className="p-column-title">Country</span>
                <i alt="flag" className={iconClassName} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </div>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Representative</span>
                <i alt={rowData.representative.name} className="pi pi-user" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    const activityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <i alt={option.name} className={option.image} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }

    const reset = () => {
        setSelectedRepresentative(null);
        setSelectedDate(null);
        setSelectedStatus(null);
        setGlobalFilter('');
        dt.current.reset();
    }

    const header = (
        <div className="table-header">
            <Button type="button" label="Clear" className="p-button-outlined" icon="pi pi-filter-slash" onClick={reset} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );

    const representativeFilter = <MultiSelect value={selectedRepresentative} options={representatives} itemTemplate={representativesItemTemplate} onChange={onRepresentativesChange} optionLabel="name" optionValue="name" placeholder="All" className="p-column-filter" />;
    const dateFilter = <Calendar value={selectedDate} onChange={onDateChange} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date" />;
    const statusFilter = <Dropdown value={selectedStatus} options={statuses} onChange={onStatusChange} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;

    console.log(dateFilterMatchMode)

    return (
        <div className="datatable-filter-demo">
            <ContextMenu
                model={menuModel}
                ref={cm}
                onHide={() => setSelectedProduct(null)}
            />
            <div className="card">
                <DataTable
                    ref={dt}
                    value={customers}
                    paginator
                    rows={10}
                    header={header}
                    className="p-datatable-customers"
                    globalFilter={globalFilter}
                    emptyMessage="No customers found."
                    contextMenuSelection={selectedProduct}
                    onContextMenuSelectionChange={(e) => setSelectedProduct(e.originalEvent.target.innerText)}
                    onContextMenu={(e) => cm.current.show(e.originalEvent)}
                    rowClassName={rowClass}
                >
                    <Column
                        field="name"
                        header="Name"
                        filterHeaderClassName={filterNameHeaderClassName}
                        body={nameBodyTemplate}
                        filter
                        filterPlaceholder="Search by name"
                        filterMatchMode={nameFilterMatchMode}
                        sortable
                    />
                    <Column field="country" filterField="country.name" header="Country" body={countryBodyTemplate} filter filterPlaceholder="Search by country" filterMatchMode="contains" />
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterElement={representativeFilter} />
                    <Column
                        field="date"
                        header="Date"
                        filterHeaderClassName={filterDateHeaderClassName}
                        body={dateBodyTemplate}
                        filter
                        filterElement={dateFilter}
                        filterFunction={filterDate}
                        sortable
                    />
                    <Column field="status" header="Status" body={statusBodyTemplate} filter filterElement={statusFilter} />
                    <Column field="activity" header="Activity" body={activityBodyTemplate} filter filterPlaceholder="Minimum" filterMatchMode="gte" />
                </DataTable>
            </div>
        </div>
    )
}
