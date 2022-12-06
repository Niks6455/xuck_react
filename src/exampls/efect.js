import React, {useState, useEffect} from "react";

function App(){
  const [type, setType] = useState('users')
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  // useEffect(() =>{
  //   console.log('render');
  // })

   useEffect(() =>{
     console.log('Type change', type);
   }, [type])


   const mouseMoveHandler = event =>{
      setPos({
        x: event.clientX,
        y: event.clientY
      })
   }

   useEffect(() =>{
    console.log('ComponentDidMount');
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return(
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('Todo')}>Todo</button>
      <button onClick={() => setType('post')}>Посты</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default App