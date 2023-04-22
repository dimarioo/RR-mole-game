import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mole from './Components/Mole';
import MoleContainer from './Components/MoleContainer';
import EmptySlot from './Components/EmptySlot';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i< 9; i++){
      hills.push(
        <MoleContainer key= {i} setScore={setScore}
        score ={score} />
      )
    }

    return(
      <div>
        {hills}
      </div>
    )
  }
  return (
    <div className="App">
     <h1>React-a-Mole</h1>
     {score}
     {createMoleHill()}
    </div>
  );
}

export default App;
