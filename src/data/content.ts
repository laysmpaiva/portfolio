// ============================================================
// Single source of truth for portfolio copy.
// Sourced from Lays-Paiva-Portfolio.md (Slack archive) + LinkedIn +
// the real TFM skill files. Framed for SaaS / startup / AI.
// Ad SPEND is windowed to her tenure per client (showcase.json).
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

// Headline stat reel — each number tied to a real win (not random).
export const stats = [
  { value: 685, suffix: 'K', label: 'subscribers grown — How to AI', sub: '#1 education newsletter on Substack', color: 'acid' },
  { value: 68, suffix: '%', label: 'CPL cut — ByteByteGo', sub: '$4.42 → $1.41 blended', color: 'coral' },
  { value: 1.3, prefix: '$', suffix: 'M+', label: 'ad spend managed', sub: 'across SaaS / startup brands', color: 'cobalt' },
  { value: 0.6, prefix: '$', label: 'CPL at scale — Jay Shetty', sub: 'vs a $1.50 target', color: 'sun' },
];

// How I operate — a 4-step method (not generic blurbs).
export const capabilities = [
  { step: '01', icon: '🔭', title: 'Research', body: 'Mine VOC from Reddit, Quora, the client\'s own audience + competitor swipe. Build an ICP and a grounded message bank before a dollar is spent.', color: 'acid' },
  { step: '02', icon: '✍️', title: 'Create', body: 'Concept → copy → QA. UGC, AI-avatar, POV-explainer and static angles, written in the brand\'s voice and built to convert, not just look good.', color: 'coral' },
  { step: '03', icon: '🎯', title: 'Buy & scale', body: 'Launch, structure and scale on Meta. BROAD + LEADS, budget pacing, automated rules — decisions tied to CAC and subscriber quality.', color: 'cobalt' },
  { step: '04', icon: '🤖', title: 'Systemize', body: 'Turn what works into AI tooling: reporting agents, concept skills, Canva-AI templates that let the whole team move faster.', color: 'lilac' },
];

