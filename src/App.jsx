import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{marginBottom: '150px'}}>
        <Contact />
      </main><br />
      <Footer/>
    </div>
  );
}

export default App;