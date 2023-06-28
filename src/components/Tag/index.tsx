import { ReactNode } from "react";
import clsx from "clsx";

export interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return <div className={clsx("flex items-center gap-1 rounded bg-gray-400 px-2 py-1")}>{children}</div>;
}
