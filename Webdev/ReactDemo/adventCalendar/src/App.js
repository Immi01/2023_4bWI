import './App.css';
import Header from './Components/Header';
import Window from './Components/Window';

function App() {

  var Windows = Array.from(Array(24).keys());

  return (
    <div>
      <Header/>
      <div class='WindowsContainer'>
        {Windows.map(number => (<Window num={number}/>))}
      </div>
    </div>
  );
}

export default App;
