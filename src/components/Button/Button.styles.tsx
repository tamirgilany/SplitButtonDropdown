import { styled } from "styled-components";

export const Styled = {
  Button: styled("button")`
    font-family: "DM Sans";
    background-color: #3077c9;
    border: 0;
    padding: 16px;
    box-sizing: border-box;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #2864a8;
    }

    &:focus {
      background-color: #205086;
    }
  `,
};
