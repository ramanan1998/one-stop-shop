import React from 'react';

export const H1 = (props) => {
  return (
    <h1 className={`font-outfit text-9xl ${props.className}`}>{props.children}</h1>
  )
}

export const H2 = (props) => {
    return (
      <h2 className={`font-outfit text-7xl ${props.className}`}>{props.children}</h2>
    )
}

export const H3 = (props) => {
    return (
      <h3 className={`font-outfit text-5xl ${props.className}`}>{props.children}</h3>
    )
}

export const H4 = (props) => {
    return (
      <h4 className={`font-outfit text-3xl ${props.className}`}>{props.children}</h4>
    )
}

export const H5 = (props) => {
    return (
      <h5 className={`font-outfit text-2xl ${props.className}`}>{props.children}</h5>
    )
}

export const H6 = (props) => {
    return (
      <h6 className={`font-outfit text-xl ${props.className}`}>{props.children}</h6>
    )
}
