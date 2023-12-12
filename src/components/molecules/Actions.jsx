// ikony
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";

export default function Actions() {
  return (
    <div className="flex items-center gap-6 pr-4">
      <div className="hover:scale-125 transition cursor-pointer">
        <CartIcon />
      </div>
      <div className="hover:scale-125 transition cursor-pointer">
        <HeartIcon />
      </div>
      <div className="hover:scale-125 transition cursor-pointer">
        <UserIcon />
      </div>
    </div>
  );
}
