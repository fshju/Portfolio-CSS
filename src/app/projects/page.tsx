import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="projects-section" id="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Project 1</h3>
            <a
              href="https://milestones5-dusky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="project-description">Resume builder.</p>
              <Image
                src="/projectpic1.jpg"
                alt="img1"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Project 2</h3>
            <a
              href="https://milestone1-phi-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="project-description">Resume</p>
              <Image
                src="/projectpic2.jpg"
                alt="img2"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Project 3</h3>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <p className="project-description">Portfolio</p>
              <Image
                src="/projectpic3.jpg"
                alt="img3"
                width={500}
                height={500}
              />
            </a>
          </div>

          <div className="project-card">
            <h3 className="project-title">Project 4</h3>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <p className="project-description">My Portfolio</p>
              <Image
                src="/projectpic4.png"
                alt="img3"
                width={500}
                height={500}
              />
            </a>
          </div>

          <div className="project-card">
            <h3 className="project-title">Project 5</h3>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <p className="project-description">E-commerce</p>
              <Image
                src="/projectpic5.jpg"
                alt="img3"
                width={500}
                height={500}
              />
            </a>
          </div>

          <div className="project-card">
            <h3 className="project-title">Project 6</h3>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <p className="project-description">Hackathone</p>
              <Image
                src="/projectpic6.jpg"
                alt="img3"
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
