// ikony
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger.svg";

export default function HamburgerButton(props) {
    return (
        <div
        className="flex md:hidden text-orange-600 mt-2 hover:text-orange-500 transition cursor-pointer pl-4"
        onClick={props.onClick}
      >
        <HamburgerIcon />
      </div>
    );
}