import styled from 'styled-components'

export const NavbarStyles = styled.div`
  .header {
    background-color: #fff;
    box-shadow: 0px 1px 6px -1px rgba(0, 0, 0, 0.05);
  }

  .ant-layout-header {
    line-height: unset; //ลบ ความกว้างระหว่างแถว แนวตั้ง
  }

  .profile {
    padding: 10px 15px 4px;
  }

  .profile > .name {
    white-space: nowrap; //ข้อความจะไม่ตัดไปยังบรรทัดถัดไป
    line-height: 15px;
    font-size: 13px;
    color: #666666;
    font-weight: bold; // ความหนาของ font
  }

  .profile > .dep {
    white-space: nowrap;
    line-height: 15px;
    font-size: 12px;
    color: #6e6e6e;
  }

  .profile > .code {
    white-space: nowrap;
    line-height: 15px;
    font-size: 11px;
    color: #6e6e6e;
  }

  .avatar {
    padding-top: 10px;
    .ant-avatar {
      position: unset;
    }
    &::after {
      content: ' ';
      border: solid 1.5px #fff;
      position: absolute;
      bottom: 10px;
      right: 0px;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      background-color: #96c43c;
    }
  }
`

export const MenuStyle = styled.div`
  box-shadow: 0px 2px 6px #ccc;
  min-width: 130px;
  overflow-y: auto;
  .ant-menu-vertical > .ant-menu-item {
    margin-top: 0px;
    height: unset;
    line-height: 1;
    padding: 10px 12px;
    background-color: #fff;
    &:hover {
      background-color: '#e9e9e9';
    }

    .ant-menu-title-content {
      font-size: 14px;
    }
  }

  .ant-menu-vertical {
    .ant-menu-item:last-child {
      margin-bottom: 0px;
    }
    .ant-menu-item:not(:last-child) {
      margin-bottom: 0px;
      border-bottom: solid 1px #f1f1f1;
    }
  }
`
