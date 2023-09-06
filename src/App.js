import './App.css';
import AssignmentMarks from './component/AssignmentMarks/AssignmentMarks';
import NavBar from './component/Navbar/NavBar';
import PhoneBar from './component/PhoneBar/PhoneBar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold'>This is should be big header</h1>
      <p>This is just a paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
