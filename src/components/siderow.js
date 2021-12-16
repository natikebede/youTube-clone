import '../css/default_css.css';
import react from "react";

import '../css/sidebarRow.css';
import '../css/fontawesome.min.css';
function SidebarRow({Icons,title,selected})
{
return(
    <div className="row">
        < div className ={`col-lg-12 col-md-12 sidebar-row ${selected &&'selected'}`}>
        <Icons className="icon" />
        <h2 className="titles">{title}</h2>
        </div>
        
    </div>
);


}
export default SidebarRow;
