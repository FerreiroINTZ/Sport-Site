import React, { useState } from 'react'
import  './kits_info.css'
import Kit_info from "./kit_info"

function kit_info({state, kit}) {
  console.log("=========================")
  console.log(kit[0])
  // const [gap, setGap] = useState((960 * 4) - (40 * 4) - 120 * 3);
  const [gap, setGap] = useState(5000);
  return (
    <div>
    <div id="main_kits-infos" style={{display: state[2].page3 ? "flex" : "none", marginLeft: `${gap}px`}}>
      {/* <button id="go-back">Voltar</button> */}
      {kit.map(x => 
        <Kit_info 
          img={x.img}
          nome={x.nome}
          link={x.link}
          marca={x.marca}
          preco={x.preco}
          comprado={x.cpmprado}
          gap={gap}
          setGap={setGap}
        />
      )}
    </div>
    </div>
  )
}

export default kit_info