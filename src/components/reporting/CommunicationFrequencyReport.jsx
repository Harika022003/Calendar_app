// CommunicationFrequencyReport.jsx
import React, { useState, useEffect } from 'react'; // Because React is essential
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from '@mui/material'; // Importing Material UI for components
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Recharts for charts
import { saveAs } from 'file-saver'; // File-saving utility
import { exportToCSV, exportToPDF } from './utils/exportUtils'; // Export utilities
import jsPDF from 'jspdf'; // Another PDF library

const mockData = [
  { company: 'WIPRO', method: 'Email', count: 30 },
  { company: 'WIPRO', method: 'LinkedIn Post', count: 80 },
  { company: 'WIPRO', method: 'Phone Call', count: 50 },
  { company: 'ENTNT', method: 'Email', count: 20 },
  { company: 'ENTNT', method: 'LinkedIn Post', count: 60 },
  { company: 'ENTNT', method: 'Phone Call', count: 15 },
 
];

const CommunicationFrequencyReport = () => {
  const [company, setCompany] = useState(''); // Company filter state
  const [method, setMethod] = useState(''); // Method filter state
  const [dateRange, setDateRange] = useState({ from: '', to: '' }); // Date range state
  const [filteredData, setFilteredData] = useState(mockData); // Filtered data state

  const companies = [...new Set(mockData.map((item) => item.company))]; // Unique companies
  const methods = [...new Set(mockData.map((item) => item.method))]; // Unique methods

  // const handleFilter = () => {
  //   let data = [...mockData];
  //   if (company) data = data.filter((item) => item.company === company);
  //   if (method) data = data.filter((item) => item.method === method);
  //   setFilteredData(data); // Update filtered data
  // };
  const handleFilter = () => {
    let data = [...mockData];
    if (company) data = data.filter((item) => item.company === company);
    if (method) data = data.filter((item) => item.method === method);
    // Debug: Check the filtered data
    console.log("Filtered Data:", data);
    setFilteredData(data); // Update filtered data
  };

  const handleExportCSV = () => {
    exportToCSV(filteredData, 'communication_frequency_report.csv'); // Export CSV
  };

  const handleExportPDF = () => {
    exportToPDF('Communication Frequency Report', filteredData); // Export PDF
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2}}> {/* Filter controls */}
      {/* <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}> Filter controls */}
      <div style={{ minWidth: '120px' ,height:'100px'}}> {/* Company dropdown */}
        <label style={{ color: '#764ABC' ,fontSize:'20px'}}>Company</label>
        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ width: '100%' }}
        >
          <option value="">
            <em>All</em>
          </option>
          {companies.map((comp) => (
            <option key={comp} value={comp}>
              {comp}
            </option>
          ))}
        </select>
      </div>
      <div style={{ minWidth: '150px' }}> {/* Method dropdown */}
        <label style={{ color: '#764ABC' ,fontSize:'20px'}}>Communication Method</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={{ width: '100%' }}
        >
          <option value="">
            <em>All</em>
          </option>
          {methods.map((meth) => (
            <option key={meth} value={meth}>
              {meth}
            </option>
          ))}
        </select>
      </div>
      <div style={{ minWidth: '150px' }}> {/* From Date */}
        <label style={{ color: '#764ABC' ,fontSize:'20px'}}>From</label><br/>
        <input
          type="date"
          value={dateRange.from}
          onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
        />
      </div>
      
      <div style={{ minWidth: '150px' }}> {/* To Date */}
        <label style={{ color: '#764ABC' ,fontSize:'20px'}}>To</label><br/>
        <input
          type="date"
          value={dateRange.to}
          onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
        />
      </div>
      <button
        style={{ backgroundColor: '#764ABC', color: '#FFFFFF', padding: '8px 8px', border: 'none', cursor: 'pointer',width:'60px',height:'55px' }}
        onClick={handleFilter}
      >
        Filter
      </button>
     

      </Box>
     
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={filteredData}>
          <XAxis dataKey="method" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#764ABC" name="Communication Count" />
        </BarChart>
      </ResponsiveContainer>
      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}> {/* Export buttons */}
        <Button variant="outlined" sx={{ backgroundColor: '#764ABC', color: '#FFFFFF' }} onClick={handleExportCSV}>
          Export CSV
        </Button>
        <Button variant="outlined" sx={{ backgroundColor: '#764ABC', color: '#FFFFFF' }} onClick={handleExportPDF}>
          Export PDF
        </Button>
      </Box>
    </Box>
  );
};

export default CommunicationFrequencyReport; // Export the component
