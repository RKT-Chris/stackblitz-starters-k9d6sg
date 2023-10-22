import React from 'react';
import ProgressBar from './Tool/ProgressBar.js';
export default function Skills() {
  return (
    <main id="Skills">
      <section className="Skills">
        <article className="Skills">
          <div className="Skills">
            <span>JS :</span>
            <ProgressBar percent="50" />
          </div>
          <hr />
          <div className="Skills">
            <span>C++ :</span>
            <ProgressBar percent="20" />
          </div>
          <hr />
          <div className="Skills">
            <span>HTML :</span>
            <ProgressBar percent="80" />
          </div>
        </article>
        <article className="Skills">
          <div className="Skills">
            <span>CSS :</span>
            <ProgressBar percent="80" />
          </div>
          <hr />
          <div className="Skills">
            <span>JAVA :</span>
            <ProgressBar percent="10" />
          </div>
          <hr />
          <div className="Skills">
            <span>PYTHON :</span>
            <ProgressBar percent="30" />
          </div>
        </article>
        <article className="Skills">
          <div className="Skills">
            <span>SQL :</span>
            <ProgressBar percent="20" />
          </div>
          <hr />
          <div className="Skills">
            <span>C :</span>
            <ProgressBar percent="10" />
          </div>
          <hr />
          <div className="Skills">
            <span>C# :</span>
            <ProgressBar percent="10" />
          </div>
        </article>
      </section>
      <footer className="Skills">
        <h1>My skills</h1>
      </footer>
    </main>
  );
}
