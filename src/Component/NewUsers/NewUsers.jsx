import React,{useEffect,useState} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './NewUsers.css'
export default function NewUsers() {
  const [datas,setDatas]=useState([])
  useEffect(()=>{
    let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/NewUsers.json'
    fetch(url)
             .then(response=>(response.json()))
             .then(data=>{
             let dataArray= Object.entries(data).map(user=>(
                {title:user[1].title,
                 post:user[1].post 

                }))
                setDatas(dataArray)
                
             })
  },[])
  return (
    <div className="newUserContainer">
        <h2 className="newUser__title">new join members</h2>
       
            {datas.map(user=>{
              return(
                <div className="newUser__items">
            <img src="/Images/logo512.png" alt="" className="newUserImage" />
            <div className="newUser__description">
                <span className="newUser__description__name">{user.title}</span>
                <span className="newUser__description__post">{user.post}</span>
            </div>
            <button className="newUser__btn">
                <VisibilityIcon className='newUser__icon'></VisibilityIcon>
            </button>
            </div>
            )
            })}
       
    </div>
  )
}
