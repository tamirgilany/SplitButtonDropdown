import { styled } from "styled-components";

export const Styled = {
  Section: styled("section")`
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    &:last-child {
      padding-top: 20px;
    }

    &:not(:last-child) {
      padding-bottom: 20px;
      border-bottom: 1px dashed #e6e9ee;
    }
  `,
  SectionTitle: styled("h4")`
    color: #8093a9;
    font-size: 10px;
    font-family: "DM Sans";
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 8px;
  `,
  Button: styled("button")`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: 0;
    width: 100%;
    padding: 8px;
    color: #345276;
    font-size: 14px;
    font-family: "DM Sans";
    font-weight: 500;
    line-height: 130%;

    &:hover {
      cursor: pointer;
    }
  `,
};
