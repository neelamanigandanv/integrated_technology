import { useEffect } from 'react'

function setMeta(name, value, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Technova` : 'Technova — Intelligent Digital Solutions'
    document.title = fullTitle

    const desc = description || 'Technova delivers AI solutions, web and software development, cloud, data and digital transformation services for growing businesses.'
    setMeta('description', desc)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
  }, [title, description])
}
