import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function CloudSolutions() {
  return <ServicePageTemplate service={getService('cloud-solutions')} />
}
