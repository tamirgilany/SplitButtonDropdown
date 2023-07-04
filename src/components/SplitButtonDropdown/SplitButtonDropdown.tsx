import { useEffect, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { ChevronDown, ChevronUp } from "react-feather";
import { Styled } from "./SplitButtonDropdown.styles";
import clsx from "clsx";
import { DropdownContentLayout } from "./components/DropdownContentLayout";
import { useOutsideClick } from "../../hooks";

interface SplitButtonDropdownProps {
  showDropdown: boolean;
}

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Create New`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: `Existing Campaigns`,
    children: `Content of Tab Pane 2`,
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
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Styled.DropdownContentWrapper>
      </DropdownContentLayout>
    </Styled.Layout>
  );
};
