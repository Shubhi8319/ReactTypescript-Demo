import './App.css';
import { AdvancedProps } from './Components/AdvancedProps';
import { Button } from './Components/Button';
import { ContextUser } from './Components/ContextUser';
import { Counter } from './Components/Counter';
import { Heading } from './Components/Heading';
import { Input } from './Components/Input';
import { Person } from './Components/Person';
import { PersonsList } from './Components/PersonsList';
import { Status } from './Components/Status';
import { Theme } from './Components/Theme';
import { ThemeContextProvider } from './Components/ThemeContext';
import { User } from './Components/User';
import { UserContext, UserContextProvider } from './Components/UserContext';
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
    <ThemeContextProvider>
      <div style={{backgroundColor: Theme.primary.main, color : Theme.primary.text}} className="App">
      <Status status='success'/>
      <Welcome name='Shubhangi'/>
      <PersonsList names={namesObj}/>
      <Heading>Advanced Props Types in React Typescript:</Heading>
      {
        propsTypesNames.map((propTypeName) => {
          return  <AdvancedProps><Heading>{propTypeName}</Heading></AdvancedProps>
        })
      }
      <Button handleClick={(event) => console.log("Clicked", event)}/>
      <Input handleChange={(event) => console.log(event.target.value)}/>
      <Person name={{first: "Roy", last: "Jon" }}/>
      {/* <User/> */}
      <UserContextProvider>
        <ContextUser/>
      </UserContextProvider>
      <Counter/>
    </div>
    </ThemeContextProvider>
  );
}

export default App;
