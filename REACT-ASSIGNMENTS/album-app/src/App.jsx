import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setproducts] = useState([])

  useEffect(()=> {
    let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/albums")
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
      let {id,userId,title} = item;
      return(
        <div className='card' key={id}>
          <h2>Id : {userId}</h2>
          <h2>Title : {title}</h2>
        </div>
      )
     })}
    </div>
  )
}

export default App
