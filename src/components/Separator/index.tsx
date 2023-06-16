import { ReactNode } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import clsx from "clsx";

export interface SeparatorRootProps {
  children: ReactNode;
}

function SeparatorRoot({ children }: SeparatorRootProps) {
  return <div>{children}</div>;
}

SeparatorRoot.displayName = "Separator.Root";

export interface SeparatorProps {
  className?: string;
}

function SeparatorLine({ className }: SeparatorProps) {
  return <SeparatorPrimitive.Root className={clsx("h-[1px] w-full bg-gray-700", className)} />;
}

SeparatorLine.displayName = "Separator.Line";

export interface SeparatorTextProps extends SeparatorProps {
  text: string;
}

function SeparatorWithText({ text, className }: SeparatorTextProps) {
  return (
    <div className={clsx("flex items-center", className)}>
      <Separator.Line />
      <span className="px-2 text-gray-700">{text}</span>
      <Separator.Line />
    </div>
  );
}

SeparatorWithText.displayName = "Separator.Line";

export const Separator = {
  Root: SeparatorRoot,
  Line: SeparatorLine,
  Text: SeparatorWithText
};
