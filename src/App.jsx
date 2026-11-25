import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'))
const Solutions = lazy(() => import('./pages/Solutions'))
const Insights = lazy(() => import('./pages/Insights'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CaseStudyDetails = lazy(() => import('./pages/case-studies/CaseStudyDetails'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ArtificialIntelligence = lazy(() => import('./pages/services/ArtificialIntelligence'))
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'))
const MobileAppDevelopment = lazy(() => import('./pages/services/MobileAppDevelopment'))
const SoftwareDevelopment = lazy(() => import('./pages/services/SoftwareDevelopment'))
const UIUXDesign = lazy(() => import('./pages/services/UIUXDesign'))
const CloudSolutions = lazy(() => import('./pages/services/CloudSolutions'))
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'))
const DevOpsAutomation = lazy(() => import('./pages/services/DevOpsAutomation'))
const ITConsulting = lazy(() => import('./pages/services/ITConsulting'))
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'))
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'))
const BlogDetails = lazy(() => import('./pages/insights/BlogDetails'))

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<BlogDetails />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetails />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="services/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="services/web-development" element={<WebDevelopment />} />
        <Route path="services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="services/software-development" element={<SoftwareDevelopment />} />
        <Route path="services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="services/data-analytics" element={<DataAnalytics />} />
        <Route path="services/devops-automation" element={<DevOpsAutomation />} />
        <Route path="services/it-consulting" element={<ITConsulting />} />
        <Route path="services/digital-transformation" element={<DigitalTransformation />} />
        <Route path="services/cybersecurity" element={<Cybersecurity />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
