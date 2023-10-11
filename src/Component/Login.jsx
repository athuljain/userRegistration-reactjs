import { useContext, useState } from "react"
import { myContext } from "./Context"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const {user}=useContext(myContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const nav=useNavigate()


    function loginBtn(){
        if(user.find((userData)=>userData.email === email && userData.password === password)){
           
            alert("Login successful !!!")
            nav("/home")
        }else{
            alert("invalid email or password")
        }
        
    }



    return(
        <div>
            <h1>Login Page</h1>
<div>
<input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
<br></br>
<button onClick={loginBtn} >Login</button>
</div>
        </div>
    )
}