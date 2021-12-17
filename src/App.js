
import Navigation from './components/navigation.js';
import Sidebar from './components/sidebar.js';
import Recommendation from './components/recommendation.js';
import './App.css';
import './css/default_css.css';
import {useState} from "react";

function App()
{
 function collapes_handller()
 {
   setisopen(!isopen);
 }
 
   const[isopen ,setisopen]=useState(false);
    return (
    <div className="bodys">
      <div className="header">
      <Navigation onClick={collapes_handller} />
      </div>
       

     <div className="row padding">
       
       {isopen &&<div className="col-lg-2 col-md-2 app-sidebar"> 
       <Sidebar />
      </div>}
       
        <div className="col-lg-10 col-md-10 app-reccomm mx-auto padding"> 
        <Recommendation />
        </div>
         
         </div>
     
      
         </div>
    );
  
}
export default App;