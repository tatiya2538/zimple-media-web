import styled from 'styled-components'
import { colors } from '../../configs/styles.config'

export const TabStyle = styled.div`
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${colors.blackActive};
    text-shadow: 0 0 0.25px currentcolor;
}
.ant-tabs-tab-btn:focus, .ant-tabs-tab-remove:focus, .ant-tabs-tab-btn:active, .ant-tabs-tab-remove:active {
    color: #6D6D6D;
}
`