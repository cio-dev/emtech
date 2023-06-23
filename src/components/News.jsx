
import React, { useEffect, useState } from "react"
import Modal from "./Modal";
import "./news.css";

const News = () => {
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
    <div className="NEWS">
      <div className="div">
        <div className="hamburger-menu">
          <div className="overlap-group">
            <div className="rectangle" />
            <img className="vector" alt="Vector" src="vector-1.png" />
            <img className="img" alt="Vector" src="vector-2.png" />
            <img className="vector-2" alt="Vector" src="vector-3.png" />
          </div>
        </div>
        <div className="overlap">
          <div className="header">
            <div className="CAFA-logo-wrapper">
              <img className="CAFA-logo" alt="Cafa logo" src="CAFA-logo.png" />
            </div>
            <div className="TUP-CAFA">
              TUP
              <br />
              CAFA
            </div>
            <div className="vector-wrapper">
              <img className="vector-3" alt="Vector" src="vector.png" />
            </div>
          </div>
          <div className="header-2">
            <div className="overlap-2">
              <div className="logo" />
              <img className="CAFA-logo-2" alt="Cafa logo" src="image.png" />
            </div>
            <div className="text-wrapper">
              TUP
              <br />
              CAFA
            </div>
            <div className="img-wrapper">
              <img className="vector-4" alt="Vector" src="vector-4.png" />
            </div>
          </div>
        </div>
        <div className="news-banner">
          <div className="overlap-3">
            <img className="rectangle-2" alt="Rectangle" src="rectangle-1.png" />
            <div className="text-wrapper-2">NEWS</div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="selection">
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>
          <div className="news">
            <h1 className="h-1">Lorem Ipsum</h1>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <img className="line" alt="Line" src="line-3.png" />
            <img className="news-2" alt="News" src="src/assets/6.png" onClick={() => popUp("Lorem Ipsum 3", "src/assets/6.png", "desciptions")} />
          </div>
          <div className="news-3">
            <img className="news-4" alt="News" src="src/assets/5.png"  onClick={() => popUp("Lorem Ipsum 2","src/assets/5.png","desciptions")} />
            <div className="text-wrapper-3">Lorem Ipsum</div>
            <p className="text-wrapper-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <img className="line" alt="Line" src="line-2.png" />
          </div>
          <div className="news-5">
            <img className="news-6" alt="News" src="src/assets/7.png"  onClick={() => popUp("Lorem Ipsum 1","src/assets/7.png","desciptions")} />
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
            <p className="text-wrapper-7">TUP CAFA © 2023 All rights reserved</p>
          </div>
          <div className="overlay" style={{ display: toggle ? "block" : "none" }} onClick={() => setToggle(false)}></div>
        </footer>
      </div>
    </div>
  );
}


export default News;
