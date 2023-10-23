import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleAdd = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email};
    console.log(user);

    fetch('http://localhost:4000/users',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('Users added successfully')
        form.reset();
      }
    })
  }

  return (
    <>

      <h1>Simple CRUD</h1>
      <form onSubmit={handleAdd}>
        <input type="text" name='name' />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add" />
      </form>
      <Link to='/users'><button>Go Users</button></Link>
    </>
  )
}

export default App
