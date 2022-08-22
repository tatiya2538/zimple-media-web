import { ExclamationCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import { Modal } from "antd"
import { colors } from "../../configs/styles.config"

export const Alert = (param) => {
  if (param.type === "confirm") {
    Modal.confirm({
      icon: (
        <div className="modal-confirm-icon">
          <ExclamationCircleOutlined style={{ fontSize: "80px", color: colors.info }} />
        </div>
      ),
      // content: 'Some descriptions',
      wrapClassName: "modal-confirm-custom",
      okText: "Confirm",
      cancelText: "Cancel",
      centered: true,
      onOk() {
        if (typeof param.onOk !== "undefined") {
          param.onOk()
        }
      },
      onCancel() {
        if (typeof param.onOk !== "undefined") {
          param.onCancel()
        }
      },
      ...param
    })
  } else if (param.type === "success") {
    Modal.success({
      icon: (
        <div className="modal-alert-icon">
          <CheckCircleOutlined style={{ fontSize: "80px", color: colors.success }} />
        </div>
      ),
      wrapClassName: "modal-alert-custom",
      okText: "Ok",
      centered: true,
      onOk() {
        if (typeof param.onOk !== "undefined") {
          param.onOk()
        }
      },
      ...param
    })
  } else if (param.type === "warning") {
    Modal.warning({
      icon: (
        <div className="modal-alert-icon">
          <ExclamationCircleOutlined style={{ fontSize: "80px", color: colors.warning }} />
        </div>
      ),
      wrapClassName: "modal-alert-custom",
      okText: "Ok",
      centered: true,
      onOk() {
        if (typeof param.onOk !== "undefined") {
          param.onOk()
        }
      },
      ...param
    })
  } else if (param.type === "error") {
    Modal.error({
      icon: (
        <div className="modal-alert-icon">
          <CloseCircleOutlined style={{ fontSize: "80px", color: colors.error }} />
        </div>
      ),
      wrapClassName: "modal-alert-custom",
      okText: "Ok",
      centered: true,
      onOk() {
        if (typeof param.onOk !== "undefined") {
          param.onOk()
        }
      },
      ...param
    })
  }
}
