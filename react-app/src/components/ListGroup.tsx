
function ListGroup() {
 const items = [
    'Kinshasa',
    'Sanfroncisco',
    'Bakavu',
    'Kinshasa'  
 ];

 

  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
        {items.map(item => <li>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
