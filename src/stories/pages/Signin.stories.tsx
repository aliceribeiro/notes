import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { rest } from "msw";
import { Signin } from "../../pages/Signin";

export default {
  title: "Pages/SignIn",
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/auth", (_req, res, ctx) => {
          return res(ctx.json({ message: "Login realizado!" }));
        })
      ]
    }
  }
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), "alice@gmail.com");
    userEvent.type(canvas.getByPlaceholderText("Digite sua senha"), "1234");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  }
};
