import ServicePageTemplate from '../../components/ServicePageTemplate'
import { getService } from '../../data/services'

export default function DevOpsAutomation() {
  return <ServicePageTemplate service={getService('devops-automation')} />
}
