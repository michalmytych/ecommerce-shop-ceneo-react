import { useState } from "react";
import { data } from "../../data";
import { ReactComponent as LeftArrowIcon } from '../../assets/leftarrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/rightarrow.svg';


export default function Slider(props) {
    const [current, setCurrent] = useState(0);
    const banners = data.banners;
    return (
        <div className="relative">
            <img 
            className="md:h-[350px]"
            src={`${banners[current].src}`} 
            alt={props.alt}
            />
            <button className="absolute left-1 top-24 md:top-40">
                <LeftArrowIcon onClick={() => setCurrent(current === 0 ? banners.length - 1 : current - 1)} />
            </button>
            <button className="absolute right-1 top-24 md:top-40 ">
                <RightArrowIcon onClick={() => setCurrent(current === banners.length - 1 ? 0 : current + 1)} />
            </button>
        </div>
    );
};
