import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch'

export default function Book() {
   const[data,setData]=useState([])
   const clickHandler=()=>{

       fetch("http://localhost:3001/api/books",{
           method:'GET',
           headers:{
               'Content-Type':'application/json'
           }
       })
              .then(response=>response.json())
              .then(data=>{
               setData(data)
               console.log(data)}) 
              .catch(err=>console.log(err))
 
   }
  return (
    <div>
        <button onClick={clickHandler}> click</button>
    </div>
  )
}
