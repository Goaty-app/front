// VARIOUS
import Btn from "./btn";
import Link from "./link";
import Input from "./input";

// TYPOGRAPHY
import Title from "./Typography/title";
import Text from "./Typography/text";

// CONTAINER
import Simple from "./Containers/simple";
import Nav from "./Containers/nav";
import Header from "./Containers/header";
import Main from "./Containers/main";
import Aside from "./Containers/aside";

// LOADER
import Grass from "./Grass/Grass";
import ImageGoat from "./Goat/ImageGoat";

const Loader = { Grass, ImageGoat };
const Typography = { Title, Text };
const Containers = { Nav, Simple, Header, Main, Aside };

export { Typography, Containers, Loader, Btn, Link, Input };
