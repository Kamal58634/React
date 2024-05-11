import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import './TopBar.css'
export default function TopBar() {
  return (
    
        <div className="topBar">
            <div className="topBar-wraper">
                <div className="topBar__left">
                    <p className="topBar__title">
                        SabzLearn 
                        <FavoriteIcon></FavoriteIcon>
                    </p>
                </div>
                <div className="topBar__right">
                    <div className="topbar__right__notification">
                        <NotificationsIcon></NotificationsIcon>
                        <span className="notification__bage">1</span>
                    </div>
                    <div className="topbar__right__notification">
                        <LanguageIcon></LanguageIcon>
                        <span className="notification__bage">1</span>
                    </div>
                    <div className="topbar__right__notification">
                        <SettingsIcon></SettingsIcon>
                       
                    </div>
                    <img className='topbar__image' src='/Images/logo512.png'></img>
                </div>
            </div>
        </div>

    
  )
}
