import React from 'react'

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary'}: Props) => {
  return (
    <button color="react" className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button