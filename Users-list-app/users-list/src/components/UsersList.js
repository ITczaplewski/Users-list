const UsersList = ({users}) => {
    return (<div>
<table className="table table-dark table-striped-columns">
  <thead>
    <tr >
      <th  scope="col">ID</th>
      <th  scope="col">Imię i nazwisko</th>
      <th  scope="col">Login</th>
      <th  scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
     <tr>
        <th  scope = "row">{user.id}</th>
        <td >{user.name}</td>
        <td >{user.username}</td>
        <td >{user.email}</td>
     </tr>
    ))}
  </tbody>
</table>
    </div>);
}

export default UsersList;