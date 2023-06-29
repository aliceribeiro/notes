import { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalRootProps } from "../../components/Modal";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";

export default {
  title: "Components/Modal",
  component: Modal.Root,
  args: {
    triggerBtn: <Button.Primary>Abrir modal</Button.Primary>,
    children: (
      <Modal.Feedback
        title="Modal title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates accusantium tempora accusamus sunt autem cupiditate!"
        showCloseBtn
        showIcon={false}
        type="default"
      />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    triggerBtn: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ModalRootProps>;

export const Default: StoryObj<ModalRootProps> = {};

export const Dialog: StoryObj<ModalRootProps> = {
  args: {
    children: (
      <Modal.Dialog
        title="Título da modal"
        description="Descrição da modal"
        submitBtnText="Salvar"
        fields={
          <label htmlFor="text" className="flex">
            <Text className="font-semibold text-caramel-700" size="sm">
              Preencha o campo
            </Text>
            <TextInput.Root>
              <TextInput.Input type="text" id="text" placeholder="" onChange={(e) => console.log(e.target.value)} />
            </TextInput.Root>
          </label>
        }
      />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    triggerBtn: {
      table: {
        disable: true
      }
    }
  }
};

export const Feedback: StoryObj<ModalRootProps> = {
  args: {
    children: (
      <Modal.Feedback title="Success title" description="Lorem ipsum dolor sit amet consectetur adipisicing." showCloseBtn showIcon type="success" />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    triggerBtn: {
      table: {
        disable: true
      }
    }
  }
};

export const Alert: StoryObj<ModalRootProps> = {
  args: {
    children: (
      <Modal.Alert
        title="Alert title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing."
        cancelBtnText="Cancelar"
        submitBtnText="Apagar"
      />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    triggerBtn: {
      table: {
        disable: true
      }
    }
  }
};
