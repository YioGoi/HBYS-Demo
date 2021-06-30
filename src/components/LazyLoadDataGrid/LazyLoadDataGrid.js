import React, { useState, useEffect, useRef } from 'react';

// Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './LazyLoadDataGrid.css'

// Prime Components
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { CustomerService } from '../AdvancedFilterDataGrid/CustomerService';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { PrimeIcons } from 'primereact/api';

// Html Elements
import advancedFilterIcon from '../../htmlElements/advancedFilterIcon'
import advancedFilterListBox from '../../htmlElements/advancedFilterListBox'
import advancedFilterOutsideClick from '../../htmlElements/advancedFilterOutsideClick'

export default function LazyLoadDataGrid() {
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectedRepresentative, setSelectedRepresentative] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [globalFilter, setGlobalFilter] = useState('');
    const [nameFilterMatchMode, setNameFilterMatchMode] = useState('contains');
    const [dateFilterMatchMode, setDateFilterMatchMode] = useState('equals');
    const [lazyParams, setLazyParams] = useState({
        first: 0,
        rows: 10,
        page: 0,
    });
    const dt = useRef(null);
    // Advanced Fiters ClassNames
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

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const customerService = new CustomerService();

    let loadLazyTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyParams]); // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        setLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        console.log(lazyParams)

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            customerService.getCustomers({lazyEvent: JSON.stringify(lazyParams)}).then(data => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, 100);
    }

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
            { name: 'NotEquals', code: 'notEquals' }
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

    const onPage = (event) => {
        let _lazyParams = { ...lazyParams, ...event };
        setLazyParams(_lazyParams);
    }

    const onSort = (event) => {
        let _lazyParams = { ...lazyParams, ...event };
        setLazyParams(_lazyParams);
    }

    const onFilter = (event) => {
        if (event.filters && event.filters.date && event.filters.date.value) {
            event.filters.date.value = formatDate(event.filters.date.value)
        }

        let _lazyParams = { ...lazyParams, ...event };
        _lazyParams['first'] = 0;
        setLazyParams(_lazyParams);
    }

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

    const onRepresentativesChange = (e) => {
        dt.current.filter(e.value, 'representative.name', 'in');
        setSelectedRepresentative(e.value);
    }

    const onDateChange = (e) => {
        dt.current.filter(e.value, 'date', dateFilterMatchMode);
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

    const countryBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title">Country</span>
                <i alt="flag" className='pi pi-flag' onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={30} />
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

    return (
        <div className="datatable-filter-demo">
            <div className="card">
                <DataTable
                    ref={dt}
                    value={customers}
                    lazy
                    paginator
                    first={lazyParams.first}
                    rows={10}
                    totalRecords={totalRecords}
                    onFilter={onFilter}
                    filters={lazyParams.filters}
                    onPage={onPage}
                    onSort={onSort}
                    sortField={lazyParams.sortField}
                    sortOrder={lazyParams.sortOrder}
                    loading={loading}
                    header={header}
                    className="p-datatable-customers"
                    globalFilter={globalFilter}
                    emptyMessage="No customers found."
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
