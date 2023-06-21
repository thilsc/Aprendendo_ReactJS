import React from 'react';
import Header from './Header';
import Button from './Button';
import Footer from './Footer';
import './style.css';

function App() {
  return (
    <div>
      <Header />
      <h1>Hello StackBlitz!</h1>
      {React.createElement('h5', null, 'Aprendendo REACT')}
      <Button />
      <Footer />
    </div>
  );
}

export default App;
