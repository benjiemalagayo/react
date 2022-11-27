import {Modal, Button} from 'react-bootstrap'
import { useState } from 'react'

const EditEmployee = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [role, setRole] = useState()

    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    const handleRole = (e) => {
        e.preventDefault()
        setRole(e.target.value)
    }

    const handleShow = () => setShow(!show)

  return (
    <>
        <button 
            onClick={handleShow} 
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
            Update
        </button>

        <Modal
            show={show}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id='editForm' className="w-full max-w-sm">
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
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" 
                            type="text" 
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
                            onChange={handleRole}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="role" 
                            type="text" 
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
                form='editModal'
            >
                Update
            </button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default EditEmployee