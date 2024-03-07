import React from "react"
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link}  from"react-router-dom"



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top"> 
            <Link to="/" style={{textDecoration: "none"}}>            
                <span className="logo">Berezin admin</span>
            </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <Link to="/" style={{textDecoration: "none"}}>   
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <PersonOutlineIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}}> 
                    <li>
                        <StoreIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <Link to="/orders" style={{textDecoration: "none"}}> 
                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    </Link>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    </Link>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notification</span>
                    </li>
                    </Link>
                    <p className="title">SERVICE</p>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    </Link>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    </Link>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    </Link>
                    <Link to="/users" style={{textDecoration: "none"}}> 
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>Log out</span>
                    </li>
                    </Link>
                    <li>
                        
                        <span>Color options</span>
                    </li>
                </ul>
                </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                
            </div>
        </div>
    )
}

export default Sidebar