import React, { useState } from 'react'
import  './kits_info.css'
import Kit_info from "./kit_info"
import arrow from './icons/back-pass_arrow.png'
import go_back from './icons/go-back_arrow.png'

function kit_info({state, kit, setPageState}) {
  console.log("=========================")
  const [showStates, setShowStates] = useState([
    {state1: true},
    {state2: false},
    {state3: false},
    {state4: false},
  ])

  const [index_item, setIndexItem] = useState(0)
  return (
    <div className='kits-info-body' style={{display: state ? "flex" : "none"}}>
      <button className='go-back-infos' onClick={() => setPageState(
          [
            {page1: true},
            {page2: false},
            {page3: false}
          ]
      )}>
        <img src={go_back}/>
      </button>
      <button 
      class="arrow left-arrow" 
      onClick={() => index_item > 0 ? setIndexItem( index_item - 1) : setIndexItem(0)
      }
      style={{display: index_item > 0 ? "block" : "none"}}>
        <img src={arrow}/>
      </button>
      
        <Kit_info 
          key={Math.floor(Math.random() * 10)}
          img={kit[index_item].img}
          nome={kit[index_item].nome}
          link={kit[index_item].link}
          marca={kit[index_item].marca}
          preco={kit[index_item].preco}
          comprado={kit[index_item].cpmprado}
          state={showStates[index_item]}
          />
      <button
        class="arrow right-arrow" 
        onClick={() => index_item < 3 ? setIndexItem( index_item + 1) : setIndexItem(3)
      }
        style={{display: index_item < 3 ? "block" : "none"}}>
        <img src={arrow}/>
        </button>
    </div>
  )
}

export default kit_info