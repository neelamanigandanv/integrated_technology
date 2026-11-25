import { Link, useParams } from 'react-router-dom'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import InsightCard from '../../components/InsightCard'
import CTASection from '../../components/CTASection'
import useDocumentMeta from '../../hooks/useDocumentMeta'
import { getInsight, insights } from '../../data/insights'

export default function BlogDetails() {
  const { slug } = useParams()
  const article = getInsight(slug)
  useDocumentMeta(article ? article.title : 'Article not found', article ? article.excerpt : 'The article you are looking for could not be found.')

  if (!article) {
    return (
      <section className="bg-surface py-24">
        <Container className="max-w-2xl text-center">
          <Icon name="Search" className="mx-auto h-10 w-10 text-brand" />
          <h1 className="mt-6 text-3xl font-bold text-navy">We could not find that article.</h1>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            It may have moved, or the link may be incomplete. Browse our latest insights instead.
          </p>
          <Button to="/insights" variant="primary" size="lg" icon="ArrowRight" className="mt-8">
            All insights
          </Button>
        </Container>
      </section>
    )
  }

  const related = article.related.map((item) => getInsight(item)).filter(Boolean).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-brand/10 blur-3xl" />
        <Container className="relative py-16 sm:py-20">
          <Link to="/insights" className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted transition-colors hover:text-brand">
            <Icon name="ArrowLeft" className="h-4 w-4" />
            Back to all insights
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className={`inline-flex rounded-full bg-gradient-to-r ${article.accent} px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white`}>
                {article.category}
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[46px]">
                {article.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-muted">{article.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] text-muted">
                <span className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
                    {article.author.split(' ').map((part) => part[0]).join('')}
                  </span>
                  <span className="font-semibold text-ink">{article.author}</span>
                </span>
                <span className="flex items-center gap-1.5"><Icon name="CalendarDays" className="h-4 w-4 text-brand" />{article.dateLabel}</span>
                <span className="flex items-center gap-1.5"><Icon name="Clock" className="h-4 w-4 text-brand" />{article.readTime}</span>
              </div>
            </div>

            <div className={`relative hidden min-h-[280px] overflow-hidden rounded-3xl bg-gradient-to-br ${article.accent} p-8 shadow-[0_35px_70px_-40px_rgba(16,27,53,0.6)] lg:block`}>
              <div className="absolute inset-0 dot-bg opacity-30" />
              <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[24px] border-white/15" />
              <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                <Icon name="Sparkles" className="h-7 w-7" />
              </div>
              <p className="relative mt-auto font-sans text-2xl font-bold leading-snug text-white">
                {article.tags.join(' · ')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          {article.content.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.03}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold leading-snug text-navy sm:text-[28px]">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15.5px] leading-[1.85] text-muted">{paragraph}</p>
                  ))}
                </div>

                {section.list && (
                  <ul className="mt-7 space-y-3 rounded-2xl border border-line bg-surface p-6 sm:p-7">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] leading-7 text-ink">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <Icon name="Check" className="h-3 w-3" strokeWidth={2.8} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <blockquote className="mt-8 border-l-4 border-brand bg-blue-50/60 py-5 pl-6 pr-4">
                    <p className="font-sans text-lg font-bold leading-8 text-navy sm:text-xl">“{section.quote}”</p>
                  </blockquote>
                )}
              </section>
            </Reveal>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wider text-brand">Written by</p>
              <p className="mt-1 text-[14px] font-bold text-navy">{article.author}</p>
              <p className="text-[12px] text-muted">{article.role}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-3 py-1.5 text-[11.5px] font-semibold text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <SectionHeadingTitle />
              <Button to="/insights" variant="secondary" size="md" icon="ArrowRight">
                All insights
              </Button>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <InsightCard key={item.slug} article={item} index={index} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        eyebrow="LET'S TALK"
        title="Have a question about this topic?"
        description="Our specialists are happy to discuss what these ideas could mean for your business."
      />
    </>
  )
}

function SectionHeadingTitle() {
  return (
    <div>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Keep reading</span>
      <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Related insights</h2>
    </div>
  )
}
