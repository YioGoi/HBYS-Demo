import React, { useState, useEffect } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

// Styles
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import './App.css'

// API
import getAddress from './api/getAddress'
import getCoffee from './api/getCoffee'

// Components
import PrimeReactDataGrid from './components/PrimeReactDataGrid/PrimeReactDataGrid'
import AddressDataGrid from './components/AddressDataGrid/AddressDataGrid'
import CoffeeDataGrid from './components/CoffeeDataGrid/CoffeeDataGrid'
import SelectedGrid from './components/SelectedGrid/SelectedGrid'
import InformationPanel from './components/InformationPanel/InformationPanel'
import PrimeEditor from './components/PrimeEditor/PrimeEditor'
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
import AntModal from './components/AntModal/AntModal'

function App() {
  // Local State
  const [loading, setLoading] = useState(false)

  const countArray = [1,2,3,4,5,6,7,8,9]

  useEffect(() => {
    getAddress()
    getCoffee()
  }, [])

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
            <InformationPanel />
            <div className="grid-container">
              <div className="data-table">
                <PrimeReactDataGrid />
              </div>
              <div className="data-table select-data-table">
                <SelectedGrid />
              </div>
            </div>
            <PrimeEditor />
            {
              countArray.map(count => (
                <div className="alt-grid-container">
                  <div className="data-table">
                    <AddressDataGrid />
                  </div>
                  <div className="data-table select-data-table">
                    <CoffeeDataGrid />
                  </div>
                </div>
              ))
            }
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
      <AntModal />
    </div>
  );
}

export default App
