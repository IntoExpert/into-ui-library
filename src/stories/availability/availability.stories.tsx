import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AvailabilityCalendar } from "../../components/availability/availabilityCalendar";
import {
  TutorAvailability,
  TutorCalendarBackendType,
  TutorsWeeklyAvailability,
} from "../../core/domain/availability/tutorsAvailability";

export default {
  title: "availability/availability",
  component: AvailabilityCalendar,
} as ComponentMeta<typeof AvailabilityCalendar>;

const Template: ComponentStory<typeof AvailabilityCalendar> = (args) => (
  <AvailabilityCalendar {...args} />
);

const calendar: TutorCalendarBackendType = {
  weeklySchedule: [
    {
      name: "mo",
      isAvailable: false,
      events: [],
      date: null,
    },
    {
      name: "tu",
      isAvailable: false,
      events: [],
      date: null,
    },
    {
      name: "we",
      isAvailable: false,
      events: [],
      date: null,
    },
    {
      name: "th",
      isAvailable: true,
      events: [
        {
          id: "8cd1394d-4477-448d-9878-4655cbb89698",
          startTime: "12:30:00",
          endTime: "13:00:00",
          isNested: false,
        },
        {
          id: "cac5f00e-0427-4590-aede-d59bb182bdca",
          startTime: "13:30:00",
          endTime: "14:00:00",
          isNested: false,
        },
        {
          id: "df8ff9c2-bb28-4636-80c4-fb5f5c81d972",
          startTime: "13:00:00",
          endTime: "13:30:00",
          isNested: false,
        },
        {
          id: "b733582f-1ff3-4ada-8aae-f0819c6fff55",
          startTime: "14:00:00",
          endTime: "14:30:00",
          isNested: false,
        },
      ],
      date: null,
    },
    {
      name: "fr",
      isAvailable: true,
      events: [
        {
          id: "1afe529b-c096-477a-9125-6a45716d37fb",
          startTime: "15:30:00",
          endTime: "16:00:00",
          isNested: false,
        },
        {
          id: "157d16ff-c740-4dc1-8c36-0158b983d26f",
          startTime: "16:00:00",
          endTime: "16:30:00",
          isNested: false,
        },
      ],
      date: null,
    },
    {
      name: "sa",
      isAvailable: true,
      events: [
        {
          id: "b28486ff-3b17-48e6-a7ae-b59af87c6d12",
          startTime: "16:00:00",
          endTime: "16:30:00",
          isNested: false,
        },
        {
          id: "c9fb231f-2c29-4cb5-9038-304d1608d74a",
          startTime: "16:30:00",
          endTime: "17:00:00",
          isNested: false,
        },
        {
          id: "063e6cd7-e0e6-4bae-8d39-9db9a23d2675",
          startTime: "18:00:00",
          endTime: "19:00:00",
          isNested: false,
        },
      ],
      date: null,
    },
    {
      name: "su",
      isAvailable: false,
      events: [],
      date: null,
    },
  ],
  datesOverride: [
    {
      name: "fr",
      isAvailable: true,
      events: [
        {
          id: "1afe529b-c096-477a-9125-6a45716d37fb",
          startTime: "15:30:00",
          endTime: "16:00:00",
          isNested: false,
        },
        {
          id: "75579831-54f5-4e32-b3a3-605ac3d00f2e",
          startTime: "16:00:00",
          endTime: "16:30:00",
          isNested: false,
        },
      ],
      date: 1716498000,
    },
  ],
  timesBooked: [
    {
      startTime: 1717158600,
      endTime: 1717162200,
    },
    {
      startTime: 1717246800,
      endTime: 1717250400,
    },
  ],
};

const avail = TutorAvailability.createFromBackend(calendar, "");

export const tutorAvailability = TutorsWeeklyAvailability.create(avail);

export const defaultState = Template.bind({});
defaultState.args = {
  availability: tutorAvailability,
};
