import React, { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState< AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: "Shubhangi",
            email: "shubhangi@example.com"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return(
        <React.Fragment>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
            {user?.name && <div>User Name is: {user?.name}</div>}
            {user?.email && <div>User Email is: {user?.email}</div>}
        </React.Fragment>
    )
}