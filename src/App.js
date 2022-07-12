import { useState } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  const [users,setUsers] = useState([]);
  return (
    <Layout>
      <Navbar></Navbar>
      <Signup users={users} setUsers={setUsers}></Signup>
    </Layout>
  );
}

export default App;
