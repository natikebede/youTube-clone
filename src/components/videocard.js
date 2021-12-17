import '../css/default_css.css';


import '../css/videocard.css';

function Videocard ({channelname,timeStamp,title,channelImage,video_image,views})

{   
    
return(
    <div className="col-lg-3 col-md-6  px-1 padding-0 ">
        <div className="video-cards  ">
            <div className="card-imgs">
            <img src={video_image} className="video-img"  alt="youtube log"/> 
            </div>
            <div className="card-infos ">
                <div className="img-icon">
                <img src={channelImage} className="img-icon img"  alt="youtube log"/> 
                </div>
           
            <div className="video-text ">
            <h5>{title}</h5>
            <p className=""> {channelname}</p>
            <p className=" ">{views}views . {timeStamp}</p>
            </div>
            </div>
                

        </div>

    </div>
    );
    

}
export default Videocard;