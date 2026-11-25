import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function WebDevelopment() {
  return <ServicePageTemplate service={getService('web-development')} />
}
