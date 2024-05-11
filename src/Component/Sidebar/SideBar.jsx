import React from 'react'
import { Link } from 'react-router-dom'
import './sideBar.css'
import BungalowIcon from '@mui/icons-material/Bungalow';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoneyIcon from '@mui/icons-material/Money';
import PendingIcon from '@mui/icons-material/Pending';
import ReportIcon from '@mui/icons-material/Report';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="sideBar__container">
            <h5 className="sidebar__title">
                Dashboard
            </h5>
            <ul className="sidebar__links">
                <li className="sideBar__link">
                    <BungalowIcon></BungalowIcon>
                   <Link to="/"> Home </Link>
                </li>   
                <li className="sideBar__link">
                    <TimelineIcon></TimelineIcon>
                   <Link> Analytics </Link>
                </li>   
                <li className="sideBar__link">
                    <TrendingUpIcon></TrendingUpIcon>
                   <Link to="/newfeature"> Sales </Link>
                </li>   
            </ul>
        </div>

        <div className="sideBar__container">
            <h5 className="sidebar__title">
                Quick Menue
            </h5>
            <ul className="sidebar__links">
                <li className="sideBar__link">
                    <SupervisorAccountIcon></SupervisorAccountIcon>
                   <Link to="/users"> Users </Link>
                </li>   
                <li className="sideBar__link">
                    <PersonAddIcon></PersonAddIcon>
                   <Link to="/newUser"> New User </Link>
                </li>   
                <li className="sideBar__link">
                    <PendingIcon></PendingIcon>
                   <Link to="/products"> Products </Link>
                </li>   
                <li className="sideBar__link">
                    <MoneyIcon></MoneyIcon>
                   <Link> Transactions </Link>
                </li>   
                <li className="sideBar__link">
                    <ReportIcon></ReportIcon>
                   <Link> Reports </Link>
                </li>   
            </ul>
        </div>

        <div className="sideBar__container">
            <h5 className="sidebar__title">
                Notifications
            </h5>
            <ul className="sidebar__links">
                <li className="sideBar__link">
                    <MailOutlineIcon></MailOutlineIcon>
                   <Link> Messages </Link>
                </li>   
                <li className="sideBar__link">
                    <FeedbackIcon></FeedbackIcon>
                   <Link> Feedback </Link>
                </li>   
                <li className="sideBar__link">
                    <AlternateEmailIcon></AlternateEmailIcon>
                   <Link>Mail  </Link>
                </li>   
            </ul>
        </div>

        <div className="sideBar__container">
            <h5 className="sidebar__title">
                Staff
            </h5>
            <ul className="sidebar__links">
                <li className="sideBar__link">
                    <ManageHistoryIcon></ManageHistoryIcon>
                   <Link> Manage </Link>
                </li>   
                <li className="sideBar__link">
                <TimelineIcon></TimelineIcon>
                   <Link> Analytics </Link>
                </li>   
                <li className="sideBar__link">
                   <ReportIcon></ReportIcon>
                   <Link> Reports </Link>
                </li>   
            </ul>
        </div>
    </div>
  )
}
