import { Production } from "../atoms";

const productions = [
  {
    id: 1,
    production_date: "2025-05-22T00:00:00+00:00",
    expiration_date: "2025-06-22T00:00:00+00:00",
    quantity: 20.3,
    quantityUnit: "Kilos",
    notes: "Je suis une petite note",
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
      <Production.CrudProductionButton
        action={"create"}
      ></Production.CrudProductionButton>
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
    </div>
  );
};

export default ProductionTab;
