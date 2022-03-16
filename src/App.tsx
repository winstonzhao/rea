import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from './data/location_data.json';
import supplyGrowthSuburb from './data/supply_growth_suburb.json';

function processData() {
  for (let row of data)
  {
    const name = (row as any)["Name"]
    const suburbData = supplyGrowthSuburb.find(suburb => suburb.Suburb == name)
    if (!suburbData) continue
    (row as any)["5yr Supply Growth"] = suburbData['5yr Supply Growth'];
  }
  return data
}

let GLOBAL_ID = 0;

const columns = [
  {
    field: "Name", headerName: "Name", options: {
      filter: true,
    },
    width: 150
  },
  { field: "Median House Price (2020)", headerName: "Median House Price (2020)", width: 200 },
  { field: "Median House Price (2021)", headerName: "Median House Price (2021)", width: 200 },
  { field: "% Change", headerName: "% Change" },
  { field: "Gross Rental Yield", headerName: "Gross Rental Yield", width: 150 },
  { field: "Public Housing %", headerName: "Public Housing %", width: 150 },
  { field: "Time to CBD (Public Transport) [Town Hall St]", headerName: "Time to CBD (Public Transport)", width: 250 },
  { field: "5yr Supply Growth", headerName: "5yr Supply Growth", width: 150 },
  { field: "Nearest Train Station", headerName: "Nearest Train Station", width: 150 },
  {
    field: "Region", headerName: "Region", options: {
      filter: true
    },
    width: 150
  },
  { field: "Time to CBD (Driving) [Town Hall St]", headerName: "Time to CBD", width: 100 },
  { field: "Median Apartment Price (2020)", headerName: "Median Apartment Price (2020)", width: 250 },
  { field: "Median Apartment Rent (per week)", headerName: "Median Apartment Rent (per week)", width: 250 },
  { field: "Avg. Years Held", headerName: "Avg. Years Held" },
  { field: "Median House Rent (per week)", headerName: "Median House Rent (per week)" },
  { field: "Population (rounded)*", headerName: "Population" },
  { field: "Postcode", headerName: "Postcode" },
  { field: "Ethnic Breakdown 2016", headerName: "Ethnic Breakdown 2016" },
];

function DataTable() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={processData()}
        columns={columns}
        getRowId={() => ++GLOBAL_ID}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DataTable />
    </div>
  );
}

export default App;
