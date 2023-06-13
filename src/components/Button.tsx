import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

function ButtonRoot({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 rounded font-semibold text-sm w-full transition-colors hover:bg-caramel-600 focus:ring-2 ring-caramel-700",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonRoot.displayName = "Button.Root";

function ButtonPrimary({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "w-full py-3 px-4 rounded font-semibold text-gray-400 text-sm " +
          "bg-caramel-700 transition-colors hover:bg-caramel-600 focus:ring-2 ring-caramel-700",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonPrimary.displayName = "Button.Primary";

function ButtonSecondary({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "w-full py-3 px-4 rounded font-semibold text-caramel-700 text-sm " +
          "bg-caramel-200-tp transition-colors hover:bg-caramel-200 focus:ring-2 ring-caramel-700",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonSecondary.displayName = "Button.Secondary";

export const Button = {
  Root: ButtonRoot,
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary
};
