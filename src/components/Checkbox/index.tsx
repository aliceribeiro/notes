import { Check } from "phosphor-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export type CheckboxProps = CheckboxPrimitive.CheckboxProps;

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-600 rounded" {...props}>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-caramel-700" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
