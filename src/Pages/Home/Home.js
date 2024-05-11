import React from 'react'
import './Home.css'
import Features from '../../Component/Features/Features'
import Chart from '../../Component/Charts/Chart'
import NewUsers from '../../Component/NewUsers/NewUsers'
import Transaction from '../../Component/Transactions/Transaction'
import useFetch from '../../Hooks/useFetch'

export default function Home() {
  const [data] = useFetch('https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Sale.json');

 
  return (
    <div>
    <div className='feature-container'>
      <Features></Features>
     

      </div>
      
      <Chart 
        title={"Sales Chart"}
        data={Object.entries(data).map(row => ({
          title: row[1].title,
          sale: row[1].sale
           }))}
        dataKey={"title"}
        dataKeyX={"sale"}

      ></Chart>
      <div className="bottom-part">
        <div className="bottom-part__left">
              <NewUsers/>
        </div>
        <div className="bottom-part__right">
              <Transaction/>
        </div>
        
      
      </div>
    </div>
   
   
  )
}
