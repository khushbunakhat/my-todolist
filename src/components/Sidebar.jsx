import React from "react";
import {FaInbox,FaRegCalendarAlt,FaRegCalendar} from "react-icons/fa";

const Sidebar =({selectedTab,setSelectedTab})=>{
    return (
        <div className="sidebar">
            <div classname="active">
                <FaInbox className="icon" />
                Inbox
                    </div>
            <div>
                <FaRegCalendarAlt className="icon"/>
                Today
                </div>
            <div>
            <FaRegCalendar className="icon"/>
             Next 7 days
             </div>
        </div>    
    );
};

export default Sidebar;

