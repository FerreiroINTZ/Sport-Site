import React from 'react'

function kit_info({img, nome, link, marca, preco, comprado, setGap, gap}) {
    console.log(nome)
  return (
    <div className='kits_info'>
        <div className="img infos">
            <img src={img} alt="nada" />
        </div>
        <ul className="infos">
            <li>Nome: {nome}</li>
            <li>Link: {link}</li>
            <li>Marca: {marca}</li>
            <li>Preço: {preco}</li>
            <li>Comprado: {comprado ? "Sim" : "Não"}</li>
        </ul>
        <button onClick={() => setGap(gap - 2280)}>Avancar</button>
    </div>
  )
}

export default kit_info