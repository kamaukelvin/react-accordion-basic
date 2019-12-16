import React from 'react'
import Accordion from './components/Accordion'
import './App.css';



const App = () => {
  return (
    <div>
      <Accordion title="BIO DATA">
        <span className="accordion-text">SEX: Female</span>
      </Accordion>
      <Accordion title="B">
        <span className="accordion-text">bbbbbb</span>
      </Accordion>
      <Accordion title="C">
        <span className="accordion-text">cccccc</span>
      </Accordion>
    </div>
  )
}

export default App;
