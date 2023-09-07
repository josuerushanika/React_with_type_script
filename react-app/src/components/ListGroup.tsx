function ListGroup() {
  let items = ["Kinshasa", "Sanfroncisco", "Bakavu", "Kinshasa9"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
