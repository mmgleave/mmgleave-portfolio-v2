import React, { useState } from 'react';
import './App.css';

// components
import About from './components/About'
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [projects] = useState([
    {
      image: 'med-planner.png',
      title: 'Med Planner',
      link: 'https://med-planner-app.herokuapp.com',
      repo: 'https://github.com/mmgleave/med-planner'
    },
    {
      image: 'note-taker.png',
      title: 'Note Taker',
      link: 'https://min-eur-note-taker.herokuapp.com/notes',
      repo: 'https://github.com/mmgleave/miniature-eureka-note-taker'
    },
    {
      image: 'blue-orchid.png',
      title: 'Blue Orchid Blog',
      link: 'https://blue-orchid-blog.herokuapp.com',
      repo: 'https://github.com/mmgleave/blue-orchid-blog'
    },
    {
      image: 'horiseon.png',
      title: 'Horiseon',
      link: 'https://mmgleave.github.io/horiseon/',
      repo: 'https://github.com/mmgleave/horiseon'
    },
    {
      image: 'quiz-game.png',
      title: 'JavaScript Quiz Game',
      link: 'https://mmgleave.github.io/quiz-game/',
      repo: 'https://github.com/mmgleave/quiz-game'
    },
    {
      image: 'weather.png',
      title: 'Weather Dashboard',
      link: 'https://mmgleave.github.io/weather-dashboard-01/',
      repo: 'https://github.com/mmgleave/weather-dashboard-01'
    }
  ])

  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {portfolioSelected ? (<Portfolio projects={projects}/>)
          : contactSelected ? (<ContactForm></ContactForm>)
          : resumeSelected ? (<Resume></Resume>)
          : <About></About>}

        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
