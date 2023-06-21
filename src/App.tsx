import React from 'react';
//import './style.css';

function HelloStackBlitz() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {React.createElement('h1', null, 'Aprendendo REACT')}
      {React.createElement('h5', null, 'Aprendendo REACT')}
    </div>
  );
}

function App() {
  return HelloStackBlitz();
}

export default App;
