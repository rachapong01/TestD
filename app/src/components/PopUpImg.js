import './PopUpImg.css';
function PopUpImg({title , imgUrl}) {
    imgUrl = "/onePiece/" + imgUrl;
    return (
        <div className="popup-post">
            <div className="popup-bg" />
            <div className="popup-content">
                <img src="/onePiece/2.jpg" />
                <h4 className="popup-alignC">lufy</h4>
            </div>
        </div>
    );
}

export default PopUpImg;