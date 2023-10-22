import React from 'react';
import './style.css';
import Router from './components/Router';
import React, { useState } from 'react';
import $ from 'jquery';

export default function App(props) {
  const [route, setRoute] = useState('Home');
  function clickHome() {
    setRoute('Home');
    props.ChangeRouter('Home');
  }
  function clickSkills() {
    setRoute('Skills');
    props.ChangeRouter('Skills');
  }
  function clickExp() {
    setRoute('Experience');
    props.ChangeRouter('Experience');
  }
  function clickContact() {
    setRoute('Contact');
    props.ChangeRouter('Contact');
  }
  function submenu() {
    $('#submenu').slideToggle(500);
  }
  function clickCSS() {
    setRoute('CSS');
    props.ChangeRouter('CSS');
  }
  function clickJS() {
    setRoute('JS');
    props.ChangeRouter('JS');
  }
  return (
    <div>
      <div id="background"></div>
      <header id="header">
        <h1 id="PageTitle">Chris Rakotohasy</h1>
        <div id="tabs">
          <div className="tab" id="tab5" onMouseUp={clickHome}>
            HOME
          </div>
          <div className="tab" id="tab1" onMouseUp={clickSkills}>
            SKILLS
          </div>
          <div className="tab" id="tab2">
            <div id="portfolio" onMouseUp={submenu}>
              PORTFOLIO
            </div>
            <div id="submenu">
              <div className="submenu" onClick={clickCSS}>
                CSS project
              </div>
              <div className="submenu" onClick={clickJS}>
                JS project
              </div>
              <div className="submenu">other project</div>
            </div>
          </div>
          <div className="tab" id="tab3" onMouseUp={clickExp}>
            EXPERIENCE
          </div>
          <div className="tab" id="tab4" onMouseUp={clickContact}>
            CONTACT
          </div>
        </div>
      </header>
      <Router route={route} />
    </div>
  );
}
