import { Styled } from "./DropdownContentSection.styles";

interface DropdownContentSectionProps {
  title: React.ReactNode;
  items: { icon: React.ReactElement; name: string }[];
}

export const DropdownContentSection: React.FC<DropdownContentSectionProps> = ({
  title,
  items,
}) => (
  <Styled.Section>
    <Styled.SectionTitle>{title}</Styled.SectionTitle>

    {items.map(({ name }) => (
      <div>{name}</div>
    ))}
  </Styled.Section>
);
