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
      image: '',
      title: '',
      link: '',
      repo: ''
    },
    {
      image: '',
      title: '',
      link: '',
      repo: ''
    },
    {
      image: '',
      title: '',
      link: '',
      repo: ''
    },
    {
      image: '',
      title: '',
      link: '',
      repo: ''
    },
    {
      image: '',
      title: '',
      link: '',
      repo: ''
    },
    {
      image: '',
      title: '',
      link: '',
      repo: ''
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
        {resumeSelected ? (<Resume></Resume>)
          : contactSelected ? (<ContactForm></ContactForm>)
            : portfolioSelected ? (<Portfolio></Portfolio>)
              : (<About></About>)
        }
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
