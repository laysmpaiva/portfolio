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
    { label: 'Newsletter', href: 'https://a-marketers-scribblings.beehiiv.com/', handle: "A Marketer's Scribblings" },
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
    site: 'https://bytebytego.com',
    founder: 'Alex Xu',
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
      { k: 'engineers reached', v: '1M+' },
      { k: 'the agency head-to-head', v: 'Won' },
      { k: 'won on', v: 'Sub quality' },
    ],
    context:
      "ByteByteGo is a system-design newsletter for software engineers, a developer-education brand with over a million technical readers. I launched paid acquisition under strict brand guardrails and went head-to-head with the incumbent agency.",
    work: [
      'Launched with strict brand guardrails, uploaded buyer lists for lookalikes, navigated a US+CAN vs ROW split.',
      'Ran concept + copy across Confession, Stop X/Start Y, X-but-for-Y, UGC-podcast and cheat-sheet lead-magnet angles.',
      'Restructured the account into a BROAD + LEADS setup to cut cost and improve efficiency.',
      'Co-introduced cost-per-engaged-sub (CPES) and proved we beat the incumbent on the metric that maps to product value.',
    ],
    metrics: [
      { k: 'Result', v: 'Won the head-to-head' },
      { k: 'Creative', v: '5 angles tested' },
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
    site: 'https://news.jayshetty.me',
    founder: 'Jay Shetty',
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
      { src: '/creatives/jay-shetty/video/v1.mp4', video: true },
      { src: '/creatives/jay-shetty/02-daily-wisdom-hook1.jpg' },
      { src: '/creatives/jay-shetty/video/v2.mp4', video: true },
      { src: '/creatives/jay-shetty/03-daily-wisdom-hook2.jpg' },
    ],
  },
  {
    id: 'how-to-ai',
    client: 'How to AI',
    site: 'https://how-to-ai.guide',
    founder: 'Ruben Hassid',
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
    site: 'https://workweek.com',
    founder: 'Mike Madarasz',
    founderLabel: 'Worked with',
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
    site: 'https://amediaoperator.com',
    founder: 'Jacob Cohen Donnelly',
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
  {
    id: 'linkedin-content',
    client: 'LinkedIn content',
    person: 'B2B · Social selling',
    category: 'LinkedIn · B2B content',
    accent: 'cobalt',
    spendKey: null,
    kind: 'product',
    face: null,
    logo: null,
    emoji: '💼',
    image: null,
    adName: null,
    headline: 'B2B LinkedIn content that goes viral and books qualified leads.',
    body: "Compelling, conversion-focused LinkedIn content for B2B founders: scroll-stopping hooks, authority-building insight and a giving-first angle that turned posts into 100+ comments and qualified leads.",
    pill: 'See the LinkedIn work →',
  },
  {
    id: 'youtube-scripts',
    client: 'YouTube video scripts',
    person: 'Scriptwriting · Retention',
    category: 'Scriptwriting · Audience growth',
    accent: 'sun',
    spendKey: null,
    kind: 'product',
    face: null,
    logo: null,
    emoji: '▶️',
    image: null,
    adName: null,
    headline: 'Video scripts that hook in 15 seconds and keep viewers watching.',
    body: "Curiosity-driven scripts for educational YouTube channels: hooks, curiosity gaps and retention structure that grow the channel, written to be watched to the end.",
    pill: 'Read the scripting approach →',
  },
];

// ---- What I own on a client engagement (animated scope section on each case page) ----
export const ownership = [
  { icon: '🎨', t: 'Creative strategy & execution', d: 'Angles, concepts and copy, start to finish.' },
  { icon: '📈', t: 'Media buying', d: 'Account structure, budget pacing, scaling the winners.' },
  { icon: '🔍', t: 'Funnel performance & analysis', d: 'Landing pages, tracking, subscriber quality.' },
  { icon: '🤝', t: 'Client-facing meetings', d: 'Kickoffs, check-ins, the direct relationship.' },
  { icon: '📊', t: 'Weekly reports', d: 'Numbers, insights and next steps, every week.' },
  { icon: '🗓️', t: 'Biweekly analysis & reports', d: 'Deeper reviews and the editorial/newsletter read.' },
];

