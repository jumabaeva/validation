import { useState } from "react"

const Form = (props) => {
const [email,setEmail]=useState("")
const [validEmail,setValidEmail] = useState(false)

const [password,setPassword]=useState("")
const [validPassword,setValidPassword] = useState(false)

const [name,setName]=useState("")
const [validName,setValidName]=useState(false)

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    

const emailChangeHandler = (event) => {
    const emailValue = event.target.value
    setEmail(emailValue)
    const emailValid = validEmailRegex.test(emailValue)
    setValidEmail(emailValid)
   
}
const passwordChangeHandler = (event) => {
    const passwordValue = event.target.value
    setPassword(passwordValue)
    const passwordValid = passwordValue.length > 5
    setValidPassword(passwordValid)
}

const nameChangeHandler = (event) => {
    const nameValue = event.target.value
    setName(nameValue)
    const nameValid = Number(nameValue)
    setValidName(nameValid)
    
}

const isValid = validEmail && validPassword && validName



const submitHandler=(e)=>{
    e.preventDefault()
    props.textButton(isValid)
}

return (
    <form  onSubmit={submitHandler}>
    <input onChange={nameChangeHandler} type="text" placeholder="name"/>
    <input onChange={emailChangeHandler} type="email" placeholder="email"/>
    <input  onChange={passwordChangeHandler} type="password" placeholder="password" /> 
    <button disabled={!isValid}>Sign up</button>
    </form>

)
}
 export default Form