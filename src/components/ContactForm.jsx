import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { budgetOptions, serviceOptions } from '../data/site'
import Icon from './Icon'

const emptyForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'

  if (!values.company.trim()) errors.company = 'Please enter your company name.'

  if (values.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number or leave this blank.'
  }

  if (!values.service) errors.service = 'Please select a service you are interested in.'
  if (!values.budget) errors.budget = 'Please select an approximate budget.'
  if (!values.message.trim()) errors.message = 'Please tell us a little about your project.'
  else if (values.message.trim().length < 20) errors.message = 'Please add a few more details (at least 20 characters).'

  return errors
}

const fieldClass = (hasError) =>
  `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-[14px] text-ink outline-none transition-all placeholder:text-muted/60 focus:ring-4 ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
      : 'border-line focus:border-brand focus:ring-brand/10'
  }`

function Field({ label, name, required = true, error, children }) {
  return (
    <div>
      <label htmlFor={name} className="text-[13px] font-semibold text-navy">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-red-600">
          <Icon name="AlertCircle" className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [params] = useSearchParams()
  const requestedService = params.get('interest') || params.get('service') || ''
  const [values, setValues] = useState({
    ...emptyForm,
    service: serviceOptions.includes(requestedService) ? requestedService : '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    window.setTimeout(() => {
      setStatus('success')
      setValues(emptyForm)
      setErrors({})
    }, 900)
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Icon name="CheckCircle2" className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-navy">Thank you — message received.</h3>
        <p className="mt-3 max-w-md text-[14px] leading-7 text-muted">
          Our team will review your enquiry and get back to you within one business day. If it is urgent, call us directly and we will help right away.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:border-brand/40 hover:text-brand"
        >
          Send another enquiry
          <Icon name="ArrowRight" className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-40px_rgba(16,27,53,0.45)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass(errors.name)}
          />
        </Field>

        <Field label="Work email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass(errors.email)}
          />
        </Field>

        <Field label="Company name" name="company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your organization"
            value={values.company}
            onChange={(event) => update('company', event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={fieldClass(errors.company)}
          />
        </Field>

        <Field label="Phone number" name="phone" required={false} error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 000 1234"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={fieldClass(errors.phone)}
          />
        </Field>

        <Field label="Service interested in" name="service" error={errors.service}>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={(event) => update('service', event.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className={`${fieldClass(errors.service)} appearance-none pr-10 ${values.service ? '' : 'text-muted/70'}`}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <Icon name="ChevronDown" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </Field>

        <Field label="Project budget" name="budget" error={errors.budget}>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={values.budget}
              onChange={(event) => update('budget', event.target.value)}
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? 'budget-error' : undefined}
              className={`${fieldClass(errors.budget)} appearance-none pr-10 ${values.budget ? '' : 'text-muted/70'}`}
            >
              <option value="">Select a range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <Icon name="ChevronDown" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Tell us about your project" name="message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What are you trying to achieve, and what does success look like?"
              value={values.message}
              onChange={(event) => update('message', event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${fieldClass(errors.message)} resize-y`}
            />
          </Field>
        </div>
      </div>

      {status === 'error' && (
        <div role="alert" className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700">
          <Icon name="AlertCircle" className="mt-0.5 h-4 w-4 shrink-0" />
          Please review the highlighted fields and try again.
        </div>
      )}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p className="max-w-xs text-[12px] leading-5 text-muted">
          We use your details only to respond to this enquiry. No spam, ever.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_26px_-12px_rgba(37,99,235,0.8)] transition-all hover:bg-branddark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Icon name="Loader2" className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send enquiry
              <Icon name="Send" className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
