import React, { useContext, useEffect } from "react"
import { Layout } from "antd"
import Sidebar from "./sidebar/Sidebar"
// import Footer from './footer/Footer'
import Navbar from "./navbar/Navbar"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"
import { Alert } from "../components/alert/Alert"
// import useEffectOnce from '../utility/useEffectOnce'

const FullLayout = () => {
  const { Content } = Layout

  const [user] = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("FullLayout")
  }, [])

  useEffect(() => {
    if (!user.UserName) {
      Alert({
        type: "warning",
        title: "Please login",
        onOk: () => {
          setTimeout(() => {
            localStorage.removeItem("user")
            navigate("login")
          }, 200)
        }
      })
    }
  }, [user])

  return (
    <Layout
      style={{
        minHeight: "100vh"
      }}
    >
      <Sidebar />
      <Layout className="site-layout">
        <Navbar />
        <div style={{ overflowY: "auto", maxHeight: "calc(100vh - 64px)" }}>
          <Content
            style={{
              margin: "0 16px"
            }}
          >
            <Outlet />
          </Content>
          {/* <Footer /> */}
        </div>
      </Layout>
    </Layout>
  )
}

export default FullLayout
