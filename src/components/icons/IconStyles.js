import styled from 'styled-components'
import { colors } from '../../configs/styles.config'

export const IconStyle = styled.div`
  .btn-stt {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 98px;
    height: 40px;
    border-radius: 3px;
    font-size: 14px;
  }

  .btn-stt-tb {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 3px;
    font-size: 14px;
  }

  .btn-stt-icon2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${'' /* width: 98px; */}
    height: 33px;
    border-radius: 3px;
    font-size: 14px;
  }

  .btn-stt-icon3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 36px;
    border-radius: 3px;
    font-size: 14px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    ${'' /* margin-top: auto; */}
  }

  .btn-color-primary {
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    color: ${colors.white};
    &:active {
      transition: 200ms;
      background-color: ${colors.primaryActive};
    }
  }

  .btn-color-edit-in-tb {
    background-color: ${colors.lightOrange};
    border: 1px solid ${colors.lightOrange};
    color: ${colors.lightOrange2};
    &:active {
      transition: 200ms;
      background-color: ${colors.primaryActive};
    }
  }

  .btn-color-examine-in-tb {
    background-color: ${colors.lightGray};
    border: 1px solid ${colors.lightGray};
    color: ${colors.lightGray2};
    &:active {
      transition: 200ms;
      background-color: ${colors.primaryActive};
    }
  }

  .btn-color-state-in-tb {
    background-color: ${colors.lightBlue};
    border: 1px solid ${colors.lightBlue};
    color: ${colors.primary};
    &:active {
      transition: 200ms;
      background-color: ${colors.primaryActive};
    }
  }

  .btn-color-search {
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    color: ${colors.white};
    &:active {
      transition: 200ms;
      background-color: ${colors.primaryActive};
    }
  }

  .btn-color-back {
    background-color: ${colors.white};
    color: ${colors.warning};
    border: 1px solid ${colors.warning};
    &:active {
      transition: 200ms;
      background-color: ${colors.warning};
      color: ${colors.white};
    }
  }

  .btn-color-allow {
    background-color: ${colors.white};
    color: ${colors.success};
    border: 1px solid ${colors.success};
    &:active {
      transition: 200ms;
      background-color: ${colors.success};
      color: ${colors.white};
    }
  }

  .btn-color-noAllow {
    background-color: ${colors.white};
    color: ${colors.error};
    border: 1px solid ${colors.error};
    &:active {
      transition: 200ms;
      background-color: ${colors.error};
      color: ${colors.white};
    }
  }

  .btn-color-add-multiple {
    background-color: ${colors.lightGray3};
    color: ${colors.primary};
    border: 1px dashed ${colors.lightGray2};
    &:active {
      transition: 200ms;
      background-color: ${colors.primaryActive};
    }
  }

  .btn-color-clear,
  .btn-color-tb {
    background-color: ${colors.white};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    &:active {
      transition: 200ms;
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }

  .btn-color-success {
    background-color: ${colors.success};
    border: 1px solid ${colors.success};
    color: ${colors.white};
    &:active {
      transition: 200ms;
      background-color: ${colors.primaryActive};
    }
  }
`
