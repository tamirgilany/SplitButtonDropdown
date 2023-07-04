import { styled } from "styled-components";

export const Styled = {
  Section: styled("section")`
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
};
