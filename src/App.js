import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import {v4 as uuidv4} from 'uuid'
import AddEmployee from './components/AddEmployee';

function App() {
  const showEmployee = true
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
        {
            id: 1,
            name: 'Calleb',
            role: 'Youtuber',
            img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
        },
        {
            id: 2,
            name: 'Sal',
            role: 'Manager',
            img: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg'
        },
        {
            id: 3,
            name: 'John',
            role: 'Director of Eng.',
            img: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg'
        },
        {
            id: 4,
            name: 'Melanie',
            role: 'Software Engineer',
            img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 5,
            name: 'Corey',
            role: 'The Devops Guy',
            img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
        },
        {
            id: 6,
            name: 'Jake',
            role: 'Senior',
            img: 'https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]
  )

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployee = employees.map((employee) => {
        if(id == employee.id) {
            return{...employee, name: newName, role: newRole}
        }
        return employee
    })
    setEmployees(updatedEmployee)
  }

  const newEmployee = (name, role, img) => {
    const addEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img
    }
    setEmployees([...employees, addEmployee])
  }

  return (
    <div className="App">
        {showEmployee ? (
            <>
                <input type="text" onChange={(e) => {
                    setRole(e.target.value)}} 
                />
                <div className='flex flex-wrap justify-center'>
                    {employees.map((employee) => {
                        return (
                            <Employee
                                key={employee.id}
                                id={employee.id}
                                name={employee.name} 
                                role={employee.role} 
                                image={employee.img}
                                updateEmployee = {updateEmployee}
                            />
                        )
                        
                    })}
                </div>
                <div className='flex justify-center align-center'>
                    <AddEmployee newEmployee={newEmployee}/>
                </div>
            </>
        ) : (
            <p>You cannot see the employee</p>
        )}
    </div>
  );
}

export default App;
