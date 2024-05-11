import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from'react-bootstrap/Form'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import useFetch from '../../Hooks/useFetch';
import './Products.css'

import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import {Link} from 'react-router-dom'


export default function Products() {
  const [lastRow,setlastRow]=useState(null)
  
  const [show,setShow]=useState(false)
  const [showDelete,setShowDelete]=useState(false)

  let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Products.json'
  const [rowsOld]=useFetch(url)
  const rows=Object.entries(rowsOld).map(product=>(
    {
      id:product[0],
      title:product[1].title,
      quantity:product[1].quantity,
      price:product[1].price,
      image:product[1].image
    }
  )) 


  // console.log(rows);
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product Name',
      width: 150,
      editable: true,
      renderCell:(params)=>{
        return(
          <>
          <img src={params.row.image} className='image-icon'/>
          {params.row.title}
          </>
        )
      }
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field:'action',
      headerName:'Action',
      width:120,
      renderCell:(params)=>{
        return(
          
          <div className='action-btns'>
            {console.log(params.row)}
              <DeleteIcon  className='action-btns__style'  onClick={()=>deleteHandler(params)}>  </DeleteIcon>
              <Link to={`/products/${params.id}`} >
              
                  <ModeEditOutlineIcon className='action-btns__style' onClick={()=>editHandler(params)}></ModeEditOutlineIcon>
              </Link>
          </div>
          )

      }
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];
  const deleteHandler=(cellValue)=>{
    setShowDelete(true)
    setlastRow(cellValue)
    
  }
  const editHandler=(cellValue)=>{
    // setShow(true)
    // setlastRow(cellValue)
    // setFirstName(cellValue.row.firstName)
    // setLastName(cellValue.row.lastName)
    // setEmail(cellValue.row.email)
    

  }
  const handleClose=()=>{
    setShow(false)
    setShowDelete(false)
  }
 
  
  return (
    <>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    {/* Modal for delete */}
    <Modal show={showDelete} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Delete</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure to delete  ?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={async()=>{
        let newId=lastRow.id
       await fetch(`https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Products/${newId}.json`,{
          method:'DELETE'
        })
        setShowDelete(false)
      }}>
        Yes,Delete
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}
