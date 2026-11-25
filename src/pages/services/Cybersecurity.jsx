import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function Cybersecurity() {
  return <ServicePageTemplate service={getService('cybersecurity')} />
}
