import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [resorts, setResorts] = useState([]);
  const [form, setForm] = useState({ name: "", location: "", price: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5000/resorts")
      .then((res) => setResorts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/resorts", form);
    setResorts([...resorts, res.data]);
    setForm({ name: "", location: "", price: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/resorts/${id}`);
    setResorts(resorts.filter((r) => r.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🏝 Resort CRUD App</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={form.name}
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          value={form.location}
          placeholder="Location"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <input
          value={form.price}
          placeholder="Price"
          type="number"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button type="submit">Add Resort</button>
      </form>

      <ul>
        {resorts.map((r) => (
          <li key={r.id}>
            {r.name} — {r.location} — ${r.price}
            <button onClick={() => handleDelete(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
