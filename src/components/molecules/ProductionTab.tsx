import { Production } from "../atoms";
import { ProductionInterface } from "@/interface/production.interface";

export const mockProductions: ProductionInterface[] = [
  {
    id: 1,
    productionDate: "2025-05-22T00:00:00+00:00",
    expirationDate: "2025-06-22T00:00:00+00:00",
    quantity: 20.3,
    quantityUnit: "Kilos",
    notes: "Je suis une petite note",
    herd: {
      id: 1,
      name: "Goat",
    },
    productionType: {
      id: 1,
      name: "Ma petite production",
    },
  },
  {
    id: 2,
    productionDate: "2025-05-20T00:00:00+00:00",
    expirationDate: "2025-06-20T00:00:00+00:00",
    quantity: 15.5,
    quantityUnit: "Litres",
    notes: "Une note sur la production de lait",
    herd: {
      id: 2,
      name: "Cow",
    },
    productionType: {
      id: 2,
      name: "Lait cru",
    },
  },
  {
    id: 3,
    productionDate: "2025-05-18T00:00:00+00:00",
    expirationDate: "2025-06-18T00:00:00+00:00",
    quantity: 50,
    quantityUnit: "Litres",
    notes: "Récolte spéciale de printemps",
    herd: {
      id: 3,
      name: "Sheep",
    },
    productionType: {
      id: 3,
      name: "Lait de brebis",
    },
  },
  {
    id: 4,
    productionDate: "2025-05-15T00:00:00+00:00",
    expirationDate: "2025-06-15T00:00:00+00:00",
    quantity: 10,
    quantityUnit: "Kilos",
    notes: "Petite production artisanale",
    herd: {
      id: 4,
      name: "Buffalo",
    },
    productionType: {
      id: 4,
      name: "Fromage frais",
    },
  },
  {
    id: 5,
    productionDate: "2025-05-10T00:00:00+00:00",
    expirationDate: "2025-06-10T00:00:00+00:00",
    quantity: 35,
    quantityUnit: "Litres",
    notes: "Production exceptionnelle",
    herd: {
      id: 5,
      name: "Camel",
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
      {mockProductions.map((prod) => (
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
