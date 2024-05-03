import { useState } from "react"
import Header from "./components/header/header"
import "./components/header/header.css"

function App() {
  const [option, setOption] = useState([
    // {all: (<h1>Nada</h1>), state: true},
    // {cad: (<h1>Tudo</h1>), state: false},
    // {vizu: (<h1>Quase</h1>), state: false}

    {page: "nada", state: true},
    {page: "tudo", state: false},
    {page: "metade", state: false}

  ])

  console.log("==================")
  // console.log(option)
  option.filter(x => x.state === true)

  console.log(Object.keys(option))

  option.map(x => {
    if(x.state == true){
      console.log(x.page)
    }}
  )

  return (
    <>
      <Header />
    </>
  )
}

export default App
