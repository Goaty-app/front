import { AllType } from "@/interface/allType.interface";

export interface ProductionInterface {
  id: number;
  productionDate: string;
  expirationDate: string;
  quantity: number;
  quantityUnit: string;
  notes: string | null;
  herd: AllType;
  productionType: AllType;
}

export const mockProductions: ProductionInterface[] = [
  {
    id: 1,
    productionDate: "2025-05-22T00:00:00+00:00",
    expirationDate: "2025-06-22T00:00:00+00:00",
    quantity: 20.3,
    quantityUnit: "Kilos",
    notes:
      'Je suis une petite note Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
      "\n" +
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
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
