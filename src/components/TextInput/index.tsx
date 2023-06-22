import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx("flex h-12 w-full items-center gap-3 rounded bg-gray-600 px-3 py-3 ring-caramel-700 focus-within:ring-2")}>
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="h-6 w-6 text-caramel-700">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput(props: TextInputInputProps) {
  return <input className="flex-1 bg-transparent text-black-600 outline-none placeholder:text-gray-700" {...props} />;
}

TextInputInput.displayName = "TextInput.Input";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaInput(props: TextAreaProps) {
  return (
    <textarea
      rows={7}
      className="w-full flex-1 rounded bg-gray-600 p-3 text-black-600 outline-none ring-caramel-700 placeholder:text-gray-700 focus-within:ring-2"
      {...props}
    />
  );
}

TextAreaInput.displayName = "Input.TextArea";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  TextArea: TextAreaInput
};
