import { FC, PropsWithChildren } from 'react'
import { headingStyles } from './custom-heading.styles'

interface CustomHeadingProps extends PropsWithChildren {
  type: 'primary' | 'secondary'
  className?: string
}

const CustomHeading: FC<CustomHeadingProps> = ({ children, type, className }) => {
  return <h1 className={`${headingStyles[type]} ${className}`}>{children}</h1>
}

export default CustomHeading
