import React from "react";

export default function MobileCategory(props) {
  return (
    
      <div className="flex flex-col items-center space-y-2 p-2 bg-white">
        <a href={props.link} className="cursor-pointer">
        <div
          className={`flex rounded-full ${props.color} items-center justify-center h-20 w-20`}
        >
          <div className="scale-150 text-white">{props.icon}</div>
        </div>
        </a>
        <p className="text-sm text-grey-500 text-center whitespace-nowrap">
          {props.name}
        </p>
        
      </div>
    
  );
}
