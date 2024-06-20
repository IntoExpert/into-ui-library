import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../index.css";
import { Table } from "../../components/schduler/table/table";

export default {
  title: "Schuduler/schduler",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table />;

export const Schuduler = Template.bind({});
Schuduler.args = {};
