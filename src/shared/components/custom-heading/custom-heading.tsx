import { FC, PropsWithChildren } from 'react'
import style from './custom-heading.styles.module.css'

interface CustomHeadingProps extends PropsWithChildren {
  type?: 'primary' | 'secondary'
  className?: string
}

const CustomHeading: FC<CustomHeadingProps> = ({ children, type, className }) => {
  return <h1 className={`${style[`${type}`]} ${className}`}>{children}</h1>
}

export default CustomHeading
