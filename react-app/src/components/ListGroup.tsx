
function ListGroup() {
 const items = [
    'Kinshasa',
    'Sanfroncisco',
    'Bakavu',
    'Kinshasa9'  
 ];

 

  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
        {items.map(item => <li key={item} >{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
