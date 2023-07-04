import { styled } from "styled-components";

export const Styled = {
  Layout: styled("div")`
    position: absolute;
    right: 0;
    border-radius: 8px;
    border: 1px solid #3077c9;
    background: #fff;
    box-shadow: 0px 16px 24px 0px rgba(125, 146, 169, 0.32);
    color: #345276;
    background-color: #fff;
    top: calc(40px + 24px);
    padding: 16px 8px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &.visible {
      opacity: 1;
    }
  `,
};
