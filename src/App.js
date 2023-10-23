import { useState } from "react";
import Form from "./components/Form";

function App () {
  const  [state,setState]= useState(false)
  const textButton =()=>{
    setState(true)
  }
 return (
  <div>
    <Form textButton={textButton}/>
{state && <h1>Hello World</h1>}
  </div>
 )
}
export default App 