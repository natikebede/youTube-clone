import '../css/default_css.css';
import {useState} from 'react';
import '../css/navigation.css';
import '../css/fontawesome.min.css';
import {MdSearch,MdViewComfy,  MdOutlineUpload,MdBackspace ,MdOutlineMenu ,MdVideoCameraFront} from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai';

function Navigation(props)
{
    const [searchisclicked, setclick]=useState(false);
    function displaysearch()
    {
        setclick(true);
    }
    
    if(searchisclicked)
    {
     
       
    }
    else
    {
        
      
        
    }
    return(
    
        <div className="navbar ">
            
            <div className="">
           <MdOutlineMenu className="openbtn" onClick={props.onClick}/>
            <img src={require('../assets/download.png').default} className="logo" alt="youtube log"/> 
            </div>
            
           
            <div className="search-box">
            <div className="backspace" id="backspace">
                <MdBackspace fontsize="3erm "onClick={displaysearch}/>
                </div>
                <input type="search"  placeholder="Search" id="search-bar"/>
                <div className="search">
                <MdSearch fontsize="4erm "onClick={displaysearch}/>
                </div>
                 
            </div>
            <div className="Icons " id="icons">
                
                <div className="icons icon-coll"> <MdVideoCameraFront fontSize="1.5rem"/> </div>
                <div className="icons icon-coll"> <MdViewComfy fontSize="1.5rem"/> </div>
                <div className="icons icon-coll"> <AiTwotoneBell fontSize="1.5rem"/> </div>
                <div className="icons icon-coll"> <MdOutlineUpload fontSize="1.5rem"/> </div>
               
                <div className="img-icon">
                <img src='assets/blog/comments-3.jpg' className="img-icon img"  alt="youtube log"/> 
                </div>
            </div>


            
            
        </div>


  

    );
}
export default Navigation;