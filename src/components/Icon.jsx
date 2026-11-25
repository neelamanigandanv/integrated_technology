import {
  Activity, AlertCircle, ArrowLeft, ArrowRight, ArrowUpRight, Award, BarChart3, Bell, Blocks,
  BookOpen, Boxes, BrainCircuit, Briefcase, Building2, CalendarDays, Check, CheckCircle2,
  ChevronDown, ChevronLeft, ChevronRight, Clock, Cloud, Code2, Compass, Cpu, Database,
  DollarSign, ExternalLink, Eye, Factory, FileCheck2, FileText, Filter, Fingerprint, Gauge,
  GitBranch, Globe2, GraduationCap, HeartHandshake, HeartPulse, Home, Landmark, Layers3,
  Lightbulb, LineChart, Link2, Loader2, LockKeyhole, Mail, MapPin, Menu, MessageSquare,
  Network, Palette, PenTool, Phone, PieChart, Play, Plus, Quote, Radar, RefreshCw, Rocket, Search,
  Send, Server, ShieldCheck, ShoppingBag, Siren, Smartphone, Sparkles, Star, Tag, Target,
  TestTube2, TrendingUp, Truck, Users, Wifi, Workflow, X, Zap, ScanFace, Braces, CircleCheck,
} from 'lucide-react'

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 2H3.55C2.69 2 2 2.69 2 3.55v16.9c0 .86.69 1.55 1.55 1.55h16.9c.86 0 1.55-.69 1.55-1.55V3.55c0-.86-.69-1.55-1.55-1.55ZM8.06 18.75H5.02V9.4h3.04v9.35ZM6.54 8.1a1.76 1.76 0 1 1 0-3.52 1.76 1.76 0 0 1 0 3.52Zm12.21 10.65h-3.03v-4.54c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4v4.62H9.44V9.4h2.92v1.28h.04a3.2 3.2 0 0 1 2.88-1.59c3.08 0 3.65 2.03 3.65 4.67v4.99Z" />
  </svg>
)

const XSocialIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.21 5.46-6.21Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z" />
  </svg>
)

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
)

const icons = {
  Activity, AlertCircle, ArrowLeft, ArrowRight, ArrowUpRight, Award, BarChart3, Bell, Blocks,
  BookOpen, Boxes, BrainCircuit, Briefcase, Building2, CalendarDays, Check, CheckCircle2,
  ChevronDown, ChevronLeft, ChevronRight, Clock, Cloud, Code2, Compass, Cpu, Database,
  DollarSign, ExternalLink, Eye, Factory, FileCheck2, FileText, Filter, Fingerprint, Gauge,
  GitBranch, Globe2, GraduationCap, HeartHandshake, HeartPulse, Home, Landmark, Layers3,
  Lightbulb, LineChart, Link2, Loader2, LockKeyhole, Mail, MapPin, Menu, MessageSquare,
  Network, Palette, PenTool, Phone, PieChart, Play, Plus, Quote, Radar, RefreshCw, Rocket, Search,
  Send, Server, ShieldCheck, ShoppingBag, Siren, Smartphone, Sparkles, Star, Tag, Target,
  TestTube2, TrendingUp, Truck, Users, Wifi, Workflow, X, Zap, ScanFace, Braces, CircleCheck,
  Linkedin: LinkedinIcon,
  XSocial: XSocialIcon,
  Github: GithubIcon,
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8, ...props }) {
  const Component = icons[name] || Sparkles
  return <Component className={className} strokeWidth={strokeWidth} {...props} />
}
