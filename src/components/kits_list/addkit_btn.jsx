

function addkit({setState, state}) {
  // console.log(page)
  return (
    <div id='addkit'  onClick={() =>{ 
      setState([
        {page1: false},
        {page2: true},
        {page3: false}
      ])
      console.log(state)}
    }>
        <p>+</p>
    </div>
  )
}

export default addkit