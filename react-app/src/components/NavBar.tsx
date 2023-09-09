import React from 'react'

interface Props {
    cartItemsCount: number
}


export const NavBar = ({cartItemsCount}: Props) => {
  return (
    <div>NavBar: {cartItemsCount}</div>
  )
}
