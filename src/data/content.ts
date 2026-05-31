// ============================================================
// Single source of truth for portfolio copy.
// Sourced from Lays-Paiva-Portfolio.md (Slack archive) + LinkedIn,
// framed for SaaS / startup / AI. Ad SPEND is windowed to her tenure
// per client (see showcase.json) — never lifetime account totals.
// ============================================================

export const profile = {
  name: 'Lays Paiva',
  role: 'Growth Marketer',
  headlineWords: ['SaaS', 'Startups', 'AI'],
  tagline:
    'I run paid growth for SaaS, startups & AI products — from first dollar to scaled, profitable acquisition.',
  blurb:
    "Growth operator who treats marketing like a product: tight feedback loops, real CAC math, and creative that actually converts. I've scaled AI and B2B products from launch to hundreds of thousands of users, and I build the AI tooling that makes the whole thing run faster.",
  location: 'Remote · works in 🇧🇷 PT & 🇺🇸 EN',
  email: 'lays@thefeedmedia.com',
  photo: '/lays.jpg',
  youtubeId: 'bubm4Zm6c24',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laysmpaiva/', handle: '/in/laysmpaiva' },
    { label: 'Email', href: 'mailto:lays@thefeedmedia.com', handle: 'lays@thefeedmedia.com' },
  ],
  available: true,
};

export const stats = [
  { value: 685, suffix: 'K', label: 'subscribers grown for one AI product', sub: 'from ~150K in 8 months', color: 'acid' },
  { value: 1.57, prefix: '$', label: 'best weekly CPL at scale', sub: 'vs a $2.50 target', color: 'coral' },
  { value: 1.3, prefix: '$', suffix: 'M+', label: 'ad spend managed', sub: 'across SaaS / startup brands', color: 'cobalt' },
  { value: 12, suffix: 'K', label: 'leads in a single week', sub: 'at $1.45 CPL', color: 'sun' },
];

export const capabilities = [
  { title: 'Paid acquisition', body: 'Meta end-to-end: launch, structure, budget pacing, scaling. Broad + LEADS restructures, audience strategy, automated budget rules.', color: 'acid' },
  { title: 'Creative direction', body: 'Concept → copy → QA. UGC podcast ads, POV explainers, AI-avatar & voice-clone formats, static angle libraries that beat long-running controls.', color: 'coral' },
  { title: 'CAC & funnel math', body: 'Cost-per-qualified-lead frameworks, attribution debugging, pixel diagnostics, subscriber-quality analysis — growth tied to real unit economics.', color: 'cobalt' },
  { title: 'AI & automation', body: 'I build the tooling: reporting agents, newsletter analyzers, concept-ideation skills. Cut weekly reporting from ~2h to ~30min with deeper analysis.', color: 'lilac' },
];

