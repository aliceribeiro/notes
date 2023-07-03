import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx("flex h-12 w-full items-center gap-3 rounded bg-gray-light px-3 py-3 ring-primary focus-within:ring-2")}>
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="h-6 w-6 text-primary">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput(props: TextInputInputProps) {
  return <input className="placeholder:text-gray-700 flex-1 bg-transparent text-dark-heavy outline-none" {...props} />;
}

TextInputInput.displayName = "TextInput.Input";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaInput(props: TextAreaProps) {
  return (
    <textarea
      rows={7}
      className="placeholder:text-gray-700 w-full flex-1 rounded bg-gray-light p-3 text-dark-heavy outline-none ring-primary focus-within:ring-2"
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
