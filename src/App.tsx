import './App.css';
// import OrdersTable from './Orders/OrdersTable/OrdersTable';
import TrendingDishes from './TrendingDishes/TrendingDishes';
import EmployeesOnShiftTable from './Employees/EmployeesOnShiftTable/EmployeesOnShiftTable';
import OrdersTable from './Orders/OrdersTable/OrdersTable';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './pages/Home';
import Employee from './Employees/Employee';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/employees/:id" element={ <Employee />}/>
      <Route path="/orders/:id" element={ <Employee />}/>
    </Routes>
  </>
  );
}

export default App;
