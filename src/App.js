import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

// Styles
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'

// Components
import AdvancedFilterDataGrid from './components/AdvancedFilterDataGrid/AdvancedFilterDataGrid'
import ColAndRowReorderingDataGrid from './components/ColAndRowReorderingDataGrid/ColAndRowReorderingDataGrid'
import ColumnHidingDataGrid from './components/ColumnHidingDataGrid/ColumnHidingDataGrid'
import MultiselectRowsDataGrid from './components/MultiselectRowsDataGrid/MultiselectRowsDataGrid'
import RowEditingDataGrid from './components/RowEditingDataGrid/RowEditingDataGrid'
import ColumnSortingDataGrid from './components/ColumnSortingDataGrid/ColumnSortingDataGrid'

function App() {

  return (
    <div className='tabview-demo'>
      <div className="card">
        <h5>Prime React Examples</h5>
        <TabView>
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
        </TabView>
      </div>
    </div>
  );
}

export default App
