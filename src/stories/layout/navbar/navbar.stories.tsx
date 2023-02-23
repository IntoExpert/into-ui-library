import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from '../../../components/layout';


export default {
    title: 'Layout/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarWithAuth = Template.bind({});
NavbarWithAuth.args = {
    logo: <img src="https://www.intoexpert.com/assets/src/images/into-logo.svg" alt="Into logo" />,
    navbarLinks: {
        links: [
            {
                children: "Home",
                href: "#home",
            },
            {
                children: "About us",
                href: "#about-us",
            },
            {
                children: "Contact us",
                href: "#contact-us",
            }
        ]
    }
};
