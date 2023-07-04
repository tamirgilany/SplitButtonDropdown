import { Styled } from "./Icon.styles";
import { IconProps } from "./Icon.types";

export const CocktailGlassIc: React.FC<IconProps> = ({
  size,
  color,
  backgroundColor,
}) => (
  <Styled.Icon backgroundColor={backgroundColor}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Moctail">
        <path
          id="Vector"
          d="M14.52 2.4135C14.5974 2.31593 14.6459 2.19865 14.6601 2.07493C14.6742 1.95121 14.6534 1.826 14.6 1.7135C14.546 1.60005 14.461 1.50418 14.3548 1.43695C14.2487 1.36971 14.1257 1.33385 14 1.3335H2.00003C1.87437 1.33385 1.75138 1.36971 1.64522 1.43695C1.53906 1.50418 1.45406 1.60005 1.40003 1.7135C1.34666 1.826 1.32587 1.95121 1.34001 2.07493C1.35414 2.19865 1.40265 2.31593 1.48003 2.4135L7.33336 9.7335V13.3335H3.50003C3.32322 13.3335 3.15365 13.4037 3.02863 13.5288C2.9036 13.6538 2.83336 13.8234 2.83336 14.0002C2.83336 14.177 2.9036 14.3465 3.02863 14.4716C3.15365 14.5966 3.32322 14.6668 3.50003 14.6668H12.5C12.6768 14.6668 12.8464 14.5966 12.9714 14.4716C13.0965 14.3465 13.1667 14.177 13.1667 14.0002C13.1667 13.8234 13.0965 13.6538 12.9714 13.5288C12.8464 13.4037 12.6768 13.3335 12.5 13.3335H8.6667V9.7335L14.52 2.4135ZM3.3867 2.66683H12.6134L11.0134 4.66683H5.01336L3.3867 2.66683ZM8.00003 8.4335L6.05336 6.00016H9.9467L8.00003 8.4335Z"
          fill={color}
        />
      </g>
    </svg>{" "}
  </Styled.Icon>
);
