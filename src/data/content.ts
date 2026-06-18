// ============================================================
// Single source of truth for portfolio copy.
// Framed for SaaS / startup / AI growth roles. Client-private data
// (names, CPL/CAC, per-client spend) intentionally kept out.
// ============================================================

export const profile = {
  name: 'Lays Paiva',
  role: 'Growth Marketer',
  headlineWords: ['SaaS', 'Newsletters', 'Startups', 'AI', 'Media', 'DTC', 'Creators'],
  tagline:
    "I grow products end to end: acquisition, funnels, email, offers and the AI systems that tie it all together. Ads are just the part you can see.",
  blurb:
    "I treat marketing like a product: tight feedback loops, real CAC math, and creative that converts instead of just looking nice in a slide deck. I've scaled AI and B2B products from launch to hundreds of thousands of users, and when something works I turn it into an AI tool so it never eats my time twice. Yes, I build those myself. No, AI hasn't replaced me. I checked.",
  location: 'Remote · works in 🇧🇷 PT & 🇺🇸 EN',
  email: 'laysmpaiva@gmail.com',
  photo: '/lays.jpg',
  youtubeId: 'bubm4Zm6c24',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laysmpaiva/', handle: '/in/laysmpaiva' },
    { label: 'Email', href: 'mailto:laysmpaiva@gmail.com', handle: 'laysmpaiva@gmail.com' },
  ],
  available: true,
};

// Headline stat reel, each number tied to a real win (not random).
// Framed for growth-lead / full-stack roles: outcomes, not media metrics.
export const stats = [
  { value: 750, suffix: 'K', label: 'audience grown for one AI product', sub: '150K → 750K in 8 months, #1 education newsletter on Substack', color: 'acid' },
  { value: 13, suffix: '+', label: 'brands grown end to end', sub: 'SaaS, dev tools, B2B media, wellness, health-tech', color: 'coral' },
  { value: 5.2, prefix: '$', suffix: 'M+', label: 'acquisition budget owned', sub: "other people's money, handled with care", color: 'cobalt' },
  { value: 1, prefix: '$', suffix: 'M+', label: 'revenue from my own offers', sub: 'copy, funnel and traffic, all mine', color: 'sun' },
];

// How a winning ad gets made: one real example (ByteByteGo "Read X"), start to finish.
export const method = {
  lead: "Everyone says they have a process. Here's mine actually running, on the ad that helped take this account from the incumbent agency.",
  example: {
    img: '/creatives/bytebytego/01-read-x.png',
    client: 'ByteByteGo',
    sticker: 'The ad that won the account',
    caption: 'The actual ad. Still one of the account\'s best performers.',
  },
  steps: [
    { n: '01', t: "Steal the audience's words", d: "Before a single dollar moves, I mine Reddit, Quora and the client's own readers for the exact language they use. For ByteByteGo: how engineers really talk about system design, interviews and keeping up. That becomes the message bank every line is pulled from." },
    { n: '02', t: 'Write like the brand, sell like direct response', d: "One concept, five variations: same headline and CTA, a different promise each, all in the brand's voice. The selling instinct comes from my own direct-response years, when my copy either converted or I didn't get paid." },
    { n: '03', t: 'Buy against CAC, not vibes', d: 'Launched into a BROAD + LEADS structure and judged on cost per engaged subscriber, not clicks. Scaled the winner, killed the rest, and beat the agency we replaced on the metric that maps to product value.' },
    { n: '04', t: 'Turn the win into a machine', d: 'Then the whole flow became a Claude Code skill: it researches, writes the variations, builds the Canva design and the designer brief. The next winner takes hours instead of days. I automate my own job so I can do more of it.' },
  ],
};

