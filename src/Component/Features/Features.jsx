import React,{useEffect, useState} from 'react'

import Feature from './Feature';
import './features.css'

export default function Features() {
   const[datas,setData]=useState([]) 
   useEffect(()=>{
    fetch('https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Featurs.json')
          .then(respond=>(respond.json()))
          .then(data=>setData(Object.entries(data)))
         
   },[])

  return (
    <>
  
        {datas.map(data=>(<Feature {...data} ></Feature>)
        )}
    </>
      
  )
}
