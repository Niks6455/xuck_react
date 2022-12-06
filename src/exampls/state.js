import React, {useState} from "react";

function ComputInitialCounter(){
  console.log("Some calculations...");
  return Math.trunc(Math.random()*20)
}
function App(){

 //const [counter, setCounter] = useState(0)//первая переменная - состояние, вторая фукция позволяющая изменить состояние 
 const [counter, setCounter] = useState(() => {
  return ComputInitialCounter()
 })




 const [state, setState] = useState({
  title: "Счётчик",
  date:Date.now()
  })
  function increment(){
    //setCounter(counter + 1)
    setCounter(prev => prev + 1)
  }

  function decrement(){
    setCounter(counter - 1)
  }

  function updateTitle(){
    setState(prev => {
      return{
        ...prev,
        title: "Новое название"
      }
    })
  }
  return(
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Добавить</button>
      <button onClick={decrement} className="btn btn-danger">Убрать</button>
      <button onClick={updateTitle} className="btn btn-default">Изменить</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App