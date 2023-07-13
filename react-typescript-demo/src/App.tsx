import './App.css';
import { Persons } from './Components/Persons';
import { Welcome } from './Components/Welcome';

function App() {
  const namesObj = [
    {
      first: "John",
      last: "Deo"
    },
    {
      first: "Joy",
      last: "Watson"
    }
  ]
  return (
    <div className="App">
      <Welcome name='Shubhangi'/>
      <Persons names={namesObj}/>
    </div>
  );
}

export default App;