// ---- Case studies (home cards + /work/[id] detail pages) ----
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
    pill: '#1 education newsletter on Substack',
    results: [
      { k: 'Subscribers', v: '150K → 685K', note: 'in 8 months' },
      { k: 'Best weekly CPL', v: '$1.57', note: 'vs $2.50 target' },
      { k: 'Peak week', v: '12,088 leads', note: '$1.45 CPL' },
    ],
    context:
      "How to AI is Ruben Hassid's AI-education newsletter — practical Claude/ChatGPT workflows for professionals. It's my flagship account and largest single win: an AI product I scaled from a ~150K-subscriber launch into the #1 education newsletter on Substack.",
    work: [
      'Owned the full launch: resolved a disabled ad account + restricted payment method with FB support, and fixed a mis-firing "complete registration" conversion event.',
      'Ran monthly concept sprints (Dec 2025 → May 2026), repurposing Ruben\'s top infographics and LinkedIn posts into ads.',
      'Tested UGC, AI-avatar, POV-explainer and text-over-video formats head-to-head, scaling the winners.',
      'Scaled spend from ~$200/day at launch to ~$1.7K–$2.5K/day while holding CPL well under target.',
    ],
    metrics: [
      { k: 'Subscribers', v: '150K → 685K' },
      { k: 'Managed spend', v: '$276K', note: 'Oct 25 – May 26' },
      { k: 'Ad signups', v: '136,786' },
      { k: 'Best weekly CPL', v: '$1.57' },
      { k: 'Peak week', v: '12,088 leads' },
      { k: 'Avg CPL', v: '~$2.02' },
    ],
    gallery: [
      { src: '/creatives/how-to-ai/01-ai-didnt-replace-you.png', label: 'DCT_154 — "AI Didn\'t Replace You"' },
      { src: '/creatives/how-to-ai/02-please-stop.png', label: 'DCT_151 — "Please Stop"' },
    ],
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
    pill: 'Won the head-to-head',
    results: [
      { k: 'Blended CPL', v: '−68%', note: '$4.42 → $1.41' },
      { k: 'US+CAN CPL', v: '$6.26 → $3.12', note: 'halved' },
      { k: 'Cost / engaged sub', v: '$3.06 vs $7.05', note: '57% lower than agency' },
    ],
    context:
      "ByteByteGo is Alex Xu's system-design newsletter for software engineers — a developer-education brand with a million-plus technical readers. I launched paid acquisition under hard brand constraints (no name, no face) and went head-to-head with the incumbent agency.",
    work: [
      'Launched with brand guardrails (no name/face), uploaded buyer lists for lookalikes, and navigated a US+CAN vs ROW campaign split.',
      'Ran concept + copy across Confession, Stop X/Start Y, X-but-for-Y, UGC-podcast and cheat-sheet lead-magnet angles.',
      'Restructured into BROAD + LEADS, cutting blended CPL ~27% and halving US+CAN CPL.',
      'Co-introduced cost-per-engaged-sub (CPES) and built the case that we beat the incumbent on the metric that maps to product value.',
    ],
    metrics: [
      { k: 'Blended CPL', v: '$4.42 → $1.41', note: '−68%' },
      { k: 'US+CAN CPL', v: '$6.26 → $3.12' },
      { k: 'Cost / engaged sub', v: '$3.06 vs $7.05' },
      { k: 'Open rate', v: '~47% vs ~35%', note: 'vs agency' },
      { k: 'Managed spend', v: '$260K', note: 'Mar – May 26' },
      { k: 'Subscribers', v: '110,914', note: 'in window' },
    ],
    gallery: [
      { src: '/creatives/bytebytego/01-read-x.png', label: 'DCT_114 — "Read X"' },
      { src: '/creatives/bytebytego/02-stop-x-start-y.png', label: 'DCT_108 — "Stop X / Start Y"' },
      { src: '/creatives/bytebytego/03-should-subscribe.png', label: 'DCT_109 — "You Should Subscribe"' },
      { src: '/creatives/bytebytego/04-my-team-thinks.png', label: 'DCT_111 — "My Team Thinks"' },
    ],
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
    body: 'Built per-brand OneSheets, managed 5+ ad accounts, and scaled a UGC podcast concept into a cross-account winner. Pulled reporting from the client\'s own Hex/N8N stack, not just Meta.',
    pill: 'Milestone: all brands green',
    results: [
      { k: 'Accounts green', v: '5 / 5', note: 'simultaneously, a first' },
      { k: 'Hospitalogy V-CAC', v: '$29.83', note: '25% under target' },
      { k: 'Best concept', v: '"This Is For You"', note: '5/6 accounts on target' },
    ],
    context:
      "Workweek is a B2B media startup running a portfolio of creator-led newsletters — Marketing Millennials, Go-to-Millions, Fintech Takes, Hospitalogy, I Hate It Here and Fintech Takes Banking. It's my largest, most complex account: 6 brands across fintech, health-tech, HR and marketing, each with its own audience and CAC target.",
    work: [
      'GM and primary contact from onboarding; built per-brand OneSheets and managed 5+ ad accounts (Business Manager, dashboards, Hex/API, brand kits).',
      'Multi-newsletter concept ideation at scale; established a per-newsletter DCT numbering convention to prevent concept mix-ups.',
      'Scaled a UGC podcast concept (DCT_119) into a cross-account winner; "This Is For You" hit target on 5 of 6 brands.',
      'Built reporting off the client\'s own Hex/N8N stack rather than Meta-only, plus a weekly per-newsletter analysis digest.',
    ],
    metrics: [
      { k: 'Brands', v: '6', note: 'managed in parallel' },
      { k: 'Accounts green', v: '5 / 5', note: 'a first' },
      { k: 'Hospitalogy V-CAC', v: '$29.83', note: '25% under target' },
      { k: 'Managed spend', v: '$722K', note: 'Nov 25 – May 26' },
      { k: 'Leads (window)', v: '170K+' },
      { k: 'Top concept', v: '"This Is For You"' },
    ],
    gallery: [
      { src: '/creatives/workweek/02-ihih-this-is-for-you.png', label: '"This Is For You" — I Hate It Here' },
      { src: '/creatives/workweek/04-tmm-this-is-for-you.png', label: '"This Is For You" — Marketing Millennials' },
      { src: '/creatives/workweek/01-ihih-x-but-for-y.png', label: '"X but for Y" — I Hate It Here' },
      { src: '/creatives/workweek/05-tmm-x-but-for-y.png', label: '"X but for Y" — Marketing Millennials' },
      { src: '/creatives/workweek/03-ihih-secret-expert.png', label: '"Secret Expert" — I Hate It Here' },
      { src: '/creatives/workweek/06-ihih-fake-review.png', label: '"Newsletter Review" — I Hate It Here' },
    ],
  },
  {
    id: 'a-media-operator',
    client: 'A Media Operator',
    person: 'Jacob Donnelly',
    category: 'B2B SaaS-adjacent · Niche media',
    accent: 'sun',
    span: 'Mar 2026 — present',
    spendKey: 'a-media-operator',
    image: '/creatives/a-media-operator/01-if-you-work-in.png',
    adName: 'DCT_109 — "You\'ve Probably Already Heard Of"',
    headline: 'Stood up a full qualified-lead funnel for a cold B2B audience and drove CPL down 73%.',
    body: 'Designed the qualification funnel end-to-end (Typeform logic, signup flow, disqualification routing) and introduced a cost-per-qualified-lead framework combining Meta + Typeform + Beehiiv quality data.',
    pill: '"Do you sleep?" — the client',
    results: [
      { k: 'CPL', v: '$12.01 → $3.27', note: 'cold B2B niche' },
      { k: 'CPQL', v: '~$12 → $6.38', note: '' },
      { k: 'Qualification', v: '63–65%', note: 'Q1-qualified' },
    ],
    context:
      "A Media Operator is Jacob Donnelly's B2B newsletter for media-company operators — a cold, niche, hard-to-target audience. I ran kickoff and built a full qualified-lead funnel from scratch, then drove CPL down 73% on an audience most advertisers can't crack.",
    work: [
      'Authored ICP/persona strategy (legacy vs niche B2B media operators) and meeting recaps.',
      'Built the qualification funnel end-to-end: Typeform logic, Beehiiv signup flow, custom-field rules, disqualification routing, and a separate Events Operator flow.',
      'Introduced a cost-per-qualified-lead framework combining Meta + Typeform + Beehiiv quality data in weekly reports.',
      'Handled a client data-integrity issue (paid subs not landing on the list) and shipped an ad-guidelines doc + client funnel dashboard.',
    ],
    metrics: [
      { k: 'CPL', v: '$12.01 → $3.27', note: '−73%' },
      { k: 'CPQL', v: '~$12 → $6.38' },
      { k: 'Qualification', v: '63–65%' },
      { k: 'Managed spend', v: '$9.2K', note: 'Mar – May 26' },
      { k: 'Leads (window)', v: '2,676' },
    ],
    gallery: [
      { src: '/creatives/a-media-operator/01-if-you-work-in.png', label: 'DCT_106 — "If You Work In…"' },
      { src: '/creatives/a-media-operator/02-if-you-run.png', label: 'DCT_107 — "If You Run…"' },
      { src: '/creatives/a-media-operator/03-every-operator.png', label: 'DCT_108 — "Every Operator Should Subscribe"' },
    ],
  },
  {
    id: 'insight-links',
    client: 'Insight Links',
    person: '3 health-tech newsletters',
    category: 'Health-tech · B2B',
    accent: 'lilac',
    span: 'Dec 2025 — present',
    spendKey: 'insight-links',
    image: '/creatives/insight-links/01-cw-should-subscribe.png',
    adName: 'Secret Expert — Digital Health Wire',
    headline: 'Displaced the incumbent agency across all three brands.',
    body: 'Built audience profiles + a qualified-lead reporting framework, debugged single-pixel attribution, and took over media buying mid-engagement. First time all three brands hit sub-$20 qualified CPL.',
    pill: '"Guess we officially won"',
    results: [
      { k: 'Blended qualified CPL', v: '$16.24', note: 'all 3 under $20, a first' },
      { k: 'Best CPL', v: '$0.96', note: 'at 48% CVR' },
      { k: 'Qualification rate', v: '9.5% → 18.6%', note: 'in one week' },
    ],
    context:
      "Insight Links runs three health-tech newsletters — Cardiac Wire, Imaging Wire and Digital Health Wire — for clinicians and medical-imaging professionals. I onboarded all three head-to-head against a competitor agency and, over the engagement, displaced them.",
    work: [
      'Onboarded three distinct newsletters; built audience profiles and managed MailChimp/WordPress access + pixel/UTM attribution (one ad set per hook on a single-pixel setup).',
      'Per-newsletter concept ideation and copy; coordinated designers and CS; ran biweekly client meetings.',
      'Built a cost-per-qualified-lead reporting framework and a custom IL creative dashboard; took over media buying mid-engagement.',
      'Got all three brands under $20 qualified CPL for the first time, then declared the competitive win.',
    ],
    metrics: [
      { k: 'Blended qualified CPL', v: '$16.24', note: 'a first' },
      { k: 'Best CPL', v: '$0.96', note: 'at 48% CVR' },
      { k: 'Qualification', v: '9.5% → 18.6%' },
      { k: 'Managed spend', v: '$80K', note: 'Dec 25 – May 26' },
      { k: 'Leads (window)', v: '35,539' },
    ],
    gallery: [
      { src: '/creatives/insight-links/01-cw-should-subscribe.png', label: '"Should Subscribe" — Cardiac Wire' },
      { src: '/creatives/insight-links/02-dhw-should-subscribe.png', label: '"Should Subscribe" — Digital Health Wire' },
      { src: '/creatives/insight-links/03-iw-should-subscribe.png', label: '"Should Subscribe" — Imaging Wire' },
    ],
  },
];

