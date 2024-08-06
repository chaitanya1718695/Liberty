import React, { useEffect, useState, useRef } from "react";
import { CountUp } from "countup.js";
import "../assets/CSS/Service.css";
import officelab  from "../assets/officestaf.jpg";
import manlaptop from "../assets/webdevelopexpert.jpg"
import technologystack from "../assets/ourtstack.jpg"
import enterprise from "../assets/enterprise1.jpg"


import CodeOffIcon from '@mui/icons-material/CodeOff';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// import styled from 'styled-components';
// import CodeOffIcon from '@mui/icons-material/CodeOff';

 
function Service() {
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (startCounting) {
      const options = { duration: 2.0 }; // 2 seconds for fast counting
      const projectCounter = new CountUp("project-counter", 8000, options);
      const clientCounter = new CountUp("client-counter", 500000, options);
      const awardCounter = new CountUp("award-counter", 200000, options);

      if (!projectCounter.error) projectCounter.start();
      if (!clientCounter.error) clientCounter.start();
      if (!awardCounter.error) awardCounter.start();
    }
  }, [startCounting]);

  useEffect(() => {
    const currentCounterRef = counterRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (currentCounterRef) {
      observer.observe(currentCounterRef);
    }

    return () => {
      if (observer && currentCounterRef) {
        observer.unobserve(currentCounterRef);
      }
    };
  }, []);

  const questionsAndAnswers = [
    { question: 'What Services Do You Offer?', answer: 'At Arrch Technology, we provide a comprehensive range of IT services, including Web Development, Mobile App Development, Digital Marketing, Cloud Solutions, IT Consulting, and IT Training & Placement.' },
    { question: 'What Is Your Unique Selling Proposition (USP)?', answer: 'Our USP lies in our client-centric approach and commitment to delivering tailor-made solutions. We combine industry expertise with cutting-edge technologies to provide innovative solutions that meet your specific business needs.' },
    { question: 'Can You Send Me Details About Your Digital Marketing Services?', answer: 'Certainly! Our digital marketing services include SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, and Analytics and Reporting.' },
    { question: 'Can You Send Me Details About Your IT Training and Placement Services?', answer: 'Absolutely! Our IT Training & Placement services are designed to equip you with the skills needed to excel in the IT industry. We offer: Training Programs: Comprehensive training in programming languages, web development, data science, cybersecurity, and more. Certification Preparation: Guidance and resources for industry-recognized certifications such as CompTIA, Cisco, Microsoft, and AWS. Soft Skills Training: Workshops on communication, teamwork, and problem-solving skills. Placement Assistance: Resume building, mock interviews, and job search support to help you secure your dream job. Our experienced instructors and industry connections ensure that you receive practical, hands-on training and valuable placement opportunities.' },
    { question: 'Can You Provide Details About Your Courses?', answer: 'Certainly! We offer a wide range of courses tailored to different levels of expertise: Web Development: Courses covering HTML, CSS, JavaScript, PHP, and popular frameworks like React and Angular. Mobile App Development: Training in Android, iOS, and cross-platform development. Data Science & Analytics: Courses on Python, R, machine learning, and data visualization tools. Cybersecurity: Training on ethical hacking, network security, and information security management. Cloud Computing: Courses on AWS, Azure, and Google Cloud Platform, including cloud architecture and deployment. Software Development: Comprehensive courses on Java, .NET, C++, and other programming languages.' }
  ];

  const QuestionDropdown = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionChange = (event) => {
      const selectedQuestionText = event.target.value;
      const selected = questionsAndAnswers.find(q => q.question === selectedQuestionText);
      setSelectedQuestion(selected);
    };

    return (
      <div className="dropdown-container">
        <select onChange={handleQuestionChange} className="dropdown-select">
          <option value="">Select a question</option>
          {questionsAndAnswers.map((qa, index) => (
            <option key={index} value={qa.question}>
              {qa.question}
            </option>
          ))}
        </select>
        {selectedQuestion && (
          <div className="answer-container">
            <h3>{selectedQuestion.question}</h3>
            <p>{selectedQuestion.answer}</p>
          </div>
        )}
      </div>
    );
  };








  return (
    <>
   <div className="bckcolor">
  <div className="container-cards">
    <div className="card18 card-digital-marketers">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 my-2">Digital Marketers</h6>
          <p className="card-text18 my-4">We offer clear and competitive pricing for performance-driven and profit-driven Internet marketing services.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-software-development">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 my-2"><center>Software Development</center></h6>
          <p className="card-text18 my-4">Our aim is to provide well-clustered software solutions that simplify and eliminate tedious tasks.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-app-development">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 my-2">App Development</h6>
          <p className="card-text18 my-4">We develop apps that stand out from the crowd, providing cost-effective, scalable, and robust mobile solutions.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-websites-development">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 "><center>Websites Development</center></h6>
          <p className="card-text18 my-4">Our customer-centric approach makes us a unique solutions provider for website designing & development.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-seo-solutions">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 "><center>SEO/SEM Solutions</center></h6>
          <p className="card-text18 my-4">Our SEO/SEM Solutions service focuses on increasing user engagement through targeted content strategies.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-more-services">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 "><center>More Services</center></h6>
          <p className="card-text18 my-4">We offer a wide range of digital marketing services tailored to your business needs, ensuring your brand stands out.</p>
        </div>
      </div>
    </div>
  </div>
</div>


 




 
      <div className="bckcolor2" ref={counterRef}>
        <div className="counter-container">
          <div className="counter-card">
            <div className="counter-row">
              <div className="counter-item">
                <i className="fa-brands fa-instagram"></i>
                <span id="project-counter" className="counter-number">0</span>
                <p className="counter-label">More than 8,000 customers have experimented with Kafkai</p>
              </div>
              <div className="counter-item">
                <i className="fa-brands fa-instagram"></i>
                <span id="client-counter" className="counter-number">0</span>
                <p className="counter-label">More than 500,000 clients served</p>
              </div>
              <div className="counter-item">
                <i className="fa-brands fa-instagram"></i>
                <span id="award-counter" className="counter-number">0</span>
                <p className="counter-label">Over 200,000 awards won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      





      <div className="bckcolor3">
        <h5 className="peicing">
          <center>OUR PRICING</center>
        </h5>
        <h1 className="joinfor">
          <center>
            Join for <span className="free">free</span> Today
          </center>
        </h1>
{/* 
        <div className="row justify-content-center">
          <div className="btn-group my-4">
            <button type="button" className="btnbtn btn-outline btn-lg mx-1">
              <b>Monthly</b>
            </button>
            <button type="button" className="btnbtn btn-outline btn-lg">
              <b>Yearly</b>
            </button>
          </div>
        </div> */}


        
        <QuestionDropdown />
      </div>
      <div className="fullscreen-background">
      <div className="content">
        <h1 className="heading-result">Aligning & Accelerating Business Result</h1>
        <h6 className="heading-">
          "We bring together the Digital Marketing Operations, IT operations, and <br />
          domain knowledge to help transform your business."
        </h6>
      </div>
    </div>





    <div className="it-solutions-container">
  <div className="image-container">
    <img src={officelab} alt="IT Solutions" />
  </div>
  <div className="text-container">
    <h1>Innovative IT Solutions <br /> for the Digital Age <br /> Arrc Technology</h1>
    <p>
      Welcome to our cutting-edge IT company. We offer a comprehensive <br />
      range of software and promotional services, leveraging the latest <br />
      technologies to drive your business forward. <br /> Our team of experts is dedicated to delivering innovative solutions <br />
      tailored to your unique needs.
    </p>
  </div>
</div>







{/* new div */}

<div className="wde-container">
  <div className="content-container">
    <div className="text1-container">
      <h1>Web Development Expertise</h1>
      <h5 className="ui">1 <span className="ux">UI/UX Design</span></h5>
      <h6>Create intuitive and visually appealing interfaces that enhance user experiences.</h6>

      <h5 className="website">2 <span className="ux">Website Development</span></h5>
      <h6 className="build">Build responsive and dynamic websites using cutting-edge technologies.</h6>

      <h5 className="ecommerce">3 <span className="ux">E-Commerce Solutions</span></h5>
      <h6 className="develop ">Develop secure and scalable online stores to boost your digital presence.</h6>

      <h5 className="cms">4 <span className="ux">CMS Integration</span></h5>
      <h6 className="userf">Implement user-friendly content management systems for easy website updates.</h6>
    </div>
    <div className="image1-container">
      <img src={manlaptop} alt="Technology" />
    </div>
  </div>
</div>





{/*  */}


<div className="ots-container">
  <div className="c-container">
    <div className="text2-container">
      <h1>Our Technology Stack</h1>
      <h5 className="codeoficon my-4"><CodeOffIcon/></h5>
      <h5 className="webtechnologies"> Web Technologies</h5>
      <h6 className="create">Create intuitive and visually appealing interfaces that enhance user experiences.</h6>
     
      <h4 className="PhoneAndroidIcon my-4 "><PhoneAndroidIcon/></h4>
      <h5 className="mobile"> Mobile Devlopment</h5> 
      <h6 className="reactnative">React Native,swift and java for cross platform and native mobile apps.</h6>

      <h4 className=" my-4 StorageIcon"><StorageIcon/></h4>
      <h5 className="Database"> Databases</h5> 
      <h6 className="reactnative">React Native,swift and java for cross platform and native mobile apps.</h6>

      <h4 className=" my-4 CloudIcon"><CloudIcon/></h4>
      <h5 className="Cloud"> Cloud and DevOps</h5> 
      <h6 className="reactnative">AWS Digital Ocean, and Github for seamless deployment and collabaration.</h6>
    </div>
    <div className="image2-container">
      <img src={technologystack} alt="Technology" />
    </div>
  </div>
</div>


{/* new div startt*/}



<div className="mobileapp">
  <div className="card-mobile">
    <h1 className="card-title-mobile"><b>Mobile App Development</b></h1>
    <div className="container-mobile">
      <div className="row">
       
      </div>
      <div className="row">
        <div className="ios">
          <h4>IOS Development</h4>
          <h6>Create Stunning native IOS apps using swift and the latest Apple technologies</h6>
        </div>
        <div className="ios">
          <h4>Android Development</h4>
          <h6>Develop Feature-rich Android apps using java and kotlin</h6>
        </div>
        <div className="ios">
          <h4>Cross-platform Solutions</h4>
          <h6>Build Efficient Apps for multiple platforms using React Native</h6>
        </div>
      </div>
    </div>
  </div>
</div>

 

{/* new div */}



     <div className="enterprise-container">
  <div className="enterprise-image-container">
    <img src={enterprise} alt="enterprise" />
  </div>
  <div className="enterprise-text-container">
    <h1>Enterprise Solutions</h1>
    <h5>Custom CRM</h5>
    <h6>Tailor-made customer relationship management systems to streamline your sales  processes.</h6>

    <h5 className="erpsolutions my-4">ERP Solutions</h5>
    <h6>integrated enterprise resourse planning software to optimize your business operations. </h6>

    
    <h5 className="erpsolutions my-4">HRMS</h5>
    <h6>comprehensive human resourse management systems to enhance workforce productivity. </h6>


    <h5 className="erpsolutions my-4">POS System</h5>
    <h6>Efficient point of-sale solutions for retail and hospitality bussiness.</h6>
  </div>
</div> 








    </>
  );
}

export default Service;
