import React, { useState } from 'react'
import './EmployeesOnShiftTable.css'
import List from '@mui/material/List';
import { Divider, ListItemButton } from '@mui/material'
import Employee from '../EmployeeModel'
import TestEmployees from '../TestEmployees';
import { Link } from 'react-router-dom';

export default function EmployeesOnShiftTable() {
    const [Employees, setEmployees] = useState<Employee[]>(TestEmployees)
    
    return (
        <div className='EmployeesOnShiftTable'>
            <h2>Employees on Shift</h2>
            <List className='List'>
                {Employees.map((Employee) => {
                    return (
                        
                        <div key={Employee.id}>
                            <Link to={`employees/${Employee.id}`}>
                            <ListItemButton className='ListItemButton'>
                                {Employee.name}
                            </ListItemButton>
                            <Divider></Divider>
                            </Link>
                        </div>
                        
                    )
                })}
            </List>
        </div>
    )
}
