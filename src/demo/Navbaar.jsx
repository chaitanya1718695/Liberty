import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/color.png';
import "../assets/CSS/Navbaar.css";

function Navbaar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img className="logoimg" src={logoImage} alt="" />

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    <b>HOME</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    <b>ABOUT US</b>
                  </Link>
                </li>
               
                
                <li className="nav-item">
                  <Link className="nav-link" to="/contactUs">
                    <b>CONTACT US</b>
                  </Link>
                </li>
             

                <li className="nav-item">
                  <Link className="nav-link" to="/Dummy">
                    <b>DUMMY</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Service">
                    <b>SERVICES</b>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Sample">
                    <b>Sample</b>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Recruitment">
                    <b>RECRUITMENT</b>
                  </Link>
                </li>
              </ul>

            </div>
            
          </div>
        </nav>
      </div>
     
    </>
  );
}

export default Navbaar;
