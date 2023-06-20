import { BrowserRouter as Router } from "react-router-dom";
import { Meta } from "@storybook/react";
import { Sidebar, SidebarProps } from "../../components/Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  args: {},
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<SidebarProps>;

export const Default = () => {
  return (
    <Router>
      <Sidebar handleExit={() => console.log("Cliquei em sair")} />
    </Router>
  );
};
