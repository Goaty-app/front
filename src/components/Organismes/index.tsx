import HerdNavigationSection from "./Navigation/HerdNavigationSection";
import RightSide from "./Header/RightSide";
import Loader from "./Loader";
import AppIcon from "./AppIcon";

// SEARCH TABLE
import SearchAnimal from "./SearchTable/SearchAnimal";
import AnimalMainContent from "@/components/Organismes/AnimalDetails/AnimalMainContent";
import SearchProduction from "@/components/Organismes/SearchTable/SearchProduction";

const SearchTable = {
  SearchAnimal,
  SearchProduction,
};

const AnimalDetails = {
  AnimalMainContent,
};

export {
  HerdNavigationSection,
  RightSide,
  Loader,
  AppIcon,
  SearchTable,
  AnimalDetails,
};
