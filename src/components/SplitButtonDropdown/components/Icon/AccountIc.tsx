import { Styled } from "./Icon.styles";
import { IconProps } from "./Icon.types";

export const AccountIc: React.FC<IconProps> = ({
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
      <g id="Account">
        <path
          id="Vector"
          d="M9.87325 8.18683C10.2952 7.73366 10.533 7.13935 10.5399 6.52016C10.5399 5.85182 10.2744 5.21085 9.80183 4.73825C9.32924 4.26566 8.68826 4.00016 8.01992 4.00016C7.35157 4.00016 6.7106 4.26566 6.23801 4.73825C5.76542 5.21085 5.49992 5.85182 5.49992 6.52016C5.50688 7.13935 5.7446 7.73366 6.16659 8.18683C5.57902 8.47941 5.0734 8.91345 4.6952 9.44992C4.31699 9.98639 4.07807 10.6085 3.99992 11.2602C3.98047 11.437 4.03205 11.6143 4.14333 11.753C4.2546 11.8918 4.41644 11.9807 4.59325 12.0002C4.77006 12.0196 4.94736 11.968 5.08614 11.8568C5.22491 11.7455 5.3138 11.5836 5.33325 11.4068C5.41281 10.7609 5.72582 10.1664 6.21331 9.73527C6.7008 9.30413 7.32913 9.06615 7.97992 9.06615C8.63071 9.06615 9.25903 9.30413 9.74653 9.73527C10.234 10.1664 10.547 10.7609 10.6266 11.4068C10.6451 11.5778 10.729 11.7349 10.8607 11.8455C10.9924 11.9561 11.1617 12.0115 11.3333 12.0002H11.4066C11.5813 11.9801 11.7411 11.8917 11.851 11.7543C11.9609 11.617 12.012 11.4417 11.9933 11.2668C11.9209 10.6185 11.6895 9.99818 11.3197 9.46086C10.9498 8.92354 10.453 8.4859 9.87325 8.18683ZM7.99992 7.70683C7.76522 7.70683 7.53579 7.63723 7.34064 7.50684C7.1455 7.37645 6.9934 7.19112 6.90358 6.97428C6.81377 6.75745 6.79027 6.51885 6.83605 6.28866C6.88184 6.05847 6.99486 5.84702 7.16082 5.68106C7.32678 5.5151 7.53822 5.40209 7.76841 5.3563C7.9986 5.31051 8.2372 5.33401 8.45404 5.42383C8.67087 5.51364 8.8562 5.66574 8.9866 5.86089C9.11699 6.05603 9.18659 6.28546 9.18659 6.52016C9.18659 6.83489 9.06156 7.13672 8.83902 7.35926C8.61648 7.58181 8.31464 7.70683 7.99992 7.70683ZM12.6666 1.3335H3.33325C2.80282 1.3335 2.29411 1.54421 1.91904 1.91928C1.54397 2.29436 1.33325 2.80306 1.33325 3.3335V12.6668C1.33325 13.1973 1.54397 13.706 1.91904 14.081C2.29411 14.4561 2.80282 14.6668 3.33325 14.6668H12.6666C13.197 14.6668 13.7057 14.4561 14.0808 14.081C14.4559 13.706 14.6666 13.1973 14.6666 12.6668V3.3335C14.6666 2.80306 14.4559 2.29436 14.0808 1.91928C13.7057 1.54421 13.197 1.3335 12.6666 1.3335ZM13.3333 12.6668C13.3333 12.8436 13.263 13.0132 13.138 13.1382C13.013 13.2633 12.8434 13.3335 12.6666 13.3335H3.33325C3.15644 13.3335 2.98687 13.2633 2.86185 13.1382C2.73682 13.0132 2.66659 12.8436 2.66659 12.6668V3.3335C2.66659 3.15669 2.73682 2.98712 2.86185 2.86209C2.98687 2.73707 3.15644 2.66683 3.33325 2.66683H12.6666C12.8434 2.66683 13.013 2.73707 13.138 2.86209C13.263 2.98712 13.3333 3.15669 13.3333 3.3335V12.6668Z"
          fill={color}
        />
      </g>
    </svg>{" "}
  </Styled.Icon>
);