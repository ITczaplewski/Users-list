//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Loading from './components/Loading';
import axios from 'axios'
import UsersList from './components/UsersList'

function App() {
  const[users, setUsers] = useState(null)

  useEffect (()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{setUsers(result.data)});
  }, []);

  return <div>{users ? <UsersList users={users}/> : <Loading /> }</div>;
}

export default App;
