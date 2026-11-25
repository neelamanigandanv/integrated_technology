import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Icon from '../components/Icon'

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-surface">
      <span className="flex items-center gap-2 text-[13px] font-semibold text-muted">
        <Icon name="Loader2" className="h-4 w-4 animate-spin text-brand" />
        Loading page...
      </span>
    </div>
  )
}

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
