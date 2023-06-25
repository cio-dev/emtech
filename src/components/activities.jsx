
import React, { useEffect, useState } from "react"
import Modal from "./Modal";
import "./activities.css";

const activities = () => {
  const [toggle, setToggle] = useState(false)
  const [title, setTitle] = useState("default title")
  const [pic, setPic] = useState('')
  const[desc,setDesc] = useState('')

  const popUp = (title, pic,desc) => {
    setTitle(title)
    setToggle(!toggle)
    setPic(pic)
    setDesc(desc)
  }

  return (
    <div className="activities">
      <div className="div ">
        <div className="activities-banner">
          <div className="text-wrapper-2 ">ACTIVITIES</div>
        </div>
        <div className="overlap-4">
          <div className="selection">
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>

          <div className="activities-3">
            <img className="activities-4" alt="activities" src="src/assets/5.png"  onClick={() => popUp("Lorem Ipsum 2","src/assets/5.png","desciptions")} />
            <div className="text-wrapper-3">Lorem Ipsum</div>
            <p className="text-wrapper-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            
          </div>
          <div className="activities-5">
            <img className="activities-6" alt="activities" src="src/assets/7.png"  onClick={() => popUp("Lorem Ipsum 1","src/assets/7.png","desciptions")} />
            <div className="text-wrapper-5">Lorem Ipsum</div>
            <p className="text-wrapper-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            
            <img className="line" alt="Line" src="line-1.png" />
          </div>
        </div>
        <Modal title={title} toggle={toggle} pic={pic} desc={desc}/>
        <footer className="footer">
          <div
            className="p-wrapper"
            style={{
              backgroundImage: "url(footer.png)", 
            }}
          >
            
          </div>
          <div className="overlay" style={{ display: toggle ? "block" : "none" }} onClick={() => setToggle(false)}></div>
        </footer>
      </div>
    </div>
  );
}


export default activities;
