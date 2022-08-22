import React, { useState } from "react"

export const AuthContext = React.createContext("")
const ciphertext = localStorage.getItem("user") || ""
const authContext = ({ children }) => {
  const data = ciphertext
  const [userData, setUser] = useState({
    UserName: data?.UserName || null,
    UserFullName: data?.UserFullName || null,
    UserId: data?.UserId || null
  })

  return <AuthContext.Provider value={[userData, setUser]}>{children}</AuthContext.Provider>
}

export default authContext
