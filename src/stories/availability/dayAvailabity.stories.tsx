import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DaysAvailability } from "../../components/availability/daysAvailability";
import { DateTime } from "luxon";

export default {
  title: "Day availability/Day availability",
  component: DaysAvailability,
} as ComponentMeta<typeof DaysAvailability>;

const Template: ComponentStory<typeof DaysAvailability> = (args) => (
  <DaysAvailability {...args} />
);

const slots = [
  {
    startDate: DateTime.fromISO("2024-06-13T13:00:00.000+03:00"),
    startTime: "12:30 PM",
    endTime: "01:00 PM",
  },
  {
    startDate: DateTime.fromISO("2024-06-13T13:30:00.000+03:00"),
    startTime: "01:00 PM",
    endTime: "01:30 PM",
  },
  {
    startDate: DateTime.fromISO("2024-06-13T14:00:00.000+03:00"),
    startTime: "01:30 PM",
    endTime: "02:00 PM",
  },
  {
    startDate: DateTime.fromISO("2024-06-13T14:30:00.000+03:00"),
    startTime: "02:00 PM",
    endTime: "02:30 PM",
  },
];


export const defaultState = Template.bind({});
defaultState.args = {
  slots: slots,
  noSlots: "no Slots",
  noSwipeTitle: "no Swipe",
};
