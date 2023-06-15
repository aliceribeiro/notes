import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx("flex items-center gap-3 h-12 py-3 px-3 rounded bg-gray-600 w-full focus-within:ring-2 ring-caramel-700")}>
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-caramel-700">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput(props: TextInputInputProps) {
  return <input className="bg-transparent flex-1 text-black-600 placeholder:text-gray-700 outline-none" {...props} />;
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
