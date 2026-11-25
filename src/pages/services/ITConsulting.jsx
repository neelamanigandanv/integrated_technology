import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function ITConsulting() {
  return <ServicePageTemplate service={getService('it-consulting')} />
}
