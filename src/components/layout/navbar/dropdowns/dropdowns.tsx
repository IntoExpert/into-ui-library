import { UiElementProps } from "../../../common";
import { Dropdown, DropdownProps } from "../../../dropdown";

export interface NavbarDropdownProps extends UiElementProps {
    dropdowns?: DropdownProps[];
};

export const NavbarDropdowns = (props: NavbarDropdownProps) => {

    return (
        <div className={`flex ${props.className ?? ''}`}>
            {props.dropdowns?.map((dropdown, index) => (
                <div key={index} className={`flex items-center`}>
                    {index > 0 ? <span className={`mx-1`}></span> : null}
                    <Dropdown {...dropdown} />
                </div>
            ))}
        </div>
    )
}