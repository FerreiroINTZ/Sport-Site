import React, { useState } from 'react'
import KitBtns from "./kit-info/kit_btns"
import KitInfos from "./kit-info/kit_infos"

function addKit({estado, setState, roupas, add_kit}) {

  const [kitName, setKitName] = useState("Kit")
  const [kit_1, setKit_1] = useState({
    id: (Math.floor(Math.random() * 100)),
    img: (roupas[0].img),
    nome: "",
    link: "",
    marca: "",
    preco: "",
    comprado: false
  })
  const [kit_2, setKit_2] = useState({
    id: (Math.floor(Math.random() * 100)),
    img: (roupas[1].img),
    nome: "",
    link: "",
    marca: "",
    preco: "",
    comprado: false
  })
  const [kit_3, setKit_3] = useState({
    id: (Math.floor(Math.random() * 100)),
    img: (roupas[2].img),
    nome: "",
    link: "",
    marca: "",
    preco: "",
    comprado: false
  })
  const [kit_4, setKit_4] = useState({
    id: (Math.floor(Math.random() * 100)),
    img: (roupas[3].img),
    nome: "",
    link: "",
    marca: "",
    preco: "",
    comprado: false
  })
  const [kit_all, setKit_all] = useState()

  const cadastrando_roupa = (index_comp, index_field, roupa) =>{
    switch (index_comp){
      case 1:
        // setKit_1(x => {return {...kit_1, img: roupa}})
        switch (index_field){
          case 1:
            setKit_1(x => {return {...kit_1, img: roupa}})
            console.log(kit_1.img)
          break;
          case 2:
            setKit_1(x => {return {...kit_1, nome: roupa}})
            console.log(kit_1.nome)
          break;
          case 3:
            setKit_1(x => {return {...kit_1, link: roupa}})
            console.log(kit_1.link)
          break;
          case 4:
            setKit_1(x => {return {...kit_1, marca: roupa}})
            console.log(kit_1.marca)
          break;
          case 5:
            setKit_1(x => {return {...kit_1, preco: roupa}})
            console.log(kit_1.preco)
          break;
        }
      break;
      case 2:
        switch (index_field){
          case 1:
            setKit_2(x => {return {...kit_2, img: roupa}})
            console.log(kit_2.img)
          break;
          case 2:
            setKit_2(x => {return {...kit_2, nome: roupa}})
            console.log(kit_2.nome)
          break;
          case 3:
            setKit_2(x => {return {...kit_2, link: roupa}})
            console.log(kit_2.link)
          break;
          case 4:
            setKit_2(x => {return {...kit_2, marca: roupa}})
            console.log(kit_2.marca)
          break;
          case 5:
            setKit_2(x => {return {...kit_2, preco: roupa}})
            console.log(kit_2.preco)
          break;
        }
        // setKit_2(x => {return {...kit_2, img: roupa}})
      break;
      case 3:
        switch (index_field){
          case 1:
            setKit_3(x => {return {...kit_3, img: roupa}})
            console.log(kit_3.img)
          break;
          case 2:
            setKit_3(x => {return {...kit_3, nome: roupa}})
            console.log(kit_3.nome)
          break;
          case 3:
            setKit_3(x => {return {...kit_3, link: roupa}})
            console.log(kit_3.link)
          break;
          case 4:
            setKit_3(x => {return {...kit_3, marca: roupa}})
            console.log(kit_3.marca)
          break;
          case 5:
            setKit_3(x => {return {...kit_3, preco: roupa}})
            console.log(kit_3.preco)
          break;
        }
        // setKit_3(x => {return {...kit_2, img: roupa}})
      break;
      case 4:
        switch (index_field){
          case 1:
            setKit_4(x => {return {...kit_4, img: roupa}})
            console.log(kit_4.img)
          break;
          case 2:
            setKit_4(x => {return {...kit_4, nome: roupa}})
            console.log(kit_4.nome)
          break;
          case 3:
            setKit_4(x => {return {...kit_4, link: roupa}})
            console.log(kit_4.link)
          break;
          case 4:
            setKit_4(x => {return {...kit_4, marca: roupa}})
            console.log(kit_4.marca)
          break;
          case 5:
            setKit_4(x => {return {...kit_4, preco: roupa}})
            console.log(kit_4.preco)
          break;
        }
        // setKit_4(x => {return {...kit_2, img: roupa}})
      break;
    }
  }

  // console.log(kit_info[0].comprado)
  return (
    <div id="addkit-body" style={{display: estado ? "flex" : "none"}}>
        <KitBtns 
        state={setState}
        setKitName={setKitName}
        kit_name={kitName}
        add_kit={add_kit}
        kit_all={kit_all}
        kits={
          [kit_1, kit_2, kit_3, kit_4]
        }
        />
        <div id="rpa">
          {
            roupas.map(x => 
                <KitInfos 
                key={x.id}
                id={x.id}
                img={x.img}
                cad_rpa={cadastrando_roupa}
              />
              )
          }
        </div>
    </div>
  )
}

export default addKit