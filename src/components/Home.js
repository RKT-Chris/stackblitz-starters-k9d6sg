import React from 'react';

export default function Home() {
  return (
    <main id="Home">
      <section className="Home">
        <img
          src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
          alt="A picture of Chris Rakotohasy"
          className="pdp Home"
        />
        <div>
          <header className="Home">
            <h1>Hi, I'm Chris Rakotohasy</h1>
            <h3>High school student</h3>
          </header>
          <hr />
          <article className="Home">
            <div className="Home">
              <span className="property">Age</span>
              <span>14</span>
            </div>
            <div className="Home">
              <span className="property">ADRESS</span>
              <span className="value">93330, France, Neuilly-sur-marne</span>
            </div>
            <div className="Home">
              <span className="property">E-MAIL</span>
              <span className="value">chrisrakotohasy@gmail.com</span>
            </div>
            <div className="Home">
              <span className="property">PHONE</span>
              <span className="value">+33 6 52 24 55 80</span>
            </div>
          </article>
        </div>
      </section>
      <footer className="Home">
        <a className="Home">Twitter</a>
        <a className="Home">Instagram</a>
        <a className="Home">LinkedIn</a>
        <a className="Home">Github</a>
      </footer>
    </main>
  );
}
