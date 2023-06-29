import { ReactNode } from "react";
import clsx from "clsx";

export interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return <div className={clsx("flex items-center gap-1 rounded bg-feedback-graySoft px-2 py-1", className)}>{children}</div>;
}
