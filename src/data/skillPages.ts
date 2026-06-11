// Tooling detail pages. Content sourced from the TFM skills deck
// (the team presentation) and the tfm-marketplace GitHub repo.

export interface WalkStep {
  icon?: string;
  h: string;
  d: string;
  img?: string;        // screenshot path (click to zoom)
  imgCap?: string;
  prompt?: string;     // rendered as a mono "typed live" block
  promptLabel?: string;
}

export const skillPages: Record<string, any> = {
  'concept-ideation': {
    name: 'Concept-ideation skill',
    tag: 'Claude Code · /concept-ideation',
    accent: 'acid',
    headline: 'Research to designer-ready in ~20 minutes.',
    intro:
      'The biggest chore in a growth manager\'s month is producing ad concepts: research, ideation, copy, and all the ops around them. I wrote the whole task down as a skill. One line kicks it off, and 20 minutes later the concept page, the Drive folder and the designer brief exist, in the client\'s voice, grounded in real audience language.',
    stat: { num: '2h → 20 min', label: 'per concept, research to designer-ready handoff' },
    mindmap: {
      title: 'The manual task this skill replaced',
      caption: '13+ steps across 4 tools, mapped before the skill was written. Now the map runs itself in ~20 minutes.',
      center: 'One concept, delivered',
      groups: [
        { key: 'research', label: 'Research', color: 'cobalt' },
        { key: 'ideation', label: 'Ideation', color: 'lilac' },
        { key: 'copy', label: 'Copywriting', color: 'coral' },
        { key: 'ops', label: 'Ops & handoff', color: 'sun' },
        { key: 'gm', label: 'Per-GM extras', color: 'acid' },
      ],
      nodes: [
        { g: 'research', icon: '🔍', t: 'Inspirations: Meta, Foreplay, social' },
        { g: 'research', icon: '📈', t: "What's already working in the account" },
        { g: 'research', icon: '🏆', t: 'Winning formats + angles' },
        { g: 'ideation', icon: '🧩', t: 'Combine into 5+ angles and formats' },
        { g: 'ideation', icon: '✍️', t: 'Headline variations' },
        { g: 'copy', icon: '🎯', t: 'ICPs, dream outcomes, pain points' },
        { g: 'copy', icon: '📝', t: 'Full body copy' },
        { g: 'ops', icon: '📄', t: 'Notion concept page' },
        { g: 'ops', icon: '📁', t: 'Drive folder' },
        { g: 'ops', icon: '🎨', t: 'Designer brief' },
        { g: 'ops', icon: '📤', t: 'Send to the designer' },
        { g: 'gm', icon: '➕', t: 'Per-GM extras: approval docs, Sheets' },
      ],
    },
    walkthrough: [
      {
        icon: '🧭',
        h: 'One line kicks it off',
        d: '"/concept-ideation for How to AI", plus a Foreplay ad ID as inspiration if you have one. First thing it does: reads its own rules and IDs, and resolves which growth manager is running it.',
        img: '/tooling/concept-prompt.png',
        imgCap: 'The actual one-line prompt that starts a run',
      },
      {
        icon: '❓',
        h: 'It interviews you before acting',
        d: 'Two pre-flight questions: how many hook variations (3-5, across confession, peer-to-peer, counterintuitive, identity and specificity angles) and whether you want a client approval doc. No surprises mid-run.',
        img: '/tooling/concept-questions.png',
        imgCap: 'The pre-flight interview',
      },
      {
        icon: '🔬',
        h: 'Then it researches. 7 sources.',
        d: "Client Notion page, live website, Reddit/Quora audience language, both Slack channels, the client's own ad account (winning = SPEND, not just KPI), Foreplay competitor swipe, and the latest newsletter analysis.",
      },
      {
        icon: '✍️',
        h: 'Writes hooks + body in the client\'s voice, then stops',
        d: '"Approved to build?" Nothing gets created until I say yes. This is the back-and-forth zone: iterate on any line in plain English.',
        img: '/tooling/concept-copy.png',
        imgCap: 'DCT_167 "The AI Person": 3 hooks + universal body, each with a flow check',
      },
      {
        icon: '🚢',
        h: 'One "approved" later: everything built and verified',
        d: 'The internal Notion concept page, the Drive folder with Raw assets + Final output, and the designer brief already filled: reference video, typesetting rules, the 3-column script table. From here it\'s press a button to the designer and the concept is live in 24h. It even audits itself at the end of every run and lists fixes worth baking back into its own instructions.',
        img: '/tooling/concept-final.png',
        imgCap: 'The full handoff: concept page, designer brief, Drive folder',
      },
      {
        icon: '🎛️',
        h: 'And it\'s steerable, not all-or-nothing',
        d: 'Real case: a teammate already had approved copy in a Google Sheet. He didn\'t need research or copywriting, so he told the skill exactly that, in plain English. A skill is written instructions, not a locked pipeline: enter at any step, skip any step, swap any input.',
        img: '/tooling/concept-sheet.png',
        imgCap: "Luiz's copy, already done in Sheets. The skill picks up from there.",
        prompt: '/concept-ideation for Imaging Wire. The copy is already approved\nin this Sheet: [link]. Skip the research and the copywriting.\nJust run the build steps: internal Notion concept page,\nDrive folder, and the designer brief.',
        promptLabel: 'Steering it, typed in plain English',
      },
    ],
    rules: [
      'Copy and asset creation are strictly separate phases: research + copy first, build only after explicit approval.',
      'Define "winning" by SPEND, not just KPI. The highest-spend ads are the account\'s real winners.',
      'Use the real ICP descriptor ("operators", "cardiologists"), never generic "readers".',
      'Every Don\'t in the client playbook is a non-negotiable hard stop.',
    ],
  },

  'canva-templates': {
    name: 'Canva-AI template skills',
    tag: 'Claude Code · 12 template skills',
    accent: 'cobalt',
    headline: 'A finished concept + Canva design + brief in ~20 minutes.',
    intro:
      'Twelve template skills, one per proven static-ad format. Each master is designed once in Canva (layout, fonts, safe zones locked), and the skill does the rest: detects the next DCT number, grounds itself in the client\'s playbook and current editorial context, writes the variations, builds the Canva design, the Drive folder, the Notion concept page and the designer brief.',
    stat: { num: '12', label: 'formats, from /confession to /x-but-for-y, all end-to-end' },
    templates: [
      { n: '/because-you-read', d: 'Before/after transformation POV' },
      { n: '/confession', d: 'First-person confession hook' },
      { n: '/if-you', d: '"If you [X], this is for you" callout' },
      { n: '/not-read', d: '3 ironic reasons NOT to read' },
      { n: '/please-stop', d: 'Pattern-interrupt "please stop doing X"' },
      { n: '/read-x', d: '"Read [Newsletter]!" value-prop body' },
      { n: '/secret-expert', d: 'Hook-only insider flex' },
      { n: '/should-i', d: 'Pie-chart poll, "Yes, but in orange"' },
      { n: '/speaking-directly', d: 'Audience callout, direct address' },
      { n: '/they-were-impressed', d: 'Social-proof anecdote POV' },
      { n: '/wish-i-knew', d: 'First-person regret testimonial' },
      { n: '/x-but-for-y', d: '"[Famous X], but for [Y audience]"' },
    ],
    templatesImg: '/tooling/kickstart-folder.png',
    templatesCap: 'The Kickstart templates folder in Canva: every master designed once, fonts and layouts locked. The skills duplicate from here; the originals never get touched.',
    walkthrough: [
      {
        icon: '🖼️',
        h: 'Inside /if-you: the master is ready',
        d: 'Layout, fonts and safe zones designed once in Canva. The skill duplicates it for each new DCT. Start it however you want: "/if-you-template AMO" is enough. Or steer it: my real first prompt handed it a winning ad and asked for more variations of that copy.',
        img: '/tooling/ifyou-master.png',
        imgCap: 'The If You master in Canva',
      },
      {
        icon: '🧠',
        h: 'It grounds itself before writing',
        d: 'Detects the next DCT number, reads the client\'s playbook, don\'ts and current editorial context, then drafts.',
        img: '/tooling/ifyou-prompt.png',
        imgCap: 'The actual one-line prompt that started the run',
      },
      {
        icon: '📝',
        h: 'Minutes later: 5 variations, each with an angle map',
        d: 'Recognition, identity, behavior: every qualifier prequalifies a real operator so juniors and hobbyists scroll past. Variations cite the current articles they come from, and the client\'s don\'ts are honored automatically: no em dash, no job-level disqualifier, no "legacy media". Then it ends with a question, not an action: "Approve, or tweak any line before I push to Canva?"',
        img: '/tooling/ifyou-copy.png',
        imgCap: 'DCT_115/116 AMO If You: 5 qualifier variations, cooked in 2m 41s',
      },
      {
        icon: '🚢',
        h: 'One "approved" later: built',
        d: 'The final creative in Canva (one page per approved variation, on the client master), the Drive folder, the Notion concept page and the designer brief, already linked together. The only human touches left: confirm the brand background, approve the final, and it exports the PNGs to Drive.',
        img: '/tooling/ifyou-canva.png',
        imgCap: 'DCT_116 in Canva: 4 pages, one per approved variation',
      },
      {
        icon: '🔗',
        h: 'The full handoff',
        d: 'Canva, Drive folder, Notion concept page, designer brief. Nothing to copy-paste, nothing to rename, nothing forgotten.',
        img: '/tooling/ifyou-handoff.png',
        imgCap: 'Everything linked: the complete handoff',
      },
    ],
    rules: [
      'Detect the next DCT number automatically (per-client sequence, never shared across brands by mistake).',
      'Read the template reference in full before generating: it holds the grammar, word caps and locked Canva values.',
      'Ground every line in fresh editorial context and real audience language.',
      'Enforce the client\'s Don\'ts as hard stops; export to Drive only after the GM approves the final creative.',
    ],
  },

  'weekly-report': {
    name: 'Weekly report agents',
    tag: 'Claude Code · 6 report skills',
    accent: 'coral',
    headline: 'Friday reporting went from 2-3 hours to 45 minutes, per client.',
    intro:
      'One reporting skill per client, same pipeline underneath: pull the live numbers, score them against the client\'s targets, write the report in my voice, and post the draft to my review channel. Nothing reaches a client until I\'ve read every number.',
    stat: { num: '2-3h → 45 min', label: 'per client, every single week' },
    walkthrough: [
      {
        icon: '🌐',
        h: 'Claude reads the newsletter dashboard in Chrome',
        d: 'For How to AI it opens the Substack dashboard, pulls total subscribers and total opens, then does the math itself: open rate and email CTR, with week-over-week comparison.',
      },
      {
        icon: '📈',
        h: 'Pipeboard pulls the Meta side',
        d: 'Spend, CPL, leads, CPM and ad CTR per creative, plus the fb.me links so the client can click straight into each ad.',
      },
      {
        icon: '✍️',
        h: 'Writes the report in my voice',
        d: 'Account overview, top 3 creatives, insights, winning angle, next steps, TL;DR. First person, no AI tells.',
      },
      {
        icon: '💬',
        h: 'Posts the draft to my Slack first',
        d: 'The Slack connector posts to my private review channel. I review the draft there; the client channel only gets it after I approve. The gate is part of the skill.',
        img: '/tooling/howtoai-report.png',
        imgCap: 'A real Friday draft in my review channel (client numbers blurred on purpose)',
      },
      {
        icon: '🔁',
        h: 'Same pipeline, 6 clients: only the sources swap',
        d: 'Beehiiv for A Media Operator and ByteByteGo, the TFM dashboard for Insight Links, Hex for Workweek\'s 6 newsletters at once. Write the brief once per client; Friday runs itself.',
      },
    ],
    build: {
      title: "Anyone on the team can build their own: 4 ingredients",
      items: [
        { icon: '📡', t: '1 · Your data sources', d: 'Meta metrics come from Pipeboard (your ad account ID). Newsletter metrics from wherever your client lives: Beehiiv, Substack, or a dashboard Claude reads in Chrome.' },
        { icon: '🎯', t: "2 · Your client's definition of good", d: 'The KPI and its target (CPL under $2.50, CPQL under $20...). This is what turns numbers into "on track" or "needs action".' },
        { icon: '🧾', t: '3 · One great past report', d: 'Paste your best one as the GOOD example, and optionally a bad one to avoid. This does more than any list of rules.' },
        { icon: '💬', t: '4 · Where it goes', d: 'Your review channel first, client channel only after you approve. The gate is part of the skill.' },
      ],
      prompt: "Read the howtoai-weekly-report skill from the tfm-skills\nplugin. That's the simple one. (ww-friday-report is the\nmulti-account complex one.)\n\nBuild my-[client]-weekly-report based on it, with my specifics:\n- Meta via Pipeboard, account [ID]\n- Newsletter metrics via [Beehiiv / Substack / dashboard URL]\n- KPI: [CPL], target [$X]\n- Here's a great past report as the example: [paste]\n- Draft to my review channel, I review first.",
      promptLabel: 'Say this to Claude, word for word',
      note: 'Then iterate, weekly: every time you correct a draft ("don\'t lead with CPM", "the client hates the word fatigue"), tell Claude to bake that correction into the skill. Three Fridays in, it writes the report the way you would.',
    },
    rules: [
      'Primary metric is Subscriber CAC + volume; Verified CAC is secondary.',
      'Always first person, straight to the client: technical, optimistic, never sycophantic or verbose.',
      'Never present today\'s data in a weekly window (7 days ending yesterday).',
      'Always show the draft for approval before anything is sent.',
    ],
  },

  'tfm-plugin': {
    name: 'TFM Skills plugin',
    tag: 'GitHub · Claude Code plugin marketplace',
    accent: 'lilac',
    headline: 'I packaged the whole workflow into a plugin the entire team runs.',
    intro:
      'Every skill that proved useful on my accounts became part of one GitHub-synced Claude Code plugin: tfm-marketplace. Teammates install it with a single command, and every update I push lands in their setup automatically, on Mac and Windows. My personal workflow became the team\'s operating system.',
    stat: { num: '~40 hrs', label: 'saved every month, on my accounts alone' },
    repo: {
      img: '/tooling/tfm-marketplace.png',
      cap: 'The tfm-marketplace repo: 73 commits and counting, 3 contributors, one source of truth',
      install: '/plugin marketplace add github:laysmpaivatfm/tfm-marketplace',
      points: [
        'One repo, one structure: `.claude-plugin` (the marketplace manifest) + `plugins/tfm-skills` (every skill, with its references and playbooks).',
        'Install once, auto-update forever: the plugin syncs from GitHub, so a fix I push at 9am is running on everyone\'s machine by their next session.',
        'Versioned like real software: every skill change is a commit, every rollout is traceable, nothing breaks silently.',
      ],
    },
    deltas: [
      { icon: '📊', t: 'Weekly reports', d: 'AMO, BBG, IL, JS, How to AI, WW Friday', from: '2-3h', to: '45 min' },
      { icon: '📑', t: 'Biweekly docs', d: 'IL, WW and JS Notion meeting pages', from: '1h', to: '30 min' },
      { icon: '🗓️', t: 'Monday update', d: 'Pod update drafted from Slack + reports', from: '30 min', to: '5 min' },
      { icon: '💡', t: 'Ideation', d: 'Concept ideation + 12 creative templates + competitor research', from: '2h', to: '20 min' },
      { icon: '🧰', t: 'Client ops', d: 'Kick-off prep, fill playbook, ads launch check, newsletter analyzer, setup wizard', from: '1-2h', to: '30 min' },
    ],
    walkthrough: [
      {
        icon: '🧱',
        h: 'It started as my personal /skills list',
        d: '43 skills, each automating one thing I needed. And they talk to each other: /competitor-research feeds concept seeds into /concept-ideation, /foreplay pulls the inspiration the templates build from, /ads-launch-check QAs what the concepts ship, /newsletter-analyzer feeds editorial context into every template. One skill at a time, the whole workflow connected itself.',
        img: '/tooling/skills-list.png',
        imgCap: 'My /skills list today. It started with one.',
      },
      {
        icon: '🔒',
        h: 'Locked core, open edges',
        d: 'The plugin syncs from a repo only I push to, which protects everyone\'s setup from accidental breakage. But anyone can fork any skill in one sentence: ask Claude to read the plugin skill and create a personal copy. If their version is better, I ship it to the plugin, with their name on it.',
        prompt: 'Read the concept-ideation skill from the tfm-skills plugin.\nCreate my own personal copy of it as a new skill called\nmy-concept-ideation, keeping everything useful.',
        promptLabel: 'Forking a skill, said to Claude word for word',
      },
      {
        icon: '🤝',
        h: 'Rolled out across the team',
        d: 'Onboarding page in Notion with the one-time install and a tutorial card per skill, plus optional 30-minute setup calls. Adoption and support across Mac and Windows, so every growth manager runs the same, current playbook.',
      },
    ],
    rules: [
      'One source of truth: every GM runs the same, current skills.',
      'GM-agnostic: skills resolve the running GM dynamically, never hard-coded to me.',
      'Ships with reference files (rules, IDs, playbooks) so the AI follows real TFM SOPs.',
      'Auto-syncs from GitHub: no manual copy-paste between teammates.',
    ],
  },
};
