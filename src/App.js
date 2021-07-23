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

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            {/* <Portfolio></Portfolio> */}
            {/* <Resume></Resume> */}
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
