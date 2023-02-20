import { AlertProvider, useAlert } from "../../components/alert/context";
import "../../index.css";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../Button";


export default {
    title: 'Alert/belowNavBar',
    component: AlertProvider,
} as ComponentMeta<typeof AlertProvider>;

const AlertButton = (args: any) => {

    const alert = useAlert();

    return (
        <div>
            <Button onClick={() => alert.fireAlert({ message: 'Hello world!' })} label={`Alert`} />
            <Button onClick={() => alert.fireSuccessAlert({ message: 'Hello world!' })} label={`Success Alert`} />
            <Button onClick={() => alert.fireErrorAlert({ message: 'Hello world!' })} label={`Error Alert`} />
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