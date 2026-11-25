import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import InsightCard from '../components/InsightCard'
import CTASection from '../components/CTASection'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { insights, insightCategories } from '../data/insights'

export default function Insights() {
  useDocumentMeta('Insights', 'Read Technova perspectives on AI, web development, software engineering, cloud computing, digital transformation, and technology news.')
  const [category, setCategory] = useState('All')
  const [showAllArticles, setShowAllArticles] = useState(false)

  const filtered = category === 'All' ? insights : insights.filter((article) => article.category === category)
  const featured = category === 'All' ? filtered[0] : null
  const remaining = featured ? filtered.slice(1) : filtered
  const visibleArticles = showAllArticles ? remaining : remaining.slice(0, 6)

  return (
    <>
      <section aria-labelledby="insights-title" className="relative h-[360px] overflow-hidden sm:h-[420px] lg:h-[470px]">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90"
          alt="Close-up of a computer circuit board representing technology"
          className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081321]/80 via-[#081321]/45 to-transparent" />
        <Container className="relative flex h-full items-end pb-12 sm:pb-16 lg:px-8">
          <div className="max-w-xl text-white">
            <h1 id="insights-title" className="max-w-md font-sans text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
              Insights
            </h1>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
              Practical perspectives on AI, engineering, cloud, and digital transformation.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <SectionHeading
              eyebrow="Latest thinking"
              title="Insights worth your time"
              description="No hype, no buzzword bingo. Just useful ideas you can apply."
            />
            <div className="flex flex-wrap gap-2">
              {insightCategories.map((item) => {
                const count = item === 'All' ? insights.length : insights.filter((article) => article.category === item).length
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setCategory(item)
                      setShowAllArticles(false)
                    }}
                    aria-pressed={category === item}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12.5px] font-semibold transition-all ${
                      category === item
                        ? 'border-brand bg-brand text-white shadow-[0_10px_20px_-12px_rgba(37,99,235,0.8)]'
                        : 'border-line bg-white text-ink hover:border-brand/40 hover:text-brand'
                    }`}
                  >
                    {item}
                    <span className={`text-[10px] font-bold ${category === item ? 'text-white/70' : 'text-muted'}`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {featured && (
            <div className="mt-12">
              <InsightCard article={featured} featured />
            </div>
          )}

          <div id="insight-articles" className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article, index) => (
              <InsightCard key={article.slug} article={article} index={index} />
            ))}
          </div>

          {remaining.length > visibleArticles.length && (
            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllArticles(true)}
                aria-controls="insight-articles"
                aria-expanded={showAllArticles}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-branddark"
              >
                Learn more
                <Icon name="ChevronDown" className="h-4 w-4" />
              </button>
            </div>
          )}

          {remaining.length === 0 && (
            <div className="mt-10 rounded-2xl border border-line bg-surface p-10 text-center">
              <Icon name="BookOpen" className="mx-auto h-8 w-8 text-brand" />
              <p className="mt-4 text-[14px] font-semibold text-navy">More articles in this category are on the way.</p>
              <p className="mt-2 text-[13px] text-muted">Explore another category or get in touch with our team directly.</p>
            </div>
          )}

          <Reveal className="mt-14 rounded-2xl border border-line bg-surface p-7 sm:p-9">
            <Link to="/contact-us" className="group flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                  <Icon name="Lightbulb" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-brand">Have a question we should write about?</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-muted">
                    Send us the topic you are wrestling with. It often becomes our next article.
                  </p>
                </div>
              </div>
              <Icon name="ArrowUpRight" className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="FROM INSIGHT TO ACTION"
        title="Ready to put these ideas to work?"
        description="Our specialists can help you turn a promising idea into a practical plan for your business."
      />
    </>
  )
}
