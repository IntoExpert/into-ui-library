import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../../components";
import { SignUpForm } from "../../components/form/signUp";
import {
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
  UserFilledIcon,
  EmailIcon,
} from "../../components";

export default {
  title: "Form/Sign up Form",
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => (
  <SignUpForm {...args} />
);
export const DefaultState = Template.bind({});
DefaultState.args = {
  className: "px-48",
  topChildren: "Sign Up With",
  bottomChildren: "or continue with email",
  avatar: {
    className: "w-32 h-32 shadow-lg ",
    alt: "Face portrait",
    src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
    label: {
      name: "Iam a Parent",
      classname: "!text-black !text-2xl",
      place: "bottom",
    },
  },
  federatedButton: [
    {
      className: "bg-opacity-10 w-14 h-14 shadow-lg ",
      icon: (
        <FacebookIcon
          className="  fill-secondary
      "
        />
      ),
      onClick: () => {
        alert("clicked");
      },
    },
    {
      className: "bg-opacity-10 w-14 h-14 shadow-lg",
      icon: (
        <GoogleIcon
          className="  fill-secondary
      "
        />
      ),
      onClick: () => {
        alert("clicked");
      },
    },
    {
      className: "bg-opacity-10 w-14 h-14 shadow-lg ",
      icon: (
        <AppleIcon
          className="  fill-secondary
      "
        />
      ),
      onClick: () => {
        alert("clicked");
      },
    },
  ],
  inputs: [
    {
      className: "",
      icon: <UserFilledIcon />,
      placeholder: "First Name",
      type: "text",
    },
    {
      icon: <UserFilledIcon />,
      placeholder: "Last Name",
      type: "text",
    },
    {
      icon: <EmailIcon />,
      placeholder: "Email Address",
      type: "email",
    },
    {
      type: "date",
    },
  ],
  dropdownMenu: {
    dropdownMenu: [
      {
        value: "first",
        label: "first",
      },
      {
        value: "second",
        label: "second",
      },
      {
        value: "third",
        label: "third",
      },
      {
        value: "fourth",
        label: "fourth",
      },
    ],
    placeholder: "Where Did You Here About Us?",
  },
  policiesTandC: (
    <p>
      {" "}
      By clicking SignUp, I agree to all Into’s{" "}
      <a href="#/" className="text-blue-500 underline text-center">
        Policies
      </a>
      ,<br></br> User
      <a href="#/" className="text-blue-500 underline  text-center">
        {" "}
        Terms and Conditions.
      </a>
    </p>
  ),
  bottomChild: (
    <p>
      Already have an account?{" "}
      <a href="#/" className="text-blue-500 underline ">
        Sign In
      </a>{" "}
    </p>
  ),
};
