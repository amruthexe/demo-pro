import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPython, FaJava, FaGit } from "react-icons/fa";
import { SiMysql, SiFirebase, SiExpress } from "react-icons/si"; // For specific technologies
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="container">
      <header>
        <h1>Aluri Amruth Raj</h1>
        <h2>ReactJs & NodeJs Developer</h2>
        <p>
          Enthusiastic fresh graduate skilled in building responsive websites using React.js and CSS with experience in back-end development using Node.js and Express.js. Passionate about exploring AI tools and modern web technologies.
        </p>
        <div className="contact">
          <p>Email: <a href="mailto:aluriamruthrajeee@gmail.com">aluriamruthrajeee@gmail.com</a></p>
          <p>Phone: 9392855968</p>
          <p>Location: Andhra Pradesh, Baptla, India</p>
          <p>
            <a href="https://www.linkedin.com/in/aluri-amruth-raj" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href="https://github.com/amruthexe" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1kNgqbLb5U6YDhv9qUdoNsVbvnINnybkm/view?usp=sharing" download className="download-btn">Download Resume</a>
      </header>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>Bachelor of Information Technology</strong> - Bapatla Engineering College (2022 - Present) | CGPA: 8.3</li>
          <li><strong>Diploma in Electrical and Electronics Engineering</strong> - Bapatla Engineering College (2019 - 2022) | 87%</li>
          <li><strong>Schooling</strong> - Kendriya Vidyalaya Suryalanka (2009 - 2019) | 72% (CBSE)</li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <span className="highlight">Front-End:</span> 
            <FaHtml5 /> HTML, <FaCss3Alt /> CSS, <FaJs /> JavaScript, <FaReact /> React.js
          </li>
          <li>
            <span className="highlight">Back-End:</span> 
            <FaNodeJs /> Node.js, <SiExpress /> Express.js
          </li>
          <li>
            <span className="highlight">Databases:</span> 
            <SiMysql /> MySQL, <SiFirebase /> Firebase (NoSQL)
          </li>
          <li>
            <span className="highlight">Languages:</span> 
            <FaJs /> JavaScript, <FaPython /> Python, <FaJava /> Java
          </li>
          <li>
            <span className="highlight">Tools:</span> 
            <FaGit /> Git, MERN Stack
          </li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <div className="project-container">
              <div className="project-description">
                <strong>Franchise Hub Website</strong>: A website built using React.js and Tailwind CSS that helps users find and explore different franchise opportunities.
              </div>
              <div className="project-buttons">
                <a href="https://franchise-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn-left">View Site</a>
                <a href="https://github.com/amruthexe/Franchise-Hub" target="_blank" rel="noopener noreferrer" className="project-btn-right">GitHub</a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Achievements & Certificates</h2>
        <ul>
          <li>Second Place - Code Rivalry</li>
          <li>MERN Stack - Apna College Delta 2.0</li>
          <li>NodeJs - Master the Fundamentals</li>
          <li>MySQL - Scalar</li>
          <li>Namaste JavaScript</li>
        </ul>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          <li>English - Full Professional Proficiency</li>
          <li>Hindi - Professional Working Proficiency</li>
        </ul>
      </section>

      <footer>
        <p>© 2024 Aluri Amruth Raj</p>
      </footer>
    </div>
  );
}

export default App;