// ---- Case studies / main projects ----
// `face` = founder photo (circle); `logo` = brand mark; else wordmark fallback.
// `kind: 'product'` = Lays' own product (no client/spend).
export const caseStudies = [
  {
    id: 'bytebytego',
    client: 'ByteByteGo',
    person: 'Alex Xu',
    category: 'Dev tools · Tech education',
    accent: 'cobalt',
    span: 'Mar 2026 — present',
    spendKey: 'bytebytego',
    face: '/faces/alex-xu.jpg',
    logo: null,
    image: '/creatives/bytebytego/01-read-x.png',
    adName: 'DCT_114 — "Read X"',
    headline: 'Beat the incumbent agency head-to-head while spending ~5.6× less.',
    body: "Alex Xu's system-design newsletter for engineers — 1M+ technical readers. Launched under hard brand constraints and won the head-to-head on the metric that maps to product value.",
    pill: 'Won the head-to-head',
    results: [
      { k: 'Blended CPL', v: '−68%', note: '$4.42 → $1.41' },
      { k: 'US+CAN CPL', v: '$6.26 → $3.12', note: 'halved' },
      { k: 'Cost / engaged sub', v: '$3.06 vs $7.05', note: '57% lower' },
    ],
    context:
      "ByteByteGo is Alex Xu's system-design newsletter for software engineers — a developer-education brand with 1M+ technical readers. I launched paid acquisition under hard brand constraints (no name, no face) and went head-to-head with the incumbent agency.",
    work: [
      'Launched with brand guardrails (no name/face), uploaded buyer lists for lookalikes, navigated a US+CAN vs ROW split.',
      'Ran concept + copy across Confession, Stop X/Start Y, X-but-for-Y, UGC-podcast and cheat-sheet lead-magnet angles.',
      'Restructured into BROAD + LEADS, cutting blended CPL ~27% and halving US+CAN CPL.',
      'Co-introduced cost-per-engaged-sub (CPES) and proved we beat the incumbent on the metric that maps to product value.',
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
      { src: '/creatives/bytebytego/05-read-x-v2.png', label: 'DCT_114 — "Read X" v2' },
      { src: '/creatives/bytebytego/06-stop-x-v2.png', label: 'DCT_108 — "Stop X / Start Y" v2' },
    ],
  },
  {
    id: 'jay-shetty',
    client: 'The Daily Wisdom',
    person: 'Jay Shetty',
    category: 'Creator product · Wellness',
    accent: 'coral',
    span: 'Oct 2025 — Apr 2026',
    spendKey: null,
    face: '/faces/jay-shetty.jpg',
    logo: null,
    image: '/creatives/jay-shetty/01-im-jay-shetty.jpg',
    adName: 'DCT_105 — "Hi, I\'m Jay Shetty"',
    headline: 'Drove sign-ups for a global creator brand at a third of target CPL.',
    body: "Jay Shetty's daily-wisdom newsletter. Owned paid acquisition end-to-end and ran his creator-recorded video ads at scale, holding CPL far below target.",
    pill: '"A true professional" — Jay Shetty team',
    results: [
      { k: 'CPL at scale', v: '$0.60', note: 'vs $1.50 target' },
      { k: 'Peak week', v: '15,439 sign-ups', note: '10.13% CTR' },
      { k: 'Lowest CPL', v: '$0.53', note: '' },
    ],
    context:
      "The Daily Wisdom is Jay Shetty's daily newsletter spun out of his creator brand (On Purpose). I owned paid acquisition end-to-end from October 2025 through offboarding in April 2026 — research, concepts, creator-recorded video ads, weekly reporting and a voice-clone experiment.",
    work: [
      'Built the research OneSheet, ran kickoff + biweekly meetings, and posted weekly Meta reports.',
      'Produced monthly creative batches incl. DCT_104 "Life of Inertia", "Hi I\'m Jay Shetty" creator videos, UGC podcast ads and an AI/ElevenLabs voice-clone experiment.',
      'Diagnosed low LP CVR, a Meta tracking break after a thank-you URL change, and a multi-week unsubscribe investigation tied to the rebrand.',
      'Automated a weekly "Daily Wisdom Newsletter Analysis" to Notion alongside the Meta reports.',
    ],
    metrics: [
      { k: 'CPL at scale', v: '~$0.60', note: 'vs $1.50 target' },
      { k: 'Lowest CPL', v: '$0.53' },
      { k: 'Peak week', v: '15,439 sign-ups' },
      { k: 'Peak CTR', v: '10.13%' },
      { k: 'Peak-week spend', v: '$9,274', note: '7 days' },
      { k: 'Newsletter CTR', v: '5–6%', note: 'creator videos' },
    ],
    gallery: [
      { src: '/creatives/jay-shetty/01-im-jay-shetty.jpg', label: 'DCT_105 — "Hi, I\'m Jay Shetty"', video: true },
      { src: '/creatives/jay-shetty/02-daily-wisdom-hook1.jpg', label: '"The Daily Wisdom" — hook 1', video: true },
      { src: '/creatives/jay-shetty/03-daily-wisdom-hook2.jpg', label: '"The Daily Wisdom" — hook 2', video: true },
      { src: '/creatives/jay-shetty/04-daily-wisdom-hook3.jpg', label: '"The Daily Wisdom" — hook 3', video: true },
      { src: '/creatives/jay-shetty/05-daily-wisdom-hook4.jpg', label: '"The Daily Wisdom" — hook 4', video: true },
      { src: '/creatives/jay-shetty/06-daily-wisdom-hook5.jpg', label: '"The Daily Wisdom" — hook 5', video: true },
    ],
  },
  {
    id: 'how-to-ai',
    client: 'How to AI',
    person: 'Ruben Hassid',
    category: 'AI · Education product',
    accent: 'acid',
    span: 'Oct 2025 — present',
    spendKey: 'how-to-ai',
    face: '/faces/ruben-hassid.jpg',
    logo: null,
    image: '/creatives/how-to-ai/01-ai-didnt-replace-you.png',
    adName: 'DCT_154 — "AI Didn\'t Replace You"',
    headline: 'Scaled an AI newsletter from ~150K to 685K and made it #1 in its category on Substack.',
    body: "Ruben Hassid's AI-education newsletter. My flagship account — scaled from a ~150K launch into the #1 education newsletter on Substack.",
    pill: '#1 education newsletter on Substack',
    results: [
      { k: 'Subscribers', v: '150K → 685K', note: 'in 8 months' },
      { k: 'Best weekly CPL', v: '$1.57', note: 'vs $2.50 target' },
      { k: 'Peak week', v: '12,088 leads', note: '$1.45 CPL' },
    ],
    context:
      "How to AI is Ruben Hassid's AI-education newsletter — practical Claude/ChatGPT workflows for professionals. It's my flagship account and largest single win: an AI product I scaled from a ~150K-subscriber launch into the #1 education newsletter on Substack.",
    work: [
      'Owned the full launch: resolved a disabled ad account + restricted payment method with FB support, fixed a mis-firing "complete registration" conversion event.',
      'Ran monthly concept sprints, repurposing Ruben\'s top infographics and LinkedIn posts into ads.',
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
      { src: '/creatives/how-to-ai/05-replace-you-v2.png', label: 'DCT_154 — "AI Didn\'t Replace You" v2' },
      { src: '/creatives/how-to-ai/06-replace-you-v3.png', label: 'DCT_154 — "AI Didn\'t Replace You" v3' },
      { src: '/creatives/how-to-ai/02-please-stop.png', label: 'DCT_151 — "Please Stop"' },
      { src: '/creatives/how-to-ai/03-please-stop-v2.png', label: 'DCT_151 — "Please Stop" v2' },
      { src: '/creatives/how-to-ai/04-please-stop-v3.png', label: 'DCT_151 — "Please Stop" v3' },
    ],
  },
  {
    id: 'workweek',
    client: 'Workweek',
    person: 'Multi-brand B2B media startup',
    category: 'B2B · Fintech · Health-tech',
    accent: 'sun',
    span: 'Nov 2025 — present',
    spendKey: 'workweek',
    face: null,
    logo: '/logos/workweek.png',
    image: '/creatives/workweek/02-ihih-this-is-for-you.png',
    adName: 'DCT_168 — "This Is For You"',
    headline: 'Ran paid growth across 6 B2B brands and got all of them green at once.',
    body: "A B2B media startup running 6 creator-led newsletters across fintech, health-tech, HR and marketing. My largest, most complex account.",
    pill: 'Milestone: all brands green',
    results: [
      { k: 'Accounts green', v: '5 / 5', note: 'simultaneously, a first' },
      { k: 'Hospitalogy V-CAC', v: '$29.83', note: '25% under target' },
      { k: 'Best concept', v: '"This Is For You"', note: '5/6 on target' },
    ],
    context:
      "Workweek is a B2B media startup running a portfolio of creator-led newsletters — Marketing Millennials, Go-to-Millions, Fintech Takes, Hospitalogy, I Hate It Here and Fintech Takes Banking. It's my largest, most complex account: 6 brands, each with its own audience and CAC target.",
    work: [
      'GM + primary contact from onboarding; built per-brand OneSheets, managed 5+ ad accounts and brand kits.',
      'Multi-newsletter concept ideation at scale; set a per-newsletter DCT convention to prevent mix-ups.',
      'Scaled a UGC podcast concept into a cross-account winner; "This Is For You" hit target on 5 of 6 brands.',
      'Built reporting off the client\'s own Hex/N8N stack, plus a weekly per-newsletter analysis digest.',
    ],
    metrics: [
      { k: 'Brands', v: '6', note: 'in parallel' },
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
    accent: 'lilac',
    span: 'Mar 2026 — present',
    spendKey: 'a-media-operator',
    face: null,
    logo: '/logos/amo.webp',
    image: '/creatives/a-media-operator/01-if-you-work-in.png',
    adName: 'DCT_106 — "If You Work In…"',
    headline: 'Stood up a full qualified-lead funnel for a cold B2B audience and drove CPL down 73%.',
    body: "Jacob Donnelly's B2B newsletter for media-company operators — a cold, niche, hard-to-target audience. Built the qualification funnel from scratch.",
    pill: '"Do you sleep?" — the client',
    results: [
      { k: 'CPL', v: '$12.01 → $3.27', note: 'cold B2B' },
      { k: 'CPQL', v: '~$12 → $6.38', note: '' },
      { k: 'Qualification', v: '63–65%', note: 'Q1-qualified' },
    ],
    context:
      "A Media Operator is Jacob Donnelly's B2B newsletter for media-company operators — a cold, niche, hard-to-target audience. I ran kickoff and built a full qualified-lead funnel from scratch, then drove CPL down 73% on an audience most advertisers can't crack.",
    work: [
      'Authored ICP/persona strategy (legacy vs niche B2B media operators) and meeting recaps.',
      'Built the qualification funnel end-to-end: Typeform logic, Beehiiv signup flow, disqualification routing, and a separate Events Operator flow.',
      'Introduced a cost-per-qualified-lead framework combining Meta + Typeform + Beehiiv quality data.',
      'Handled a client data-integrity issue and shipped an ad-guidelines doc + client funnel dashboard.',
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
      { src: '/creatives/a-media-operator/04-if-you-work-in-v2.png', label: 'DCT_106 — "If You Work In…" v2' },
      { src: '/creatives/a-media-operator/02-if-you-run.png', label: 'DCT_107 — "If You Run…"' },
      { src: '/creatives/a-media-operator/05-if-you-run-v2.png', label: 'DCT_107 — "If You Run…" v2' },
      { src: '/creatives/a-media-operator/03-every-operator.png', label: 'DCT_108 — "Every Operator Should Subscribe"' },
      { src: '/creatives/a-media-operator/06-every-operator-v2.png', label: 'DCT_108 — "Every Operator…" v2' },
    ],
  },
  // ---- Lays' own products (built before agency life) ----
  {
    id: 'vsl-production',
    client: 'VSL Production',
    person: 'My own offers · Deletha',
    category: 'Own product · Direct response',
    accent: 'cobalt',
    span: '2021 — 2024',
    spendKey: null,
    kind: 'product',
    face: null,
    logo: null,
    emoji: '🎬',
    image: null,
    adName: null,
    headline: 'Wrote, produced and edited VSLs for my own direct-response offers.',
    body: "Before agency life I built and ran my own offers as an affiliate and offer owner — scripting, producing and editing video sales letters that did the selling.",
    pill: 'Built my own products',
    results: [
      { k: 'Role', v: 'Offer owner', note: 'end-to-end' },
      { k: 'Craft', v: 'Script → edit', note: 'Final Cut Pro' },
      { k: 'Discipline', v: 'Direct response', note: '4+ yrs' },
    ],
    context:
      "As a digital strategist, affiliate and offer owner (Deletha), I built my own direct-response products with 4+ years in the space. VSLs were the engine: I wrote the scripts, directed the footage, and edited the final cut myself — the same conversion-first instinct I now bring to paid creative for SaaS and startups.",
    work: [
      'Wrote long-form VSL scripts using direct-response structure (hook → problem → mechanism → offer → close).',
      'Produced and edited the videos end-to-end in Final Cut Pro.',
      'Ran the offers as owner: traffic, funnel, and conversion — not just the creative.',
      'Carried that "make it sell" instinct into every ad I write today.',
    ],
    metrics: [
      { k: 'Role', v: 'Offer owner + affiliate' },
      { k: 'Experience', v: '4+ years direct response' },
      { k: 'Stack', v: 'Final Cut Pro · ClickFunnels' },
      { k: 'Output', v: 'VSLs · sales pages · funnels' },
    ],
    gallery: [],
  },
  {
    id: 'email-funnels',
    client: 'Email Funnels',
    person: 'Lifecycle & onboarding',
    category: 'Own product · Lifecycle',
    accent: 'acid',
    span: '2021 — present',
    spendKey: null,
    kind: 'product',
    face: null,
    logo: null,
    emoji: '✉️',
    image: null,
    adName: null,
    headline: 'Designed the email funnels that turn a signup into revenue.',
    body: "Acquisition is only half of growth. I build the lifecycle funnels — welcome flows, qualification, onboarding and monetization — that connect a new subscriber to downstream revenue.",
    pill: 'Acquisition → revenue',
    results: [
      { k: 'Focus', v: 'Lifecycle', note: 'post-signup' },
      { k: 'Stack', v: 'Beehiiv · CF', note: '' },
      { k: 'Tie-in', v: 'CAC → LTV', note: '' },
    ],
    context:
      "Paid acquisition that ignores what happens after the signup leaves money on the table. Across my own offers and client work, I've designed the email funnels that connect acquisition to revenue — welcome sequences, qualification logic, onboarding and monetization — so media-buying decisions are made against downstream signals, not just CPL.",
    work: [
      'Built welcome + onboarding sequences that activate new subscribers fast.',
      'Designed qualification + disqualification logic (e.g. the A Media Operator funnel) to protect lead quality.',
      'Connected funnel performance back to media buying so spend follows revenue, not vanity metrics.',
      'Worked across Beehiiv, ClickFunnels and custom flows.',
    ],
    metrics: [
      { k: 'Focus', v: 'Lifecycle + onboarding' },
      { k: 'Stack', v: 'Beehiiv · ClickFunnels · Typeform' },
      { k: 'Principle', v: 'Media buying tied to LTV' },
      { k: 'Proof', v: 'AMO qualified-lead funnel' },
    ],
    gallery: [],
  },
];

// ---- AI / automation tooling (each links to its own detail page) ----
export const tooling = [
  {
    slug: 'concept-ideation',
    name: 'Concept-ideation skill',
    tag: 'Claude Code',
    desc: 'Research-driven ad concepts in the client\'s voice — VOC, competitor swipe and live data → grounded hooks + body, then auto-builds the Notion page, Drive folder and designer brief.',
    accent: 'acid',
  },
  {
    slug: 'weekly-report',
    name: 'Weekly report agent',
    tag: 'Automation',
    desc: 'Pulls Meta (Pipeboard) + Slack + Notion + Hex into a formatted, first-person Friday report with CAC targets and budget pacing. Cut Friday reporting from ~2h to ~30min.',
    accent: 'coral',
  },
  {
    slug: 'canva-templates',
    name: 'Canva-AI template skills',
    tag: 'Vibe marketing',
    desc: 'Four skills — Confession, Secret Expert, Read X, 3 Reasons Not To Read — that build an entire static ad on Canva with AI: grounded copy, the design, Drive + Notion + brief, end to end.',
    accent: 'cobalt',
  },
  {
    slug: 'tfm-plugin',
    name: 'TFM Skills plugin',
    tag: 'GitHub',
    desc: 'Packaged 15+ internal skills into a shared, GitHub-synced Claude Code plugin and rolled it out across the team (Mac + Windows) with auto-updating.',
    accent: 'lilac',
  },
];

// ---- Skill detail pages (real instructions from the TFM skill files) ----
export const skillPages: Record<string, any> = {
  'concept-ideation': {
    name: 'Concept-ideation skill',
    tag: 'Claude Code · /concept-ideation',
    accent: 'acid',
    intro: 'Research the client deeply, generate grounded concept copy in their voice, get explicit approval, then auto-build the whole TFM workflow — internal Notion concept page → Drive folder → designer brief.',
    how: [
      { t: 'Read the client first', d: 'Anchors on the client\'s Notion page: full newsletter name, niche, subscriber count, ICP label, what the newsletter actually delivers, personas with verbatim pains, voice rules, Meta ad-account ID.' },
      { t: 'Build the Swipe Bank', d: 'Pulls real audience language from Reddit/Quora VOC, the live website, internal + external Slack, the client\'s own Meta ads (Pipeboard), Foreplay competitor swipe and the latest newsletter analysis.' },
      { t: 'Generate grounded copy', d: 'Writes hooks + body in the client\'s voice — every claim traceable to something a real reader said or the newsletter actually delivers.' },
      { t: 'Brand filter + approval gate', d: 'Runs every line against the client\'s Do\'s & Don\'ts as hard stops, then waits for explicit GM approval. Copy and asset creation are strictly separate phases.' },
      { t: 'Build the artifacts', d: 'Post-approval only: creates the internal Notion concept page, the Drive folder (Raw assets + Final output) and the designer brief — and is GM-agnostic, so any growth manager can run it.' },
    ],
    rules: [
      'Copy and asset creation are strictly separate phases — research + copy first, build only after approval.',
      'Always use the full newsletter name, never an acronym.',
      'Use the real ICP descriptor ("operators", "cardiologists") — never generic "readers".',
      'Every Don\'t in the client playbook is a non-negotiable hard stop.',
    ],
    outputImage: '/creatives/how-to-ai/01-ai-didnt-replace-you.png',
    outputCaption: 'Output: a grounded concept → designer brief → final ad (How to AI)',
  },
  'weekly-report': {
    name: 'Weekly report agent',
    tag: 'Claude Code · /ww-friday-report',
    accent: 'coral',
    intro: 'A reporting agent that analyzes a client\'s ad accounts and writes the weekly performance report — in first person, straight to the client — pulling live data instead of hand-built spreadsheets.',
    how: [
      { t: 'Pull the data', d: 'Reads Meta Ads via Pipeboard (MTD spend, CPL, CAC), the client\'s Slack, Notion concepts and the Hex dashboard — for all 6 Workweek accounts at once.' },
      { t: 'Score against targets', d: 'Compares each account\'s Subscriber CAC and Verified CAC to its target, and MTD spend to the monthly budget to flag over/under/on-pace.' },
      { t: 'Write it like Lays', d: 'Outputs in first person to the client (e.g. "I", "we"), technical and to the point — never sycophantic, never verbose, always surfacing where the team is improving.' },
      { t: 'Deliver', d: 'Formats and DMs the Friday report. Per-client variants exist for How to AI, ByteByteGo, Jay Shetty, A Media Operator and Insight Links.' },
    ],
    rules: [
      'Primary metric is Subscriber CAC + volume; Verified CAC is secondary (acceptable 20–30% over only if Sub CAC is on target).',
      'Always first person, straight to the client — technical, optimistic, never sycophantic or verbose.',
      'Never present today\'s data in a weekly window (7 days ending yesterday).',
      'Always show the draft for approval before anything is sent.',
    ],
    outputText: `Hey Mike — week of May 19–25, all 6 accounts:

I Hate It Here is our standout: Sub CAC $4.66 (target $6.00), 39,309 signups in window. I scaled it +18% and it held.
Hospitalogy hit Verified CAC $29.83 — 25% under your $40 target.
Marketing Millennials is the volume engine at 39K+ signups; I'm watching frequency on the broad set.

Net: 5/6 green on Sub CAC. Next week I'm pushing "This Is For You" wider — it's on target across 5 of 6.`,
    outputCaption: 'Output: a formatted, first-person Friday report (Workweek)',
  },
  'canva-templates': {
    name: 'Canva-AI template skills',
    tag: 'Claude Code · /confession · /secret-expert · /read-x · /not-read',
    accent: 'cobalt',
    intro: 'Four template skills that build an entire static ad on Canva with AI. Each detects the next DCT number, generates grounded copy in the brand\'s voice, builds the Canva design, the Drive folder, the Notion concept page and the designer brief — then exports after approval. The background and music are baked into the master; the skill only writes and places the copy.',
    how: [
      { t: 'Confession', d: '5 hooks + 1 body + 1 CTA using the Confession grammar. B-roll and music are fixed in the Canva master — the skill swaps copy and enforces playbook Don\'ts as hard stops before any draft.' },
      { t: 'Secret Expert', d: '3 hooks, each a complete one-sentence ad (observer → perceived identity → punchline). No body, no CTA. Builds the Canva duplicate with copy + shadows.' },
      { t: 'Read X', d: '5 body variations of a "Read [Newsletter]!" subscribe ad — same headline, CTA and PS line, only the value-prop varies. One variation per Canva page.' },
      { t: '3 Reasons Not To Read', d: 'Reverse-psychology: a fixed headline + 3 numbered reasons, where every reason is a real benefit wrapped in an ironic "downside" parenthetical. 3 variants, one per page.' },
    ],
    rules: [
      'Detect the next DCT number automatically (per-newsletter sequence, never shared across brands by mistake).',
      'Read the template reference in full before generating any copy — it holds the grammar, word caps and locked Canva values.',
      'Ground every line in fresh editorial context + real audience language (the Swipe Bank).',
      'Enforce the client\'s Don\'ts as hard stops; export to Drive only after the GM approves the final creative.',
    ],
    gallery: [
      { src: '/creatives/bytebytego/01-read-x.png', label: 'Read X → ByteByteGo' },
      { src: '/creatives/workweek/03-ihih-secret-expert.png', label: 'Secret Expert → I Hate It Here' },
      { src: '/creatives/workweek/06-ihih-fake-review.png', label: 'Concept → I Hate It Here' },
    ],
    outputCaption: 'Output: finished static ads, built copy-to-Canva by AI',
  },
  'tfm-plugin': {
    name: 'TFM Skills plugin',
    tag: 'GitHub · Claude Code plugin',
    accent: 'lilac',
    intro: 'I packaged the team\'s internal skills into one shared, GitHub-synced Claude Code plugin — so every growth manager runs the same concept-ideation, reporting and template skills, and gets updates automatically.',
    how: [
      { t: 'Package', d: 'Bundled 15+ skills (concept-ideation, the 4 Canva templates, per-client weekly + biweekly reports, kick-off prep, new-client setup, newsletter analyzer, gws) into one plugin repo.' },
      { t: 'Distribute', d: 'Published it as a GitHub-synced Claude Code marketplace plugin so teammates install once and pull updates automatically.' },
      { t: 'Roll out', d: 'Ran adoption + support across the team on both Mac and Windows — turning my personal workflow into the team\'s standard.' },
      { t: 'Maintain', d: 'Versioned and iterated the skills as the playbooks evolved, keeping everyone on the latest rules.' },
    ],
    rules: [
      'One source of truth — every GM runs the same, current skills.',
      'GM-agnostic: skills resolve the running GM dynamically, never hard-coded to me.',
      'Ships with reference files (rules, IDs, playbooks) so the AI follows real TFM SOPs.',
      'Auto-syncs from GitHub — no manual copy-paste between teammates.',
    ],
    skillList: ['concept-ideation', 'confession-template', 'secret-expert-template', 'read-x-template', 'not-read-template', 'ww-friday-report', 'amo-weekly-report', 'bbg-weekly-report', 'howtoai-weekly-report', 'js-weekly-report', 'il-weekly-report', 'kick-off-prep', 'new-client-setup', 'pod-lays-newsletter-weekly-analyzer', 'gws'],
    outputCaption: 'Output: a shared plugin every TFM growth manager runs',
  },
};

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
        'Build the AI tooling the team runs on (concept, reporting and Canva-AI skills).',
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
      company: 'Onda Skim',
      role: 'B2B Content Strategist',
      period: '2023 — 2024',
      type: 'Remote',
      body: 'Worked directly with the CEO to grow qualified-lead flow for B2B products and services.',
      points: [
        'Owned content strategy aimed at qualified leads, not vanity reach.',
        'Built positioning and messaging for a B2B audience of operators and founders.',
      ],
    },
    {
      company: 'Deletha',
      role: 'Entrepreneur & Creative Strategist',
      period: '2020 — 2024',
      type: 'Own offers',
      body: 'Digital strategist, affiliate and offer owner with 4+ years in direct response — where I built and sold my own products.',
      points: [
        'Built my own offers end-to-end: VSLs, sales pages and email funnels.',
        'Ran traffic, funnel and conversion as the owner — full P&L instinct.',
        'This is where the "make it convert" discipline behind my paid creative comes from.',
      ],
    },
  ],
  earlier: [
    { company: 'Market Me Good', role: 'SEO Content Writer' },
    { company: 'V4 Company', role: 'Growth Marketing Analyst' },
    { company: 'Darwin Agency', role: 'Media Analyst' },
    { company: 'Mestre Agency', role: 'Media Analyst' },
    { company: 'OficialFarma', role: 'Creative Strategist' },
  ],
};

