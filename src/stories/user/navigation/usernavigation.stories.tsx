import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserNavigationPanel } from '../../../components/user';


export default {
    title: 'User/Navigation',
    component: UserNavigationPanel,
} as ComponentMeta<typeof UserNavigationPanel>;

const Template: ComponentStory<typeof UserNavigationPanel> = (args) => <UserNavigationPanel {...args} />;

export const userNavigation = Template.bind({});
userNavigation.args = {
    avatar: {
        alt: "Face portrait",
        src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
        className: "h-20 w-20",
        label: {
            name: "Motasem Ghz",
        },
    },
    horizontalNavigationItems: [
        {
            title: 'Profile',
            href: "#profile",
            children: 'Profile',
        },
        {
            title: 'Wallet',
            href: "#Wallet",
            children: 'Wallet',
        },
        {
            title: 'History',
            href: "#History",
            children: 'History',
        }
    ]
};
