import React, { useState } from 'react';
import './App.css';

// components
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
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

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
          <Contact></Contact>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
