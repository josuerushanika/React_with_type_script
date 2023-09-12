import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios
        .get<User[]>("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data);
      }
       catch (err) {
        setError((err as AxiosError).message);
       }
    }
     
    fetchUser();
    //get -> await  promise -> res  / erro
   
      // .then((res) => setUsers(res.data))
      // .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <p className="text-danger">{error}</p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
