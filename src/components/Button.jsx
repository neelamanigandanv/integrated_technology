import { Link } from 'react-router-dom'
import Icon from './Icon'

const variants = {
  primary: 'bg-brand text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] hover:bg-branddark hover:shadow-[0_14px_30px_-10px_rgba(37,99,235,0.8)]',
  secondary: 'border border-navy/15 bg-white text-navy hover:border-brand/40 hover:bg-surface',
  navy: 'bg-navy text-white hover:bg-navysoft shadow-[0_10px_24px_-12px_rgba(16,27,53,0.65)]',
  light: 'bg-white text-navy hover:bg-surface shadow-sm',
  outlineLight: 'border border-white/30 text-white hover:bg-white/10',
  ghost: 'text-navy hover:bg-surface',
}

const sizes = {
  sm: 'px-4 py-2.5 text-[13px]',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight = true,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && !iconRight && <Icon name={icon} className="h-4 w-4 transition-transform duration-300" />}
      <span>{children}</span>
      {icon && iconRight && <Icon name={icon} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return <Link to={to} className={classes} onClick={onClick} {...props}>{content}</Link>
  }

  if (href) {
    return <a href={href} className={classes} onClick={onClick} {...props}>{content}</a>
  }

  return <button type={type} className={classes} onClick={onClick} {...props}>{content}</button>
}
