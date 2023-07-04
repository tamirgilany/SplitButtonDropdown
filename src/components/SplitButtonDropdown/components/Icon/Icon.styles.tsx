import { styled } from "styled-components";

export const Styled = {
  Icon: styled("div")<{ backgroundColor?: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 8px;
    border-radius: 50%;
  `,
};
