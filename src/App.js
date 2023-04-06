import './App.css';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

function App() {
  const { consultingVersion } = useContext(UserContext);

  return (
    <div className="App">
    {console.log('jpña')}
      <button onClick={consultingVersion}>Consult version</button>
    </div>
  );
}

export default App;
