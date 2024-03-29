import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Avatar } from '../../components/image';
import { InputField } from '../../components';


export default {
    title: 'Dropdown/dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const NavbarWithAuth = Template.bind({});
NavbarWithAuth.args = {
    icon: <Avatar src='https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300' />,
    menu: {
        items: [
            {
                custom: <h1>Link</h1>
            },
            {
                icon: <span>&uarr;</span>,
                link: {
                    children: 'Home',
                }
            },
            {
                icon: <span>&uarr;</span>,
                button: {
                    children: "Home",
                    onClick: (e) => alert('Hi')
                }
            },
            {
                link: {
                    children: 'Home',
                }
            },
            {
                custom: <InputField name='motasem' type='checkbox' />
            }
        ]
    }
};
