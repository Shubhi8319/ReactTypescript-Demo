import { UserContext } from "./UserContext";
import { useContext } from "react";

export const ContextUser = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
            userContext.setUser({
                name: "Shubhangi",
                email: "shubhangi@example.com"
            })
    }
    
    const handleLogout = () => {
        userContext.setUser(null)
    }
    return(
       <>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleLogout}>LOGOUT</button>
        <div>User Name is: {userContext?.user?.name}</div>
        <div>User Email is: { userContext?.user?.email}</div>
       </>
    )
}