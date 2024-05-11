
import React from 'react'
import {ResponsiveContainer, Line,LineChart,XAxis,CartesianGrid,Tooltip,YAxis } from 'recharts'

import './Chart.css'

export default function Chart({title,data,dataKey,dataKeyX}) {
  
    

                // Update the state with transformed data
           
    
  return (
    <div className='chart'>
       
        <h3 className='title'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey={dataKey} stroke="#5550bd" />
                    <YAxis dataKey={dataKeyX} stroke="#5550bd"/>
                     <Tooltip></Tooltip>   
                    <Line type={"monotone"} dataKey={dataKeyX} stroke="green" />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="8"></CartesianGrid>
                </LineChart>
            </ResponsiveContainer>
        </div>
  )
}
