import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function UIUXDesign() {
  return <ServicePageTemplate service={getService('ui-ux-design')} />
}
