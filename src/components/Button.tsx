import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-caramel-700 rounded font-semibold text-gray-400 text-sm w-full transition-colors hover:bg-caramel-600 focus:ring-2 ring-caramel-700"
      )}
    >
      {children}
    </Comp>
  );
}
