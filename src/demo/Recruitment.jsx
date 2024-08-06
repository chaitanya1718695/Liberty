import React from "react";
import "../assets/CSS/Recruitment.css";
import { TbFileCertificate } from "react-icons/tb";
import { MdNetworkCheck } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

function Recruitment() {
  return (
    <div className="recruitment-black">
      <div className="recruitment-container">
        <h5 className="Internships">
          <center>Internships</center>
        </h5>
        <h1 className="my-4 ">
          <center className="ourint">Our Internships</center>
        </h1>
        <p>
          <center className="includingweb">
            Our internships are available in a range of fields, including Web{" "}
            <br />
            Development, Machine Learning, Data Science, and more. <br />
            Interns will have the chance to work on real-world projects, <br />
            collaborate with teams, and gain valuable insights into their <br />
            respective industries.
          </center>
        </p>
      </div>

      <div className="recruitment-container-one">
        <div className="box">
          <h3 className="softwaredevelopment mt-2">
            <center>Software Development Internship</center>
          </h3>
          <h6 className="overview mt-2">Overview</h6>
          <h6 className="lifecycle mt-2">Life Cycle</h6>
          <h6 className="cli mt-2">CLI Apps</h6>
          <h6 className="guiapps mt-2">GUI Apps</h6>
          <h6 className="webscrapping mt-2">Web Scraping</h6>
          <center>
            <button type="button" className="apply-now">
              Apply Now
            </button>
          </center>
        </div>
        <div className=" box2">
          <h3 className="webdevinternship  mt-2">
            <center className="webdevinternship">Web Dev Internship</center>
          </h3>
          <h6 className="overview2 mt-2">
            <center>Overview</center>
          </h6>
          <h6 className="html mt-2">
            <center>HTML5 & CSS3</center>
          </h6>
          <h6 className="javascript mt-2">
            <center>JavaScript</center>
          </h6>
          <h6 className="responsivewebsite mt-2">
            <center>Responsive Website</center>
          </h6>
          <h6 className="webapplications mt-2">
            <center>Web Applications</center>
          </h6>
          <center>
            <button type="button" className="apply-now">
              Apply Now
            </button>
          </center>
        </div>
        <div className="box">
          <h3 className="Androiddeveloper mt-2">
            <center>Android Development Internship</center>
          </h3>
          <h6 className="overview mt-2">Overview</h6>
          <h6 className="kotlin mt-2">Kotlin/Flutter/React Native</h6>
          <h6 className="simpleapps mt-2">Simple Apps</h6>
          <h6 className="advanceapps mt-2">Advanced Apps</h6>
          <h6 className="cloudapps mt-2">Cloud Apps</h6>
          <center>
            <button type="button" className="apply-now">
              Apply Now
            </button>
          </center>
        </div>
      </div>

      <div className="recruitment-container-one">
        <div className="box">
          <h3 className="softwaredevelopment mt-2">
            <center>Machine Learning Internship</center>
          </h3>
          <h6 className="overview mt-2">Overview</h6>
          <h6 className="dataanalysis mt-2">Data Analysis</h6>
          <h6 className="cli mt-2">Supervised Learning</h6>
          <h6 className="guiapps mt-2">Unsupervised Learning</h6>
          <h6 className="webscrapping mt-2">Deep Learning</h6>
          <center>
            <button type="button" className="apply-now">
              Apply Now
            </button>
          </center>
        </div>
        <div className="box box2">
          <h3 className="webdevinternship mt-2">
            <center>Data Science Internship</center>
          </h3>
          <h6 className="overview2 mt-2">
            <center>Overview</center>
          </h6>
          <h6 className="html mt-2">
            <center>EDA</center>
          </h6>
          <h6 className="javascript mt-2">
            <center>Data Pre-processing</center>
          </h6>
          <h6 className="responsivewebsite mt-2">
            <center>Data Visualization</center>
          </h6>
          <h6 className="webapplications mt-2">
            <center>BI Tools</center>
          </h6>
          <center>
            <button type="button" className="apply-now">
              Apply Now
            </button>
          </center>
        </div>
        <div className="box">
          <h3 className="Androiddeveloper mt-2">
            <center>Cyber Security Internship</center>
          </h3>
          <h6 className="overview mt-2">Caesar Cipher</h6>
          <h6 className="kotlin mt-2">Pixel Manipulation</h6>
          <h6 className="simpleapps mt-2">Password Complexity</h6>
          <h6 className="advanceapps mt-2">Keyloggers</h6>
          <h6 className="cloudapps mt-2">Network Packet Analysis</h6>
          <center>
            <button type="button" className="apply-now">
              Apply Now
            </button>
          </center>
        </div>
      </div>

      {/*           new div started                   */}

      <div className="recruitment-container-two">
        <h6 className="features1">Features</h6>
        <h1 className="ourinternships">Features of our Internships</h1>
      </div>

      <div className="icons-row">
        <div className="icon-container">
          <TbFileCertificate className="certificateIcon" />
          <h4>Verified Certificates</h4>
          <h6>Get Verified Certificates to prove your hard work!</h6>
        </div>
        <div className="icon-container">
          <MdNetworkCheck className="NetWorkingIcon" />
          <h4>Networking</h4>
          <h6>Tap into our network and increase your chances of placements</h6>
        </div>
        <div className="icon-container">
          <FaRegHandshake className="HandshakeIcon" />
          <h4>Hands-on Experience</h4>
          <h6>Gain practical experience by working on real-world projects</h6>
        </div>
        <div className="icon-container">
          <MdOutlineHighQuality className="QualityIcon" />
          <h4>High Quality Content</h4>
          <h6>Great Content to prepare students for their future careers.</h6>
        </div>
      </div>






{/*  new div started  */}
      

      <div className="recruitment-container-three my-4 mt-5">
        <h5 className="faq"><center>FAQ</center></h5>
        <h1 className="questionanswer"><center>Any Questions? Answered</center></h1>
      </div>

     
     

    {/*          new div      */}
    <div className="container-boxing">
      <div className="column">
        <p>This is some text above the divs in Column 1.</p>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="item" key={index}>
            Column 1, Item {index + 1}
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        ))}
      </div>
      <div className="column">
        <p>This is some text above the divs in Column 2.</p>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="item" key={index}>
            Column 2, Item {index + 1}
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        ))}
      </div>
    </div>
   

    </div>
  );
}

export default Recruitment;