// ---- Real LinkedIn posts written for B2B clients (expandable on the LinkedIn page) ----
export const linkedinPosts = [
  {
    hook: 'My client is a CTO who closed R$252,000/year in strategic consulting, using LinkedIn in a non-obvious way.',
    badge: 'R$252K/yr · 4 contracts',
    body: `He applied 3 counter-intuitive principles:

1️⃣ Silent Authority
Instead of the typical "LinkedIn guru" pattern, he focused on deep trend analysis, data-driven forecasts, real cases without self-promotion and exclusive market insights. Board members started requesting private calls.

2️⃣ Reverse Networking
Abandoned conventional tactics: zero mass messages, zero motivational posts, zero viral content, zero generic "tips". Instead, critical analysis about digital transformation, technological risks, strategic decisions and market trends.

3️⃣ High-Impact Diagnosis
In meetings with C-levels: scenario mapping, technical risk analysis, global players benchmark, 5-year ROI projections.

Results in 90 days:
→ 12 meetings with CEOs
→ 4 signed contracts
→ R$252,000 in annual revenue
→ 3 interested boards

The differential? He never "sold consulting." He just positioned himself as a strategic partner.

✅ Comment "PROFILE" and I'll send the Singular Profile Guide he used.`,
  },
  {
    hook: 'My client fired the SDR team and doubled B2B sales using only LinkedIn. No ads, no cold calls, no outbound.',
    badge: 'Sales doubled · R$45K/mo saved',
    body: `This client was a CEO who came to me frustrated in early 2024:

6 full-time SDRs · R$45,000/month in payroll · 180 calls per day. The result? A maximum of 2 deals/month.

After our analysis, we realized 93% of his time was spent chasing cold leads. Our strategy:
Fired the entire outbound team. Repositioned the CEO on LinkedIn. Created an organic nurturing process.

Results in the last 4 months:
→ 4 deals/month (doubled)
→ R$45k monthly savings
→ Leads reaching out spontaneously
→ Sales with half the cycle time

Why did it work? Today, B2B decision-makers don't want to be "hunted." They research. They evaluate. They choose who to follow.

✅ Comment "INBOUND" and I'll send the framework.`,
  },
  {
    hook: 'My client closed R$19,000 in LinkedIn contracts using these 3 Social Selling techniques.',
    badge: 'R$19K · 67 meetings booked',
    body: `1️⃣ The daily micro-content rule
Instead of long "how to be successful" posts, he shared practical tips from real interviews, common CV mistakes with examples, behind the scenes of selection processes, and weekly premium job updates. People WANTED to follow him to not miss anything.

2️⃣ The "hook question" method
Whenever someone commented, he asked ONE specific question about their professional situation. ("What's your next interview? Maybe I can give you specific tips for it.") This turned comments into natural conversations that flowed into meetings.

3️⃣ Express personalized proposal
In meetings he analyzed the person's LinkedIn beforehand, pointed out 3 clear opportunities, showed real results from other mentees, and offered a specific plan for that profile.

The result, in 90 days:
→ 67 scheduled meetings
→ 3 premium mentorships at R$5,000
→ 4 basic programs at R$1,000

The most interesting part? He had no sales experience before. He just applied a step-by-step method I developed.

✅ Comment "METHOD" and I'll send the 5 message templates that converted the most.`,
  },
  {
    hook: 'My client is a CMO who went from generic consultant to closing R$200,000/year in contracts using 3 Social Selling techniques.',
    badge: 'R$276K/yr · 5 contracts',
    body: `Before, his profile was like everyone else's: "Digital Marketing Specialist", "Growth Hacker", "Performance Expert". Until we completely changed the strategy:

1️⃣ Data over buzzwords
Instead of trends, he analyzed ROI of real cases, showed flaws in popular strategies, debunked marketing myths and exposed numbers nobody shows. After two months, CEOs started saving his content.

2️⃣ Anti-marketing in marketing
Zero quick-result promises, zero growth hacks, zero motivational content. Instead: raw performance analysis, hidden risks in metrics, data-driven hard decisions, failure cases with learnings.

3️⃣ Risk-based consulting
In meetings he audited the entire marketing stack, projected loss scenarios, pointed out budget leaks and showed strategic blind spots.

In 4 months of mentoring:
→ 15 diagnostics for C-levels
→ 5 advisory contracts
→ R$276,000 in annual revenue
→ 4 companies in pipeline

He stopped competing on price when he stopped selling "marketing" and started selling "risk reduction in investments."

✅ Comment "PROFILE" and I'll send the Singular Profile Guide.`,
  },
  {
    hook: "My client closed a R$21,000 per month contract using these 3 Social Selling techniques. And she's a copywriter!",
    badge: 'R$21K/month contract',
    body: `1️⃣ Building authority and trust (without sounding commercial)
Social Selling begins before you talk directly to the client. She positioned herself as an authority, posting content that connected with her ideal client: business owners' pain points, case studies, real results. When the time came for a direct conversation, trust was already built.

2️⃣ Direct and personalized conversations
Forget the generic "Hi, how are you?". She contacted potential clients by commenting on recent posts or topics she knew mattered to them. No direct selling, just genuine, strategic connection that generated curiosity and affinity.

3️⃣ Scarcity
When the client was almost decided, she used a subtle scarcity trigger: limited availability. She made it clear she had restricted spots for new clients. They closed the contract to secure the position.

Authority building, personalized conversations, and limited availability. Not complex at all, but they helped her close a R$21,000 monthly contract.

✅ Comment "Message" and I'll send the 5 templates she used.`,
  },
  {
    hook: '"I have 800 decision-maker connections on LinkedIn but none are responding to my outreach."',
    badge: '3 contracts in 2 months',
    body: `This was the message from a frustrated consultant. I analyzed his process: optimized profile ✅, relevant content ✅, qualified connections ✅. The problem was elsewhere: how he conducted the follow-up.

Most people make the same mistake: they try to book a meeting in the very first message. It's like proposing marriage on the first date.

Busy decision-makers need a structured journey:
1️⃣ First, generate identification
2️⃣ Then, build authority
3️⃣ Finally, create the opportunity

I gave him a sequence of 7 emails that respect this natural B2B decision-maker journey.

The result? He closed 3 contracts in the last 2 months. No cold calls. No coming across as an annoying salesperson. Reputation intact.

✅ Comment "SEQUENCE" and I'll send the material.`,
  },
];

