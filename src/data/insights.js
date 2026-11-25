export const insightCategories = [
  'All',
  'AI & Machine Learning',
  'Web Development',
  'Software Engineering',
  'Cloud Computing',
  'Digital Transformation',
  'Technology News',
]

export const insights = [
  {
    slug: 'moving-ai-pilots-into-production',
    title: 'How enterprises are moving AI pilots into production',
    excerpt: 'The hard part of AI is rarely the model. Here is what separates a convincing demo from a system the business can rely on every day.',
    category: 'AI & Machine Learning',
    date: '2026-11-12',
    dateLabel: '12 November 2026',
    readTime: '8 min read',
    author: 'Ayesha Rahman',
    role: 'Head of AI & Data',
    featured: true,
    tags: ['AI', 'MLOps', 'Governance'],
    accent: 'from-blue-600 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Humanoid robot representing artificial intelligence',
    content: [
      {
        heading: 'The demo is the easy part',
        paragraphs: [
          'A model can look remarkable in a notebook and still fail completely in a business setting. The gap is rarely algorithmic. It is data quality, integration, monitoring, and ownership — the unglamorous engineering that turns an experiment into a service.',
          'Teams that succeed treat a pilot as the beginning of a product, not the end of a research project. They define who will use the output, what happens when the model is uncertain, and how performance will be measured after launch.',
        ],
      },
      {
        heading: 'Design for the failure cases',
        paragraphs: [
          'Every model will eventually be wrong. Production systems are designed around that fact. They expose confidence levels, keep a human in the loop for high-impact decisions, and log enough context to investigate mistakes later.',
          'This is where domain expertise matters more than model choice. A modest model with strong guardrails and clean data usually outperforms a sophisticated one that nobody trusts.',
        ],
        list: [
          'Define escalation paths before the first deployment',
          'Monitor input drift, not just output accuracy',
          'Version models, prompts, and data transformations together',
          'Make every decision traceable to its source data',
        ],
      },
      {
        heading: 'Build the foundation once',
        paragraphs: [
          'The organizations seeing compounding returns from AI are the ones that invested in shared data pipelines, access controls, and evaluation frameworks. Each new use case then starts from a foundation instead of from scratch.',
          'That foundation also makes governance practical. When definitions, lineage, and ownership are clear, reviews become routine rather than heroic.',
        ],
        quote: 'AI maturity is less about how many models you have and more about how confidently you can change one.',
      },
      {
        heading: 'Start with value, not technology',
        paragraphs: [
          'Choose a workflow where the outcome is measurable and the cost of being wrong is understood. Deliver there first, prove the value, and then extend the pattern. That approach builds trust with both users and leadership — and trust is what keeps AI programs alive past the first budget review.',
        ],
      },
    ],
    related: ['rag-for-business', 'finops-cloud-cost', 'digital-transformation-roadmap'],
  },
  {
    slug: 'core-web-vitals-2026',
    title: 'Core Web Vitals in 2026: what actually moves the needle',
    excerpt: 'A practical look at the performance work that improves real user experience — and the metrics that do not deserve your attention.',
    category: 'Web Development',
    date: '2026-10-28',
    dateLabel: '28 October 2026',
    readTime: '6 min read',
    author: 'Daniel Okafor',
    role: 'Principal Frontend Engineer',
    featured: false,
    tags: ['Performance', 'SEO', 'React'],
    accent: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Laptop displaying a web development workspace',
    content: [
      {
        heading: 'Measure real users, not only lab scores',
        paragraphs: [
          'Synthetic tests are useful for regression detection, but they cannot tell you how your site behaves on a mid-range phone over a congested network. Field data from real sessions is the only reliable starting point.',
          'Once you know where users struggle, the fixes are often unglamorous: smaller images, fewer third-party scripts, and rendering paths that do not block the main thread.',
        ],
      },
      {
        heading: 'The three metrics worth watching',
        paragraphs: [
          'Largest Contentful Paint tells you when the main content becomes visible. Interaction to Next Paint captures how responsive the page feels. Cumulative Layout Shift measures visual stability. Together they describe most of what users perceive as speed.',
        ],
        list: [
          'Serve images in modern formats with explicit dimensions',
          'Remove or defer scripts that do not support the first interaction',
          'Reserve space for dynamic content such as banners and ads',
          'Preload the resources needed for the primary action',
        ],
      },
      {
        heading: 'Architecture is a performance decision',
        paragraphs: [
          'Component boundaries, data fetching strategy, and rendering mode all shape perceived speed. Deciding these late usually means expensive rewrites. Deciding them early makes performance a property of the system rather than a cleanup task.',
        ],
        quote: 'Performance is a design constraint, not a final optimization pass.',
      },
    ],
    related: ['composable-enterprise-architecture', 'build-vs-buy-software'],
  },
  {
    slug: 'build-vs-buy-software',
    title: 'Build or buy? A better framework for custom software decisions',
    excerpt: 'Move beyond license cost and compare the real drivers: differentiation, integration effort, adaptability, and total cost of ownership.',
    category: 'Software Engineering',
    date: '2026-10-09',
    dateLabel: '9 October 2026',
    readTime: '7 min read',
    author: 'Maya Chen',
    role: 'Director of Engineering',
    featured: false,
    tags: ['Strategy', 'Custom software'],
    accent: 'from-indigo-600 to-blue-500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Software team collaborating around a laptop',
    content: [
      {
        heading: 'The question behind the question',
        paragraphs: [
          'Build versus buy is rarely about capability alone. Most tools can do roughly the same thing. The real question is whether the way you work is a source of advantage and how much you are willing to depend on someone else’s roadmap.',
        ],
      },
      {
        heading: 'Compare total cost, not sticker price',
        paragraphs: [
          'A subscription looks cheap until you add integration, customization, training, workarounds, and the internal time spent reconciling data. Custom software has upfront cost but can remove recurring friction that never appears on a vendor invoice.',
        ],
        list: [
          'Licenses and expected price changes over three years',
          'Integration and data migration effort',
          'Configuration and ongoing maintenance',
          'Cost of workarounds and lost productivity',
          'Exit flexibility and data portability',
        ],
      },
      {
        heading: 'A hybrid answer is often best',
        paragraphs: [
          'Many organizations buy commodity capabilities — identity, email, payments — and build the workflows that make them distinctive. The practical goal is to keep your differentiated processes in systems you control while using reliable platforms for the rest.',
        ],
        quote: 'Own what makes you different. Rent what does not.',
      },
    ],
    related: ['composable-enterprise-architecture', 'digital-transformation-roadmap'],
  },
  {
    slug: 'finops-cloud-cost',
    title: 'FinOps: making cloud cost a managed metric',
    excerpt: 'Visibility, ownership, and small architectural choices usually beat dramatic platform changes when the goal is lower cloud spend.',
    category: 'Cloud Computing',
    date: '2026-09-22',
    dateLabel: '22 September 2026',
    readTime: '6 min read',
    author: 'Priya Nair',
    role: 'Cloud Solutions Lead',
    featured: false,
    tags: ['Cloud', 'FinOps', 'Azure'],
    accent: 'from-blue-600 to-sky-500',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Modern collaborative workspace',
    content: [
      {
        heading: 'You cannot optimize what you cannot see',
        paragraphs: [
          'Cloud bills are notoriously difficult to attribute. The first step is basic hygiene: consistent tagging, cost dashboards by team and environment, and alerts before budgets are exceeded.',
          'Once teams can see their own spend, behavior changes quickly. Developers start asking whether an always-on service is really necessary, and conversations about cost become part of design reviews.',
        ],
      },
      {
        heading: 'Small changes compound',
        paragraphs: [
          'Right-sizing, scheduled shutdown of non-production environments, autoscaling, and storage lifecycle policies are rarely exciting. Applied consistently, they deliver savings that no single re-architecture can match.',
        ],
        list: [
          'Schedule development and test environments outside working hours',
          'Set retention rules for logs, snapshots, and backups',
          'Review idle load balancers and unattached storage',
          'Choose the right storage tier for each access pattern',
        ],
      },
      {
        heading: 'Make cost part of the design conversation',
        paragraphs: [
          'The most effective FinOps programs are cultural, not financial. They give engineers context and guardrails, then let them make good trade-offs without waiting for approval on every decision.',
        ],
        quote: 'Cost is an architecture quality, not a monthly surprise.',
      },
    ],
    related: ['moving-ai-pilots-into-production', 'core-web-vitals-2026'],
  },
  {
    slug: 'digital-transformation-roadmap',
    title: 'A practical roadmap for digital transformation',
    excerpt: 'Why the best transformation programs start with one measurable outcome — and how to sequence the rest without losing momentum.',
    category: 'Digital Transformation',
    date: '2026-09-05',
    dateLabel: '5 September 2026',
    readTime: '9 min read',
    author: 'Jonathan Miller',
    role: 'Strategy Director',
    featured: false,
    tags: ['Transformation', 'Strategy', 'Change'],
    accent: 'from-violet-600 to-blue-500',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Business team collaborating around a table',
    content: [
      {
        heading: 'Start with an outcome, not a platform',
        paragraphs: [
          'Transformation programs fail when they begin with a technology purchase and hope the value appears later. Strong programs begin with a specific business outcome: shorter cycle time, better retention, lower cost per transaction, or faster onboarding.',
          'That outcome determines which processes matter, which systems need to change, and how progress will be judged.',
        ],
      },
      {
        heading: 'Sequence for credibility',
        paragraphs: [
          'Early phases should deliver something visible and measurable. A quick win builds the trust and budget needed for deeper changes. It also reveals practical constraints that no workshop uncovered.',
        ],
        list: [
          'Phase one: one process, one team, one clear metric',
          'Phase two: connected processes and shared data',
          'Phase three: platform modernization and operating model change',
          'Phase four: scale the pattern across the organization',
        ],
      },
      {
        heading: 'Treat adoption as a deliverable',
        paragraphs: [
          'New systems only create value when people use them well. Co-design, training, and clear communication are not soft extras; they are part of the delivery scope and should be planned and measured like any other workstream.',
        ],
        quote: 'Transformation sticks when people help design the change they are asked to adopt.',
      },
    ],
    related: ['build-vs-buy-software', 'zero-trust-in-practice'],
  },
  {
    slug: 'rag-for-business',
    title: 'What retrieval-augmented generation means for business',
    excerpt: 'Grounding AI answers in your own documents is the difference between a convincing sentence and a decision you can trust.',
    category: 'AI & Machine Learning',
    date: '2026-08-19',
    dateLabel: '19 August 2026',
    readTime: '7 min read',
    author: 'Ayesha Rahman',
    role: 'Head of AI & Data',
    featured: false,
    tags: ['Generative AI', 'RAG', 'Knowledge'],
    accent: 'from-cyan-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Humanoid robot representing artificial intelligence',
    content: [
      {
        heading: 'Why general models are not enough',
        paragraphs: [
          'A general language model knows a great deal about the world and nothing reliable about your policies, customers, or internal systems. Without grounding, it will fill gaps with plausible but incorrect answers.',
          'Retrieval-augmented generation, or RAG, solves this by finding relevant, approved content first and asking the model to answer using only that material.',
        ],
      },
      {
        heading: 'The quality lives in the retrieval',
        paragraphs: [
          'Good RAG systems invest in document preparation: clean extraction, sensible chunking, useful metadata, and access controls that respect who can see what. The model is only as good as the material it is given.',
        ],
        list: [
          'Keep source documents under version control',
          'Attach metadata such as owner, date, and department',
          'Show citations so users can verify answers',
          'Decline to answer when evidence is weak or missing',
        ],
      },
      {
        heading: 'Measure trust, not just fluency',
        paragraphs: [
          'A polished answer is not necessarily a correct one. Evaluate groundedness, citation accuracy, and abstention behavior with real questions from real users. Those measures predict adoption far better than general benchmarks.',
        ],
        quote: 'The most valuable AI answer is one that knows when it does not know.',
      },
    ],
    related: ['moving-ai-pilots-into-production', 'zero-trust-in-practice'],
  },
  {
    slug: 'zero-trust-in-practice',
    title: 'Zero trust in practice: beyond the buzzword',
    excerpt: 'A grounded view of identity, segmentation, and verification — and what a realistic first year looks like for a growing company.',
    category: 'Technology News',
    date: '2026-07-30',
    dateLabel: '30 July 2026',
    readTime: '6 min read',
    author: 'Elena Fischer',
    role: 'Cybersecurity Practice Lead',
    featured: false,
    tags: ['Security', 'Identity', 'Zero trust'],
    accent: 'from-slate-700 to-blue-600',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Abstract digital security visualization',
    content: [
      {
        heading: 'Less slogan, more specifics',
        paragraphs: [
          'Zero trust is not a product you buy. It is a set of decisions: verify explicitly, grant least privilege, and assume that any network segment may be compromised. The practical work is identifying your most sensitive assets and controlling access to them.',
        ],
      },
      {
        heading: 'Start with identity',
        paragraphs: [
          'For most organizations, identity is the highest-value starting point. Multi-factor authentication, conditional access, and clean joiner-mover-leaver processes reduce risk immediately without requiring a network redesign.',
        ],
        list: [
          'Eliminate shared accounts and enforce unique identities',
          'Apply least privilege to administrative roles',
          'Review access recertification on a regular cycle',
          'Protect privileged sessions with additional checks',
        ],
      },
      {
        heading: 'Segment around what matters',
        paragraphs: [
          'Network segmentation should follow business criticality, not org charts. Separate production from corporate systems, isolate sensitive data, and make lateral movement difficult. Each boundary you add should be something your team can operate and explain.',
        ],
        quote: 'Good security is measured by what an attacker cannot reach, not by how many tools you own.',
      },
    ],
    related: ['digital-transformation-roadmap', 'finops-cloud-cost'],
  },
  {
    slug: 'composable-enterprise-architecture',
    title: 'The rise of composable enterprise architecture',
    excerpt: 'Modular systems and clear APIs are replacing monolithic suites — when the organization is ready to use them well.',
    category: 'Software Engineering',
    date: '2026-06-17',
    dateLabel: '17 June 2026',
    readTime: '8 min read',
    author: 'Maya Chen',
    role: 'Director of Engineering',
    featured: false,
    tags: ['Architecture', 'APIs', 'Platforms'],
    accent: 'from-blue-600 to-indigo-500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Technology team working together on a software platform',
    content: [
      {
        heading: 'From suites to building blocks',
        paragraphs: [
          'Composable architecture means assembling business capabilities from well-defined services instead of depending on one large suite for everything. The promise is flexibility: replace a component without replacing the whole system.',
        ],
      },
      {
        heading: 'The prerequisite is discipline',
        paragraphs: [
          'Modularity only helps when interfaces are stable, ownership is clear, and data definitions are shared. Without those, a composable estate becomes a more complicated version of the same mess.',
        ],
        list: [
          'Define contracts and versioning rules for every shared API',
          'Assign clear ownership for each capability',
          'Standardize observability across services',
          'Avoid duplicating the same data in multiple systems',
        ],
      },
      {
        heading: 'Adopt at the speed of the team',
        paragraphs: [
          'Most businesses should move progressively: extract the capabilities that change often, keep stable ones where they are, and invest in platform tooling that makes the new way easier than the old one.',
        ],
        quote: 'Architecture should reduce the cost of change, not increase the number of diagrams.',
      },
    ],
    related: ['build-vs-buy-software', 'core-web-vitals-2026'],
  },
  {
    slug: 'designing-interfaces-people-understand',
    title: 'Designing interfaces people actually understand',
    excerpt: 'Six practical habits that turn dense business applications into products users can navigate without a manual.',
    category: 'Web Development',
    date: '2026-05-26',
    dateLabel: '26 May 2026',
    readTime: '5 min read',
    author: 'Sofia Andersson',
    role: 'Product Design Lead',
    featured: false,
    tags: ['UX', 'Accessibility', 'Design systems'],
    accent: 'from-teal-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Designer working on a digital interface',
    content: [
      {
        heading: 'Clarity beats cleverness',
        paragraphs: [
          'Business applications are tools, not art galleries. People use them under time pressure, often while doing something else. Clear labels, obvious next steps, and predictable patterns beat unusual interactions every time.',
        ],
      },
      {
        heading: 'Habits that make a difference',
        paragraphs: [
          'The best product teams repeatedly do simple things well. They write labels in the language of the user, show system status, design empty states, and make errors recoverable.',
        ],
        list: [
          'Use familiar patterns for navigation and actions',
          'Show what happened after every important action',
          'Explain errors in plain language with a next step',
          'Design for keyboard and screen reader users from the start',
          'Keep primary actions visually dominant',
          'Test with real tasks, not opinion sessions',
        ],
      },
      {
        heading: 'Systems keep quality consistent',
        paragraphs: [
          'A design system is not a folder of screens. It is a shared agreement about behavior, tokens, and accessibility that lets every team build consistent experiences without starting over.',
        ],
        quote: 'Consistency is the quiet foundation of trust.',
      },
    ],
    related: ['core-web-vitals-2026', 'moving-ai-pilots-into-production'],
  },
]

export function getInsight(slug) {
  return insights.find((article) => article.slug === slug)
}
