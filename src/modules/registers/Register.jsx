import React, { useEffect } from "react"
import { Button, Form, Input, Row, Col, Spin } from "antd" //Typography
import { useNavigate } from "react-router-dom"
import { RegisterStyle } from "./components/RegisterStyle"
import { useMutation } from "@apollo/client/react"
import { Alert } from "../../components/alert/Alert"
import { SAVEUSERS } from "./GraphQL/Mutation"

function Register() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  // const { Text, Link } = Typography;

  // const [chkPassword, setChkPassword] = useState("")
  const [saveUserFn, { loading: loadingSave, error: errorSave, data: dataSave }] = useMutation(SAVEUSERS)

  const onFinish = (values) => {
    delete values.confirm_password
    console.log("Success:", values)
    Alert({
      type: "confirm",
      title: "กดยืนยันเพื่อบันทึกข้อมูล",
      onOk: async () => {
        console.log("save ----> ")
        await saveUserFn({
          variables: {
            input: values
          },
          fetchPolicy: "no-cache"
        })
      },
      // onCancel() {
      //   return null
      // }
      onCancel() {}
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  useEffect(() => {
    if (dataSave) {
      console.log(`dataSave ----> ${dataSave}`)
      Alert({
        type: "success",
        title: "บันทึกสำเร็จ",
        onOk() {
          navigate("/login", {})
        }
      })
    }
    if (errorSave) {
      console.log(`errorSave ----> ${errorSave}`)
      Alert({
        type: "error",
        title: "ไม่สามารถบันทึกข้อมูลได้",
        content: errorSave[0],
        onOk() {}
      })
    }
  }, [dataSave, errorSave])

  // useEffect(() => {
  //   console.log(`errorSave ----> ${errorSave}`)
  //   if (errorSave) {
  //     Alert({
  //       type: "error",
  //       title: "ไม่สามารถบันทึกข้อมูลได้",
  //       content: errorSave[0],
  //       onOk() {}
  //     })
  //   }
  // }, [errorSave])

  return (
    <RegisterStyle>
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
        <Form.Item label="ชื่อ - นามสกุล" name="UserFullName">
          <Input placeholder="ชื่อ - นามสกุล" />
        </Form.Item>
        <Form.Item
          label="อีเมล"
          name="UserEmail"
          rules={[
            {
              required: true,
              message: "Please input your email!"
            }
          ]}
        >
          <Input placeholder="อีเมล" />
        </Form.Item>
        <Form.Item
          label="ชื่อผู้ใช้"
          name="UserName"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input placeholder="อีเมล" />
        </Form.Item>
        <Row>
          <Col md={11}>
            <Form.Item
              label="รหัสผ่าน"
              name="UserPassword"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your password!"
                }
              ]}
            >
              <Input.Password
                placeholder="รหัสผ่าน"
                onChange={(e) => {
                  console.log(e.target.value)
                  // setChkPassword(e.target.value)
                }}
              />
            </Form.Item>
          </Col>
          <Col md={2}></Col>
          <Col md={11}>
            <Form.Item
              label="ยืนยันรหัสผ่าน"
              name="confirm_password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input confirm your password!"
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("UserPassword") === value) {
                      return Promise.resolve()
                    }

                    return Promise.reject(new Error("The two passwords that you entered do not match!"))
                  }
                })
              ]}
            >
              <Input.Password placeholder="ยืนยันรหัสผ่าน" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Row gutter={[16, 8]}>
            <Col sm={24} md={24} lg={24}>
              <Button className="btn-register-submit" type="primary" htmlType="submit" block>
                สมัครสมาชิก
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
    </RegisterStyle>
  )
}

export default Register
