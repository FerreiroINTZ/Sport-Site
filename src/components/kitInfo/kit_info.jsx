import React from 'react'

function kit_info({img, nome, link, marca, preco, comprado, state}) {
    console.log(nome)
  return (
    <div className='kits_info' style={{display: state ? "flex" : "none"}}>
        <div className="img cap-img">
            <img src={img} alt="nada" />
        </div>
        <ul className="infos">
            <li>
              <span className="list-font-key">Nome:</span>
              <span className="list-font-val">{nome}</span>
            </li>
            <li>
              <span className="list-font-key">Link:</span>
              <span className="list-font-val">{link}</span>
            </li>
            <li>
              <span className="list-font-key">Marca:</span>
              <span className="list-font-val">{marca}</span>
            </li>
            <li>
              <span className="list-font-key">Preço:</span>
              <span className="list-font-val">{preco}</span>
            </li>
            <li>
              <span className="list-font-key">Comprado:</span>
              <span className="list-font-val">{comprado ? "Sim" : "Não"}</span>
            </li>
        </ul>
    </div>
  )
}

export default kit_info