// ---- AI / automation tooling ----
export const tooling = [
  { name: 'Weekly report agent', desc: 'Claude Code skill pulling Meta + Slack + Notion + Hex into a formatted Friday report. ~2h → ~30min.', tag: 'Claude Code' },
  { name: 'Newsletter analyzer', desc: 'Scheduled agent reading 13 client newsletters → competitive analysis + Notion pages + Slack digests.', tag: 'Automation' },
  { name: 'Concept-ideation skill', desc: 'End-to-end ad concept generation — brief, copy, Notion page — built as a reusable team SOP.', tag: 'Vibe marketing' },
  { name: 'TFM Skills plugin', desc: 'Packaged 15+ internal skills into a shared, GitHub-synced Claude Code plugin and rolled it out across the team.', tag: 'GitHub' },
];

// ---- Career / companies (spotlight growth, condense the rest) ----
export const career = {
  spotlight: [
    {
      company: 'The Feed Media',
      role: 'Growth Manager',
      period: 'Oct 2025 — present',
      type: 'Full-time · Remote',
      now: true,
      body: 'Lead paid growth for multiple SaaS / editorial / newsletter brands — focused on subscriber quality, not just volume. Own the full acquisition loop: audience research → creative testing → conversion → downstream revenue.',
      points: [
        'Drive 20–30% lower CPLs through insight-led creative strategy over generic hooks.',
        'Build structured A/B frameworks across paid social + email, isolating hook / proof / CTA.',
        'Connect media-buying decisions to downstream monetization signals.',
        'Translate performance data into creative direction for writers, designers and media buyers.',
      ],
    },
    {
      company: 'QuickerLeads',
      role: 'Creative & Content Strategist',
      period: 'Jan 2025 — Jan 2026',
      type: 'Remote',
      body: 'Led end-to-end creative strategy for 5+ B2B clients across Meta, Google, YouTube and TikTok.',
      points: [
        'Improved average CTR by 40% and cut CPL 25% across B2B/DTC lead-gen.',
        'Lifted landing-page conversion 30–50%; built testing SOPs that cut launch time 60%.',
        'Produced 50+ concepts/month at a 35% A/B winner rate.',
      ],
    },
    {
      company: 'ROAS Depot',
      role: 'Creative Strategist',
      period: 'Jul 2025 — Dec 2025',
      type: 'Remote',
      body: 'Built messaging strategy from competitor + audience research across B2B/B2C/DTC.',
      points: [
        'Lifted ad engagement 45% via researched messaging strategies.',
        'Set brand-voice guidelines + review processes (+60% consistency).',
        'Ran a 4-person design team through weekly creative sprints.',
      ],
    },
  ],
  earlier: [
    { company: 'Onda Skim', role: 'B2B Content Strategist' },
    { company: 'Market Me Good', role: 'SEO Content Writer' },
    { company: 'V4 Company', role: 'Growth Marketing Analyst' },
    { company: 'Darwin Agency', role: 'Media Analyst' },
    { company: 'Mestre Agency', role: 'Media Analyst' },
    { company: 'OficialFarma', role: 'Creative Strategist' },
  ],
};

