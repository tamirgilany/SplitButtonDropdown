import { DropdownContentSection } from "../../DropdownContentSection";
import {
  AccountIc,
  CakeIc,
  CalendarIc,
  CocktailGlassIc,
  MegaphoneIc,
  SendIc,
} from "../../Icon";

const sections = [
  {
    title: "Start from scratch",
    items: [
      {
        name: "Send gifts now",
        icon: SendIc,
        iconColor: "#3077C9",
        iconBackgroundColor: "#F5F8FC",
      },
      {
        name: "Schedule gifts for later",
        icon: CalendarIc,
        iconColor: "#3077C9",
        iconBackgroundColor: "#F5F8FC",
      },
    ],
  },
  {
    title: "Automate gifts",
    items: [
      {
        name: "Anniversary",
        icon: CocktailGlassIc,
        iconColor: "#328560",
        iconBackgroundColor: "#EFFBF5",
      },
      {
        name: "Birthday",
        icon: CakeIc,
        iconColor: "#CF3FC9",
        iconBackgroundColor: "#FDF5FA",
      },
      {
        name: "New hire",
        icon: AccountIc,
        iconColor: "#FFC352",
        iconBackgroundColor: "#FFF9EE",
      },
      {
        name: "Sales & Marketing",
        icon: MegaphoneIc,
        iconColor: "#FF7B69",
        iconBackgroundColor: "#FFF6F6",
      },
    ],
  },
];

export const CreateNew = () => (
  <>
    {sections.map(({ title, items }) => (
      <DropdownContentSection title={title} items={items} />
    ))}
  </>
);
