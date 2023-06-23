const Modal = ({ title, toggle, pic, desc }) => {
    return (
      <div className="popup-modal" style={{ display: toggle ? "block" : "none" }}>
        <div className="content-wrapper">
          <img className="modal-image" src={pic} alt="Modal Image" />
          <div className="modal-content">
            
            <div className="label" >{title}</div>
            <div className="line_modal"></div> 
            <div className="desc" >{desc}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  