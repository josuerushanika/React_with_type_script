import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}


function ListGroup({ items, heading }: Props) {
 

  // let selectedIndex =  0;

  //A hook is a functiont that allow us to tap into building feature in react
  //we tell react that a component will have data or state that will change over time 
  const [selectedIndex, setselectedIndex] = useState(0)
 

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => setselectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
