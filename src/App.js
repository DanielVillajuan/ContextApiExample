import './App.css';
import PersonajeA from './PersonajeA';
import PersonajeB from './PersonajeB';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

function App() {
  const { setUser } = useContext(UserContext);

  const changeName = (name) =>{
    setUser(name)
  }

  return (
    <div className="App">
      <PersonajeA />
      <PersonajeB />
      <button onClick={changeName}>ClickMe!</button>
    </div>
  );
}

export default App;
