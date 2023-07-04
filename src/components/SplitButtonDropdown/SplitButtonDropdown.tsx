import { useEffect, useState } from "react";
import type { TabsProps } from "antd";
import { ChevronDown, ChevronUp } from "react-feather";
import { Styled } from "./SplitButtonDropdown.styles";
import clsx from "clsx";
import { DropdownContentLayout } from "./components/DropdownContentLayout";
import { useOutsideClick } from "../../hooks";
import { CreateNew, ExistingCampaigns } from "./components/Tabs";

interface SplitButtonDropdownProps {
  showDropdown: boolean;
}

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <Styled.TabLabel>Create New</Styled.TabLabel>,
    children: <CreateNew />,
  },
  {
    key: "2",
    label: <Styled.TabLabel>Existing Campaigns</Styled.TabLabel>,
    children: <ExistingCampaigns />,
  },
];

export const SplitButtonDropdown: React.FC<SplitButtonDropdownProps> = ({
  showDropdown,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdownDelayed, setShowDropdownDelayed] = useState(showDropdown);

  const handleClickOutside = () => {
    setIsOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  useEffect(() => {
    setTimeout(() => {
      setShowDropdownDelayed(showDropdown);
    }, 200);
  }, [showDropdown]);

  return (
    <Styled.Layout ref={ref}>
      <Styled.SendGiftsButton className={clsx({ "full-width": !showDropdown })}>
        Send Gifts
      </Styled.SendGiftsButton>

      <Styled.DropdownButton
        className={clsx({ opened: isOpen, "fade-out": !showDropdown })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </Styled.DropdownButton>

      <DropdownContentLayout visible={isOpen}>
        <Styled.DropdownContentWrapper>
          <Styled.Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Styled.DropdownContentWrapper>
      </DropdownContentLayout>
    </Styled.Layout>
  );
};
