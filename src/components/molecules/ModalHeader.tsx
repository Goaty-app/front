"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Btn } from "@/components/atoms";
import { Containers } from "@/components/atoms";

const ModalHeader = ({ title }: { title: string }) => (
  <Containers.Simple className="flex justify-between items-center mb-4">
    <Dialog.Title className="text-2xl font-bold">{title}</Dialog.Title>
    <Dialog.Close asChild>
      <Btn variant="accent">
        <X />
      </Btn>
    </Dialog.Close>
  </Containers.Simple>
);

export default ModalHeader;
