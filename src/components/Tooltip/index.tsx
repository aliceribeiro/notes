import { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface TooltipProps extends TooltipPrimitive.TooltipContentProps {
  children: ReactNode;
  helpText: string;
}

export function Tooltip({ children, helpText, side = "left" }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={500}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content side={side} sideOffset={5} className="rounded bg-gray-soft px-4 py-2 text-[12px] text-primary">
            {helpText}
            <TooltipPrimitive.Arrow className="fill-gray-soft" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
