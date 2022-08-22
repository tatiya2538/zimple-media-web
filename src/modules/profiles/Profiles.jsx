import React, { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/client"
import { GET_USER } from "./graphql/Query"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

function Profiles() {
  const navigate = useNavigate()
  const [getUserFn, getUser] = useLazyQuery(GET_USER, {})
  const [data, setData] = useState([])

  useEffect(() => {
    if (getUser.data) {
      setData(
        getUser.data.getUser.map((e) => {
          return {
            UserFullName: e.UserFullName,
            UserEmail: e.UserEmail
          }
        })
      )
    }
  }, [getUser.data])

  return (
    <div>
      <Button
        onClick={() => {
          getUserFn()
        }}
      >
        Click
      </Button>
      {data &&
        data.map((i) => {
          return `UserFullName : ${i.UserFullName} UserEmail : ${i.UserEmail}`
        })}
      <Button
        onClick={() => {
          // localStorage.removeItem("user")
          navigate("/login")
        }}
      >
        Logout
      </Button>
    </div>
  )
}

export default Profiles