// ---- My day-to-day (icons + AI/SaaS-relevant) ----
export const dayToDay = [
  { icon: '🔬', t: 'Audience & VOC research', d: 'Mine real audience language and build the ICP + message bank that every concept is grounded in.' },
  { icon: '✍️', t: 'AI-assisted concepting', d: 'Generate hooks, scripts and static/UGC angles in the brand\'s voice — fast, tested, on-brand.' },
  { icon: '🎯', t: 'Paid media buying', d: 'Launch and scale Meta for SaaS/newsletter products: BROAD + LEADS, budget pacing, automated rules.' },
  { icon: '🧪', t: 'Experimentation', d: 'Structured A/B tests isolating hook / proof / CTA, judged on CAC and subscriber quality — not vanity.' },
  { icon: '📊', t: 'CAC & revenue', d: 'Cost-per-qualified-lead frameworks that tie media spend to downstream monetization.' },
  { icon: '🤖', t: 'Build AI tooling', d: 'Ship Claude Code agents + Canva-AI skills that generate concepts, reports and creative end-to-end.' },
];

// ---- Hard skills (grouped, with icons) ----
export const hardSkills = [
  { group: 'Paid acquisition', items: [
    { n: 'Meta Ads', i: '📱' }, { n: 'Budget pacing & scaling', i: '📈' }, { n: 'BROAD + LEADS structures', i: '🧱' }, { n: 'Automated rules', i: '⚙️' }, { n: 'Audience strategy', i: '🎯' },
  ]},
  { group: 'Creative', items: [
    { n: 'Ad concepting', i: '💡' }, { n: 'Copywriting', i: '✍️' }, { n: 'UGC & podcast ads', i: '🎙️' }, { n: 'AI-avatar (Arcads / HeyGen)', i: '🧑‍💻' }, { n: 'ElevenLabs voice', i: '🔊' }, { n: 'Static angle libraries', i: '🖼️' },
  ]},
  { group: 'Analytics', items: [
    { n: 'CAC / CPL / CPQL frameworks', i: '📊' }, { n: 'Attribution debugging', i: '🔍' }, { n: 'Pixel diagnostics', i: '🩺' }, { n: 'Subscriber-quality analysis', i: '✅' },
  ]},
  { group: 'Stack & AI', items: [
    { n: 'Pipeboard / Meta', i: '🟦' }, { n: 'Beehiiv', i: '🐝' }, { n: 'Substack', i: '📰' }, { n: 'Notion', i: '🗂️' }, { n: 'Hex', i: '🔷' }, { n: 'Claude Code', i: '🤖' }, { n: 'Canva', i: '🎨' },
  ]},
];

// ---- Feedbacks ----
export const feedbacks = {
  quotes: [
    { quote: 'An especially huge, massive thank you to Lays — you have been absolutely fantastic. A true professional.', who: 'Jay Shetty team', ctx: 'The Daily Wisdom', color: 'acid' },
    { quote: 'Amazing. Yesterday was our best CAC day of the year.', who: 'Mike', ctx: 'Workweek', color: 'coral' },
    { quote: 'Do you sleep?', who: 'Jacob Donnelly', ctx: 'A Media Operator', color: 'cobalt' },
    { quote: 'Guess we officially won — super happy!!!', who: 'Insight Links', ctx: 'beat the incumbent agency', color: 'sun' },
  ],
  screenshots: ['/feedbacks/fb-1.png', '/feedbacks/fb-2.png', '/feedbacks/fb-3.png', '/feedbacks/fb-4.png', '/feedbacks/fb-5.png', '/feedbacks/fb-6.png'],
};
