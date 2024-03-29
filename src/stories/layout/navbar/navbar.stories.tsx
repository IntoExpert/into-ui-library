import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IntoNavbar } from '../../../components/layout';
import { Avatar } from '../../../components/image';


export default {
    title: 'Layout/Navbar',
    component: IntoNavbar,
} as ComponentMeta<typeof IntoNavbar>;

const Template: ComponentStory<typeof IntoNavbar> = (args) => <IntoNavbar {...args} />;

export const NavbarWithAuth = Template.bind({});
NavbarWithAuth.args = {
    logo: <img src="https://www.intoexpert.com/assets/src/images/into-logo.svg" alt="Into logo" />,
    links: {
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
    },
    dropdowns: {
        dropdowns: [
            {
                className: 'w-8 h-8',
                icon: <div className='flex items-center p-2'>
                    <span className='inline-block text-xs'>En</span>
                    <span className={`mx-0.5`}></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.649" height="4.441" viewBox="0 0 7.649 4.441">
                        <path id="Shape" d="M3.825-9a.529.529,0,0,1,.379.16L7.492-5.49a.553.553,0,0,1,0,.772.529.529,0,0,1-.758,0L3.825-7.683.914-4.718a.529.529,0,0,1-.757,0,.553.553,0,0,1,0-.772L3.446-8.84A.529.529,0,0,1,3.825-9Z" transform="translate(7.649 -4.559) rotate(180)" />
                    </svg>

                </div>
                ,
                menu: {
                    className: 'right-0',
                    items: [
                        {
                            icon: <span>&uarr;</span>,
                            link: {
                                children: 'Home',
                            }
                        },
                        {
                            link: {
                                children: 'Home',
                            }
                        },
                        {
                            link: {
                                children: 'Home',
                            }
                        }
                    ]
                }
            },
            {
                className: 'w-8 h-8',
                icon: <svg id="Component_244_82" data-name="Component 244 – 82" xmlns="http://www.w3.org/2000/svg" width="14.621" height="17.71" viewBox="0 0 14.621 17.71">
                    <g id="Group_11773" data-name="Group 11773" transform="translate(-1714.503 -27)" opacity="0">
                        <g id="Group_11772" data-name="Group 11772" transform="translate(956.971 -267.067)">
                            <path id="Path_10445" data-name="Path 10445" d="M772.148,307.232a1.908,1.908,0,0,0-.253-.762,8.206,8.206,0,0,1-.811-1.661,5.459,5.459,0,0,1-.212-1.537c0-1.119.016-2.24-.009-3.36a6.022,6.022,0,0,0-11.979-.682,7.574,7.574,0,0,0-.061,1.018c-.013,1.163,0,2.326-.026,3.489a4.5,4.5,0,0,1-.645,2.125c-.123.215-.255.424-.381.637a1.534,1.534,0,0,0,1.343,2.355c1.911,0,3.822,0,5.734,0h5.734a1.515,1.515,0,0,0,1.569-1.459A1.425,1.425,0,0,0,772.148,307.232Z" transform="translate(0 0)" fill="#3f94f3" />
                            <path id="Path_3279" data-name="Path 3279" d="M886.079,730.474a3.484,3.484,0,0,0,2.588-1.036,1.752,1.752,0,0,0,.133-.154.536.536,0,0,0-.053-.751.53.53,0,0,0-.748.049l-.014.017a2.093,2.093,0,0,1-1.182.719,2.433,2.433,0,0,1-2.5-.717.538.538,0,0,0-.757-.077l-.006.005a.532.532,0,0,0-.059.75l.012.014a3.2,3.2,0,0,0,2.027,1.122C885.729,730.454,885.94,730.462,886.079,730.474Z" transform="translate(-121.293 -418.702)" fill="#3f94f3" />
                        </g>
                    </g>
                    <g id="Group_11774" data-name="Group 11774" transform="translate(-1714.503 -27)">
                        <path id="Path_3278" data-name="Path 3278" d="M157.549,257.474q2.868,0,5.736,0a1.516,1.516,0,0,0,1.567-1.623,1.909,1.909,0,0,0-.253-.762,8.216,8.216,0,0,1-.811-1.662,5.476,5.476,0,0,1-.212-1.538c0-1.12.016-2.241-.009-3.361a6.024,6.024,0,0,0-11.984-.682,7.552,7.552,0,0,0-.061,1.018c-.013,1.163,0,2.327-.026,3.49a4.493,4.493,0,0,1-.645,2.126c-.123.215-.255.424-.381.637a1.534,1.534,0,0,0,1.343,2.356C153.725,257.477,155.637,257.474,157.549,257.474Zm0-1.071h-2.023c-1.237,0-2.475,0-3.712,0a.465.465,0,0,1-.424-.734c.085-.151.176-.3.267-.445a6.1,6.1,0,0,0,.931-3.347c-.01-1.008-.006-2.017,0-3.026a6.438,6.438,0,0,1,.056-.832,4.959,4.959,0,0,1,9.869.762c0,1.039-.019,2.08.009,3.118a9.614,9.614,0,0,0,.184,1.578,6.3,6.3,0,0,0,.949,2.1.868.868,0,0,1,.129.284c.058.306-.172.542-.52.542Z" transform="translate(1564.268 -215.684)" />
                        <path id="Path_3279-2" data-name="Path 3279" d="M244.122,560.058a3.486,3.486,0,0,0,2.589-1.036,1.752,1.752,0,0,0,.133-.154.536.536,0,0,0-.053-.751.53.53,0,0,0-.762.066,2.093,2.093,0,0,1-1.182.719,2.434,2.434,0,0,1-2.5-.717.538.538,0,0,0-.763-.072.532.532,0,0,0-.047.764A3.2,3.2,0,0,0,243.565,560C243.772,560.037,243.983,560.045,244.122,560.058Z" transform="translate(1477.631 -515.349)" />
                    </g>
                </svg>
                ,
                menu: {
                    className: 'right-0',
                    items: [
                        {
                            icon: <span>&uarr;</span>,
                            link: {
                                children: 'Home',
                            }
                        },
                        {
                            link: {
                                children: 'Home',
                            }
                        },
                        {
                            link: {
                                children: 'Home',
                            }
                        }
                    ]
                }
            },
            {
                className: 'w-8 h-8',
                icon: <Avatar className={`w-8 h-8`} src='https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300' />,
                menu: {
                    className: 'right-0',
                    items: [
                        {
                            icon: <span>&uarr;</span>,
                            link: {
                                children: 'Home',
                            }
                        },
                        {
                            link: {
                                children: 'Home',
                            }
                        },
                        {
                            link: {
                                children: 'Home',
                            }
                        }
                    ]
                }
            },
        ]
    }
};
