import './ImageItem.css';
function ImageItem({title , imgUrl}) { 
imgUrl = "/onePiece/" + imgUrl;
    return(
        <div className="image-item">
          <img className="class-img" src={imgUrl} />
          <h4 className="item-align">{title}</h4>
        </div>
    );
 }

 export default ImageItem ;