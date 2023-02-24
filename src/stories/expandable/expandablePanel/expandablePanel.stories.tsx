import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExpandablePanel } from '../../../components/expandable';


export default {
    title: 'Expandable/panel',
    component: ExpandablePanel,
} as ComponentMeta<typeof ExpandablePanel>;

const Template: ComponentStory<typeof ExpandablePanel> = (args) => <ExpandablePanel {...args} />;

export const expandable = Template.bind({});
expandable.args = {
    header: "Expandable",
    children: `This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`,
    toggle: <span>&darr;</span>,

};