import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ContactForm from '../components/ContactForm'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { officeLocations, socialLinks } from '../data/site'

export default function ContactUs() {
  useDocumentMeta('Contact Us', 'Talk to Technova about AI, software development, cloud, data, or digital transformation. Tell us about your project and we will respond within one business day.')

  return (
    <>
      <HeroSection
        eyebrow="CONTACT US"
        title={<>Let&apos;s talk about what&apos;s next for your business.</>}
        description="Tell us a little about your challenge. We will put the right people in the room and come back with a practical way forward — usually within one business day."
        highlights={['Response within one business day', 'No sales scripts', 'Confidential by default']}
        compact
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Get in touch</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                We would love to hear what you are building.
              </h2>
              <p className="mt-5 text-[14px] leading-7 text-muted">
                Whether you have a fully formed brief or just a rough idea, start the conversation here. Every enquiry is reviewed by a senior member of our team.
              </p>

              <div className="mt-9 space-y-4">
                <a href="mailto:hello@technova.io" className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-brand/30 hover:shadow-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <Icon name="Mail" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-muted">Email us</span>
                    <span className="mt-1 block text-[14px] font-bold text-navy group-hover:text-brand">hello@technova.io</span>
                  </span>
                </a>

                <a href="tel:+442079460421" className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-brand/30 hover:shadow-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <Icon name="Phone" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-muted">Call us</span>
                    <span className="mt-1 block text-[14px] font-bold text-navy group-hover:text-brand">+44 20 7946 0421</span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <Icon name="Clock" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-muted">Response time</span>
                    <span className="mt-1 block text-[14px] font-bold text-navy">Within 1 business day</span>
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Follow us</p>
                <div className="mt-3 flex gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-navy transition-all hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <Icon name={social.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What happens next"
            title="A simple, transparent process"
            description="No long sales cycles. Here is what to expect after you reach out."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { number: '01', icon: 'MessageSquare', title: 'We listen', text: 'A senior specialist reads your enquiry and replies with initial thoughts and questions.' },
              { number: '02', icon: 'Users', title: 'We explore', text: 'A short call brings the right people together to understand goals, constraints, and timing.' },
              { number: '03', icon: 'Compass', title: 'We propose', text: 'You receive a clear, costed outline of the approach, milestones, and next steps.' },
            ].map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-sans text-3xl font-extrabold text-line">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our offices"
            title="Where to find us"
            description="Distributed teams, local relationships. Reach out to the office closest to you or use the form above."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {officeLocations.map((office, index) => (
              <Reveal key={office.city} delay={index * 0.06}>
                <div className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
                  <div className="relative h-28 overflow-hidden bg-navy dark-grid">
                    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/30 blur-2xl" />
                    <span className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300 backdrop-blur-sm">
                      <Icon name="MapPin" className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy">{office.city}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-muted">{office.address}</p>
                    <div className="mt-5 space-y-2 border-t border-line pt-4">
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[12.5px] text-ink transition-colors hover:text-brand">
                        <Icon name="Phone" className="h-3.5 w-3.5 text-brand" />
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-[12.5px] text-ink transition-colors hover:text-brand">
                        <Icon name="Mail" className="h-3.5 w-3.5 text-brand" />
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
