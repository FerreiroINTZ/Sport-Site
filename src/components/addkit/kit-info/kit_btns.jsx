import React, { useState } from 'react'

function kit_info({state, setKitName, add_kit, kits, kit_name}) {
    // const [kit_name, setKit_name] = useState("")
  return (
    <div id='kit-info'>
        <input className='inp' type="text" placeholder='Kit Name' onChange={x =>
        {
            setKitName(x.target.value)
        }}/>
        <div className='kit-info-action'>
            <button className='btn_kit-info save-btn' onClick={x =>{
                add_kit(kits, kit_name)
                state([
                    {page1: true},
                    {page2: false},
                    {page3: false},
                ])
            }}>Save</button>
            <button className='btn_kit-info delete-btn' onClick={x =>{
                state([
                    {page1: true},
                    {page2: false},
                    {page3: false},
                ])
            }}>Delete</button>
        </div>
    </div>
  )
}

export default kit_info