import React from 'react'

const Heading1 = ({ text, className = '', style = {} }) => {
  const defaultStyle = {
    WebkitTextStroke: '0.5px white',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    ...style
  };

  return (
    <h1 
      className={`zen text-[7vh] tracking-[3.75px] text-center ${className}`}
      style={defaultStyle}
    >
      {text}
    </h1>
  )
}

export default Heading1
