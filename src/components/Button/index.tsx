import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export interface LinkButtonProps {
  icon: ReactElement;
  label: string;
  handleClick: () => void;
}

function ButtonRoot({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx("w-full rounded px-4 py-3 text-sm font-semibold ring-primary transition-colors hover:bg-secondary focus:ring-2", className)}
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
        "w-full rounded px-4 py-3 text-sm font-semibold text-gray-light " +
          "bg-primary ring-primary transition-colors hover:bg-secondary focus:ring-2",
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
        "w-full rounded border-2 px-4 py-3 text-sm font-semibold text-primary " +
          "bg-background-clearSoft ring-primary transition-colors hover:bg-background-clearLight focus:ring-2",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonSecondary.displayName = "Button.Secondary";

function LinkButton({ icon, label, handleClick: onClick }: LinkButtonProps) {
  return (
    <div
      className="my-1 flex cursor-pointer items-center gap-2 rounded px-2 py-1 ring-primary transition-colors hover:bg-primary focus:ring-2"
      onClick={onClick}
    >
      <>{icon}</>
      <span>{label}</span>
    </div>
  );
}

LinkButton.displayName = "Button.Link";

export const Button = {
  Root: ButtonRoot,
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary,
  Link: LinkButton
};
