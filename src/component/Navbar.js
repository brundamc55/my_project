import React,{useState} from'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {Sidebar} from './Sidebar';
import './Navbar.css';
import {IconContext} from 'react-icons';


const Navbar=()=>{

    const [sidebar,setsidebar]=useState(false)

    const showsidebar=()=>setsidebar(!sidebar)

    return(
        <>
        <IconContext.Provider value={{color:'white'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
               <FaIcons.FaBars onClick={showsidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
                <ul className="nav-menu=items"onClick={showsidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {Sidebar.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icons}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
    }

export default Navbar;
