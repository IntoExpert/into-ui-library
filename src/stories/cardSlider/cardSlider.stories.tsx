import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardSlider } from "../../components/slider/cardSlider";
import { EditIcon, DeleteIcon, Avatar } from "../../components";

export default {
  title: "Card Slider/Card slider",
  component: CardSlider,
} as ComponentMeta<typeof CardSlider>;

const Template: ComponentStory<typeof CardSlider> = (args) => (
  <CardSlider {...args} />
);

export const defaultState = Template.bind({});
defaultState.args = {
  courseCard: [
    {
      className: "w-80",
      children: <h2 className={`p-5`}>Hi!</h2>,
      mediaCard: {
        className: "w-64",
        media: {
          src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          alt: "Books",
        },

        badge: {
          children: <span>$1,400</span>,
        },
        dropdown: {
          icon: (
            <Avatar src="https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300" />
          ),
          menu: {
            className: " top-8",
            items: [
              {
                icon: <DeleteIcon />,
                link: {
                  children: "Delete",
                  className: "flex",
                },
              },
              {
                icon: <EditIcon />,
                link: {
                  children: "Edit",
                  className: "flex",
                },
              },
            ],
          },
        },
      },
      avatar: {
        alt: "Face portrait",
        src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
        label: {
          name: "Face portrait",
          classname: "!text-black",
        },
      },
      state: {
        children: <p>Pending</p>,
      },
      title: (
        <h1>
          <strong>Financial Acounting</strong>
        </h1>
      ),
      description: (
        <p>
          Lorem ipsum dolor sit amet, enim ad minim consect etur lorem ipsum
          dolor
        </p>
      ),
      duration: <p>8 Weeks, 20 hrs.</p>,
      deadline: <p>Registra on deadline, 7 March</p>,
      rating: { value: 3, isEditable: false },
      numberOfRatings: <p>(523 ratings)</p>,
    },
    {
      className: "w-80",
      children: <h2 className={`p-5`}>Hi!</h2>,
      mediaCard: {
        className: "w-64",
        media: {
          src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          alt: "Books",
        },

        badge: {
          children: <span>$1,400</span>,
        },
        dropdown: {
          icon: (
            <Avatar src="https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300" />
          ),
          menu: {
            className: " top-8",
            items: [
              {
                icon: <DeleteIcon />,
                link: {
                  children: "Delete",
                  className: "flex",
                },
              },
              {
                icon: <EditIcon />,
                link: {
                  children: "Edit",
                  className: "flex",
                },
              },
            ],
          },
        },
      },
      avatar: {
        alt: "Face portrait",
        src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
        label: {
          name: "Face portrait",
          classname: "!text-black",
        },
      },
      state: {
        children: <p>Pending</p>,
      },
      title: (
        <h1>
          <strong>Financial Acounting</strong>
        </h1>
      ),
      description: (
        <p>
          Lorem ipsum dolor sit amet, enim ad minim consect etur lorem ipsum
          dolor
        </p>
      ),
      duration: <p>8 Weeks, 20 hrs.</p>,
      deadline: <p>Registra on deadline, 7 March</p>,
      rating: { value: 3, isEditable: false },
      numberOfRatings: <p>(523 ratings)</p>,
    },
    {
      className: "w-80",
      children: <h2 className={`p-5`}>Hi!</h2>,
      mediaCard: {
        className: "w-64",
        media: {
          src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          alt: "Books",
        },

        badge: {
          children: <span>$1,400</span>,
        },
        dropdown: {
          icon: (
            <Avatar src="https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300" />
          ),
          menu: {
            className: " top-8",
            items: [
              {
                icon: <DeleteIcon />,
                link: {
                  children: "Delete",
                  className: "flex",
                },
              },
              {
                icon: <EditIcon />,
                link: {
                  children: "Edit",
                  className: "flex",
                },
              },
            ],
          },
        },
      },
      avatar: {
        alt: "Face portrait",
        src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
        label: {
          name: "Face portrait",
          classname: "!text-black",
        },
      },
      state: {
        children: <p>Pending</p>,
      },
      title: (
        <h1>
          <strong>Financial Acounting</strong>
        </h1>
      ),
      description: (
        <p>
          Lorem ipsum dolor sit amet, enim ad minim consect etur lorem ipsum
          dolor
        </p>
      ),
      duration: <p>8 Weeks, 20 hrs.</p>,
      deadline: <p>Registra on deadline, 7 March</p>,
      rating: { value: 3, isEditable: false },
      numberOfRatings: <p>(523 ratings)</p>,
    },
    {
      className: "w-80",
      children: <h2 className={`p-5`}>Hi!</h2>,
      mediaCard: {
        className: "w-64",
        media: {
          src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          alt: "Books",
        },

        badge: {
          children: <span>$1,400</span>,
        },
        dropdown: {
          icon: (
            <Avatar src="https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300" />
          ),
          menu: {
            className: " top-8",
            items: [
              {
                icon: <DeleteIcon />,
                link: {
                  children: "Delete",
                  className: "flex",
                },
              },
              {
                icon: <EditIcon />,
                link: {
                  children: "Edit",
                  className: "flex",
                },
              },
            ],
          },
        },
      },
      avatar: {
        alt: "Face portrait",
        src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
        label: {
          name: "Face portrait",
          classname: "!text-black",
        },
      },
      state: {
        children: <p>Pending</p>,
      },
      title: (
        <h1>
          <strong>Financial Acounting</strong>
        </h1>
      ),
      description: (
        <p>
          Lorem ipsum dolor sit amet, enim ad minim consect etur lorem ipsum
          dolor
        </p>
      ),
      duration: <p>8 Weeks, 20 hrs.</p>,
      deadline: <p>Registra on deadline, 7 March</p>,
      rating: { value: 3, isEditable: false },
      numberOfRatings: <p>(523 ratings)</p>,
    },
    {
      className: "w-80",
      children: <h2 className={`p-5`}>Hi!</h2>,
      mediaCard: {
        className: "w-64",
        media: {
          src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          alt: "Books",
        },

        badge: {
          children: <span>$1,400</span>,
        },
        dropdown: {
          icon: (
            <Avatar src="https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300" />
          ),
          menu: {
            className: " top-8",
            items: [
              {
                icon: <DeleteIcon />,
                link: {
                  children: "Delete",
                  className: "flex",
                },
              },
              {
                icon: <EditIcon />,
                link: {
                  children: "Edit",
                  className: "flex",
                },
              },
            ],
          },
        },
      },
      avatar: {
        alt: "Face portrait",
        src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
        label: {
          name: "Face portrait",
          classname: "!text-black",
        },
      },
      state: {
        children: <p>Pending</p>,
      },
      title: (
        <h1>
          <strong>Financial Acounting</strong>
        </h1>
      ),
      description: (
        <p>
          Lorem ipsum dolor sit amet, enim ad minim consect etur lorem ipsum
          dolor
        </p>
      ),
      duration: <p>8 Weeks, 20 hrs.</p>,
      deadline: <p>Registra on deadline, 7 March</p>,
      rating: { value: 3, isEditable: false },
      numberOfRatings: <p>(523 ratings)</p>,
    },
  ],
};
