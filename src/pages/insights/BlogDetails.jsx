import { Link, useParams } from 'react-router-dom'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import CTASection from '../../components/CTASection'
import useDocumentMeta from '../../hooks/useDocumentMeta'
import { getInsight } from '../../data/insights'

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
  const authorInitials = article.author.split(' ').map((part) => part[0]).join('')

  return (
    <>
      <main className="bg-white py-10 sm:py-14">
        <Container>
          <div className="grid items-start gap-6 lg:grid-cols-[210px_minmax(0,1fr)_250px]">
            <aside className="lg:sticky lg:top-28">
              <nav aria-label="In this article" className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
                <h2 className="flex items-center gap-2 border-b border-line pb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-navy">
                  <Icon name="FileText" className="h-3.5 w-3.5 text-brand" />
                  In this article
                </h2>
                <ol className="mt-4 space-y-4">
                  {article.content.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#article-section-${index}`}
                        className="flex gap-2 text-[13px] leading-6 text-muted transition-colors hover:text-brand"
                      >
                        <span className="shrink-0 font-semibold text-brand">{index + 1}.</span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="min-w-0">
              <header>
                <span className="inline-flex rounded-md bg-brand/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                  {article.category}
                </span>
                <h1 className="mt-4 font-sans text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[42px]">
                  {article.title}
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-line py-4 text-[12px] text-muted">
                  <span className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-[10px] font-bold text-brand">
                      {authorInitials}
                    </span>
                    <span className="font-semibold text-ink">Written by {article.author}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="CalendarDays" className="h-3.5 w-3.5 text-brand" />
                    {article.dateLabel}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" className="h-3.5 w-3.5 text-brand" />
                    {article.readTime}
                  </span>
                </div>
              </header>

              <figure className="mt-7 overflow-hidden rounded-2xl border border-line bg-surface">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[400px]"
                />
              </figure>

              <p className="mt-7 text-[16px] leading-8 text-ink">{article.excerpt}</p>

              {article.content.map((section, index) => (
                <Reveal key={section.heading} delay={index * 0.03}>
                  <section id={`article-section-${index}`} className="mb-12 scroll-mt-28">
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

              <div className="border-t border-line pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Topics</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line px-3 py-1.5 text-[11.5px] font-semibold text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_28px_-24px_rgba(16,27,53,0.35)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-[12px] font-bold text-white ring-2 ring-blue-100">
                    {authorInitials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">About the author</p>
                    <p className="mt-0.5 text-[14px] font-bold text-navy">{article.author}</p>
                    <p className="text-[11px] leading-5 text-muted">{article.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-[12px] leading-5 text-muted">
                  Writes about {article.tags.join(', ')} and practical ways technology can help teams work better.
                </p>
              </section>

              {related.length > 0 && (
                <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_28px_-24px_rgba(16,27,53,0.35)]">
                  <h2 className="flex items-center gap-2 border-b border-line pb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-navy">
                    <Icon name="Sparkles" className="h-3.5 w-3.5 text-brand" />
                    Related articles
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    {related.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/insights/${item.slug}`}
                        className="block rounded-xl bg-surface p-3.5 transition-colors hover:bg-blue-50"
                      >
                        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-brand">{item.category}</span>
                        <span className="mt-1 block text-[12px] font-bold leading-[1.45] text-navy">{item.title}</span>
                        <span className="mt-2 flex items-center gap-1.5 text-[10px] text-muted">
                          <Icon name="Clock" className="h-3 w-3" />
                          {item.readTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </aside>
          </div>
        </Container>
      </main>

      <CTASection
        eyebrow="LET'S TALK"
        title="Have a question about this topic?"
        description="Our specialists are happy to discuss what these ideas could mean for your business."
      />
    </>
  )
}
