import clsx from "clsx";
import { Styled } from "./DropdownContentLayout.styles";

interface DropdownContentLayoutProps {
  visible: boolean;
  children: React.ReactElement;
}

export const DropdownContentLayout: React.FC<DropdownContentLayoutProps> = ({
  visible,
  children,
}) => <Styled.Layout className={clsx({ visible })}>{children}</Styled.Layout>;
