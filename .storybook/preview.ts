import { themes } from "@storybook/theming";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/styles/global.css";

initialize({
  onUnhandledRequest: "bypass"
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#333"
      },
      {
        name: "light",
        value: "#f2f2f2"
      }
    ]
  }
};
