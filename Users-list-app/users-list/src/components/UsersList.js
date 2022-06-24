import {useState} from 'react'
const UsersList = ({users}) => {
    const [searchTerm,setSearchTerm] = useState("")
return (
<div>

<input type="text"  placeholder="Imię i nazwisko..." onChange={event => {setSearchTerm(event.target.value)}}/>
<table className="table table-dark table-striped">
  <thead className="columns">
    <tr >
      <th  scope="col">ID</th>
      <th  scope="col">Imię i nazwisko</th>
      <th  scope="col">Login</th>
      <th  scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    {users.filter((val)=>{
        if(searchTerm === ""){
            return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
        }
    }).map((val,key) => (
     <tr className="user" key={key}>
        <th  scope = "row">{val.id}</th>
        <td >{val.name}</td>
        <td >{val.username}</td>
        <td >{val.email}</td>
     </tr>
    ))}
  </tbody>
</table> 

</div>);  

}

export default UsersList;