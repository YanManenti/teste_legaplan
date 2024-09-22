"use client";
import { useMediaQuery } from "usehooks-ts";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

type AdaptivePanelProps = Readonly<{
  trigger: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  footer: React.ReactNode;
}>;

export default function AdaptivePanel({
  trigger,
  title,
  description,
  footer,
}: AdaptivePanelProps) {
  const matches = useMediaQuery("(min-width: 425px)");
  const [open, setOpen] = useState(false);

  if (!matches) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className="p-8 flex flex-col gap-8">
          <DrawerHeader className="text-left">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription className="hidden">
              Fixed the warning
            </DrawerDescription>
          </DrawerHeader>
          {description}
          <DrawerClose>{footer}</DrawerClose>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-8 flex flex-col gap-8">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="hidden">
          Fixed the warning
        </DialogDescription>
        {description}
        <DialogClose className="hover:cursor-auto">{footer}</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
