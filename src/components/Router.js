import React from 'react';
import Skills from './Skills.js';
import Home from './Home.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import CSS from './Portfolio/CSS.js';
import JS from './Portfolio/JS.js';

export default function Router(props) {
  switch (props.route) {
    case 'Home':
      return <Home />;
    case 'Skills':
      return <Skills />;
    case 'Experience':
      return <Experience />;
    case 'Contact':
      return <Contact />;
    case 'CSS':
      return <CSS />;
    case 'JS':
      return <JS />;
  }
}
