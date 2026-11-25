import Container from '../components/Container'
import Button from '../components/Button'
import Icon from '../components/Icon'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta('Page not found', 'The page you are looking for does not exist.')

  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <Container className="relative max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-brand shadow-lg">
          <Icon name="Compass" className="h-9 w-9" />
        </div>
        <p className="mt-8 font-sans text-6xl font-extrabold text-brand/20">404</p>
        <h1 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">This page took a different route.</h1>
        <p className="mt-4 text-[15px] leading-7 text-muted">
          The page you are looking for is not here. Let us get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="primary" size="lg" icon="ArrowRight">
            Back to home
          </Button>
          <Button to="/what-we-do" variant="secondary" size="lg">
            Our services
          </Button>
        </div>
      </Container>
    </section>
  )
}
