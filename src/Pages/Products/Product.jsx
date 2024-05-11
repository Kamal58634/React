import React, { useCallback, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Chart from '../../Component/Charts/Chart'
import PublishIcon from '@mui/icons-material/Publish';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Product.css'
import useFilterData from '../../Hooks/useFilterData'

export default function Product() {



  let params = useParams()
  const [lastData] = useFilterData(params.id)



  return (
    <>
      {lastData.length > 0 &&
        (<div className="products">
          <div className="container-products">
            <h1 className="product-title">Product</h1>
            <Link to="/newProduct">
              <button className="product-btn">Create</button>
            </Link>
          </div>
          <div className="product-top">
            <div className="product-top__left">
              <Chart
                title={"Sale in Month"}
                data={lastData}


                dataKey={"title"}
                dataKeyX={"sale"}
              />
            </div>
            <div className="product-top__right">
              <div className="product-info__top">
                <img src="/Images/logo512.png" alt="lap top" />
                <span className="product-name">{lastData[0].title} Laaptop</span>

              </div>
              <div className="product-info__bottom">
                <div className="productInfo-item">
                  <div className="productInfo-key">ID:</div>
                  <div className="productInfo-value">{params.id}</div>
                </div>
                <div className="productInfo-item">
                  <div className="productInfo-key">Name:</div>
                  <div className="productInfo-value">{lastData[0].title}</div>
                </div>
                <div className="productInfo-item">
                  <div className="productInfo-key">Sale:</div>
                  <div className="productInfo-value">{lastData[0].sale * lastData[0].quantity}</div>
                </div>
                <div className="productInfo-item">
                  <div className="productInfo-key">Active:</div>
                  <div className="productInfo-value">Yes</div>
                </div>
              </div>
            </div>
         
          </div>
          <div className="product-bottom">
              <form  className="productForm">
                  <div className="productForm-left">
                      <label>Product Name</label>
                      <input type="text" placeholder='Laptop Name' />

                      <label>Is In Stock</label>
                      <select  id="InStock">
                        <option value="yes">Yes</option>
                        <option value="no">NO</option>
                      </select>

                      <label>Active</label>
                      <select  id="InStock">
                        <option value="yes">Yes</option>
                        <option value="no">NO</option>
                      </select>

                  </div>
                  <div className="productForm-right">
                       <div className="product-uploader">
                            <img src="/Images/logo512.png" alt="Profile Photo" className='product-uploder__image' />
                            <label >
                                <PublishIcon></PublishIcon>
                            </label>
                            

                            <input type="file" style={{display:'none'}} />
                            
                       </div> 
                       <button className='product-button'>Upload (Edit)</button>
                  </div>
              </form>
          </div>
        </div>)}
    </>
  )
}
