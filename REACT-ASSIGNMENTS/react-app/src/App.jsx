import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setproducts] = useState([])

  useEffect(()=> {
    let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => 
        res.json()
      );
      setproducts(response)
    }
    fetchData()
  }, [])
  return (
    <div>
     {products?.map((item) => {
      let {id,name,username,email} = item;
      return(
        <div className='card' key={id}>
          <h2>Id : {id}</h2>
          <h1>Name : {name}</h1>
          <h2>User Name : {username}</h2>
          <h2>Email : {email}</h2>
        </div>
      )
     })}
    </div>
  )
}

export default App
