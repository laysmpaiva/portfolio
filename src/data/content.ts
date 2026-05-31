// ============================================================
// Single source of truth for portfolio copy.
// Sourced from Lays-Paiva-Portfolio.md, framed for SaaS / startup / AI.
// Result metrics are Lays' documented numbers. Ad SPEND is pulled
// separately and WINDOWED to her tenure per client (see showcase.json) —
// never the lifetime account total.
// ============================================================

export const profile = {
  name: 'Lays Paiva',
  role: 'Growth Marketer',
  // headline rotates through these words in the hero
  headlineWords: ['SaaS', 'Startups', 'AI'],
  tagline:
    'I run paid growth for SaaS, startups & AI products — from first dollar to scaled, profitable acquisition.',
  blurb:
    "Growth operator who treats marketing like a product: tight feedback loops, real CAC math, and creative that actually converts. I've scaled AI and B2B products from launch to hundreds of thousands of users, and I build the AI tooling that makes the whole thing run faster.",
  location: 'Remote · works in 🇧🇷 PT & 🇺🇸 EN',
  email: 'lays@thefeedmedia.com', // TODO: confirm preferred public contact
  photo: '/lays.jpg',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laysmpaiva/', handle: '/in/laysmpaiva' },
    { label: 'Email', href: 'mailto:lays@thefeedmedia.com', handle: 'lays@thefeedmedia.com' },
  ],
  available: true,
};

// Headline stat reel — honest, documented figures.
export const stats = [
  { value: 685, suffix: 'K', label: 'subscribers grown for one AI product', sub: 'from ~150K in 8 months', color: 'acid' },
  { value: 1.57, prefix: '$', label: 'best weekly CPL at scale', sub: 'vs a $2.50 target', color: 'coral' },
  { value: 68, suffix: '%', label: 'CPL cut for a dev-tools brand', sub: '$4.42 → $1.41 blended', color: 'cobalt' },
  { value: 12, suffix: 'K', label: 'leads in a single week', sub: 'at $1.45 CPL', color: 'sun' },
];

// What I actually do.
export const capabilities = [
  { title: 'Paid acquisition', body: 'Meta end-to-end: launch, structure, budget pacing, scaling. Broad + LEADS restructures, audience strategy, automated budget rules.', color: 'acid' },
  { title: 'Creative direction', body: 'Concept → copy → QA. UGC podcast ads, POV explainers, AI-avatar & voice-clone formats, static angle libraries that beat long-running controls.', color: 'coral' },
  { title: 'CAC & funnel math', body: 'Cost-per-qualified-lead frameworks, attribution debugging, pixel diagnostics, subscriber-quality analysis — growth tied to real unit economics.', color: 'cobalt' },
  { title: 'AI & automation', body: 'I build the tooling: reporting agents, newsletter analyzers, concept-ideation skills. Cut weekly reporting from ~2h to ~30min with deeper analysis.', color: 'lilac' },
];

