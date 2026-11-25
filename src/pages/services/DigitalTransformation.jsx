import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function DigitalTransformation() {
  return <ServicePageTemplate service={getService('digital-transformation')} />
}
