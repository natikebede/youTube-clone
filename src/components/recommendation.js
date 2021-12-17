import '../css/default_css.css';
import '../css/recommendation.css';

import Videocard from './videocard.js';
import data from './dummydata.js';
function Recommendation()
{
 ;
return(
    <div className="recommended ">
        <div className="row">
        <h2> Recommendations </h2>
        </div>
        <div className="row padding ">
           
           {data.map((datas)=>
           {
               return ( <Videocard channelname={datas.channale_name} title={datas.title} 
                 channelImage={datas.channelImage}video_image={datas.video_image} views={datas.views}
                timeStamp={datas.timeStamp} key={datas.id}/>);
           })}
         
        </div>
       
       
        
    </div>
);


}
export default Recommendation;
