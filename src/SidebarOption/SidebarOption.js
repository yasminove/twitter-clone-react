import React from 'react'; 
import './SidebarOption.css';

const SidebarOption = ({ active, text, Icon }) => {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
       <div className="sidebarOption__icon"><Icon /></div>
        <h2>{text}</h2> 
        </div>
    )
}

export default SidebarOption;