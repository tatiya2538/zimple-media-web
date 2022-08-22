import React, { useContext } from "react"
import { Layout, Menu, Row, Col, Dropdown, Avatar } from "antd"
import { NavbarStyles, MenuStyle } from "./NavbarStyle"
import { UserOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"

const AvatarTitle = ({ name, dep, code }) => {
  return (
    <div className="profile" style={{ flexDirection: "column" }}>
      <div className="name">{name}</div>
      <div className="dep">{dep}</div>
      <div className="code">{code}</div>
    </div>
  )
}

const Navbar = () => {
  const { Header } = Layout
  const navigate = useNavigate()
  const [user] = useContext(AuthContext)
  // eslint-disable-next-line no-unused-vars
  const menu = (
    <MenuStyle>
      <Menu>
        <Menu.Item key="0">{/* <span>Profile</span> */}</Menu.Item>
        <Menu.Item
          key="1"
          onClick={() => {
            localStorage.removeItem("user")
            // setUser({ loginName: null })
            // navigate('login')
            // navigate('login', { state: 'test' })
          }}
        >
          <span>Log Out</span>
        </Menu.Item>
      </Menu>
    </MenuStyle>
  )

  const menu2 = (
    <MenuStyle>
      <Menu
        items={[
          {
            key: "1",
            label: <span>Log Out</span>,
            onClick: () => {
              localStorage.removeItem("user")
              navigate("login")
            }
          }
        ]}
      />
    </MenuStyle>
  )

  return (
    <NavbarStyles>
      <Header className="header">
        <Row>
          <Col lg={{ span: 3 }} md={{ span: 3 }} sm={{ span: 3 }}></Col>
          <Col
            lg={{ span: 4, offset: 17 }}
            md={{ span: 6, offset: 15 }}
            sm={{ span: 10, offset: 9 }}
            xs={{ span: 9, offset: 8 }}
          >
            <div style={{ display: "flex", justifyContent: "end" }}>
              <AvatarTitle name={user.UserName} dep={user.UserFullName} code={user.code} />
              <div className="avatar">
                <Dropdown overlay={menu2} trigger={["click"]} placement="bottom" style={{ left: "1100px" }}>
                  <Avatar size={47} icon={<UserOutlined />} />
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </Header>
    </NavbarStyles>
  )
}

export default Navbar
