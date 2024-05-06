import { useState } from "react"
import Header from "./components/header/header"
import KitsList from "./components/kits-list/kits_list"
import "./components/header/header.css"

function App() {
  const [option, setOption] = useState([
    {page: (<KitsList/>), state: true},
    {page: (<h1>Tudo</h1>), state: false},
    {page: (<h1>Quase</h1>), state: false}

    // {page: "nada", state: true},
    // {page: "tudo", state: false},
    // {page: "metade", state: false}

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
        <section id="section-pages">

          {option.filter(x => x.state == true)
          .map(x => x.page)}

        </section>
    </>
  )
}

export default App
