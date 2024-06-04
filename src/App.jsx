import { useState } from "react"
import Header from "./components/header/header"
import KitsList from "./components/kits_list/kits_list.jsx"
import NewKit from "./components/addkit/new_kit.jsx"
import KitInfo from "./components/kitInfo/kits_info.jsx"

import "./components/kits_list/kits_list.css"
import "./components/header/header.css"
import "./components/addkit/new_kit.css"

import Bone from "./components/kits_list/imgs/bonev2.png"
import Calsa from "./components/kits_list/imgs/calsav2.png"
import Camisa from "./components/kits_list/imgs/camisav2.png"
import Tenis from "./components/kits_list/imgs/tenisv2.png"

function App() {
  
  
  const [kits, setkits] = useState([
    {
      name: "primeiro kit",
      id: Math.random(),
      kite: [
              {
                img: (Bone),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              },
              {
                img: (Camisa),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              },
              {
                img: (Calsa),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              },
              {
                img: (Tenis),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              }
            ]
    },
    {
      name: "primeiro kit",
      id: Math.random(),
      kite: [
              {
                img: (Bone),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              },
              {
                img: (Camisa),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              },
              {
                img: (Calsa),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              },
              {
                img: (Tenis),
                nome: "nada",
                link: "vazio",
                marca: "nenhuma",
                preco: "R$0,00",
                comprado: false
              }
            ]
    }
  ])

  const add_kit = (kit, kit_name) =>{
    setkits(x => {return [...kits, 
      {name: kit_name,
      id: Math.floor(Math.random() *1000),
      kite: kit}
    ]})
  }
  console.log(kits)

  const [pageState, setPageState] = useState(
  [
    {page1: true},
    {page2: false},
    {page3: false}
  ])

  const [current_kit, setCurrent_kit] = useState([
    {
    img: (Tenis),
    nome: "nada",
    link: "vazio",
    marca: "nenhuma",
    preco: "R$0,00",
    comprado: false
  }])

  return (
    <>
        <button onClick={x => console.log(kits)}>Show</button>
        <Header />
        <section id="section-pages">

          <KitsList
          kits={kits}
          id={kits.id}
          state={pageState[0].page1}
          setState={setPageState}
          setCurrent_kit={setCurrent_kit}
          />

          <NewKit 
            estado={pageState[1].page2}
            setState={setPageState}
            add_kit={add_kit}
            roupas={
              [
                {img: Bone, id:1},
                {img: Camisa, id:2},
                {img: Calsa, id:3},
                {img: Tenis, id:4},
              ]
            }
          />

          <KitInfo 
            kit={current_kit}
            state={pageState}
          />

        </section>
    </>
  )
}

export default App
