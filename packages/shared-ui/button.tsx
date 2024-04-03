import {ReactNode, MouseEventHandler} from 'react'

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export const Button = ({onClick, children}: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}
