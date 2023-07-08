import clsx from "clsx";
import { CircleNotch } from "phosphor-react";

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div className={clsx("flex h-screen w-screen items-center justify-center bg-background-darkLight", className)}>
      <CircleNotch size={24} className="animate-spin text-gray-light" />
    </div>
  );
}
