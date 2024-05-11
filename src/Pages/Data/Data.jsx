import React,{useState} from 'react'

export default function Data() {
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[price,setPrice]=useState(0)
    const[quantity,setQuantity]=useState(0)
    // const[statusBtn,setStatusBtn]=useState('')

    const submitHandler=(event)=>{
        event.preventDefault()

        let newFeature={
            title,
            price,
            quantity,
            image,
            
        }
        // let newFeature={
        //     title,
        //     post
            
        // }
       
        // let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Featurs.json'
        // let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/NewUsers.json'
        let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Products.json'
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newFeature)
        })
    }
  return (
    // <div>
    //     <form action="" className="form" onSubmit={submitHandler}>
    //         <input type="text" name="" id="" placeholder='title' value={title}  onChange={(event)=>{
    //             setTitle(event.target.value)
    //         }}/>
    //         <input type="number" name="" id="" placeholder='price' value={price}  onChange={(event)=>{
    //             setPrice(event.target.value)
    //         }}/>
    //         <input type="number" name="" id="" placeholder='change' value={change}  onChange={(event)=>{
    //             setChange(event.target.value)
    //         }}/>
    //         <button>Submit</button>
    //     </form>
    // </div>
    <div>
        <form action="" className="form" onSubmit={submitHandler}>
            <input type="text" name="" id="" placeholder='title' value={title}  onChange={(event)=>{
                setTitle(event.target.value)
            }}/>
            <input type="number" name="" id="" placeholder='quantity' value={quantity}  onChange={(event)=>{
                setQuantity(event.target.value)
            }}/>
             <input type="number" name="" id="" placeholder='price' value={price}  onChange={(event)=>{
                 setPrice(event.target.value)
             }}/>
             <input type="text" name="" id="" placeholder='image' value={image}  onChange={(event)=>{
                 setImage(event.target.value)
             }}/>
             {/* <input type="text" name="" id="" placeholder='status' value={statusBtn}  onChange={(event)=>{
                 setStatusBtn(event.target.value)
             }}/> */}
            
            <button>Submit</button>
        </form>
    </div>
  )
}
