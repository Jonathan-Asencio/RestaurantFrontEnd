import { Backdrop, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmployeesOnShiftTable from '../Employees/EmployeesOnShiftTable/EmployeesOnShiftTable'
import OrdersTable from '../Orders/OrdersTable/OrdersTable'
import TrendingDishes from '../TrendingDishes/TrendingDishes'

function Home() {
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
    
      setTimeout(() => {
        setisLoading(false)
      }, 4000)
  
    }, [])
  return (
    <div className="App">
      <h1 className='pageHeader'>Resurant Dashbord</h1>
      {isLoading ? 
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop> 
        :
        <div className='content'>
          <div className='upper'>
            <OrdersTable></OrdersTable>
            <EmployeesOnShiftTable></EmployeesOnShiftTable>
          </div>
            <TrendingDishes></TrendingDishes>
        </div>
        }
    </div>
  )
}

export default Home