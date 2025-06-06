// CARD
import CardLink from "@/components/molecules/Card/cardsLink";
import CardBtn from "@/components/molecules/Card/cardsBtn";

// TABLE
import TableFilter from "./AnimalTable/TableFilter";
import AnimalTable from "./AnimalTable/AnimalTable";

// ICONS
import ThemeIcon from "./Icons/ThemeIcon";
import AuthIcon from "./Icons/AuthIcon";
import BurgerIcon from "./Icons/MenuIcon.mobile";
import GoatIcon from "./Icons/GoatIcon";

// NAVIGATION
import AccordionSection from "./Navigation/AccordionSection";
import HerdSubSection from "./Navigation/HerdSubSection";

// LOADER
import GoatGroup from "./GoatGroup";

const Navigation = {
  AccordionSection,
  HerdSubSection,
};

const Table = {
  AnimalTable,
  TableFilter,
}

const Cards = {
  CardLink,
  CardBtn,
}

const Icons = {
  ThemeIcon,
  AuthIcon,
  GoatIcon,
  Mobile: {
    BurgerIcon,
  },
};

export { GoatGroup, Cards, Icons, Navigation, Table };
