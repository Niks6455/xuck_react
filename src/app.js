import React, {useState, useEffect, useRef, useMemo} from "react";

function complexCompute(num){
  let i = 0;
  while(i < 1000000000) i++
  return num * 2
}

function App(){

  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

const styles = useMemo(() => ({
  color: colored ? 'darkred' : 'black'
}), [colored])
  

  const computed = useMemo( () => {
    return complexCompute(number) 
  }, [number])

useEffect(() => {
 console.log("style Change");
}, [styles])
  return(
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-success">Добавить</button>
      <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-danger">Убрать</button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Изменить</button>
    </div>
  )
}

export default App 