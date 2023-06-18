import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
    docs: {
    autodocs: "tag"
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true,
    // interactionsDebugger: true,

  },
  staticDirs: ["../public"],
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/notes/";
    }

    return config;
  }
};

export default config;
