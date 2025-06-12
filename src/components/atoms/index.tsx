// VARIOUS
import Btn from "./btn";
import Link from "./link";
import Input from "./input";

// TYPOGRAPHY
import Title from "./Typography/title";
import Text from "./Typography/text";
import Label from "./Typography/label";
import TextArea from "./Typography/textArea";

// CONTAINER
import Simple from "./Containers/simple";
import Nav from "./Containers/nav";
import Header from "./Containers/header";
import Main from "./Containers/main";
import Aside from "./Containers/aside";

// LOADER
import Grass from "./Grass/Grass";
import ImageGoat from "./Goat/ImageGoat";

// PRODUCTION
import ProductionLine from "./Production/ProductionLine";
// SELECT
import Select from "./Containers/select";
import Option from "./option";
import Form from "./form";

const Production = { ProductionLine };
const Loader = { Grass, ImageGoat };
const Typography = { Title, Text, Label, TextArea };
const Containers = { Nav, Simple, Header, Main, Aside };

export {
  Typography,
  Containers,
  Loader,
  Btn,
  Link,
  Input,
  Production,
  Select,
  Form,
  Option,
};
