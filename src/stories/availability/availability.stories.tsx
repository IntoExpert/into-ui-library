import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AvailabilityCalendar } from "../../components/availability/availabilityCalendar";
import { TabProps } from "../../components/tabs";
import { DaysAvailability } from "../../components/availability/daysAvailability";
import { TutorsWeeklyAvailability } from "../../core/domain/availability/tutorsAvailability";

export default {
  title: "availability/availability",
  component: AvailabilityCalendar,
} as ComponentMeta<typeof AvailabilityCalendar>;

const Template: ComponentStory<typeof AvailabilityCalendar> = (args) => (
  <AvailabilityCalendar {...args} />
);

export const availability: TutorsWeeklyAvailability = {
  _calendar: {
    _days: [
      {
        _name: "mo",
        _events: [],
        _isAvailable: false,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
      {
        _name: "tu",
        _events: [],
        _isAvailable: false,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
      {
        _name: "we",
        _events: [],
        _isAvailable: false,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
      {
        _name: "th",
        _events: [
          {
            _id: "8cd1394d-4477-448d-9878-4655cbb89698",
            _startTime: "12:30:00",
            _endTime: "13:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "df8ff9c2-bb28-4636-80c4-fb5f5c81d972",
            _startTime: "13:00:00",
            _endTime: "13:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "cac5f00e-0427-4590-aede-d59bb182bdca",
            _startTime: "13:30:00",
            _endTime: "14:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "b733582f-1ff3-4ada-8aae-f0819c6fff55",
            _startTime: "14:00:00",
            _endTime: "14:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        ],
        _isAvailable: true,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
      {
        _name: "fr",
        _events: [
          {
            _id: "1afe529b-c096-477a-9125-6a45716d37fb",
            _startTime: "15:30:00",
            _endTime: "16:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "157d16ff-c740-4dc1-8c36-0158b983d26f",
            _startTime: "16:00:00",
            _endTime: "16:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        ],
        _isAvailable: true,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
      {
        _name: "sa",
        _events: [
          {
            _id: "b28486ff-3b17-48e6-a7ae-b59af87c6d12",
            _startTime: "16:00:00",
            _endTime: "16:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "c9fb231f-2c29-4cb5-9038-304d1608d74a",
            _startTime: "16:30:00",
            _endTime: "17:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "063e6cd7-e0e6-4bae-8d39-9db9a23d2675",
            _startTime: "18:00:00",
            _endTime: "19:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        ],
        _isAvailable: true,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
      {
        _name: "su",
        _events: [],
        _isAvailable: false,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
    ],
    _dateOverrides: {
      _daysEvents: [
        {
          _name: "fr",
          _events: [
            {
              _id: "1afe529b-c096-477a-9125-6a45716d37fb",
              _startTime: "15:30:00",
              _endTime: "16:00:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
          ],
          _isAvailable: true,
          _date: "2024-05-24T15:30:00.000+03:00",
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
        {
          _name: "fr",
          _events: [
            {
              _id: "75579831-54f5-4e32-b3a3-605ac3d00f2e",
              _startTime: "16:00:00",
              _endTime: "16:30:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
          ],
          _isAvailable: true,
          _date: "2024-05-24T16:00:00.000+03:00",
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
      ],
      _defaultDaysEvents: [
        {
          _name: "mo",
          _events: [],
          _isAvailable: false,
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
        {
          _name: "tu",
          _events: [],
          _isAvailable: false,
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
        {
          _name: "we",
          _events: [],
          _isAvailable: false,
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
        {
          _name: "th",
          _events: [
            {
              _id: "8cd1394d-4477-448d-9878-4655cbb89698",
              _startTime: "12:30:00",
              _endTime: "13:00:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
            {
              _id: "df8ff9c2-bb28-4636-80c4-fb5f5c81d972",
              _startTime: "13:00:00",
              _endTime: "13:30:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
            {
              _id: "cac5f00e-0427-4590-aede-d59bb182bdca",
              _startTime: "13:30:00",
              _endTime: "14:00:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
            {
              _id: "b733582f-1ff3-4ada-8aae-f0819c6fff55",
              _startTime: "14:00:00",
              _endTime: "14:30:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
          ],
          _isAvailable: true,
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
        {
          _name: "fr",
          _events: [
            {
              _id: "1afe529b-c096-477a-9125-6a45716d37fb",
              _startTime: "15:30:00",
              _endTime: "16:00:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
            {
              _id: "157d16ff-c740-4dc1-8c36-0158b983d26f",
              _startTime: "16:00:00",
              _endTime: "16:30:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
          ],
          _isAvailable: true,
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
        {
          _name: "sa",
          _events: [
            {
              _id: "b28486ff-3b17-48e6-a7ae-b59af87c6d12",
              _startTime: "16:00:00",
              _endTime: "16:30:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
            {
              _id: "c9fb231f-2c29-4cb5-9038-304d1608d74a",
              _startTime: "16:30:00",
              _endTime: "17:00:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
            {
              _id: "063e6cd7-e0e6-4bae-8d39-9db9a23d2675",
              _startTime: "18:00:00",
              _endTime: "19:00:00",
              _isNested: false,
              _eventOptions: {
                maxDurationInMinutes: null,
                minDurationInMinute: 0,
                minEventInterval: 30,
              },
            },
          ],
          _isAvailable: true,
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
        {
          _name: "su",
          _events: [],
          _isAvailable: false,
          _options: {
            eventOption: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        },
      ],
    },
    _options: {
      dayOptions: {
        eventOption: {
          maxDurationInMinutes: null,
          minDurationInMinute: 0,
          minEventInterval: 30,
        },
      },
    },
  },
  _timezone: "Asia/Damascus",
  _timesBooked: [
    {
      startTime: "2024-05-31T12:30:00.000Z",
      endTime: "2024-05-31T13:30:00.000Z",
    },
    {
      startTime: "2024-06-01T13:00:00.000Z",
      endTime: "2024-06-01T14:00:00.000Z",
    },
  ],
  bookedTimes: [
    {
      startTime: new Date("2024-05-31T12:30:00.000Z"),
      endTime: new Date("2024-05-31T13:30:00.000Z"),
    },
    {
      startTime: new Date("2024-06-01T13:00:00.000Z"),
      endTime: new Date("2024-06-01T14:00:00.000Z"),
    },
  ],
  canGoNext: true,
  canGoPrev: false,
  daysAvailability: [
    {
      date: new Date("2024-05-30T00:00:00+03:00"),
      availabilities: {
        _name: "th",
        _events: [
          {
            _id: "8cd1394d-4477-448d-9878-4655cbb89698",
            _startTime: "12:30:00",
            _endTime: "13:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "df8ff9c2-bb28-4636-80c4-fb5f5c81d972",
            _startTime: "13:00:00",
            _endTime: "13:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "cac5f00e-0427-4590-aede-d59bb182bdca",
            _startTime: "13:30:00",
            _endTime: "14:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "b733582f-1ff3-4ada-8aae-f0819c6fff55",
            _startTime: "14:00:00",
            _endTime: "14:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        ],
        _isAvailable: true,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
    },
    {
      date: new Date("2024-05-31T00:00:00+03:00"),
      availabilities: {
        _name: "fr",
        _events: [
          {
            _id: "1afe529b-c096-477a-9125-6a45716d37fb",
            _startTime: "15:30:00",
            _endTime: "16:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "157d16ff-c740-4dc1-8c36-0158b983d26f",
            _startTime: "16:00:00",
            _endTime: "16:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        ],
        _isAvailable: true,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
    },
    {
      date: new Date("2024-06-01T00:00:00+03:00"),
      availabilities: {
        _name: "sa",
        _events: [
          {
            _id: "b28486ff-3b17-48e6-a7ae-b59af87c6d12",
            _startTime: "16:00:00",
            _endTime: "16:30:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "c9fb231f-2c29-4cb5-9038-304d1608d74a",
            _startTime: "16:30:00",
            _endTime: "17:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
          {
            _id: "063e6cd7-e0e6-4bae-8d39-9db9a23d2675",
            _startTime: "18:00:00",
            _endTime: "19:00:00",
            _isNested: false,
            _eventOptions: {
              maxDurationInMinutes: null,
              minDurationInMinute: 0,
              minEventInterval: 30,
            },
          },
        ],
        _isAvailable: true,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
    },
    {
      date: new Date("2024-06-02T00:00:00+03:00"),
      availabilities: {
        _name: "su",
        _events: [],
        _isAvailable: false,
        _options: {
          eventOption: {
            maxDurationInMinutes: null,
            minDurationInMinute: 0,
            minEventInterval: 30,
          },
        },
      },
    },
  ],
  isInFirstWeek: true,
};
const nowDate = new Date();

const tomorrowDate = () => {
  const date = new Date();

  date.setDate(date.getDate() + 1);

  return date;
};
export const tabs: TabProps[] = availability.daysAvailability.map<TabProps>(
  (a) => ({
    className: "text-[0.5rem] sm:text-xs",
    title:
      a.date.getDate() === nowDate.getDate() && availability.isInFirstWeek
        ? "today"
        : a.date.getDate() === tomorrowDate().getDate() &&
          availability.isInFirstWeek
        ? "tomorrow"
        : a.date.toLocaleDateString("en", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
    element: (
      <DaysAvailability
        availabilities={a.availabilities}
        bookedTimes={availability.bookedTimes}
        noSlots="noslots"
        noSwipe="no swipe"
      />
    ),
  })
);

export const defaultState = Template.bind({});
defaultState.args = {
  tutorAvailability: availability,
  tabs: tabs,
};
