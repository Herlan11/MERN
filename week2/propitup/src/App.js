import PersonCard from './components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName={"Jennifer"}
      lastName={"Perez"}
      age={28}
      hairColor={"black"}/>
      <PersonCard 
      firstName={"Jany"}
      lastName={"Grullon"}
      age={12}
      hairColor={"black"}/>
      <PersonCard 
      firstName={"Julian"}
      lastName={"Alvarado"}
      age={7}
      hairColor={"black"}/>
      <PersonCard 
      firstName={"Jeremiah"}
      lastName={"Banegas"}
      age={11}
      hairColor={"black"}/>
    </div>
  );
}

export default App;
