import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">Portfolio</a>
        <nav className="navbar">
          <a href="#" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-sci">
        <a href="#"><FaFacebook /></a>
      <a href="#"><FaTwitter /></a>
      <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"><FaLinkedin /></a>
        </div>
        <div className="home-content">
          <h1>Hi, I'm Surendra</h1>
          <h3>FullStack Developer</h3>
          <a href="#contact" className="btn">Hire Me</a>
        </div>
        <div className="home-img">
          <div className="image">
            <img src="mypic3.png" alt="Surendra's Pic" />
          </div>
        </div>
      </section>
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>A full-stack developer is a developer or engineer 
            who can build both the front end and the back end of a website. 
            The front end (the parts of a website a user sees and interacts with) 
            and the back end (the behind-the-scenes data storage and processing) 
            require different skill sets</p>
      </section>
      <section className="section" id="skills">
        <h2>My Skills</h2><br />
        <p>I excel in MERN stack development, boasting proficiency in frontend 
           technologies such as HTML5, CSS3, and JavaScript (ES6+). My expertise 
           extends to frameworks like React.js and Redux for building interactive 
           and stateful user interfaces. On the backend, I am skilled in Node.js and 
           Express.js, crafting RESTful APIs and integrating MongoDB with Mongoose for 
           efficient data management. Authentication systems using JWT and OAuth are familiar 
           territories, ensuring secure user interactions. I leverage modern tools like Git for 
           version control and employ continuous integration and deployment (CI/CD) pipelines for 
           efficient development workflows. My full-stack capabilities span from UI/UX design considerations 
           to backend optimizations, delivering robust and scalable applications.</p>
      </section>
      <section className="section" id="work">
        <h2>My Work</h2>
        <p>Here you can showcase your projects and work experience.</p>
      </section>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form action="" className="contact__form">
            <label htmlFor="UserName">UserName:</label>
            <input type="text"  placeholder="Surendra Mustini" className="contact__input" />
            <label htmlFor="email">Email:</label>
            <input type="mail" placeholder="mustinisurendra1995@gmail.com" className="contact__input" /><br /><br />
            <textarea cols="0" rows="10" className="contact__input" placeholder="Q-4,A2,10th Floor, Cyber Towers, Hitech City Rd, Patrika Nagar, HITEC City, Hyderabad, Telangana 500081"></textarea>
            <input type="button" value="submit" className="contact__button button" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
