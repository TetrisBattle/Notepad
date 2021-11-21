import React from "react"
// import MyButton from "../components-MUI/MyButton"
import MyDialog from "../components-MUI/MyDialog"
// import { Button } from "@mui/material"
// import MyButton from "../components-MUI/MyButton.jsx"
// import { 
//   getNode, 
//   addClass, 
//   removeClass, 
//   toggleClass 
// } from "./usefull/ClassHandler"

const Sandbox = () => {
  const counter = React.useRef(0)
  const [print, setPrint] = React.useState(`Counter: ${counter.current}`)
  const myRef = React.createRef()
  
  //init
  // React.useEffect(() => {
  //   console.log("init")
  //   console.log("end of init")
  // }, [])
  
  React.useEffect(() => {
    // console.log(myRef.current)
    // myRef.current.click()
  }, [myRef])
  
  const printCounter = () => {
    counter.current++
    setPrint(() => `Counter: ${counter.current}`)
    console.log(counter.current)
  }
  
  const test1 = () => {
    console.log("test1")
    
    // myRef.current.openDialog()
    // myRef.current.click()
    // addClass(".testArea", "addedClass")
    // console.log(getNode(".testArea"))
    
    console.log("end of test1")
  }
  
  // const test3 = () => {
  //   console.log(MyDialog.toggleDialogState())
  // }
  
  const buttonClick = () => {
    console.log("something")
  }
  
  // const button = <MyButton text="MyDialogButton" onClick={() => { console.log("button clicked") }} />
  const button = <button onClick={ buttonClick } />
  
  return(
    <div id="sandbox">
      <header><h1 className="title">Sandbox</h1></header>
      
      <section className="printSection">
        <h2>{print}</h2>
        <button onClick={printCounter}>Print</button>
      </section>
      
      <section className="testArea">
        <h2>Test buttons</h2>
        
        <div className="testButtonsContainer">
          <button onClick={test1}>Test1</button>
          <MyDialog 
            button={button}
            openDialogButtonRef={myRef}
            buttonText="testDialog"
            content={<div>asd</div>}
          />
        </div>
      </section>
    </div>
  )
}

export default Sandbox