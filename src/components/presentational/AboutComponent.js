import React, { Fragment } from 'react';
import Navbar from '../layouts/NavbarComponent';
import '../../common/styles/about.scss';
import avatar from '../../common/imgs/Image.jpg';
import ansible from '../../common/imgs/ansible.png';
import node from '../../common/imgs/node.png';
import javascript from '../../common/imgs/javascript.jpeg';
import reactjs from '../../common/imgs/reactjs.png';
import bash from '../../common/imgs/bash.png';

const AboutComponent = () => {
  return (
    <Fragment>
      <Navbar className="mb-5" />
      <div className="page-title col-8 offset-2">
        <h1>About Me</h1>
        <hr />
        <div className="avatar-box">
          <img className="avatar" src={avatar} />
        </div>
      </div>
      <p></p>

      <h4 className="skills-title">Skills</h4>
      <div className="skills-container">
        <div className="skills">
          <img src={bash} />
        </div>
        <div className="skills">
          <img src={ansible} />
        </div>
        <div className="skills">
          <img src={javascript} />
        </div>
        <div className="skills">
          <img src={node} />
        </div>
        <div className="skills">
          <img src={reactjs} />
        </div>
      </div>
      <div className="btn-portfolio">
        <a href="/Portfolio" className="page-scroll btn btn-lg">
          My Portfolio
        </a>
      </div>
    </Fragment>
  );
};

export default AboutComponent;
