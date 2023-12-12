import React from 'react'

export default function Banner(props) {
  return (
    <div>
      <img 
          className="md:h-[171px]"
          src={props.src}
          alt={props.alt}
      />
  </div>
  )
}
