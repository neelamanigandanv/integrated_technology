import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function MobileAppDevelopment() {
  return <ServicePageTemplate service={getService('mobile-app-development')} />
}
