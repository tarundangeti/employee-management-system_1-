import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const fetchEmployees = async () => {
    const response = await axios.get('/api/employees');
    setEmployees(response.data);
  };

  const addEmployee = async () => {
    await axios.post('/api/employees', { name, role });
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Management System</h1>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
      <button onClick={addEmployee}>Add</button>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;