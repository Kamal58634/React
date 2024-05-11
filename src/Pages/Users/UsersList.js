import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from'react-bootstrap/Form'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import useFetch from '../../Hooks/useFetch';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import './UsersList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function UsersList() {
  const [lastRow,setlastRow]=useState(null)
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [show,setShow]=useState(false)
  const [showDelete,setShowDelete]=useState(false)
  let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/users.json'
  const [rowsOld]=useFetch(url)
  const rows=Object.entries(rowsOld).map(user=>(
    {
      id:user[0],
      firstName:user[1].firstName,
      lastName:user[1].lastName,
      email:user[1].email,
    }
  )) 

  
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field:'action',
      headerName:'Action',
      width:120,
      renderCell:(cellValue)=>{
        return(

        <div className='action-btns'>
            <DeleteIcon  className='action-btns__style'  onClick={()=>deleteHandler(cellValue)}>  </DeleteIcon>
            <ModeEditOutlineIcon className='action-btns__style' onClick={()=>editHandler(cellValue)}></ModeEditOutlineIcon>
        </div>
        )
      }
    },
  ];
  
  

  const deleteHandler=(cellValue)=>{
    setShowDelete(true)
    setlastRow(cellValue)
    
  }
  const editHandler=(cellValue)=>{
    setShow(true)
    setlastRow(cellValue)
    setFirstName(cellValue.row.firstName)
    setLastName(cellValue.row.lastName)
    setEmail(cellValue.row.email)
    

  }
  const handleClose=()=>{
    setShow(false)
    setShowDelete(false)
  }
  
  return (
    <>
    
            <Box sx={{ height: 400, width: '80%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 3,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>

            <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
             value={firstName} 
             onChange={(event)=>(setFirstName(event.target.value))}
                type="text"
                placeholder="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName} 
                onChange={(event)=>(setFirstName(event.target.value))
   
               }
                placeholder="lastName"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
             value={email} 
             onChange={(event)=>(setEmail(event.target.value))

            }
                type="email"
                placeholder="email"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={async()=>{
            if(firstName && lastName && email){

              let newId=lastRow.id
              let newUser={
                firstName,
                lastName,
                email
              }
             await fetch(`https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/users/${newId}.json`,{
                method:'PUT',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newUser)
              })
              setShow(false)
            }

          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Modal for delete */}
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete {firstName} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={async()=>{
            let newId=lastRow.id
           await fetch(`https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/users/${newId}.json`,{
              method:'DELETE'
            })
            setShowDelete(false)
          }}>
            Yes,Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </>

    
  )
}
