import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Users List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ margin: "10px 0", cursor: "pointer", color: "blue" }}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h2>Details for {selectedUser.name}</h2>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
          <button onClick={() => setSelectedUser(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
