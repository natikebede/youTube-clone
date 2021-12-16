import '../css/default_css.css';
import react from "react";
import {useState} from 'react';
import '../css/sidebar.css';
import '../css/fontawesome.min.css';
import {MdHome,MdWhatshot,MdSubscriptions,MdLibraryAdd,MdHistory,MdVideoLabel,MdThumbUp} from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai';
import SidebarRow from './siderow.js';
function Sidebar()
{
return(
    <div className="sidebar">
        <SidebarRow selected Icons={MdHome} title="Home"/>
        <SidebarRow Icons={MdWhatshot} title="Trending"/>
       <SidebarRow Icons={MdSubscriptions} title="Subscription"/>
       <hr/>
       <SidebarRow Icons={MdLibraryAdd} title="Library"/>
       <SidebarRow Icons={MdHistory} title="History"/>
       <SidebarRow Icons={MdVideoLabel} title=" Your videos"/>
       <SidebarRow Icons={MdThumbUp} title=" liked videos"/>
    </div>
    
);


}
export default Sidebar;
