import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faEnvelope, faHome, faTools } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-sm">
      <div className="container">
          My Portfolio

        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}
          type="button" aria-label="Toggle navigation"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ScrollLink onClick={() => setIsOpen(false)}
                className="nav-link"
                to="about"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
              >
                <FontAwesomeIcon icon={faUser} /> About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink onClick={() => setIsOpen(false)}
                className="nav-link"
                to="skills"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
              >
                <FontAwesomeIcon icon={faTools} /> Skills
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink onClick={() => setIsOpen(false)}
                className="nav-link"
                to="projects"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
              >
                <FontAwesomeIcon icon={faFolderOpen} /> Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink onClick={() => setIsOpen(false)}
                className="nav-link"
                to="contact"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
              >
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;


