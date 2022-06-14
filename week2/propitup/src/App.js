import PersonCard from './components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName={"Jennifer"}
      lastName={"Perez"}
      initialAge={28}
      hairColor={"black"}/>
      <PersonCard 
      firstName={"Jany"}
      lastName={"Grullon"}
      initialAge={12}
      hairColor={"black"}/>
      <PersonCard 
      firstName={"Julian"}
      lastName={"Alvarado"}
      initialAge={7}
      hairColor={"black"}/>
      <PersonCard 
      firstName={"Jeremiah"}
      lastName={"Banegas"}
      initialAge={11}
      hairColor={"black"}/>
    </div>
  );
}
//Git Comment
export default App;
