import React, { useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

// Styles
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'

// Components
import PrimeReactDataGrid from './components/PrimeReactDataGrid/PrimeReactDataGrid'
import ReactDataGridIO from './components/ReactDataGridIO/ReactDataGridIO'
import LazyLoadDataGrid from './components/LazyLoadDataGrid/LazyLoadDataGrid'
import AdvancedFilterDataGrid from './components/AdvancedFilterDataGrid/AdvancedFilterDataGrid'
import ColAndRowReorderingDataGrid from './components/ColAndRowReorderingDataGrid/ColAndRowReorderingDataGrid'
import ColumnHidingDataGrid from './components/ColumnHidingDataGrid/ColumnHidingDataGrid'
import MultiselectRowsDataGrid from './components/MultiselectRowsDataGrid/MultiselectRowsDataGrid'
import RowEditingDataGrid from './components/RowEditingDataGrid/RowEditingDataGrid'
import ColumnSortingDataGrid from './components/ColumnSortingDataGrid/ColumnSortingDataGrid'
import MasterDetailDataGrid from './components/MasterDetailDataGrid/MasterDetailDataGrid'
import ColumnGroupDataGrid from './components/ColumnGroupDataGrid/ColumnGroupDataGrid'
import SaveButton from './components/core/SaveButton/SaveButton'
import CustomButton from './components/core/CustomButton/CustomButton'

function App() {
  // Local State
  const [loading, setLoading] = useState(false)

  const handleOnClick = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className='tabview-demo'>
      <div className="card">
        <h5>Prime React Examples</h5>
        <TabView>
          <TabPanel header="Prime Datagrid Test">
            <PrimeReactDataGrid />
          </TabPanel>
          <TabPanel header="React Datagrid Test">
            <ReactDataGridIO />
          </TabPanel>
          <TabPanel header="Lazy Load">
            <LazyLoadDataGrid />
          </TabPanel>
          <TabPanel header="Advanced Filter">
            <AdvancedFilterDataGrid />
          </TabPanel>
          <TabPanel header="Row and Column Reorder">
            <ColAndRowReorderingDataGrid />
          </TabPanel>
          <TabPanel header="Column Hiding">
            <ColumnHidingDataGrid />
          </TabPanel>
          <TabPanel header="Multiselect Rows">
            <MultiselectRowsDataGrid />
          </TabPanel>
          <TabPanel header="Row Editing">
            <RowEditingDataGrid />
          </TabPanel>
          <TabPanel header="Column Sorting & Frozen Column">
            <ColumnSortingDataGrid />
          </TabPanel>
          <TabPanel header="Master Detail">
            <MasterDetailDataGrid />
          </TabPanel>
          <TabPanel header="Column Grouping">
            <ColumnGroupDataGrid />
          </TabPanel>
          <TabPanel header="Core Components Example">
            <SaveButton />
            <br />
            <br />
            <CustomButton
              label='Custom Button'
              icon='pi pi-check'
              iconPos='left'
              loading={loading}
              loadingOptions={{ position: 'left' }}
              loadingIcon='pi pi-spin pi-spinner'
              onClick={handleOnClick}
              className='p-button-warning'
              badge={2}
              badgeClassName='custom-button-badge'
              tooltip={'I am a tooltip'}
              tooltipOptions={{ position: 'bottom' }}
            />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}

export default App
