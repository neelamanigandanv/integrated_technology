import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function SoftwareDevelopment() {
  return <ServicePageTemplate service={getService('software-development')} />
}
