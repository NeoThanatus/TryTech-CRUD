import { useState } from 'react'
import './App.css'
import Create from './components/create.tsx'
import Read from './components/read.tsx'
import Update from './components/update.tsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='main'>
        <h2 className='main-header'>TryTech Crud</h2>
        <div>
          <Create/>
          <Read />
        </div>
      </div>
    </Router>

  );
}

export default App;