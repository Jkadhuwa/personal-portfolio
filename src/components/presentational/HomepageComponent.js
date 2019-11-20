import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import '../../common/styles/homepage.scss';

export default function HomepageComponent() {
  return (
    <div className="banner">
      <div className="intro-text">
        <h1>Musinda Kadhuwa</h1>
        <hr />
        <p>Web DEVELOPER • Programmer • Entreprenuer </p>
        <div className="social-links">
          <a
            href="https://twitter.com/jkadhuwa"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon className="social-link" icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://github.com/Jkadhuwa"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon className="social-link" icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/kadhuwa-musinda-a39346123/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon className="social-link" icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/msinda.kadhuwa"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon className="social-link" icon={faFacebook} size="lg" />
          </a>
        </div>
        <Link to={'/about'} className="page-scroll btn btn-lg">
          Learn More
        </Link>
      </div>
    </div>
  );
}
