import React from 'react'

export default function Banner(props) {
  return (
    <div>
    {/* Banner size: 700x350 */}
      <img 
          src={props.src}
          alt={props.alt}
      />
  </div>
  )
}
