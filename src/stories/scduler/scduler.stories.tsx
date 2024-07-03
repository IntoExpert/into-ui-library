import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../index.css";
import { SchedulerTable } from "../../components/schduler/table/table";
import { Slot } from "../../components/schduler/table/slot";
import { DropdownItemProps, DropdownMenuProps } from "../../components";

export default {
  title: "Scheduler/SchedulerTable",
  component: SchedulerTable,

  argTypes: {
    events: { control: "object" },
  },
} as ComponentMeta<typeof SchedulerTable>;

const Template: ComponentStory<typeof SchedulerTable> = (args) => (
  <SchedulerTable {...args} />
);
const imageUR =
  "data:image/png;base64,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";
export const BasicScheduler = Template.bind({});

const generateDropdownMenu = (): DropdownMenuProps => {
  const items: DropdownItemProps[] = [
    {
      button: {
        children: <span>session</span>,
        onClick: () => console.log(1 + 1),
      },
    },
  ];
  return { items };
};
const dropdownMenu = generateDropdownMenu();

BasicScheduler.args = {
  events: [
    {
      name: "Strategy Session",
      slot: (
        <Slot
          color="primary"
          status="ongoing"
          title="Finincial Acounting"
          className="bg-primaryVariant border-primary border rounded   w-full h-full"
          avatar={{ src: imageUR, firstName: "Hasan", lastName: "tfaily" }}
          dropdownMenu={dropdownMenu}
        />
      ),
      startTime: "2024-07-03T11:00",
      endTime: "2024-07-03T12:00",
      merge: true,
    },
    {
      name: "Review Meeting",
      slot: (
        <div className="bg-primaryVariant rounded border-primary h-full w-full flex items-center justify-center  ">
          hello
        </div>
      ),

      startTime: "2024-06-27T11:00",
      endTime: "2024-06-27T11:30",
      merge: false,
    },
  ],
};

