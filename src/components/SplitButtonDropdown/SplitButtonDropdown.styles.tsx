import { Tabs } from "antd";
import { styled } from "styled-components";
import { Button } from "../Button";

const BaseButton = styled(Button)`
  &.opened {
    background-color: #205086;
  }
`;

export const Styled = {
  Layout: styled("div")`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  `,
  SendGiftsButton: styled(BaseButton)`
    border-radius: 100px 0 0 100px;
    width: 103px;
    transition: background-color 0.3s ease-in-out,
      border-radius 0.5s ease-in-out, width 0.3s ease-in-out;

    &.full-width {
      border-radius: 100px;
      width: 145px;
      justify-content: center;
    }
  `,
  DropdownButton: styled(BaseButton)`
    border-left: 1px solid #97bbe4;
    border-radius: 0 100px 100px 0;
    padding: 10px;
    width: 42px;
    opacity: 1;
    transition: all 0.3s ease-in-out;

    &.fade-out {
      border-left: 0;
      padding: 0;
      width: 0;
      opacity: 0;
    }
  `,
  DropdownContentWrapper: styled("div")`
    min-width: 240px;
  `,
  Tabs: styled(Tabs)`
    && {
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: #345276;
          font-weight: 500;
        }
      }

      .ant-tabs-ink-bar {
        &.ant-tabs-ink-bar-animated {
          background: #3077c9;
        }
      }
    }

    .ant-tabs-tab-btn {
      color: #5a7390;
      font-size: 14px;
      font-family: "DM Sans";

      &:hover {
        color: #3077c9;
      }
    }
  `,
  TabLabel: styled("div")`
    min-width: 134px;
  `,
};
