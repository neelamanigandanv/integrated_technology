import Reveal from './Reveal'
import Icon from './Icon'

export default function SectionHeading({
  eyebrow,
  eyebrowStars = false,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
  children,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : align === 'right' ? 'ml-auto text-right items-end' : ''

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] ${light ? 'text-cyan-300' : 'text-brand'}`}>
          {eyebrowStars ? (
            <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
          ) : (
            <span className={`h-px w-7 ${light ? 'bg-cyan-300' : 'bg-brand'}`} />
          )}
          {eyebrow}
          {eyebrowStars && <span className="text-[13px] leading-none" aria-hidden="true">✦</span>}
        </span>
      )}
      <h2 className={`text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[44px] ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-[15px] leading-7 sm:text-base ${light ? 'text-slate-300' : 'text-muted'}`}>
          {description}
        </p>
      )}
      {children}
    </Reveal>
  )
}
