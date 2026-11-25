import { Link, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Icon from '../../components/Icon'
import Reveal from '../../components/Reveal'
import useDocumentMeta from '../../hooks/useDocumentMeta'
import { caseStudies, getCaseStudy } from '../../data/caseStudies'

export default function CaseStudyDetails() {
  const { slug } = useParams()
  const caseStudy = getCaseStudy(slug)

  useDocumentMeta(
    caseStudy ? caseStudy.title : 'Case Study Not Found',
    caseStudy ? caseStudy.excerpt : 'The case study you are looking for could not be found.',
  )

  if (!caseStudy) {
    return (
      <section className="bg-surface py-24">
        <Container className="max-w-2xl text-center">
          <Icon name="Search" className="mx-auto h-10 w-10 text-brand" />
          <h1 className="mt-6 text-3xl font-bold text-navy">We could not find that case study.</h1>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            It may have moved, or the link may be incomplete. Browse our other case studies instead.
          </p>
          <Button to="/case-studies" variant="primary" size="lg" icon="ArrowRight" className="mt-8">
            All case studies
          </Button>
        </Container>
      </section>
    )
  }

  const relatedStudies = caseStudies.filter((study) => study.slug !== caseStudy.slug).slice(0, 3)

  return (
    <>
      <section className="bg-[#eef0f5] py-8 sm:py-12">
        <Container className="max-w-[1080px]">
          <Link to="/case-studies" className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold text-muted transition-colors hover:text-brand">
            <Icon name="ArrowLeft" className="h-4 w-4" />
            All case studies
          </Link>

          <div className="overflow-hidden rounded-xl border border-white/80 bg-[#e6e9ef] shadow-[0_24px_60px_-42px_rgba(16,27,53,0.5)]">
            <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
              <span className="text-[12px] font-semibold text-brand">
                {caseStudy.category}
              </span>
              <h1 className="mt-3 max-w-4xl font-sans text-3xl font-semibold leading-[1.16] tracking-tight text-navy sm:text-4xl lg:text-[46px]">
                {caseStudy.title}
              </h1>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-ink/80 sm:text-base">{caseStudy.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-muted">
                <span>{caseStudy.client}</span>
                <span aria-hidden="true">·</span>
                <span>{caseStudy.dateLabel}</span>
              </div>
            </div>
            <div className="relative h-[240px] overflow-hidden sm:h-[320px] lg:h-[360px]">
              <img src={caseStudy.image} alt={caseStudy.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          {caseStudy.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.04}>
              <section className="mb-12">
                <h2 className="font-sans text-2xl font-bold leading-snug text-navy sm:text-[28px]">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15.5px] leading-[1.85] text-muted">{paragraph}</p>
                  ))}
                </div>
                {section.points && (
                  <ul className="mt-7 space-y-3 rounded-2xl border border-line bg-surface p-6 sm:p-7">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[14px] leading-7 text-ink">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <Icon name="Check" className="h-3 w-3" strokeWidth={2.8} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}
          <div className="border-t border-line pt-7">
            <p className="text-[12px] font-bold uppercase tracking-wider text-brand">Explore more</p>
            <p className="mt-2 text-[14px] leading-6 text-muted">See how our teams can help solve your next technology challenge.</p>
            <Button to="/contact-us" variant="primary" size="md" icon="ArrowRight" className="mt-5">
              Talk to our team
            </Button>
          </div>
        </Container>
      </article>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">More client stories</p>
              <h2 className="mt-2 font-sans text-2xl font-bold text-navy sm:text-3xl">Explore other case studies</h2>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand transition-colors hover:text-branddark">
              View all
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.06}>
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden bg-surface">
                    <img
                      src={study.image}
                      alt={study.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                      {study.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-medium text-muted">{study.client} · {study.dateLabel}</span>
                    <h3 className="mt-2 flex-1 text-[16px] font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                      {study.cardTitle || study.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-brand">
                      Read case study
                      <Icon name="ArrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
