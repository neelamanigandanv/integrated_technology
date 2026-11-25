import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
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

  const filtered = category === 'All' ? insights : insights.filter((article) => article.category === category)
  const featured = category === 'All' ? filtered[0] : null
  const remaining = featured ? filtered.slice(1) : filtered

  return (
    <>
      <HeroSection
        eyebrow="INSIGHTS & IDEAS"
        title={<>Perspectives from the people building what&apos;s next.</>}
        description="Practical thinking on AI, engineering, design, cloud, and digital transformation — written by the specialists doing the work, not by a content team."
        primary={{ label: 'Talk to our experts', to: '/contact-us' }}
        secondary={{ label: 'Explore our services', to: '/what-we-do' }}
        compact
      />

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
                    onClick={() => setCategory(item)}
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

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((article, index) => (
              <InsightCard key={article.slug} article={article} index={index} />
            ))}
          </div>

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
