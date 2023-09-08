import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {

  let items = ["Kinshasa", "Sanfroncisco", "Bakavu", "Kisangani"];
  return <div>
   
   <ListGroup items={items} heading="Cities"/>
  
  </div>
}

export default App;