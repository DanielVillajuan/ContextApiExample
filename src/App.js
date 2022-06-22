import logo from './logo.svg';
import './App.css';
import PersonajeA from './PersonajeA';
import PersonajeB from './PersonajeB';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

function App() {
  const {setUser} = useContext(UserContext)
  return (
    <div className="App">
      <PersonajeA />
      <PersonajeB />
      <button onClick={()=> { setUser('Leonardo') }}>ClickMe!</button>
    </div>
  );
}

export default App;
