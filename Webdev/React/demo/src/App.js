import List from './components/List';
import Button from './components/Button';
import Card from './components/Card';

function App() {

  let listItems = ["Coffee", "Tea", "Beer"];

  const testFunction = () => {
    alert("funktioniert");
    console.log("test");
  }

  return (
    <div>
      <h1 className="bg-red-500">Hello</h1>
      <List listItems={listItems}/>
      <Button text='Sendar' fn={testFunction}/>
      <Card imgSrc='https://www.w3schools.com/howto/img_avatar.png'
        name="John Doe" title="Architect & Engineer"/>
    </div>
  );
}

export default App;