// ---- My day-to-day work ----
export const dayToDay = [
  { t: 'Concept & copy', d: 'Monthly ad-concept sprints — hooks, scripts, copy — tailored to each audience segment.' },
  { t: 'Media buying', d: 'Launch, structure and scale Meta campaigns; budget pacing and automated rules.' },
  { t: 'Creative direction', d: 'Direct UGC, AI-avatar and static creative; QA against brand and performance.' },
  { t: 'Reporting & CAC', d: 'Weekly performance reports tying spend to CPL, CPQL and downstream revenue.' },
  { t: 'Quality & attribution', d: 'Subscriber-quality analysis, pixel diagnostics and attribution debugging.' },
  { t: 'AI tooling', d: 'Build agents and automations that make the whole team faster.' },
];

// ---- Hard skills (grouped) ----
export const hardSkills = [
  { group: 'Paid acquisition', items: ['Meta Ads', 'Budget pacing & scaling', 'BROAD + LEADS structures', 'Automated rules', 'Audience strategy'] },
  { group: 'Creative', items: ['Ad concepting', 'Copywriting', 'UGC & podcast ads', 'AI-avatar (Arcads / HeyGen)', 'ElevenLabs voice', 'Static angle libraries'] },
  { group: 'Analytics', items: ['CAC / CPL / CPQL frameworks', 'Attribution debugging', 'Pixel diagnostics', 'Subscriber-quality analysis'] },
  { group: 'Stack', items: ['Pipeboard / Meta', 'Beehiiv', 'Substack', 'Notion', 'Hex', 'Claude Code'] },
];

