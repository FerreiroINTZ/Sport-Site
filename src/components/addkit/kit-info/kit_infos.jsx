import React, { useState } from 'react'

function kitInfos({img, cad_rpa, id}) {
  
  // console.log(navigator.clipboard.writeText("nada"))
  // console.log(navigator.clipboard.readText().then(x => console.log(x)))

  const [img_link, setImg_link] = useState("")
  const [imgState, setImgState] = useState(true)
  // console.log(img)

  console.log(img_link)
  return (
    <div className='kit'>
      <label className="img" htmlFor="img-product" onClick={() =>
        {
          if(imgState){
            navigator.clipboard.readText().then(x => setImg_link(x))
            setImgState(false)
            cad_rpa(id, 1, img_link)
          }else{
            setImg_link(img)
            setImgState(true)
            cad_rpa(id, 1, img_link)
          }
        }
        // navigator.clipboard.readText().then(x => console.log(x))
      }>
        <img src={img_link ? img_link : img} alt="rpz" />
      </label>
      <div id="fields">
        <div id="field">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" onChange={x => cad_rpa(id, 2, x.target.value)}/>
        </div>

        <div id="field">
          <label htmlFor="link">Link:</label>
          <input type="text" id="link" onChange={x => cad_rpa(id, 3, x.target.value)}/>
        </div>

        <div id="field">
          <label htmlFor="marca">Marca:</label>
          <select name="marca" id="marca" onChange={x => cad_rpa(id, 4, x.target.value)}>
            <option value=""></option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div id="field">
          <label htmlFor="preco">Preço:</label>
          <input type="number" id="preco" onChange={x => cad_rpa(id, 5, x.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default kitInfos