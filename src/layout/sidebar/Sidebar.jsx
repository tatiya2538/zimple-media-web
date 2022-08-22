import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, ToolOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const { Sider } = Layout

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const part = pathname.split('/')
  // console.log('location: ', pathname.split('/'))

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    }
  }

  const items = [
    getItem('Components', '/components', <ToolOutlined style={{ fontSize: '22px' }} />, [
      getItem('Card', '/components/card'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Option 1', '/', <PieChartOutlined style={{ fontSize: '22px' }} />),
    getItem('User', '/users', <DesktopOutlined style={{ fontSize: '22px' }} />),
    getItem('Team', 'sub2', <TeamOutlined style={{ fontSize: '22px' }} />, [
      getItem('Team 1', '6'),
      getItem('Team 2', '8'),
    ]),
    getItem('Files', '9', <FileOutlined style={{ fontSize: '22px' }} />),
  ]

  const onClick = (e) => {
    if (e.key === '/') {
      console.log('click', e)
      navigate(`${e.key}`)
    } else if (e.key === '/users') {
      console.log('click', e)
      navigate(`${e.key}`)
    } else if (e.key === '/components/card') {
      console.log('click', e)
      navigate(`${e.key}`)
    }
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[`${pathname}`]}
        defaultOpenKeys={[`/${part[1]}`]}
        mode="inline"
        items={items}
        onClick={onClick}
      />
    </Sider>
  )
}

export default Sidebar