// ---- Case studies / main projects ----
// `logo` = brand mark (box); else uppercase wordmark fallback. Client faces removed (likeness not cleared).
// `kind: 'product'` = Lays' own product (no client/spend).
export const caseStudies = [
  {
    id: 'bytebytego',
    client: 'ByteByteGo',
    person: null,
    category: 'Dev tools · Tech education',
    accent: 'cobalt',
    spendKey: 'bytebytego',
    face: null,
    logo: '/logos/bytebytego.png',
    image: '/creatives/bytebytego/01-read-x.png',
    adName: 'DCT_114 · "Read X"',
    headline: 'Beat the incumbent agency head-to-head and won the account.',
    body: "ByteByteGo's system-design newsletter for engineers, with over a million technical readers. Launched under hard brand constraints, went head-to-head with the incumbent agency, and won. They had a head start. It didn't help.",
    pill: 'Won the head-to-head',
    results: [
      { k: 'the agency head-to-head', v: 'Won' },
      { k: 'brand-safe creative', v: 'No name/face' },
      { k: 'beat raw volume', v: 'Quality' },
    ],
    context:
      "ByteByteGo is a system-design newsletter for software engineers, a developer-education brand with over a million technical readers. I launched paid acquisition under hard brand constraints (no name, no face) and went head-to-head with the incumbent agency.",
    work: [
      'Launched with brand guardrails (no name/face), uploaded buyer lists for lookalikes, navigated a US+CAN vs ROW split.',
      'Ran concept + copy across Confession, Stop X/Start Y, X-but-for-Y, UGC-podcast and cheat-sheet lead-magnet angles.',
      'Restructured the account into a BROAD + LEADS setup to cut cost and improve efficiency.',
      'Co-introduced cost-per-engaged-sub (CPES) and proved we beat the incumbent on the metric that maps to product value.',
    ],
    metrics: [
      { k: 'Result', v: 'Won the head-to-head' },
      { k: 'Brand rules', v: 'No name, no face' },
      { k: 'Audience', v: '1M+ engineers' },
      { k: 'Won on', v: 'Engaged-sub quality' },
      { k: 'Structure', v: 'BROAD + LEADS' },
    ],
    media: [
      { src: '/creatives/bytebytego/video/v1.mp4', video: true },
      { src: '/creatives/bytebytego/01-read-x.png' },
      { src: '/creatives/bytebytego/video/v2.mp4', video: true },
      { src: '/creatives/bytebytego/02-stop-x-start-y.png' },
    ],
  },
  {
    id: 'jay-shetty',
    client: 'The Daily Wisdom',
    person: null,
    category: 'Creator product · Wellness',
    accent: 'coral',
    spendKey: null,
    face: null,
    logo: '/logos/daily-wisdom.png',
    image: '/creatives/jay-shetty/01-im-jay-shetty.jpg',
    adName: null,
    headline: 'Drove sign-ups at scale for a global creator brand, with quality holding as volume grew.',
    body: "The Daily Wisdom, a global creator's daily newsletter. Owned paid acquisition end-to-end and ran creator-recorded video ads at scale, keeping sign-up quality high. The target felt ambitious. It wasn't.",
    pill: '"A true professional" (client team)',
    results: [
      { k: 'owned end-to-end', v: 'Paid' },
      { k: 'creator video ads', v: 'At scale' },
      { k: 'AI voice-clone ad', v: 'Shipped' },
    ],
    context:
      "The Daily Wisdom is a global creator's daily newsletter. I owned paid acquisition end-to-end: research, concepts, creator-recorded video ads, weekly reporting and an AI voice-clone experiment.",
    work: [
      'Built the research OneSheet, ran kickoff + biweekly meetings, and posted weekly performance reports.',
      'Produced monthly creative batches: creator-recorded video ads, UGC podcast ads and an AI/ElevenLabs voice-clone experiment.',
      'Diagnosed low landing-page conversion, a tracking break after a thank-you URL change, and a multi-week unsubscribe investigation tied to the rebrand.',
      'Automated a weekly newsletter analysis to Notion alongside the performance reports.',
    ],
    metrics: [
      { k: 'Scope', v: 'Owned paid end-to-end' },
      { k: 'Creative', v: 'Creator video at scale' },
      { k: 'Experiment', v: 'AI voice-clone ad' },
      { k: 'Reporting', v: 'Weekly Meta + Notion' },
    ],
    media: [
      { src: '/creatives/jay-shetty/video/v1.mp4', video: true, poster: '/creatives/jay-shetty/01-im-jay-shetty.jpg' },
      { src: '/creatives/jay-shetty/02-daily-wisdom-hook1.jpg' },
      { src: '/creatives/jay-shetty/video/v2.mp4', video: true },
      { src: '/creatives/jay-shetty/03-daily-wisdom-hook2.jpg' },
    ],
  },
  {
    id: 'how-to-ai',
    client: 'How to AI',
    person: null,
    category: 'AI · Education product',
    accent: 'acid',
    spendKey: 'how-to-ai',
    face: null,
    logo: null,
    image: '/creatives/how-to-ai/01-ai-didnt-replace-you.png',
    adName: 'DCT_154 · "AI Didn\'t Replace You"',
    headline: 'Scaled an AI newsletter to ~750K and made it #1 in its category on Substack.',
    body: "An AI-education newsletter and my flagship account, scaled into the #1 education newsletter on Substack.",
    pill: '#1 education newsletter on Substack',
    results: [
      { k: 'education newsletter on Substack', v: '#1' },
      { k: 'subscribers reached', v: '~750K' },
      { k: 'my largest account', v: 'Flagship' },
    ],
    context:
      "How to AI is an AI-education newsletter, practical Claude/ChatGPT workflows for professionals. It's my flagship account and largest single win: an AI product I scaled into the #1 education newsletter on Substack.",
    work: [
      'Owned the full launch: resolved a disabled ad account + restricted payment method with FB support, fixed a mis-firing "complete registration" conversion event.',
      'Ran a monthly launch cadence: concept sprints shipped across ads, email and editorial, repurposing the creator\'s top infographics and LinkedIn posts into creative.',
      'Tested UGC, AI-avatar, POV-explainer and text-over-video formats head-to-head, scaling the winners.',
      'Scaled spend steadily from launch while holding cost efficiency as volume grew.',
    ],
    metrics: [
      { k: 'Outcome', v: '#1 on Substack' },
      { k: 'Audience', v: '~750K subscribers' },
      { k: 'Role', v: 'Flagship account, full launch' },
      { k: 'Testing', v: 'UGC · AI-avatar · POV' },
    ],
    media: [
      { src: '/creatives/how-to-ai/video/v1.mp4', video: true },
      { src: '/creatives/how-to-ai/01-ai-didnt-replace-you.png' },
      { src: '/creatives/how-to-ai/video/v2.mp4', video: true },
      { src: '/creatives/how-to-ai/02-please-stop.png' },
    ],
  },
  {
    id: 'workweek',
    client: 'Workweek',
    person: null,
    category: 'B2B · Fintech · Health-tech',
    accent: 'sun',
    spendKey: 'workweek',
    face: null,
    logo: '/logos/workweek.png',
    image: '/creatives/workweek/02-ihih-this-is-for-you.png',
    adName: 'DCT_168 · "This Is For You"',
    headline: 'Ran paid growth across 6 B2B brands and got all of them green at once.',
    body: "A B2B media startup running 6 creator-led newsletters across fintech, health-tech, HR and marketing. My largest, most complex account. Six brands, six audiences, one me.",
    pill: 'Milestone: all brands green',
    results: [
      { k: 'run in parallel', v: '6 brands' },
      { k: 'on target at once', v: 'All green' },
      { k: 'cross-account winner', v: '"This Is For You"' },
    ],
    context:
      "Workweek is a B2B media startup running a portfolio of creator-led newsletters across fintech, health-tech, HR and marketing. It's my largest, most complex account: 6 brands, each with its own audience and target.",
    work: [
      'GM + primary contact from onboarding; built per-brand OneSheets, managed 5+ ad accounts and brand kits.',
      'Multi-newsletter concept ideation at scale; set a per-newsletter naming convention to prevent mix-ups.',
      'Scaled a UGC podcast concept, "This Is For You", into a winner across the portfolio.',
      'Built reporting off the client\'s own Hex/N8N stack, plus a weekly per-newsletter analysis digest.',
    ],
    metrics: [
      { k: 'Brands', v: '6 in parallel' },
      { k: 'Milestone', v: 'All on target at once' },
      { k: 'Top concept', v: '"This Is For You"' },
      { k: 'Reporting', v: "On the client's Hex/N8N" },
    ],
    media: [
      { src: '/creatives/workweek/video/v2.mp4', video: true },
      { src: '/creatives/workweek/02-ihih-this-is-for-you.png' },
      { src: '/creatives/workweek/video/v1.mp4', video: true },
      { src: '/creatives/workweek/04-tmm-this-is-for-you.png' },
    ],
  },
  {
    id: 'a-media-operator',
    client: 'A Media Operator',
    person: null,
    category: 'B2B SaaS-adjacent · Niche media',
    accent: 'lilac',
    spendKey: 'a-media-operator',
    face: null,
    logo: '/logos/amo.webp',
    image: '/creatives/a-media-operator/01-if-you-work-in.png',
    adName: 'DCT_106 · "If You Work In…"',
    headline: 'Stood up a full qualified-lead funnel for a cold, hard-to-reach B2B audience.',
    body: "A B2B newsletter for media-company operators, a cold, niche audience most advertisers can't crack. Built the qualification funnel from scratch and cracked it anyway.",
    pill: '"Do you sleep?" (actual client quote)',
    results: [
      { k: 'qualified-lead funnel', v: 'From scratch' },
      { k: 'audience cracked', v: 'Cold B2B' },
      { k: 'logic + routing built', v: 'Qualification' },
    ],
    context:
      "A Media Operator is a B2B newsletter for media-company operators, a cold, niche, hard-to-target audience. I ran kickoff and built a full qualified-lead funnel from scratch, then cracked an audience most advertisers can't.",
    work: [
      'Authored ICP/persona strategy (legacy vs niche B2B media operators) and meeting recaps.',
      'Built the qualification funnel end-to-end: Typeform logic, Beehiiv signup flow, disqualification routing, and a separate Events Operator flow.',
      'Introduced a cost-per-qualified-lead framework combining Meta + Typeform + Beehiiv quality data.',
      'Handled a client data-integrity issue and shipped an ad-guidelines doc + client funnel dashboard.',
    ],
    metrics: [
      { k: 'Funnel', v: 'Built from scratch' },
      { k: 'Audience', v: 'Cold niche B2B' },
      { k: 'System', v: 'Qualification + routing' },
      { k: 'Framework', v: 'Cost-per-qualified-lead' },
    ],
    media: [
      { src: '/creatives/a-media-operator/01-if-you-work-in.png' },
      { src: '/creatives/a-media-operator/02-if-you-run.png' },
      { src: '/creatives/a-media-operator/03-every-operator.png' },
      { src: '/creatives/a-media-operator/06-every-operator-v2.png' },
    ],
  },
  // ---- Lays' own products (built before agency life) ----
  {
    id: 'vsl-production',
    client: 'VSL Production',
    person: 'My own offers · Deletha',
    category: 'Own product · Direct response',
    accent: 'cobalt',
    spendKey: null,
    kind: 'product',
    face: null,
    logo: null,
    emoji: '🎬',
    image: null,
    adName: null,
    headline: 'Wrote, produced and edited the VSLs behind $1M+ in direct-response revenue.',
    body: "Before agency life I ran my own offers under Deletha. The first sales letter I ever wrote did almost R$1M in revenue. The VSLs are on the page, full scripts included.",
    pill: 'Watch the VSLs →',
    results: [
      { k: 'Best offer', v: '$1M+', note: 'LatAm revenue' },
      { k: 'First letter ever', v: '~R$1M', note: 'in revenue' },
      { k: 'Featured', v: '4 VSLs', note: 'full sales letters' },
    ],
    context:
      "As a digital strategist, affiliate and offer owner (Deletha), I built my own direct-response products with 4+ years in the space. VSLs were the engine: I wrote the scripts, directed the footage, and edited the final cut myself, the same conversion-first instinct I now bring to paid creative for SaaS and startups.",
    work: [
      'Wrote long-form VSL scripts using direct-response structure (hook → problem → mechanism → offer → close).',
      'Produced and edited the videos end-to-end in Final Cut Pro.',
      'Ran the offers as owner: traffic, funnel, and conversion, not just the creative.',
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
    spendKey: null,
    kind: 'product',
    face: null,
    logo: null,
    emoji: '✉️',
    image: null,
    adName: null,
    headline: 'The email sequences that turned cold subscribers into buyers.',
    body: "A 5-email nurture flow I wrote for a DTC cellulite product: 45%+ open rates and a path from curiosity to purchase. Acquisition gets the applause; email gets the revenue. Full copy on the page.",
    pill: 'Read the sequences →',
    results: [
      { k: 'Open rates', v: '45%+', note: 'subject lines' },
      { k: 'Sequence', v: '5 emails', note: 'full copy inside' },
      { k: 'Today', v: 'AMO funnel', note: 'same craft, B2B' },
    ],
    context:
      "Paid acquisition that ignores what happens after the signup leaves money on the table. Across my own offers and client work, I've designed the email funnels that connect acquisition to revenue (welcome sequences, qualification logic, onboarding and monetization) so media-buying decisions are made against downstream signals, not just CPL.",
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
    slug: 'growth-plugin',
    name: 'Growth skills plugin',
    tag: 'GitHub',
    delta: '~40 hrs/mo saved',
    desc: 'The whole workflow, packaged: a GitHub-synced Claude Code plugin a team installs with one command and auto-updates forever. My personal workflow became a shared operating system.',
    accent: 'lilac',
  },
  {
    slug: 'concept-ideation',
    name: 'Creative concept skill',
    tag: 'Claude Code',
    delta: '2h → 20 min',
    desc: 'One line in, designer-ready out. It interviews me, researches multiple sources, writes hooks + body in the brand\'s voice, waits for my approval, then builds the concept page, asset folder and designer brief itself.',
    accent: 'acid',
  },
  {
    slug: 'weekly-report',
    name: 'Client report agents',
    tag: 'Automation',
    delta: '2-3h → 45 min',
    desc: 'Reads the newsletter dashboard in Chrome, pulls the Meta side via Pipeboard, writes the weekly report in my voice and posts the draft to my Slack for review. Many clients, one pipeline.',
    accent: 'coral',
  },
  {
    slug: 'canva-templates',
    name: 'Static-ad template skills',
    tag: 'Vibe marketing',
    delta: '12 formats',
    desc: 'Twelve template skills, one per proven static format. Each writes grounded variations, builds the Canva design from a locked master, plus the asset folder, concept page and brief.',
    accent: 'cobalt',
  },
];

// ---- Career / companies (spotlight growth, condense the rest) ----
export const career = {
  spotlight: [
    {
      company: 'The Feed Media',
      role: 'Growth Manager',
      period: 'Oct 2025 - present',
      type: 'Full-time · Remote',
      now: true,
      body: 'Lead paid growth for multiple SaaS / editorial / newsletter brands, focused on subscriber quality, not just volume. Own the full acquisition loop: audience research → creative testing → conversion → downstream revenue.',
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
      period: 'Jan 2025 - Jan 2026',
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
      period: '2023 - 2024',
      type: 'Remote',
      body: 'Worked directly with the CEO to grow qualified-lead flow for B2B products and services.',
      points: [
        'Owned content strategy aimed at qualified leads, not vanity reach.',
        'Built positioning and messaging for a B2B audience of operators and founders.',
      ],
    },
    {
      company: 'OficialFarma',
      role: 'Creative Strategist',
      period: 'Brazil',
      type: 'DTC · Health e-commerce',
      body: 'Creative strategy for one of Brazil\'s biggest compounding-pharmacy e-commerces: direct-response creative for health and supplement offers.',
      points: [
        'Built ad creative and funnel copy for DTC health products, where claims compliance and conversion have to coexist.',
        'Applied direct-response fundamentals (hook, mechanism, proof, offer) to a regulated category.',
      ],
    },
    {
      company: 'Deletha',
      role: 'Entrepreneur & Creative Strategist',
      period: '2020 - 2024',
      type: 'Own offers',
      body: 'Digital strategist, affiliate and offer owner with 4+ years in direct response, where I built and sold my own products.',
      points: [
        'Built my own offers end-to-end: VSLs, sales pages and email funnels.',
        'Ran traffic, funnel and conversion as the owner, full P&L instinct.',
        'This is where the "make it convert" discipline behind my paid creative comes from.',
      ],
    },
  ],
  earlier: [
    { company: 'Darwin Agency', role: 'Media Analyst' },
    { company: 'Mestre Agency', role: 'Media Analyst' },
    { company: 'Market Me Good', role: 'SEO Content Writer' },
    { company: 'V4 Company', role: 'Growth Marketing Analyst' },
  ],
};

// ---- The whole funnel (about page): growth manager, not just ads ----
export const funnel = {
  lead: 'Ads that convert are the entry ticket. What I actually run is the whole machine: taking a product, a SaaS or a startup from stranger to revenue, with every stage feeding the next.',
  stages: [
    { icon: '🧲', t: 'Attract', sub: 'Paid social · creative strategy · VOC research', d: 'Meta at scale, concepts grounded in real audience language, creative that stops the scroll because it sounds like the reader.', color: 'cobalt' },
    { icon: '🪤', t: 'Capture', sub: 'Landing pages · lead magnets · qualification', d: 'Pages and flows built to convert the click: Typeform logic, disqualification routing, lead quality protected from day one.', color: 'coral' },
    { icon: '💌', t: 'Nurture', sub: 'Email funnels · onboarding · activation', d: 'Welcome flows and sequences that turn a cold signup into an engaged reader. 45%+ open rates when I write them.', color: 'sun' },
    { icon: '💰', t: 'Monetize', sub: 'Offers · VSLs · partner recs · downstream revenue', d: 'Offer copy and funnels that actually sell (my own did $1M+), partner-rec monetization with SparkLoop for newsletter clients, and media buying tied to CAC → LTV.', color: 'acid' },
    { icon: '⚙️', t: 'Compound', sub: 'Analytics · experimentation · AI systems', d: 'Subscriber-quality analysis, structured A/B tests, and AI tooling that makes every stage above run faster next month.', color: 'lilac' },
  ],
};

// ---- Skills orbit (about page): floating map around "Growth" ----
export const skillsOrbit = {
  inner: [
    { n: 'Meta Ads', i: '📱', g: 'paid' },
    { n: 'Ad concepting', i: '💡', g: 'creative' },
    { n: 'Copywriting', i: '✍️', g: 'creative' },
    { n: 'CAC / CPL / CPQL', i: '📊', g: 'analytics' },
    { n: 'Claude Code', i: '🤖', g: 'ai' },
    { n: 'Email funnels', i: '💌', g: 'creative' },
    { n: 'Landing pages', i: '🪤', g: 'creative' },
    { n: 'Budget pacing', i: '📈', g: 'paid' },
  ],
  outer: [
    { n: 'UGC & podcast ads', i: '🎙️', g: 'creative' },
    { n: 'AI avatars · Arcads / HeyGen', i: '🧑‍💻', g: 'ai' },
    { n: 'ElevenLabs voice', i: '🔊', g: 'ai' },
    { n: 'Automated rules', i: '⚙️', g: 'paid' },
    { n: 'Attribution debugging', i: '🔍', g: 'analytics' },
    { n: 'Subscriber quality', i: '✅', g: 'analytics' },
    { n: 'Beehiiv', i: '🐝', g: 'stack' },
    { n: 'Substack', i: '📰', g: 'stack' },
    { n: 'Notion', i: '🗂️', g: 'stack' },
    { n: 'Hex', i: '🔷', g: 'stack' },
    { n: 'Canva', i: '🎨', g: 'stack' },
    { n: 'Pipeboard', i: '🟦', g: 'stack' },
    { n: 'SparkLoop', i: '⚡', g: 'stack' },
  ],
  groups: [
    { key: 'paid', label: 'Paid acquisition', color: 'cobalt' },
    { key: 'creative', label: 'Creative & funnels', color: 'coral' },
    { key: 'analytics', label: 'Analytics', color: 'sun' },
    { key: 'ai', label: 'AI tooling', color: 'acid' },
    { key: 'stack', label: 'Stack', color: 'lilac' },
  ],
};

// ---- Feedbacks ----
export const feedbacks = {
  quotes: [
    { quote: 'An especially huge, massive thank you to Lays, you have been absolutely fantastic. A true professional.', who: 'Client team', ctx: 'creator newsletter', color: 'acid' },
    { quote: 'Amazing. Yesterday was our best day of the year.', who: 'Client founder', ctx: 'B2B media', color: 'coral' },
    { quote: 'Do you sleep?', who: 'Client founder', ctx: 'B2B newsletter', color: 'cobalt' },
    { quote: 'Guess we officially won. Super happy!!!', who: 'Client', ctx: 'beat the incumbent agency', color: 'sun' },
    { quote: "The fact that you take ownership in this and care is what separates you. Great skill to have. Treating every client like it's your own personal biz.", who: 'Client', ctx: 'via Slack', color: 'lilac' },
    { quote: 'Quality has been monumentally improved... Well done!', who: 'Client team', ctx: 'on the creative', color: 'coral' },
  ],
  screenshots: ['/feedbacks/fb-1.png', '/feedbacks/fb-2.png', '/feedbacks/fb-3.png', '/feedbacks/fb-4.png', '/feedbacks/fb-5.png', '/feedbacks/fb-6.png'],
};
