import '../css/default_css.css';


import '../css/sidebar.css';
import '../css/fontawesome.min.css';
import {MdHome,MdWhatshot,MdSubscriptions,MdLibraryAdd,MdHistory,MdThumbUp, MdOndemandVideo} from 'react-icons/md'
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
       <SidebarRow Icons={MdOndemandVideo} title=" Your videos"/>
       <SidebarRow Icons={MdThumbUp} title=" liked videos"/>
    </div>
    
);


}
export default Sidebar;