// ---- Academic background (refined) ----
export const academic = [
  { title: 'Rhetoric: Persuasive Writing & Public Speaking', org: 'Harvard University' },
  { title: "Bachelor's in Marketing", org: 'PUC Minas' },
  { title: "Bachelor's in Psychology", org: 'UNIBH' },
  { title: 'Storytelling & screenwriting', org: 'Masterclass · EBAC' },
];

// ---- Feedbacks: current-client quotes + verified review screenshots ----
export const feedbacks = {
  quotes: [
    { quote: 'An especially huge, massive thank you to Lays — you have been absolutely fantastic. A true professional.', who: 'Jay Shetty team', ctx: 'The Daily Wisdom', color: 'acid' },
    { quote: 'Amazing. Yesterday was our best CAC day of the year.', who: 'Mike', ctx: 'Workweek', color: 'coral' },
    { quote: 'Do you sleep?', who: 'Jacob Donnelly', ctx: 'A Media Operator', color: 'cobalt' },
    { quote: 'Guess we officially won — super happy!!!', who: 'Insight Links', ctx: 'beat the incumbent agency', color: 'sun' },
  ],
  screenshots: [
    '/feedbacks/fb-1.png',
    '/feedbacks/fb-2.png',
    '/feedbacks/fb-3.png',
    '/feedbacks/fb-4.png',
    '/feedbacks/fb-5.png',
    '/feedbacks/fb-6.png',
  ],
};

export const skills = [
  'Meta Ads', 'CAC / unit economics', 'UGC & podcast ads', 'AI-avatar creative',
  'Attribution debugging', 'Cost-per-qualified-lead', 'Beehiiv', 'Substack',
  'Notion', 'Claude Code', 'Vibe marketing', 'Creative QA', 'Audience strategy',
  'Lifecycle / newsletter growth',
];
