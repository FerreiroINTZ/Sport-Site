
import AddKit from './addkit_btn.jsx'
import Kit from './kit.jsx'

function kits_list({kits, setState, state, id, setCurrent_kit}) {
    // console.log(Math.floor(Math.random()*1000))
    // console.log(kits[0].kite.bone.img)
    
  return (
    <div id="kits-list" style={{display: state ? "flex" : "none"}}>
        {kits.map(x =>
          <div id="kit-body" onClick={() => {setState(() => {
            return [
              {page1: false},
              {page2: false},
              {page3: true}
            ]})
            setCurrent_kit(x.kite)}
          }>
            <h2>{x.name}</h2>
            <Kit
              key={x.id}
              kit={x.kite}
              state={state}
              />
          </div>
        )}
        <AddKit 
        state={state}
        setState={setState}
        />
    </div>
  )
}

export default kits_list