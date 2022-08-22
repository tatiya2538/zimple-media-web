import styled from 'styled-components'
import { colors } from '../../configs/styles.config'

export const CardStyle = styled.div`
  .CardNew {
    margin-bottom: 15px;
    margin-top: 15px;
    &.show {
      .ant-card-body {
        display: block;
      }
    }
    &.hide {
      .ant-card-body {
        display: none;
      }
    }
    .ant-card {
      width: 100%;
    }
    .ant-card-head {
      width: 100%;
      height: 100%;
      border-bottom: none;
      .card-title-icon {
        float: left;
        margin-right: 5px;
      }
      .card-title-text {
        font-family: Graphik TH App;
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: ${colors.black};
      }
      .card-toggle-link {
        color: ${colors.black};
        &:hover {
          color: ${colors.linkHover};
        }
      }

      svg:hover {
        &.edit {
          stroke: ${colors.warning};
        }
        &.trash2 {
          stroke: ${colors.danger};
        }
      }
    }
    .ant-card-body {
      padding: 10px 24px 24px 24px;
    }
  }
`
