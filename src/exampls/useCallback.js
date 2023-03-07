import React, {useState, useCallback} from "react";
import ItemsList from "./config/itemsList";

function App(){

  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }
  
  const generateItemsFromAPI = useCallback(() =>{
    return new Array(count).fill('').map((_, i) => `Элемент ${i+1}`)
  }, [count])

  return(
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)} className="btn btn-success">Добавить</button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Изменить</button>

      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  )
  
}

export default App 