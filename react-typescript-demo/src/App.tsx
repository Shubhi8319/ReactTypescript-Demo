import './App.css';
import { AdvancedProps } from './Components/AdvancedProps';
import { Heading } from './Components/Heading';
import { Persons } from './Components/Persons';
import { Status } from './Components/Status';
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
  const propsTypesNames = [
    'Union of String Literals',
    'Children Type',
    'Children Type with React.ReactNode',
    'Optional Type'
  ] 
  return (
    <div className="App">
      <Status status='success'/>
      <Welcome name='Shubhangi'/>
      <Persons names={namesObj}/>
      <Heading>Advanced Props Types in React Typescript:</Heading>
      {
        propsTypesNames.map((propTypeName) => {
          return  <AdvancedProps><Heading>{propTypeName}</Heading></AdvancedProps>
        })
      }
    </div>
  );
}

export default App;
