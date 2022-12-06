import React, {useState, useEffect, useRef} from "react";


function App(){

  //const [renderCount, setrenderCount] = useState(1)
  const [value, setvalue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return(
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h1>Прошлое состояние: {prevValue.current}</h1>
      <input ref={inputRef} type="text" onChange={e => setvalue(e.target.value)} value={value} ></input>
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  )
}

export default App