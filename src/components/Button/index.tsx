import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { CircleNotch } from "phosphor-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  loading?: boolean;
}

export interface LinkButtonProps {
  icon: ReactElement;
  label: string;
  handleClick: () => void;
  className?: string;
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

function ButtonPrimary({ children, asChild, className, loading, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "flex w-full justify-center rounded px-4 py-3 text-sm font-semibold text-gray-light " +
          "bg-primary ring-primary transition-colors hover:bg-secondary focus:ring-2",
        { "cursor-not-allowed bg-secondary": loading === true },
        className
      )}
      {...props}
    >
      {loading ? <CircleNotch size={24} className="animate-spin text-gray-light" /> : children}
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
          "bg-background-clearSoft ring-primary transition-colors hover:bg-background-clearLight",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonSecondary.displayName = "Button.Secondary";

function LinkButton({ icon, label, handleClick, className }: LinkButtonProps) {
  return (
    <div
      className={clsx(
        "my-1 flex cursor-pointer items-center gap-2 rounded px-2 py-1 ring-primary transition-colors " +
          "text-secondary hover:bg-background-clearSoft focus:ring-2",
        className
      )}
      onClick={handleClick}
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
