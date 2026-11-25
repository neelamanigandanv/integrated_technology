import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function ArtificialIntelligence() {
  return <ServicePageTemplate service={getService('artificial-intelligence')} />
}
