import React from 'react'
import {Row, Col} from "antd"
import { useNavigate, } from 'react-router-dom'
import CardNew from '../../components/card/CardNew.jsx'
import {MainStyle} from './components/MainStyle'
import {getSegmentUrl} from '../../helper/helper'
import TabCard from '../../components/tab/TabCard.jsx'
import Loging from '../loging/Loging.jsx'
import Register from '../registers/Register.jsx'

function Mains() {
    const params = getSegmentUrl(1)
    const navigate = useNavigate()
    const Responsive = {
      md: 8,
      lg: 8,
    }

    const tabs = [
    {
      key: 1,
      name: 'เข้าสู่ระบบ',
      disabled: false,
      content: () => <>{params === 'login' || !params ? <Loging /> : ''}</>,
    },
    {
      key: 2,
      name: 'สมัครสมาชิก',
      disabled: false,
      content: () => <>{params === 'register' ? <Register /> : ''}</>,
    },
  ]

  return (
    <MainStyle>
        <Row className='row-login' >
            <Col {...Responsive}>
                <CardNew topic={'ยินดีต้อนรับสู่ Propertyhub'} icon="" toggledrop={'false'} style={{width: 500, hiegth: 549}} bordered={true}>
                    <TabCard
                        tab={tabs}
                        type="card"
                        activeKey={
                            params === 'login' || !params
                            ? '1'
                            : params === 'register'
                            ? '2'
                            : '1'
                        }
                        onTabClick={(key) => {
                            if (key === '1') {
                            navigate('/login', {
                            })
                            } else if (key === '2') {
                            navigate('/register', {
                            })
                            }
                        }}
                        />
                </CardNew>
            </Col>
        </Row>
    </MainStyle>
  )
}

export default Mains
