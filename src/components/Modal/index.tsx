import * as Dialog from "@radix-ui/react-dialog";
import { Check, Warning, X } from "phosphor-react";
import clsx from "clsx";

interface ModalDefaultProps {
  title: string;
  description: string;
}

export interface ModalRootProps {
  children: JSX.Element;
  triggerBtn: JSX.Element;
}

function ModalRoot({ children, triggerBtn }: ModalRootProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerBtn}</Dialog.Trigger>
      {children}
    </Dialog.Root>
  );
}

ModalRoot.displayName = "Modal.Root";

export interface ModalDialogProps extends ModalDefaultProps {
  children: JSX.Element;
  submitBtnText: string;
  handleSubmit: () => void;
}

function ModalDialog({ title, description, children, submitBtnText, handleSubmit }: ModalDialogProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black-light" />
      <Dialog.Content
        className={clsx(
          "data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] " +
            "translate-x-[-50%] translate-y-[-50%] rounded bg-white p-[25px] " +
            "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        )}
      >
        <Dialog.Title className="text-md">{title}</Dialog.Title>
        <Dialog.Description className="mb-5 mt-3 text-sm leading-normal text-gray-700">{description}</Dialog.Description>
        <div>{children}</div>
        <div className="mt-6 flex justify-end">
          <Dialog.Close asChild>
            <button
              className={clsx(
                "inline-flex h-9 items-center justify-center rounded bg-feedback-successLight px-4 font-bold leading-none text-feedback-success " +
                  "cursor-pointer hover:bg-feedback-successLight focus:shadow-[0_0_0_2px] focus:shadow-feedback-successLight focus:outline-none"
              )}
              onClick={handleSubmit}
            >
              {submitBtnText}
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className={clsx(
              "absolute right-3 top-3 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-feedback-gray " +
                "hover:bg-feedback-grayLight focus:shadow-[0_0_0_2px] focus:shadow-feedback-grayLight focus:outline-none"
            )}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

ModalDialog.displayName = "Modal.Dialog";

export interface ModalFeedbackProps extends ModalDefaultProps {
  showCloseBtn: boolean;
  showIcon: boolean;
  type: "success" | "error" | "warning" | "default";
}

function ModalFeedback({ title, description, showCloseBtn, showIcon, type }: ModalFeedbackProps) {
  const iconContent = (type: string) => {
    switch (type) {
      case "success":
        return (
          <div className="m-4 rounded-full bg-feedback-successLight p-8 text-feedback-success">
            <Check size={60} weight="bold" />
          </div>
        );
      case "error":
        return (
          <div className="m-4 rounded-full bg-feedback-errorLight p-8 text-feedback-error">
            <X size={60} weight="bold" />
          </div>
        );
      case "warning":
        return (
          <div className="m-4 rounded-full bg-feedback-errorLight p-8 text-feedback-warning">
            <Warning size={60} weight="bold" />
          </div>
        );

      default:
        break;
    }
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black-light" />
      <Dialog.Content
        className={clsx(
          "data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] " +
            "translate-x-[-50%] translate-y-[-50%] rounded bg-white p-[25px] " +
            "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        )}
      >
        <div className="flex min-h-[150px] flex-col items-center justify-evenly">
          {showIcon && <>{iconContent(type)}</>}
          <Dialog.Title className="text-md">{title}</Dialog.Title>
          <Dialog.Description className="text-center text-sm leading-normal text-gray-700">{description}</Dialog.Description>
        </div>

        {showCloseBtn && (
          <Dialog.Close asChild>
            <button
              className={clsx(
                "absolute right-3 top-3 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-feedback-gray " +
                  "hover:bg-feedback-grayLight focus:shadow-feedback-grayLight focus:outline-none"
              )}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </Dialog.Close>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

ModalFeedback.displayName = "Modal.Feedback";

export interface ModalAlertProps extends ModalDefaultProps {
  cancelBtnText: string;
  submitBtnText: string;
}

function ModalAlert({ title, description, cancelBtnText, submitBtnText }: ModalAlertProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black-light" />
      <Dialog.Content
        className={clsx(
          "data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] " +
            "translate-x-[-50%] translate-y-[-50%] rounded bg-white p-[25px] " +
            "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        )}
      >
        <Dialog.Title className="text-md">{title}</Dialog.Title>
        <Dialog.Description className="mb-5 mt-3 text-sm leading-normal text-gray-700">{description}</Dialog.Description>
        <div className="mt-6 flex justify-end gap-6">
          <Dialog.Close asChild>
            <button
              className={clsx(
                "inline-flex h-9 items-center justify-center rounded bg-feedback-grayLight px-4 font-bold leading-none text-feedback-gray " +
                  "cursor-pointer hover:bg-feedback-grayLight focus:shadow-[0_0_0_2px] focus:shadow-feedback-grayLight focus:outline-none"
              )}
            >
              {cancelBtnText}
            </button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button
              className={clsx(
                "inline-flex h-9 items-center justify-center rounded bg-feedback-errorLight px-4 font-bold leading-none text-feedback-error " +
                  "cursor-pointer hover:bg-feedback-errorLight focus:shadow-[0_0_0_2px] focus:shadow-feedback-errorLight focus:outline-none"
              )}
            >
              {submitBtnText}
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

ModalAlert.displayName = "Modal.Alert";

export const Modal = {
  Root: ModalRoot,
  Dialog: ModalDialog,
  Feedback: ModalFeedback,
  Alert: ModalAlert
};