// Case studies — curated to SaaS / startup / AI. `spendKey` maps to showcase.json
// (windowed managed spend pulled from Pipeboard). Image filled from creatives.
export const caseStudies = [
  {
    id: 'how-to-ai',
    client: 'How to AI',
    person: 'Ruben Hassid',
    category: 'AI · Education product',
    accent: 'acid',
    span: 'Oct 2025 — present',
    spendKey: 'how-to-ai',
    image: '/creatives/htai.png',
    adName: 'DCT_154 — "AI Didn\'t Replace You"',
    headline: 'Scaled an AI newsletter from ~150K to 685K and made it #1 in its category on Substack.',
    body: 'Owned launch through scale: fixed a disabled ad account + mis-firing conversion event, ran monthly concept sprints, and tested UGC, AI-avatar and POV-explainer formats against each other.',
    results: [
      { k: 'Subscribers', v: '150K → 685K', note: 'in 8 months' },
      { k: 'Best weekly CPL', v: '$1.57', note: 'vs $2.50 target' },
      { k: 'Peak week', v: '12,088 leads', note: '$1.45 CPL' },
    ],
    pill: '#1 education newsletter on Substack',
  },
  {
    id: 'bytebytego',
    client: 'ByteByteGo',
    person: 'Alex Xu',
    category: 'Dev tools · Tech education',
    accent: 'cobalt',
    span: 'Mar 2026 — present',
    spendKey: 'bytebytego',
    image: '/creatives/bytebytego.png',
    adName: 'DCT_114 — "Read X"',
    headline: 'Beat the incumbent agency head-to-head while spending ~5.6× less.',
    body: 'Launched under hard brand constraints (no name/face), restructured into BROAD + LEADS, and built the case on cost-per-engaged-sub — the metric that actually maps to product value.',
    results: [
      { k: 'Blended CPL', v: '−68%', note: '$4.42 → $1.41' },
      { k: 'US+CAN CPL', v: '$6.26 → $3.12', note: 'halved' },
      { k: 'Cost / engaged sub', v: '$3.06 vs $7.05', note: '57% lower than agency' },
    ],
    pill: 'Won the head-to-head',
  },
  {
    id: 'workweek',
    client: 'Workweek',
    person: 'Multi-brand B2B media startup',
    category: 'B2B · Fintech · Health-tech',
    accent: 'coral',
    span: 'Nov 2025 — present',
    spendKey: 'workweek',
    image: '/creatives/workweek.png',
    adName: 'DCT_181 — "X but for Y" (I Hate It Here)',
    headline: 'Ran paid growth across 6 B2B brands and got all of them green at once.',
    body: 'Built per-brand OneSheets, managed 5+ ad accounts, and scaled a UGC podcast concept (DCT_119) into a cross-account winner. Pulled reporting from the client\'s own Hex/N8N stack, not just Meta.',
    results: [
      { k: 'Accounts green', v: '5 / 5', note: 'simultaneously, a first' },
      { k: 'Hospitalogy V-CAC', v: '$29.83', note: '25% under target' },
      { k: 'Best concept', v: '"This Is For You"', note: '5/6 accounts on target' },
    ],
    pill: 'Milestone: all brands green',
  },
  {
    id: 'a-media-operator',
    client: 'A Media Operator',
    person: 'Jacob Donnelly',
    category: 'B2B SaaS-adjacent · Niche media',
    accent: 'sun',
    span: 'Mar 2026 — present',
    spendKey: 'a-media-operator',
    image: null,
    adName: 'DCT_109 — "You\'ve Probably Already Heard Of"',
    headline: 'Stood up a full qualified-lead funnel for a cold B2B audience and drove CPL down 73%.',
    body: 'Designed the qualification funnel end-to-end (Typeform logic, signup flow, disqualification routing) and introduced a cost-per-qualified-lead framework combining Meta + Typeform + Beehiiv quality data.',
    results: [
      { k: 'CPL', v: '$12.01 → $3.27', note: 'cold B2B niche' },
      { k: 'CPQL', v: '~$12 → $6.38', note: '' },
      { k: 'Qualification', v: '63–65%', note: 'Q1-qualified' },
    ],
    pill: '"Do you sleep?" — the client',
  },
  {
    id: 'insight-links',
    client: 'Insight Links',
    person: '3 health-tech newsletters',
    category: 'Health-tech · B2B',
    accent: 'lilac',
    span: 'Dec 2025 — present',
    spendKey: 'insight-links',
    image: null,
    adName: 'Secret Expert — Digital Health Wire',
    headline: 'Displaced the incumbent agency across all three brands.',
    body: 'Built audience profiles + a qualified-lead reporting framework, debugged single-pixel attribution, and took over media buying mid-engagement. First time all three brands hit sub-$20 qualified CPL.',
    results: [
      { k: 'Blended qualified CPL', v: '$16.24', note: 'all 3 under $20, a first' },
      { k: 'Best CPL', v: '$0.96', note: 'at 48% CVR' },
      { k: 'Qualification rate', v: '9.5% → 18.6%', note: 'in one week' },
    ],
    pill: '"Guess we officially won"',
  },
];

// AI / automation tooling — a real differentiator for a modern growth hire.
export const tooling = [
  { name: 'Weekly report agent', desc: 'Claude Code skill pulling Meta + Slack + Notion + Hex into a formatted Friday report. ~2h → ~30min.', tag: 'Claude Code' },
  { name: 'Newsletter analyzer', desc: 'Scheduled agent reading 13 client newsletters → competitive analysis + Notion pages + Slack digests.', tag: 'Automation' },
  { name: 'Concept-ideation skill', desc: 'End-to-end ad concept generation — brief, copy, Notion page — built as a reusable team SOP.', tag: 'Vibe marketing' },
  { name: 'TFM Skills plugin', desc: 'Packaged 15+ internal skills into a shared, GitHub-synced Claude Code plugin and rolled it out across the team.', tag: 'GitHub' },
];

export const skills = [
  'Meta Ads', 'CAC / unit economics', 'UGC & podcast ads', 'AI-avatar creative',
  'Attribution debugging', 'Cost-per-qualified-lead', 'Beehiiv', 'Substack',
  'Notion', 'Claude Code', 'Vibe marketing', 'Creative QA', 'Audience strategy',
  'Lifecycle / newsletter growth',
];
