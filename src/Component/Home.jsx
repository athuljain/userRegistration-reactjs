import { useContext } from "react"
import { myContext } from "./Context"

export default function Home(){
        const {user,logUser} =useContext(myContext)
        console.log(user);
        console.log("loguser",logUser)
        console.log("loguser name",logUser.name)
        
    return(
        <div>
            <h1>Home Page</h1>
            <h3>welcome : {logUser.name}</h3>
        </div>
    )
}