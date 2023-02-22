import { UiElementProps } from "../../common";
import { ExpandablePanel } from "../../expandable";
import { Avatar, AvatarProps } from "../../image";
import { Link, LinkProps } from "../../links";

export interface UserNavigationPanelProps extends UiElementProps {
    /**
     * Avatar props
     */
    avatar: AvatarProps;
    /**
     * Horizontal aligned links, that come after the user avatar directly 
     */
    horizontalNavigationItems: LinkProps[];
};

/**
 * User navigation panel, you can use it as dropdown, app drawer, etc...
 * It contains the user related navigations, like profile, logout, etc...
 */
export const UserNavigationPanel = (props: UserNavigationPanelProps) => {
    /**
     * Construct user avatar data, beside defaults
     */
    const avatar: AvatarProps = {
        ...props.avatar,
        label: {
            classname: `text-black ${props.className ?? ''}`,
            place: "bottom",
            ...props.avatar.label
        }
    };

    const ListGroupHeader = ({ title }: { title: string }) => (
        <div className="">
            {title}
        </div>
    )

    return (
        <aside className={`bg-surface w-56 shadow-xl`}>
            {/* User avatar */}
            <article className={`p-5 border-b border-gray-100`}>
                <Avatar {...avatar} className={`h-20 w-20 ${props.className}`} />
                <nav className={`flex justify-center mt-4`}>
                    <ul className="flex flex-justify-between">
                        {props.horizontalNavigationItems?.map((item, index) => {
                            return (
                                <>
                                    <li className={`text-sm`} key={index}>
                                        <Link {...item}>{item.children}</Link>
                                        {
                                            index < props.horizontalNavigationItems.length - 1 ?
                                                <span className={`mx-2`}>.</span>
                                                : null
                                        }
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                </nav>
            </article>
            <article>
                <ExpandablePanel header={<ListGroupHeader title="Expert" />} toggle={<div className={`align-middle -rotate-90`}>&#10094;</div>}>
                    <ul>
                        <li>s</li>
                        <li>s</li>
                        <li>s</li>
                        <li>s</li>
                        <li>s</li>
                        <li>s</li>
                    </ul>
                </ExpandablePanel>
            </article>
        </aside>
    );
}