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

// PRODUCTION
import ProductionTab from "./ProductionTab";

import LabeledText from './LabeledText';

// BTN
import EditAnimal from "@/components/molecules/Btns/EditAnimal";
import AddHealthcare from "@/components/molecules/Btns/AddHealthcare";

import LabeledInput from "./LabeledInput";

const Navigation = {
  AccordionSection,
  HerdSubSection,
};

const LogicBtn = {
  EditAnimal,
  AddHealthcare,
}

const Table = {
  AnimalTable,
  TableFilter,
}

const Cards = {
  CardLink,
  CardBtn,
};

const Icons = {
  ThemeIcon,
  AuthIcon,
  GoatIcon,
  Mobile: {
    BurgerIcon,
  },
};

export { ProductionTab, GoatGroup, Cards, Icons, Navigation, Table, LabeledText, LabeledInput, LogicBtn };
