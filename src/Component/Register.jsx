import { useContext, useState } from "react"
import { myContext } from "./Context"
import { useNavigate } from "react-router-dom";

export default function Register(){

    const {user, setUser} = useContext(myContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav=useNavigate()


    const handleButtonClick = () => {
        const userData = {  name,email,password,
        };
        setUser([...user,userData]  );
       
        nav("/login");
        console.log("hlooo",user);

      };
      

    return(
        <div>
            <h1>Register </h1>
            <div className="register-body">
        <input
          
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
       
        <input
          
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button  onClick={handleButtonClick} type="submit">
          Submit 
        </button>
      </div>
        </div>
    )
}