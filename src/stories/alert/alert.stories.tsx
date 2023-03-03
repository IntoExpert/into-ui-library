import { Button } from "../../components";
import { AlertProvider, useAlert } from "../../components/alert/context";
import "../../index.css";
import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
    title: 'Alert/belowNavBar',
    component: AlertProvider,
} as ComponentMeta<typeof AlertProvider>;

const AlertButton = (args: any) => {

    const alert = useAlert();

    return (
        <div>
            <Button onClick={() => alert.fireAlert({ message: 'Hello world!' })}>Alert</Button>
            <Button onClick={() => alert.fireSuccessAlert({ message: 'Hello world!' })}>Success Alert</Button>
            <Button onClick={() => alert.fireErrorAlert({ message: 'Hello world!' })}>Error Alert</Button>
        </div>
    )
};

const Template: ComponentStory<typeof AlertProvider> = (args) => {

    return (
        <AlertProvider>
            <AlertButton {...args} />
        </AlertProvider>
    );
};

export const Alert = Template.bind({});
Alert.args = {

};