// ikony
import { ReactComponent as LogoIcon } from "../../assets/building.svg";

export default function Logo() {
  return (
    <div className="text-orange-600 hover:text-orange-500 transition cursor-pointer pl-4">
      <LogoIcon />
    </div>
  );
}
