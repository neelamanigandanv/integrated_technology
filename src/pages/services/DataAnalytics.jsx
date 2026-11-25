import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function DataAnalytics() {
  return <ServicePageTemplate service={getService('data-analytics')} />
}
