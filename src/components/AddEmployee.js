import {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

const AddEmployee = (props) => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [role, setRole] = useState()
    const [img, setImg] = useState()

    const handleShow = () => {
        setShow(!show)
    }

    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    
  return (
    <>
    <button 
    onClick={handleShow}
    className="text-purple-600 hover:text-white hover:bg-purple-600 font-bold py-2 px-4 rounded border-2 border-purple-600">
        + Add Employee
    </button>

    <Modal
            show={show}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Add New Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault()
                        setName('')
                        setRole('')
                        setImg('')
                        props.newEmployee(name, role, img)
                    }}
                    id='editModal' 
                    className="w-full max-w-sm"
                >
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label 
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            for="name"
                        >
                            Full Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input 
                            onChange={handleName}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="name"
                            placeholder='John Smith'
                            type="text"
                            value={name}
                        />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label 
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            for="role"
                        >
                            Role
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input 
                            onChange={(e) => {
                                e.preventDefault()
                                setRole(e.target.value)
                            }}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="role"
                            placeholder='Bank Teller'
                            type="text"
                            value={role}
                        />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label 
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            for="img"
                        >
                            Image URL
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input 
                            onChange={(e) => {
                                e.preventDefault()
                                setImg(e.target.value)
                            }}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="img"
                            placeholder='https://google.com'
                            type="text"
                            value={img}
                        />
                        </div>
                    </div>
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <button 
                className='bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleShow}
            >
                Close
            </button>
            <button 
                className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleShow}
                form='editModal'
            >
                Add
            </button>
            </Modal.Footer>
        </Modal>

</>
  )
}

export default AddEmployee