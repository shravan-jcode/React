import { createContext, useEffect, useState } from "react"


const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const savedToken = localStorage.getItem("token")

        if (savedToken) {
            setIsLoggedIn(true)
            setToken(savedToken)

            setUser({
                name: "Shravan",
                emial: "shravan@gmail.com"
            })
        }
    }, [])

    function login() {
        const fakeToken = "abc123";

        localStorage.setItem("token", fakeToken)
        setToken(fakeToken)

        setIsLoggedIn(true)

        setUser({
            name: "Shravan",
            email: "shravan@gmail.com",
        });
    }

    function logout(){
        localStorage.removeItem("token")

        setToken(null)

        setIsLoggedIn(false)

        setUser(null)
    }

    return(
        <AuthContext.Provider 
        value={
            {
                isLoggedIn,
                token,
                user,
                login,
                logout,
            }
        }
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext