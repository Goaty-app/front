import { Production, Typography } from "../atoms";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const productions = [
  {
    id: 1,
    production_date: "2025-05-22T00:00:00+00:00",
    expiration_date: "2025-06-22T00:00:00+00:00",
    quantity: 20.3,
    quantityUnit: "Kilos",
    notes:
      'Je suis une petite note Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
      "\n" +
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    createdAt: "2025-05-22T13:30:03+00:00",
    herd: {
      id: 1,
      name: "Goat",
      location: "Alpes",
      createdAt: "2025-05-22T13:30:03+00:00",
    },
    productionType: {
      id: 1,
      name: "Ma petite production",
    },
  },
  {
    id: 2,
    production_date: "2025-05-20T00:00:00+00:00",
    expiration_date: "2025-06-20T00:00:00+00:00",
    quantity: 15.5,
    quantityUnit: "Litres",
    notes: "Une note sur la production de lait",
    createdAt: "2025-05-20T10:00:00+00:00",
    herd: {
      id: 2,
      name: "Cow",
      location: "Normandie",
      createdAt: "2025-05-20T10:00:00+00:00",
    },
    productionType: {
      id: 2,
      name: "Lait cru",
    },
  },
  {
    id: 3,
    production_date: "2025-05-18T00:00:00+00:00",
    expiration_date: "2025-06-18T00:00:00+00:00",
    quantity: 50,
    quantityUnit: "Litres",
    notes: "Récolte spéciale de printemps",
    createdAt: "2025-05-18T08:45:00+00:00",
    herd: {
      id: 3,
      name: "Sheep",
      location: "Pyrénées",
      createdAt: "2025-05-18T08:45:00+00:00",
    },
    productionType: {
      id: 3,
      name: "Lait de brebis",
    },
  },
  {
    id: 4,
    production_date: "2025-05-15T00:00:00+00:00",
    expiration_date: "2025-06-15T00:00:00+00:00",
    quantity: 10,
    quantityUnit: "Kilos",
    notes: "Petite production artisanale",
    createdAt: "2025-05-15T09:15:00+00:00",
    herd: {
      id: 4,
      name: "Buffalo",
      location: "Camargue",
      createdAt: "2025-05-15T09:15:00+00:00",
    },
    productionType: {
      id: 4,
      name: "Fromage frais",
    },
  },
  {
    id: 5,
    production_date: "2025-05-10T00:00:00+00:00",
    expiration_date: "2025-06-10T00:00:00+00:00",
    quantity: 35,
    quantityUnit: "Litres",
    notes: "Production exceptionnelle",
    createdAt: "2025-05-10T11:00:00+00:00",
    herd: {
      id: 5,
      name: "Camel",
      location: "Sahara",
      createdAt: "2025-05-10T11:00:00+00:00",
    },
    productionType: {
      id: 5,
      name: "Lait de chamelle",
    },
  },
];

const ProductionTab = () => {
  return (
    <div>
      <TableContainer
        component={Paper}
        className="h-full overflow-y-auto border-gray-400 border border-solid"
      >
        <Production.CrudProductionButton
          action={"create"}
        ></Production.CrudProductionButton>
        <Table>
          <TableHead>
            <TableRow className="z-10">
              <TableCell className="bg-header">
                <Typography.Text className="dark-text">
                  Nom
                  <input
                    id={"name-search"}
                    className={"bg-white"}
                    type={"text"}
                  />
                </Typography.Text>
              </TableCell>
              <TableCell className="bg-header">
                <Typography.Text className="dark-text">
                  Quantité
                </Typography.Text>
              </TableCell>
              <TableCell className="bg-header">
                <Typography.Text className="dark-text">Herd</Typography.Text>
              </TableCell>
              <TableCell className="bg-header">
                <Typography.Text className="dark-text">Notes</Typography.Text>
              </TableCell>
              <TableCell className="bg-header">
                <Typography.Text className="dark-text">Date</Typography.Text>
              </TableCell>
              <TableCell className="bg-header">
                <Typography.Text className="dark-text">Actions</Typography.Text>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productions.map((prod) => (
              <Production.ProductionLine key={prod.id} production={prod}>
                <Production.CrudProductionButton
                  action={"update"}
                  productionId={prod.id}
                ></Production.CrudProductionButton>
                <Production.CrudProductionButton
                  action={"delete"}
                  productionId={prod.id}
                ></Production.CrudProductionButton>
              </Production.ProductionLine>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*{productions.map((prod) => (
        <Production.ProductionLine key={prod.id} production={prod}>
          <Production.CrudProductionButton
            action={"update"}
            productionId={prod.id}
          ></Production.CrudProductionButton>
          <Production.CrudProductionButton
            action={"delete"}
            productionId={prod.id}
          ></Production.CrudProductionButton>
        </Production.ProductionLine>
      ))}*/}
    </div>
  );
};

export default ProductionTab;
