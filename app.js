import React from "react";
import "./assets/css/jsenseng.css";
import "./assets/css/bootstrap.min.css";
// Import images as needed, or place them in the public folder and reference as /images/xxx.png

const Header = () => (
  <div id="header">
    <img
      src="images/joanna.png"
      style={{ textAlign: "center" }}
      height="175"
      width="175"
      alt="Joanna Senseng"
    />
    <h1>Joanna Senseng</h1>
    <p>Perpetual Learner, WIT Advocate, DevOps Engineer</p>
  </div>
);

const Navbar = () => (
  <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          Joanna Senseng
        </a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a className="page-scroll" href="index.html">
              About Me
            </a>
          </li>
          <li>
            <a className="page-scroll" href="experience.html">
              Professional Experience
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="projects.html"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Projects <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="projects.html#bpe">Uber BP Engineering</a>
              </li>
              <li>
                <a href="projects.html#database">Database</a>
              </li>
              <li>
                <a href="projects.html#vscav">System Analysis & Design</a>
              </li>
              <li>
                <a href="projects.html#programming">C#:Income Calculator</a>
              </li>
              <li>
                <a href="projects.html#lan">Network Diagram </a>
              </li>
              <li>
                <a href="projects.html#vittles">Vittles: Food Delivering Drone </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="page-scroll" href="resume.html">
              Resume
            </a>
          </li>
          <li>
            <a className="page-scroll" href="personalproj.html">
              Personal Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const Quote = () => (
  <header className="major container 80%">
    <section id="quote"></section>
    <p>
      "Stay hungry, stay foolish"
      <br />-Steve Jobs
    </p>
  </header>
);

const FeatureSection = ({ side, image, alt, title, subtitle, items }) => (
  <section className={`feature ${side}`}>
    <a href="#" className="image icon fa-code">
      <img src={image} style={{ textAlign: "center" }} height="175" width="175" alt={alt} />
    </a>
    <div className="content">
      <h3>{title}</h3>
      {subtitle && <h5>{subtitle}</h5>}
      <ul className="default">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="feature left">
    <a href="#" className="image icon fa-code">
      <img src="images/skill.png" style={{ textAlign: "center" }} height="175" width="175" alt="" />
    </a>
    <div className="content">
      <h3>Skills:</h3>
      <h7>Solutioning:</h7>
      <ul className="default">
        <li>Automation, Cloud Technology, Data Analytics, Infrastructure as Code, Web Dev</li>
      </ul>
      <h7>Languages:</h7>
      <ul className="default">
        <li>Python, SQL, C#, Git, JavaScript, HTML, CSS</li>
      </ul>
      <h7>Tools</h7>
      <ul className="default">
        <li>
          Ansible, AWS, Docker, GitLab, GitHub, Jenkins, Kubernetes, MuleSoft, Power BI, Splunk, SQL
          Server, Tableau
        </li>
      </ul>
    </div>
  </section>
);

const TrainingSection = () => (
  <section className="feature right">
    <a href="#" className="image icon fa-code">
      <img src="images/learning.png" style={{ textAlign: "center" }} height="175" width="175" alt="" />
    </a>
    <div className="content">
      <h3>Completed Training</h3>
      <ul className="default">
        <li>AWS Cloud Practitioner</li>
        <li>AWS SysOps</li>
        <li>Kubernetes Bootcamp</li>
        <li>AnyPoint Platform Operations: Customer Hosted Runtimes</li>
        <li>RH294 - Red Hat Enterprise Linux Automation with Ansible</li>
        <li>DO274 - Introduction to Event-Driven Ansible</li>
        <li>DO374 - Developing Advanced Automation with Red Hat Ansible Automation Platform</li>
        <li>ServiceNow Administration Fundamentals</li>
        <li>ITSM Fundamentals on Demand</li>
      </ul>
    </div>
  </section>
);

const PersonalProjectsSection = () => (
  <section className="feature left">
    <a href="#" className="image icon fa-code">
      <img src="images/proj.png" style={{ textAlign: "center" }} height="175" width="175" alt="" />
    </a>
    <div className="content">
      <h3>Personal Projects:</h3>
      <h5>Amazon Alexa: Trivia Game</h5>
      <ul className="default">
        <li>Developed using AWS Lambda</li>
      </ul>
      <h3>Notification Alert for Stock Prices</h3>
      <ul className="default">
        <li>Developed using Python and Alpha Vantage API</li>
      </ul>
      <h5>Website: Pearlie Sweets Bakery</h5>
      <ul className="default">
        <li>Coming soon - Est 2021</li>
      </ul>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div id="footer">
      <h3>Let's Connect </h3>
      <a href="mailto:joannasenseng@gmail.com">Email</a>.<br />
      <a href="https://www.linkedin.com/in/joanna-senseng/">LinkedIn</a>.<br />
    </div>
  </footer>
);

function App() {
  return (
    <div id="page-top">
      <Header />
      <div id="main">
        <Navbar />
        <Quote />
        <section id="me"></section>
        <div id="me" className="box container">
          <FeatureSection
            side="left"
            image="images/vcubw.png"
            alt="VCU Snead Hall"
            title="Virginia Commonwealth University"
            subtitle="B.S. Information Systems"
            items={[
              "RamHacks",
              "Association of IT Professionals",
              "NSBE: Google Grant Scholar",
              "alpha Kappa Delta Phi"
            ]}
          />
          <FeatureSection
            side="right"
            image="images/work.png"
            alt=""
            title="Professional Experience:"
            items={[
              "Federal Reserve System",
              "CoStar Group",
              "Whitlock - Internship",
              "College Abacus - Internship",
              "Virginia Commonwealth University - Student Job"
            ]}
          />
          <SkillsSection />
          <TrainingSection />
          <PersonalProjectsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
