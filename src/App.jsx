import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2> Hafiz Abdul Khaliq</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-title">HELLO, I'M</p>

          <h1> Hafiz Abdul Khaliq</h1>

          <h2>Computer Science Student & Developer</h2>

          <p>
            I'm a BS Computer Science student who enjoys building websites,
            learning new technologies, and solving programming problems.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a
              href="https://github.com/Abdulkhaliqdev2007"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>
        <h2>Who I Am</h2>

        <p className="section-text">
          I am a Computer Science student at the University of the Punjab.
          I am currently developing my skills in software development,
          frontend development, backend development, and programming.
          I enjoy learning by building practical projects.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">MY SKILLS</p>
        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          <div className="skill">C++</div>
          <div className="skill">OOP</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Git & GitHub</div>
          <div className="skill">SQL</div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Student Management System</h3>

            <p>
              A C++ based student management system for adding, displaying,
              and searching student records.
            </p>

            <span>C++ • OOP</span>

            <a
             href="https://github.com/Abdulkhaliqdev2007/StudentManagementSystem"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>TaskMaster</h3>

            <p>
              A modern task management web application built while practicing
              React and frontend development.
            </p>

            <span>React • Vite • Tailwind</span>

            <a
              href="https://github.com/Abdulkhaliqdev2007"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="section-label">CONTACT</p>

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in learning, building projects, and connecting
          with other developers.
        </p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/abdul-khaliq-b3762338b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Abdulkhaliqdev2007"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Abdul Khaliq. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;