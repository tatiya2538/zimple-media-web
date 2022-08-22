import React, { useEffect } from "react"
import { Button, Form, Input, Row, Col, Typography, Spin } from "antd"
import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { LoginStyle } from "./components/LoginStyle"
import { LOGIN } from "./graphql/Mutation"
// import { encryptData } from "../../utilitys/crypto"

function Loging() {
  const [form] = Form.useForm()
  const { Link } = Typography //Text,
  const navigate = useNavigate()
  const [loginFn, { loading: loadingSave, error: errorSave, data: dataSave }] = useMutation(LOGIN)

  const onFinish = (values) => {
    console.log("Success:", values)
    loginFn({
      variables: {
        input: {
          username: values.useremail,
          password: values.password
        }
      }
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  useEffect(() => {
    if (dataSave) {
      console.log(dataSave)
      // localStorage.setItem("user", encryptData(dataSave.login))
      const result = dataSave.login
      const ciphertext = result
      localStorage.setItem("user", ciphertext)
      navigate("/profiles")
    }
  }, [dataSave])

  console.log(errorSave)

  return (
    <LoginStyle>
      {loadingSave && <Spin />}
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="อีเมล"
          name="useremail"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input placeholder="อีเมล" />
        </Form.Item>
        <Form.Item
          label="รหัสผ่าน"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password placeholder="รหัสผ่าน" />
        </Form.Item>
        <Form.Item>
          <Row align={"middle"}>
            <Col sm={8}></Col>
            <Col sm={8}></Col>
            <Col sm={8} style={{ textAlign: "right", marginBottom: "2%" }}>
              <Link href="#" target="_blank">
                ลืม Password?
              </Link>
            </Col>
          </Row>
          <Row gutter={[16, 8]}>
            <Col sm={24} md={24} lg={24}>
              <Button className="btn-login" type="primary" htmlType="submit" block>
                เข้าสู่ระบบ
              </Button>
            </Col>
          </Row>
          {/* <Row>
            <Col sm={8}><hr /></Col>
            <Col sm={8}><Labels>หรือเชื่อมต่อด้วย</Labels></Col>
            <Col sm={8}><hr /></Col>
        </Row> */}
        </Form.Item>
      </Form>
    </LoginStyle>
  )
}

export default Loging
