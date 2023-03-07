import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-caramel-700 rounded font-semibold text-gray-400 text-sm w-full transition-colors hover:bg-caramel-600 focus:ring-2 ring-caramel-700",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
