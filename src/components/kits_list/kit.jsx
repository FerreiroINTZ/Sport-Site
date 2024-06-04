

function kit({kit, state}) {
// console.log("=========================")
  // kit.kite.map(x => console.log(x))
  // console.log(kit)
  // kit[0].kite.map(x => console.log(x))
  return (
    <>
      {kit.map(x =>
          <div className="img">
              <img src={x.img} alt="nada" />
          </div>
      )}
    </>
  )
}

export default kit