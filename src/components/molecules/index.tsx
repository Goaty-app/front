// VARIOUS
import CardLink from './CardLink/cardsLink';

// ICONS
import ThemeIcon from './Icons/ThemeIcon';
import AuthIcon from './Icons/AuthIcon';
import BurgerIcon from "./Icons/MenuIcon.mobile";
import AppIcon from './Icons/AppIcon';

// NAVIGATION
import  AccordionSection from'./Navigation/AccordionSection';
import HerdSubSection from './Navigation/HerdSubSection';

const Navigation = {
    AccordionSection,
    HerdSubSection,
}

const Icons = {
    ThemeIcon,
    AuthIcon,
    AppIcon,
    Mobile: {
        BurgerIcon
    }
}

export {CardLink, Icons, Navigation};