// ---- Capabilities funnel: the whole growth function, not just ads ----
export const capabilities = [
  { t: 'Positioning & GTM', d: 'the message, before the spend' },
  { t: 'Full-funnel acquisition', d: 'paid + creative, bought on CAC' },
  { t: 'Lifecycle & retention', d: 'email that activates and keeps' },
  { t: 'Analytics & North-Star', d: 'the metric that actually matters' },
  { t: 'Experimentation', d: 'tests with a real hypothesis' },
  { t: 'Growth engineering', d: 'AI systems that compound it' },
];

// ---- "How I'd grow your product": 0→1→scale playbook (animated flow on home) ----
export const playbook = [
  { n: '01', t: 'Find the real offer', d: "Who actually buys, what makes them switch, and the one promise worth leading with." },
  { n: '02', t: 'Buy attention that converts', d: 'Creative that sounds like the customer, judged on cost-per-customer, not clicks.' },
  { n: '03', t: 'Catch them on landing', d: 'Pages and lead magnets that earn the email, with qualification baked in from day one.' },
  { n: '04', t: 'Turn signups into fans', d: 'Onboarding and lifecycle email that activate people fast, the part most teams skip.' },
  { n: '05', t: 'Make the money work', d: 'Offers and funnels tied to LTV, so spend chases revenue, not vanity metrics.' },
  { n: '06', t: 'Make it compound', d: 'Tests, dashboards and the AI tools I build, so next month beats this one.' },
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
    { quote: 'An especially huge, massive thank you to Lays, you have been absolutely fantastic. A true professional.', who: 'The Daily Wisdom', href: 'https://news.jayshetty.me', ctx: 'creator newsletter', color: 'acid' },
    { quote: 'Amazing. Yesterday was our best day of the year.', who: 'Workweek', href: 'https://workweek.com', ctx: 'Mike Madarasz', color: 'coral' },
    { quote: 'Do you sleep?', who: 'A Media Operator', href: 'https://amediaoperator.com', ctx: 'founder', color: 'cobalt' },
    { quote: 'Guess we officially won. Super happy!!!', who: 'ByteByteGo', href: 'https://bytebytego.com', ctx: 'beat the incumbent agency', color: 'sun' },
    { quote: "The fact that you take ownership in this and care is what separates you. Great skill to have. Treating every client like it's your own personal biz.", who: 'Jay', ctx: 'Director, The Feed Media', color: 'lilac' },
    { quote: 'Quality has been monumentally improved... Well done!', who: 'The Daily Wisdom', href: 'https://news.jayshetty.me', ctx: 'Anna Mullens', color: 'coral' },
  ],
  screenshots: ['/feedbacks/fb-1.png', '/feedbacks/fb-2.png', '/feedbacks/fb-3.png', '/feedbacks/fb-4.png', '/feedbacks/fb-5.png', '/feedbacks/fb-6.png', '/work-shots/linkedin/li-1.png', '/work-shots/linkedin/li-2.png'],
};
