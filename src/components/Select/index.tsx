import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";
import { CaretDown, Check } from "phosphor-react";
import React, { ReactNode } from "react";

interface SelecItemProps {
  children: ReactNode;
  className?: string;
  ref: React.Ref<HTMLDivElement>;
  value: string;
}

const SelectItem = React.forwardRef(({ children, className, value, ref, ...props }: SelecItemProps) => {
  return (
    <SelectPrimitive.Item
      className={clsx(
        "flex items-center gap-1 rounded p-3 text-[13px] text-black-600" +
          "data-[disabled]:pointer-events-none data-[highlighted]:bg-caramel-600 data-[highlighted]:text-gray-400  data-[highlighted]:outline-none",
        className
      )}
      {...props}
      value={value}
      ref={ref}
    >
      <SelectPrimitive.ItemIndicator className="">
        <Check size={12} />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName = "Select.Item";

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex w-full justify-between rounded bg-gray-600 px-2 py-4 text-gray-700 outline-none" aria-label="Category">
        <SelectPrimitive.Value placeholder="Selecione uma categoria" />
        <SelectPrimitive.Icon className="text-black-700">
          <CaretDown size={24} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={clsx(
            "overflow-hidden rounded bg-gray-600 p-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
          )}
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Group>
              <SelectItem value="productivity">Produtividade</SelectItem>
              <SelectItem value="personal">Pessoal</SelectItem>
              <SelectItem value="random">Aleatório</SelectItem>
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
