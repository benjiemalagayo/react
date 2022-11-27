import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import {v4 as uuidv4} from 'uuid'

function App() {
  const showEmployee = true
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
        {
            name: 'Calleb',
            role: 'Youtuber',
            img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
        },
        {
            name: 'Sal',
            role: 'Manager',
            img: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg'
        },
        {
            name: 'John',
            role: 'Director of Eng.',
            img: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg'
        },
        {
            name: 'Melanie',
            role: 'Software Engineer',
            img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Corey',
            role: 'The Devops Guy',
            img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
        },
        {
            name: 'Jake',
            role: 'Senior',
            img: 'https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]
  )

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
                                key={uuidv4()}
                                name={employee.name} 
                                role={employee.role} 
                                image={employee.img}
                            />
                        )
                        
                    })}
                </div>
            </>
        ) : (
            <p>You cannot see the employee</p>
        )}
    </div>
  );
}

export default App;
