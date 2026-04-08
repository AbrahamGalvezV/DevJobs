import { Link as RRLink } from 'react-router'

export function Link({ className, ...props }) {
  return (
    <RRLink
      className={typeof className === 'string' ? className : undefined}
      {...props}
    />
  )
}