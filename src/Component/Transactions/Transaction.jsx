import React, { useEffect, useState } from 'react'
import './Transactions.css'

export default function Transaction() {

    const [datas,setDatas]=useState([])
    useEffect(()=>{
        let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Transactions.json'
        fetch(url)
                 .then(response=>(response.json())) 
                 .then(data=>{
                      let newArray= Object.entries(data).map(user=>({
                        title:user[1].title,
                        date:user[1].date,
                        image:user[1].image,
                        price:user[1].price,
                        statusBtn:user[1].statusBtn

                    })
                    
                )
                setDatas(newArray)
                 })  
    },[])

    const Button=(props)=>{
        return (
            <>
            {console.log(props.value)}
            <button className={`btn ${props.value}`} >{props.value}</button>
           
            </>
        )

    }

  return (
    <div className="right-side__container">
        <div className="righ-side__wraper">
            <h2 className="right-side__title">Lates Transactions</h2>
            <div className="right-side__info">
                <table className="right-side__table">
                    <tr className="row-header">
                        <th className="col-header">Customer</th>
                        <th className="col-header">Date</th>
                        <th className="col-header">Amount</th>
                        <th className="col-header">Status</th>
                    </tr>
                    {datas.map(data=>{
                        return(
                        <tr className="row-detail">
                            <td className="col__customer">
                                <img src={data.image} alt="" className="customer-image" />
                                <span className="custome-name">{data.title}</span>
                            </td>
                            <td className="date">{data.date}</td>
                            <td className="amount">${data.price}</td>
                            <td className="status">
                                <Button value={data.statusBtn} />
                            </td>
                        </tr>
                        )
                    })}
                </table>
            </div>
        </div>

    </div>
  )
}
