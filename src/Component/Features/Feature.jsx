import React from 'react'
import SouthIcon from '@mui/icons-material/South';
import { PinDropSharp } from '@mui/icons-material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Feature(props) {
  return (
   
    <div className="featurs">
        {console.log(props)}
          <div className="contaner">
                <h3 className="feature title">{props[1].title}</h3>
                <div className="info-container">
                    <span className="money">${props[1].price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    <div className="feature-rate">
                          <span className="rate">{props[1].change}</span>
                         {
                           props[1].change<0?  <SouthIcon className='feature-rate__arrow'></SouthIcon>:
                           <ArrowUpwardIcon className='feature-rate__arrowUp'></ArrowUpwardIcon>     
                         } 

                    </div>
                </div >
                    <span className="compare">
                      Compare to last month
                    </span>
          </div>
        </div>
  )
}
