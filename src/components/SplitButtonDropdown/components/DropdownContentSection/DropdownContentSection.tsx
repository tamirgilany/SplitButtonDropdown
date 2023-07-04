import { IconProps } from "../Icon/Icon.types";
import { Styled } from "./DropdownContentSection.styles";

interface ItemsProps {
  name: string;
  icon: React.FC<IconProps>;
  iconColor: string;
  iconBackgroundColor: string;
}

interface DropdownContentSectionProps {
  title: React.ReactNode;
  items: ItemsProps[];
}

export const DropdownContentSection: React.FC<DropdownContentSectionProps> = ({
  title,
  items,
}) => (
  <Styled.Section>
    <Styled.SectionTitle>{title}</Styled.SectionTitle>

    {items.map(
      ({ name, icon: Icon, iconColor, iconBackgroundColor }: ItemsProps) => (
        <Styled.Button>
          <Icon
            size={16}
            color={iconColor}
            backgroundColor={iconBackgroundColor}
          />
          {name}
        </Styled.Button>
      )
    )}
  </Styled.Section>
);
