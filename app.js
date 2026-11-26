(() => {
  "use strict";

  const STORAGE_KEY = "color-scheme";
  const LANG_STORAGE_KEY = "site-lang";
  const GH_CACHE_KEY = "gh_repos_stars_v1";
  const GH_CACHE_TTL_MS = 10 * 60 * 1000;
  const GH_API_URL = "https://api.github.com/users/qq136692547-cmyk/repos?per_page=100";

  const I18N = {
    en: {
      page_title_home: "qq136692547-cmyk | Open-Source Hub & Antigravity AI Studio",
      meta_desc_home:
        "Official open-source hub for qq136692547-cmyk: 12 original projects across Antigravity AI & Gemini plugins, local-first developer tools, AI Search (GEO), and commerce analytics.",
      page_title_about: "About & Author Credentials | qq136692547-cmyk Open-Source Hub",
      meta_desc_about:
        "About qq136692547-cmyk Open-Source Lab: maintainer credentials, engineering principles, test verification standards, and public GitHub contact channels.",
      page_title_privacy: "Privacy Policy | qq136692547-cmyk Open-Source Hub",
      meta_desc_privacy:
        "Privacy Policy for qq136692547-cmyk.github.io: zero third-party analytics, local-only theme/language preferences, and read-only GitHub star caching.",
      page_title_terms: "Terms of Use | qq136692547-cmyk Open-Source Hub",
      meta_desc_terms:
        "Terms of Use for qq136692547-cmyk.github.io: open-source software licensing, automated agent crawl rate limits, and third-party trademark disclaimers.",
      lang_toggle_text: "中文",
      lang_toggle_aria: "切换为中文",
      skip_link: "Skip to projects",
      skip_to_content: "Skip to main content",
      brand_aria: "qq136692547-cmyk Open-Source Hub home",
      brand_subtitle: "Open-Source Lab",
      nav_aria: "Primary navigation",
      nav_flagship: "Flagship",
      nav_projects: "Projects (12)",
      nav_case_study: "Case Study",
      nav_faq: "FAQ",
      nav_support: "Support",
      nav_github: "GitHub",
      nav_home: "Hub Home",
      nav_about: "About",
      nav_privacy: "Privacy",
      nav_terms: "Terms",
      theme_to_dark: "Switch to dark theme",
      theme_to_light: "Switch to light theme",
      hero_eyebrow: "Independent Open-Source Engineering",
      hero_title: "Pragmatic AI Plugins, Local-First Tools & Web Utilities",
      hero_lead:
        "A curated catalog of 12 real, source-available projects built for developers, AI workflow engineers, and online operators -- zero telemetry bloat, transparent architecture, and production-tested workflows.",
      hero_stats_aria: "Portfolio summary",
      stat_repos: "Repositories",
      stat_stars: "GitHub Stars",
      stat_domains: "Domains",
      stat_tests: "Flagship Tests",
      hero_cta_primary: "Explore Antigravity AI Studio",
      hero_cta_secondary: "Browse All 12 Projects",
      spotlight_img_alt:
        "Hand-drawn technical showcase banner for Antigravity AI Studio v0.2.2 Pure Gemini 4 cloud offloading architecture",
      spotlight_badges_aria: "Flagship highlights",
      badge_context: "1M Context",
      badge_tests: "269/269 Tests",
      spotlight_desc:
        "Cloud offloading and workflow automation for Google AI Studio via Antigravity's built-in browser subagent. Preserve 100% of your local IDE quota with Pure Gemini 4 (<code>Hydrogen</code>, <code>Argon</code>, <code>Neon</code>, <code>Carbon</code>), enforced <code>Thinking level &gt;= High</code>, and zero local daemons.",
      spotlight_install_label: "One-click install for Antigravity",
      copy_cmd_btn: "Copy",
      copy_cmd_aria: "Copy Antigravity AI Studio install command",
      spotlight_repo_btn: "View on GitHub",
      spotlight_docs_btn: "Read Documentation",
      catalog_eyebrow: "Full Repository Index",
      catalog_title: "All 12 Open-Source Projects",
      search_label: "Search projects by name, stack, or keyword",
      search_placeholder: "Filter by keyword, stack, or tool...",
      filter_bar_aria: "Filter projects by category",
      filter_all: "All (12)",
      filter_ai: "AI & Gemini Plugins",
      filter_dev: "Local-First Tools",
      filter_geo: "AI Search (GEO)",
      filter_commerce: "Commerce & Finance",
      cat_ai: "AI & Gemini Plugins",
      cat_dev: "Local-First Tools",
      cat_geo: "AI Search (GEO)",
      cat_commerce: "Commerce & Finance",
      badge_flagship: "Flagship",
      stars_aria: "GitHub stars",
      action_source: "GitHub ->",
      action_live_site: "Live Site",
      action_live_demo: "Live Demo",
      action_chrome_ext: "Chrome Ext",
      card_flow_sub: "Google Flow Filmmaking & Veo 3.1 Plugin",
      card_flow_desc:
        "Production-grade AI filmmaking & multimodal generation plugin for Google Flow. Fail-Closed Credit Sniffer, Veo 3.1 & Omni 1.2 5-slot grammar, and 60-credit pool ceiling.",
      card_flow_note: "v0.3.2 · 38/38 Tests",
      card_01_sub: "Pure Gemini 4 Cloud Offloading Plugin",
      card_01_desc:
        "Cloud offloading and workflow automation for Google AI Studio via Antigravity browser subagent. Preserve local IDE quota with Pure Gemini 4 (1M context, Thinking High+).",
      card_01_note: "v0.2.2 · 269/269 Tests",
      card_02_sub: "Multimodal MCP Media Plugin",
      card_02_desc:
        "MCP tool plugin for Magpie exposing Nano Banana 2.1, Gemini Files API, and 3.8 TTS.",
      card_02_note: "MCP Multimodal",
      card_03_sub: "Official API-Key Model Provider",
      card_03_desc:
        "Official API-key Google AI Studio provider plugin for Magpie and OpenCode workflows.",
      card_03_note: "Provider Adapter",
      card_04_sub: "Real-Time Search Grounding Plugin",
      card_04_desc:
        "Web search API plugin for Magpie powered by Google Gemini Search Grounding.",
      card_04_note: "Search Grounding",
      card_05_sub: "Offline-First AI Developer Scratchpad",
      card_05_desc:
        "Blazing-fast offline-first AI scratchpad for developers with a 100% local SQLite vault and native DeepSeek integration.",
      card_05_note: "Desktop Vault",
      card_06_sub: "Local-First Chrome Bookmark Auditor",
      card_06_desc:
        "100% local-first Chrome MV3 extension eliminating dead bookmarks with Dual-Stage DoH diagnostics, 16 Tech Titans clustering, and atomic undo.",
      card_06_note: "Chrome MV3",
      card_07_sub: "Zero-Tracking Client-Side Dev Utilities",
      card_07_desc:
        "Free client-side developer tools (UUID, Base64, JSON, JWT, hashes, regex, cron, timezone and 13 more) with zero tracking.",
      card_07_note: "21 Web Utilities",
      card_08_sub: "GEO Audit Suite, Chrome Extension & Playbook",
      card_08_desc:
        "All-in-one GEO/AEO audit platform (11 dimensions, 85 checks) with Chrome Extension v1.9, CLI, MCP server, and open GEO handbook.",
      card_08_note: "v1.9 · 85 Checks",
      card_10_sub: "TikTok Shop Seller Fee & Profit Suite",
      card_10_desc:
        "Free TikTok Shop seller suite featuring fee calculator, profit calculator, and Amazon vs TikTok Shop comparison.",
      card_10_note: "Seller Calculator",
      card_11_sub: "Amazon FBA Fee & ROI Calculator",
      card_11_desc:
        "Free Amazon FBA calculator and seller tools for fee breakdowns, profit margins, and ROI analysis.",
      card_11_note: "Margin & ROI",
      card_12_sub: "AI Equity Market Review & Analytics",
      card_12_desc:
        "AI-powered equity market review and daily trading analytics web application.",
      card_12_note: "Market Analytics",
      empty_text: "No projects matched your current filter or search query.",
      empty_reset: "Reset Filters",
      cmp_eyebrow: "Architecture Matrix",
      cmp_title: "Dual-Flagship & Core Tooling Comparison",
      cmp_lead:
        "Side-by-side comparison of flagship Antigravity plugins, GEO auditing, and local-first utilities across test coverage, quota boundaries, and privacy model.",
      cmp_caption: "Verified specifications for flagship repositories and primary local-first utilities",
      cmp_col_project: "Project",
      cmp_col_stack: "Stack",
      cmp_col_scope: "Primary Scope",
      cmp_col_tests: "Verification",
      cmp_col_quota: "Quota & Privacy",
      cmp_r1_stack: "Python / Browser Subagent",
      cmp_r1_scope: "Pure Gemini 4 (1M context, Thinking High+) cloud offloading in Google AI Studio",
      cmp_r1_tests: "v0.2.2 · 269/269 tests passing",
      cmp_r1_quota: "0% local IDE quota spend; 15-30s pacing & zero-retry verify gate",
      cmp_r2_stack: "Python / Google Flow",
      cmp_r2_scope: "Storyboards, Nano Banana 2.1 Ingredients, Veo 3.1 & Omni 1.2 video shots",
      cmp_r2_tests: "v0.3.2 · 38/38 tests passing",
      cmp_r2_quota: "Fail-Closed Credit Sniffer; 60-credit ceiling & 120-credit session cap",
      cmp_r3_stack: "JS / Chrome MV3 / CLI / MCP",
      cmp_r3_scope: "GEO/AEO auditing across AI crawlability, llms.txt, schema, and E-E-A-T",
      cmp_r3_tests: "v1.9 · 85+ checks across 11 dimensions",
      cmp_r3_quota: "100% browser-side single audits; MIT code & zero tracking",
      cmp_r4_stack: "Rust / Tauri / SQLite",
      cmp_r4_scope: "Offline-first developer scratchpad with optional DeepSeek workflow hooks",
      cmp_r4_tests: "Local SQLite ACID vault",
      cmp_r4_quota: "100% on-device data custody; zero cloud lock-in",
      cs_eyebrow: "Technical Overview & Real-World Example",
      cs_title: "GEO Benchmark Case Study: Static Hub Optimization",
      byline_author: "By qq136692547-cmyk",
      byline_published: "Published April 10, 2026",
      byline_updated: 'Last updated <time datetime="2026-11-26">November 26, 2026</time>',
      byline_proof: "Verified via GitHub stars, Chrome Web Store user reviews & 307/307 flagship unit tests",
      cs_prose:
        'Generative Engine Optimization (GEO) benchmark analysis demonstrates that clean visual UI alone does not ensure citation by modern AI search systems; indeed, our baseline audit of this static hub on <a href="https://geoscore.help/" target="_blank" rel="noopener noreferrer">GeoScore</a> scored 53 out of 100 (53.0%) primarily due to missing machine-readable discovery endpoints and unflattened JSON-LD entities. Therefore, we refactored the showcase around verifiable open-source benchmarks: <code>antigravity-aistudio</code> v0.2.2 achieves 100% pass rates across 269 unit tests while offloading 4,000 to 1,000,000 token workflows to Pure Gemini 4, whereas <code>antigravity-flow</code> v0.3.2 passes 38/38 tests and enforces a strict 60-credit ceiling over shared Google One AI pools. Moreover, <code>geo-score</code> v1.9 evaluates 85+ checks across 11 visibility dimensions with 0% tracking overhead, compared to proprietary SaaS auditors that require paid subscriptions. Additionally, pairing static HTML with top-level Organization, Person, Article, FAQPage, and HowTo schemas plus explicit crawler directives makes documentation immediately parseable by retrieval agents. However, automated browser subagent workflows carry a practical trade-off and limitation: it should be noted that remote web UI selectors depend on upstream platform stability, and Cloudflare SVG badge caches refresh on a 6-hour (<code>s-maxage=21600</code>) edge cycle rather than instantaneously.',
      cs_quote:
        '“GEO means structuring public documentation with explicit AI crawler access, a curated llms.txt index, standalone JSON-LD entity schemas, and verifiable E-E-A-T trust pages so retrieval engines can cite primary engineering facts accurately.”',
      cs_quote_cite:
        'Principle summarized from <cite><a href="https://geoscore.help/" target="_blank" rel="noopener noreferrer">GeoScore GEO Audit Methodology</a></cite> &amp; <a href="about.html">About qq136692547-cmyk</a>',
      qs_eyebrow: "Step-by-Step Workflow",
      qs_title: "3-Step Quickstart for Antigravity & GEO Verification",
      qs_step1_badge: "Step 1",
      qs_step1_title: "Install Flagship Plugins",
      qs_step1_desc:
        "Install <code>antigravity-aistudio</code> and <code>antigravity-flow</code> directly into Antigravity without background daemons.",
      qs_step2_badge: "Step 2",
      qs_step2_title: "Configure Pure Gemini 4 & Credit Guards",
      qs_step2_desc:
        "Route 4K-1M token reasoning to Pure Gemini 4 (Thinking High+) and keep paid Veo 3.1 / Omni 1.2 renders in checkpoint mode under the 60-credit ceiling.",
      qs_step3_badge: "Step 3",
      qs_step3_title: "Run a GEO Readiness Scan",
      qs_step3_desc:
        "Verify <code>robots.txt</code>, <code>/llms.txt</code>, JSON-LD blocks, and discovery endpoints with <code>geo-score</code> CLI or web scanner.",
      faq_eyebrow: "Questions & Answers",
      faq_title: "Frequently Asked Questions",
      faq_toggle: "View technical answer",
      faq_q1: "What is qq136692547-cmyk Open-Source Hub?",
      faq_a1:
        "qq136692547-cmyk Open-Source Hub is the canonical static portfolio and technical documentation index for 12 source-available projects maintained by qq136692547-cmyk across four domains: Antigravity AI and Gemini workflow plugins, local-first developer utilities, Generative Engine Optimization (GEO) auditing via geo-score, and e-commerce/market analytics. The hub itself runs with zero runtime dependencies and zero tracking telemetry.",
      faq_q2: "How does antigravity-aistudio preserve local IDE quota?",
      faq_a2:
        "antigravity-aistudio v0.2.2 routes heavy long-context reasoning (4,000 to 1,000,000 tokens), prompt tuning, and independent diff audits to Google AI Studio via Antigravity's built-in browser subagent using Pure Gemini 4 models (Hydrogen, Argon, Neon, Carbon) with Thinking level set to High or above. Local file edits, git commands, and test execution stay on the local workstation, avoiding redundant local desktop quota consumption.",
      faq_q3: "How does antigravity-flow protect shared Google One AI credits?",
      faq_a3:
        "antigravity-flow v0.3.2 enforces a Fail-Closed Live Credit Sniffer that parses the visible credit indicator before clicking Start generation and halts immediately if the readout is ambiguous or exceeds safety thresholds. Static Nano Banana 2.1 images cost 0 credits and run automatically within a 12-dispatch session soft cap, whereas paid Veo 3.1 or Omni 1.2 video shots pause in checkpoint mode and enforce a 60-credit single-action ceiling and 120-credit session limit.",
      faq_q4: "What is the difference between antigravity-aistudio, antigravity-flow, and geo-score?",
      faq_a4:
        "antigravity-aistudio focuses on cloud text, code, and multimodal reasoning offload in Google AI Studio; antigravity-flow orchestrates storyboards, visual Ingredients, and Veo 3.1 / Omni 1.2 video generation in Google Flow; and geo-score is a standalone Generative Engine Optimization audit suite (web app, Chrome MV3 extension v1.9, CLI, and MCP server) that evaluates 85+ checks across 11 AI search visibility dimensions.",
      faq_q5: "Are these projects free, open source, and safe from telemetry tracking?",
      faq_a5:
        "Yes. All 12 repositories listed on the hub are source-available on GitHub, primarily under the MIT License, and are engineered without hidden tracking pixels, analytics beacons, or invasive telemetry. Local-first utilities such as QuickNote (SQLite), bookmark-health-master (Chrome MV3), and anan-devtools process user data locally on the user's device, and this hub only makes an optional read-only fetch to the public GitHub REST API to refresh repository star counts.",
      disc_eyebrow: "Agent Endpoints & Standards",
      disc_title: "AI Discovery Endpoints & Authoritative References",
      disc_endpoints_h3: "Machine-Readable Discovery Endpoints",
      disc_endpoints_p:
        "Read-only REST and static discovery endpoints require zero authentication. Automated AI crawlers should respect a polite <strong>rate limit</strong> of at most 1 request per 5 seconds (<code>X-RateLimit</code> guidance: 12 requests/minute).",
      ep_llms: "Curated LLM Markdown index (<200 lines)",
      ep_aitxt: "AI crawler permissions, attribution & licensing",
      ep_summary: "Structured JSON catalog for all 12 projects",
      ep_faq: "Structured JSON Q&A dataset",
      ep_robots: "Explicit allow rules for 20 Tier 1-3 AI crawlers",
      ep_sitemap: "Canonical XML page index",
      disc_refs_h3: "Authoritative References & Further Reading",
      disc_refs_p:
        "Primary web standards, security specifications, and GEO evaluation references governing the architecture of this hub:",
      ref_nist: "Federal web security & cryptographic standards reference",
      ref_w3c: "CSP directive specification for script & resource isolation",
      ref_mdn: "Practical browser CSP enforcement documentation",
      ref_schema: "Structured JSON-LD entity definitions",
      ref_llmstxt: "Markdown guidance convention for language models",
      ref_geoscore: "11-dimension AI visibility scanner & live audit suite",
      footer_heading: "Support Open-Source Work",
      footer_desc:
        "Every tool listed here is open source and built without invasive analytics. If <code>antigravity-aistudio</code> or any utility saved you time or quota, consider starring the repository or buying a coffee.",
      footer_gh_profile: "GitHub Profile",
      footer_sponsor_link: "antigravity-aistudio Sponsor & QR Codes",
      footer_about_link: "About & Contact",
      footer_privacy_link: "Privacy Policy",
      footer_terms_link: "Terms of Use",
      support_usdt_label: "USDT (BNB Smart Chain / BEP-20)",
      copy_addr_btn: "Copy Address",
      copy_addr_aria: "Copy USDT BNB Smart Chain wallet address",
      footer_bottom:
        "&copy; 2026 qq136692547-cmyk. Built with zero dependencies, native CSS <code>light-dark()</code>, subgrid, and container queries.",
      copy_copied: "Copied!",
      copy_failed: "Copy failed",
      usdt_copied_status: "USDT (BEP-20) address copied to clipboard.",
      results_status: (visible, total) => `Showing ${visible} of ${total} open-source projects.`,
      about_eyebrow: "Maintainer & Trust Profile",
      about_title: "About qq136692547-cmyk Open-Source Lab",
      about_intro:
        "qq136692547-cmyk Open-Source Lab is an independent engineering initiative focused on pragmatic AI workflow plugins, local-first desktop and browser utilities, Generative Engine Optimization (GEO) tooling, and transparent e-commerce calculators. All 12 featured projects are published as source-available repositories on GitHub without opaque binaries or hidden analytics.",
      about_h2_principles: "Engineering & Verification Principles",
      about_li_1:
        "Fail-closed safety boundaries: flagship plugins (antigravity-aistudio v0.2.2 with 269/269 passing tests and antigravity-flow v0.3.2 with 38/38 passing tests) enforce strict zero-retry gates and explicit credit ceilings before executing remote actions.",
      about_li_2:
        "Local-first data custody: developer tools such as QuickNote (SQLite), bookmark-health-master (Chrome MV3), and anan-devtools keep user data on-device by default.",
      about_li_3:
        "Open benchmarking: geo-score v1.9 evaluates 85+ checks across 11 AI search dimensions transparently in the browser, CLI, and MCP server.",
      about_h2_contact: "Public Contact & Verification Channels",
      about_contact_p:
        "For technical questions, security disclosures, or repository feedback, open an issue or review commit history through the verified public channels below:",
      about_link_gh: "GitHub Profile & Repositories (github.com/qq136692547-cmyk)",
      about_link_issues: "antigravity-aistudio Issue Tracker",
      about_link_geoscore: "GeoScore Live Scanner (geoscore.help)",
      about_link_home: "Return to 12-Project Open-Source Hub",
      privacy_eyebrow: "Data Minimization & Zero Telemetry",
      privacy_title: "Privacy Policy",
      privacy_intro:
        "This static website (qq136692547-cmyk.github.io) is designed on a strict zero-telemetry architecture. We do not collect personal profiles, set advertising cookies, run behavioral analytics scripts, or sell visitor metadata.",
      privacy_h2_storage: "Browser Storage Usage",
      privacy_li_1:
        'localStorage keys ("color-scheme" and "site-lang") remain exclusively on your browser to remember light/dark mode and English/Chinese display preferences.',
      privacy_li_2:
        'sessionStorage key ("gh_repos_stars_v1") caches public repository star counts for 10 minutes to minimize redundant network calls.',
      privacy_h2_network: "Third-Party Network Requests",
      privacy_li_3:
        "GitHub Pages hosting (GitHub, Inc.) delivers static HTML, CSS, JavaScript, JSON, and image assets under standard GitHub Pages infrastructure logging.",
      privacy_li_4:
        "On the homepage, client-side JavaScript performs an optional read-only GET request to api.github.com to refresh public repository star counts, governed by a strict Content Security Policy.",
      privacy_li_5:
        "External project links (such as GitHub repositories, live demos, or geoscore.help) operate under their respective privacy policies once you navigate away from this domain.",
      terms_eyebrow: "Licensing & Responsible Use",
      terms_title: "Terms of Use",
      terms_intro:
        "By accessing qq136692547-cmyk.github.io or using the linked open-source repositories, you agree to observe each repository's published license and polite automated access guidelines.",
      terms_h2_license: "Open-Source Licensing & Warranty Disclaimer",
      terms_li_1:
        "Software repositories linked from this hub are provided under their respective open-source licenses (primarily MIT), and hub documentation is available under CC BY-SA 4.0 unless stated otherwise.",
      terms_li_2:
        'All tools, calculators, and workflow plugins are provided "as is" without warranty of any kind; financial, equity analytics, and commerce margin tools are informational utilities and not investment or legal advice.',
      terms_h2_agents: "Automated Crawlers & Third-Party Trademarks",
      terms_li_3:
        "Automated AI crawlers and agents are welcome to read /llms.txt, /.well-known/ai.txt, /ai/summary.json, and /ai/faq.json at a rate limit of no more than 1 request per 5 seconds with canonical attribution.",
      terms_li_4:
        "Google AI Studio, Google Flow, Gemini, Veo, Chrome, GitHub, TikTok Shop, and Amazon FBA are trademarks of their respective owners; this independent open-source hub is not officially affiliated with or endorsed by those vendors.",
    },
    zh: {
      page_title_home: "qq136692547-cmyk | 开源导航官网 & Antigravity AI Studio",
      meta_desc_home:
        "qq136692547-cmyk 官方开源项目导航：涵盖 Antigravity AI 与 Gemini 插件、本地优先开发者工具、AI 搜索 (GEO) 与跨境电商/金融分析等 12 个原创开源项目。",
      page_title_about: "关于与作者资质 | qq136692547-cmyk 开源实验室",
      meta_desc_about:
        "关于 qq136692547-cmyk 开源实验室：维护者工程原则、测试验证标准与公开 GitHub 联系渠道。",
      page_title_privacy: "隐私政策 | qq136692547-cmyk 开源实验室",
      meta_desc_privacy:
        "qq136692547-cmyk.github.io 隐私政策：零第三方追踪埋点、纯本地主题/语言偏好存储与只读 GitHub Star 同步说明。",
      page_title_terms: "使用条款 | qq136692547-cmyk 开源实验室",
      meta_desc_terms:
        "qq136692547-cmyk.github.io 使用条款：开源许可协议范围、自动化抓取速率限制与第三方商标声明。",
      lang_toggle_text: "EN",
      lang_toggle_aria: "Switch to English",
      skip_link: "跳过导航直达项目",
      skip_to_content: "跳过导航直达正文",
      brand_aria: "qq136692547-cmyk 开源实验室首页",
      brand_subtitle: "开源实验室",
      nav_aria: "主导航",
      nav_flagship: "旗舰项目",
      nav_projects: "开源矩阵 (12)",
      nav_case_study: "GEO 实证",
      nav_faq: "常见问答",
      nav_support: "支持作者",
      nav_github: "GitHub 主页",
      nav_home: "返回首页",
      nav_about: "关于",
      nav_privacy: "隐私",
      nav_terms: "条款",
      theme_to_dark: "切换为深色主题",
      theme_to_light: "切换为浅色主题",
      hero_eyebrow: "独立开源工程实验室",
      hero_title: "务实的 AI 插件、本地优先工具与 Web 效率套件",
      hero_lead:
        "精选 12 个真实开源项目，面向开发者、AI 工作流工程师与跨境电商/运营人员打造——零遥测冗余、架构透明、经过生产级实测验证。",
      hero_stats_aria: "开源项目核心指标",
      stat_repos: "开源仓库",
      stat_stars: "GitHub Stars",
      stat_domains: "技术领域",
      stat_tests: "旗舰测试通过率",
      hero_cta_primary: "探索 Antigravity AI Studio",
      hero_cta_secondary: "浏览全部 12 个项目",
      spotlight_img_alt:
        "Antigravity AI Studio v0.2.2 Pure Gemini 4 云端卸载架构手绘技术展示横幅",
      spotlight_badges_aria: "旗舰项目亮点",
      badge_context: "1M 上下文",
      badge_tests: "269/269 测试通过",
      spotlight_desc:
        "通过 Antigravity 内置浏览器子智能体，把长上下文推理与 Prompt 调优自动卸载到 Google AI Studio 纯 Gemini 4（<code>Hydrogen</code>、<code>Argon</code>、<code>Neon</code>、<code>Carbon</code>，1M 上下文、强制 <code>Thinking High+</code>），零本地守护进程，零消耗本地 IDE 配额。",
      spotlight_install_label: "一键安装到 Antigravity",
      copy_cmd_btn: "复制",
      copy_cmd_aria: "复制 Antigravity AI Studio 安装命令",
      spotlight_repo_btn: "查看 GitHub 仓库",
      spotlight_docs_btn: "阅读项目文档",
      catalog_eyebrow: "完整开源项目索引",
      catalog_title: "全部 12 个开源项目",
      search_label: "按名称、技术栈或功能关键词搜索项目",
      search_placeholder: "按名称、技术栈或功能搜索项目...",
      filter_bar_aria: "按技术领域筛选项目",
      filter_all: "全部 (12)",
      filter_ai: "AI 与 Gemini 插件",
      filter_dev: "本地优先工具",
      filter_geo: "AI 搜索 (GEO)",
      filter_commerce: "电商与金融",
      cat_ai: "AI 与 Gemini 插件",
      cat_dev: "本地优先工具",
      cat_geo: "AI 搜索 (GEO)",
      cat_commerce: "电商与金融",
      badge_flagship: "旗舰",
      stars_aria: "GitHub Star 数",
      action_source: "查看源码 ->",
      action_live_site: "在线体验",
      action_live_demo: "在线体验",
      action_chrome_ext: "Chrome 扩展",
      card_flow_sub: "Google Flow 影视工业级多模态生成插件",
      card_flow_desc:
        "专为 Google Flow (flow.google.com) 打造的工业级影视分镜与多模态生成引擎。内置防穿透实时积分嗅探器、60 积分反重力额度保护硬顶、Omni 1.2 旗舰运镜语法与 4 档分镜下载。",
      card_flow_note: "v0.3.2 · 38/38 测试全通",
      card_01_sub: "Google AI Studio 云端推理卸载插件",
      card_01_desc:
        "通过 Antigravity 内置浏览器子智能体，将重度推理与百万字文档分析卸载至 Google AI Studio 纯 Gemini 4（1M 上下文，Thinking High+），零消耗本地 IDE 配额。",
      card_01_note: "v0.2.2 · 269/269 测试通过",
      card_02_sub: "Magpie 多模态 MCP 媒体插件",
      card_02_desc:
        "面向 Magpie 的 MCP 多媒体工具插件，原生暴露 Nano Banana 2.1 生图、Gemini Files API 与 3.8 TTS 语音合成能力。",
      card_02_note: "MCP 多模态工具",
      card_03_sub: "官方 API Key 模型接入插件",
      card_03_desc:
        "适用于 Magpie 与 OpenCode 工作流的官方 API Key 版 Google AI Studio 模型接入插件。",
      card_03_note: "模型接入适配器",
      card_04_sub: "Gemini 实时联网搜索插件",
      card_04_desc:
        "基于 Google Gemini Search Grounding 驱动的 Magpie 实时联网搜索 API 插件。",
      card_04_note: "实时联网搜索",
      card_05_sub: "离线优先 AI 开发者桌面便签",
      card_05_desc:
        "基于 Rust + Tauri 打造的极速离线优先 AI 开发者便签，内置 100% 本地 SQLite 数据保险库与原生 DeepSeek 集成。",
      card_05_note: "本地桌面保险库",
      card_06_sub: "Chrome MV3 本地书签体检扩展",
      card_06_desc:
        "100% 本地优先的 Chrome MV3 书签体检扩展，支持双阶段 DoH 死链诊断、16 大科技站群聚类与原子级一键撤销。",
      card_06_note: "Chrome MV3 扩展",
      card_07_sub: "纯前端零追踪开发者工具箱",
      card_07_desc:
        "免费纯前端在线开发者工具箱（UUID、Base64、JSON、JWT、哈希、正则、Cron、时区等 20+ 工具），零追踪完全开源。",
      card_07_note: "21 款在线工具",
      card_08_sub: "GEO 智能诊断套件、Chrome 扩展与实战手册",
      card_08_desc:
        "一站式生成式引擎优化（GEO/AEO）审计平台（11 维度 85 项检测），集成 Chrome 扩展 v1.9、终端 CLI、MCP 服务与开源实战手册。",
      card_08_note: "v1.9 · 85 项检测",
      card_10_sub: "TikTok Shop 卖家费用与利润测算",
      card_10_desc:
        "免费 TikTok Shop 卖家工具集，包含佣金/费用计算器、利润测算及 Amazon 与 TikTok Shop 对比分析。",
      card_10_note: "卖家测算套件",
      card_11_sub: "Amazon FBA 费用与 ROI 计算器",
      card_11_desc:
        "免费 Amazon FBA 费用与利润计算器，清晰拆解各项成本、毛利率与投资回报率（ROI）。",
      card_11_note: "利润与 ROI 测算",
      card_12_sub: "爱看盘 · AI 股市智能复盘",
      card_12_desc:
        "爱看盘——AI 驱动的 A 股市场智能复盘与日常交易分析 Web 应用。",
      card_12_note: "AI 盘后复盘",
      empty_text: "没有找到匹配当前筛选条件或关键词的开源项目。",
      empty_reset: "重置筛选条件",
      cmp_eyebrow: "架构对比矩阵",
      cmp_title: "双旗舰插件与核心工具对比",
      cmp_lead:
        "从技术栈、核心定位、自动化测试覆盖率及配额/隐私边界四个维度，对比主力 Antigravity 插件、GEO 审计套件与本地优先工具。",
      cmp_caption: "旗舰开源仓库与主力本地工具的实测规格对比",
      cmp_col_project: "项目",
      cmp_col_stack: "技术栈",
      cmp_col_scope: "核心定位",
      cmp_col_tests: "测试验证",
      cmp_col_quota: "额度与隐私",
      cmp_r1_stack: "Python / 浏览器子智能体",
      cmp_r1_scope: "Google AI Studio 纯 Gemini 4（1M 上下文、Thinking High+）云端卸载",
      cmp_r1_tests: "v0.2.2 · 269/269 测试全通",
      cmp_r1_quota: "0% 本地 IDE 配额损耗；15-30s 随机冷却与零重试核验熔断",
      cmp_r2_stack: "Python / Google Flow",
      cmp_r2_scope: "影视分镜、Nano Banana 2.1 资产与 Veo 3.1 / Omni 1.2 视频生成",
      cmp_r2_tests: "v0.3.2 · 38/38 测试全通",
      cmp_r2_quota: "防穿透积分嗅探器；60 积分单次硬顶与 120 积分会话上限",
      cmp_r3_stack: "JS / Chrome MV3 / CLI / MCP",
      cmp_r3_scope: "面向 AI 抓取、llms.txt、结构化 Schema 与 E-E-A-T 的 GEO/AEO 审计",
      cmp_r3_tests: "v1.9 · 11 维度 85+ 项检测",
      cmp_r3_quota: "100% 浏览器端单页免费审计；MIT 开源且零埋点",
      cmp_r4_stack: "Rust / Tauri / SQLite",
      cmp_r4_scope: "离线优先开发者桌面便签，支持按需调用 DeepSeek",
      cmp_r4_tests: "本地 SQLite ACID 保险库",
      cmp_r4_quota: "100% 本地数据托管，无任何云端锁定",
      cs_eyebrow: "技术概览与真实案例",
      cs_title: "GEO 基准实证案例：静态开源主页全栈优化",
      byline_author: "作者：qq136692547-cmyk",
      byline_published: "发布于 2026 年 4 月 10 日",
      byline_updated: '最近更新 <time datetime="2026-11-26">2026-11-26</time>',
      byline_proof: "已通过 GitHub Star、Chrome 商店用户评价及 307/307 旗舰单元测试验证",
      cs_prose:
        '生成式引擎优化（GEO）的基准测试分析表明，仅靠简洁的前端视觉界面并不足以让 AI 搜索引擎稳定引用你的站点；事实上，本开源导航站在 <a href="https://geoscore.help/" target="_blank" rel="noopener noreferrer">GeoScore</a> 上的基线审计得分为 53 / 100（53.0%），核心短板在于缺少机器可读的发现端点以及独立顶层的 JSON-LD 实体描述。因此，我们围绕可验证的开源工程基准对主页进行了系统性重构：<code>antigravity-aistudio</code> v0.2.2 在 269 项单元测试中保持 100% 通过率，并将 4,000 至 1,000,000 Token 的重度推理任务卸载至纯 Gemini 4；与此同时，<code>antigravity-flow</code> v0.3.2 通过了全部 38 项测试，并对共享 Google One AI 积分池强制执行 60 积分单次硬顶保护。此外，<code>geo-score</code> v1.9 以 0% 遥测追踪开销在浏览器端执行 11 个维度 85 项透明检测，显著优于依赖付费订阅的闭源工具。同时，在静态 HTML 中显式配置顶层 Organization、Person、Article、FAQPage 与 HowTo 结构化数据以及 20 个 AI 爬虫放行策略后，检索智能体可以直接解析所有工程事实。然而，这类浏览器子智能体工作流也存在客观的权衡与局限性：需要注意的是，自动化交互依赖上游网页界面稳定度，而且 Cloudflare 对外暴露的评分徽章边缘缓存周期为 6 小时（<code>s-maxage=21600</code>），代码推送后不会在徽章图像上立即生效，这一点在实际运维与社区反馈中均需如实说明。',
      cs_quote:
        "“GEO 的核心在于为公开技术文档提供清晰的 AI 爬虫放行策略、规范化的 llms.txt 索引、独立顶层 JSON-LD 实体以及可验证的 E-E-A-T 信任页面，从而让生成式检索系统准确引用一手工程事实。”",
      cs_quote_cite:
        '方法论摘自 <cite><a href="https://geoscore.help/" target="_blank" rel="noopener noreferrer">GeoScore GEO 审计方法论</a></cite> 与 <a href="about.html">关于 qq136692547-cmyk</a>',
      qs_eyebrow: "三步上手流程",
      qs_title: "Antigravity 插件与 GEO 验收 3 步快速指南",
      qs_step1_badge: "第 1 步",
      qs_step1_title: "安装旗舰开源插件",
      qs_step1_desc:
        "直接将 <code>antigravity-aistudio</code> 与 <code>antigravity-flow</code> 安装到 Antigravity，无需后台守护进程。",
      qs_step2_badge: "第 2 步",
      qs_step2_title: "配置纯 Gemini 4 与积分防线",
      qs_step2_desc:
        "将 4K-1M Token 重度推理卸载至纯 Gemini 4（Thinking High+），并让付费 Veo 3.1 / Omni 1.2 渲染保持在 60 积分检查点上限内。",
      qs_step3_badge: "第 3 步",
      qs_step3_title: "执行 GEO AI 可见度体检",
      qs_step3_desc:
        "通过 <code>geo-score</code> CLI 或在线扫描器校验 <code>robots.txt</code>、<code>/llms.txt</code>、JSON-LD 块与发现端点。",
      faq_eyebrow: "常见技术问答",
      faq_title: "常见问题与解答",
      faq_toggle: "展开查看技术解答",
      faq_q1: "什么是 qq136692547-cmyk 开源导航官网？",
      faq_a1:
        "qq136692547-cmyk 开源导航官网是作者维护的 12 个原创开源项目的权威静态索引与技术文档中心，覆盖 Antigravity AI 与 Gemini 工作流插件、本地优先开发者工具、geo-score 生成式引擎优化（GEO）审计套件以及电商/金融分析工具。站点本身零运行时依赖、零追踪埋点。",
      faq_q2: "antigravity-aistudio 如何实现零消耗本地 IDE 配额？",
      faq_a2:
        "antigravity-aistudio v0.2.2 通过 Antigravity 内置浏览器子智能体，将 4,000 至 1,000,000 Token 的长上下文推理、Prompt 调优与独立 Diff 终审卸载至 Google AI Studio 纯 Gemini 4（Hydrogen、Argon、Neon、Carbon，强制 Thinking High+），而本地文件改写、Git 操作与单元测试留在本地执行。",
      faq_q3: "antigravity-flow 如何保护共享 Google One AI 积分池？",
      faq_a3:
        "antigravity-flow v0.3.2 内置防穿透实时积分嗅探器，在点击生成前严格校验可见积分提示；0 积分静态 Nano Banana 2.1 生图在单会话 12 次软上限内自动执行，而付费 Veo 3.1 或 Omni 1.2 视频任务默认进入检查点确认模式，受单次 60 积分硬顶与单会话 120 积分上限约束。",
      faq_q4: "antigravity-aistudio、antigravity-flow 与 geo-score 的定位有何区别？",
      faq_a4:
        "antigravity-aistudio 专注于 Google AI Studio 中的云端文本、代码与多模态重度推理卸载；antigravity-flow 专注于 Google Flow 影视分镜、资产管理与 Veo 3.1 / Omni 1.2 视频渲染编排；geo-score 则是独立的 GEO/AEO AI 搜索诊断平台（含 Web 应用、Chrome MV3 扩展 v1.9、CLI 与 MCP 服务），覆盖 11 个维度 85+ 项检测。",
      faq_q5: "这些项目是否免费开源且无任何隐私追踪？",
      faq_a5:
        "是的。本站收录的全部 12 个仓库均在 GitHub 公开源码（主要采用 MIT 协议），绝不含隐藏追踪像素或侵入式埋点。QuickNote（SQLite）、bookmark-health-master（Chrome MV3）和 anan-devtools 等本地优先工具均在用户本地处理数据；本导航站仅向公开的 GitHub REST API 发起一次可选的只读请求以刷新 Star 数量。",
      disc_eyebrow: "AI 智能体接口与权威规范",
      disc_title: "AI 发现端点与权威参考资料",
      disc_endpoints_h3: "机器可读发现端点",
      disc_endpoints_p:
        "以下只读静态发现端点与 REST 资源无需鉴权即可访问。请自动化 AI 爬虫遵守礼貌抓取<strong>速率限制（rate limit）</strong>：每秒不超过 0.2 次请求，即每 5 秒最多 1 次请求（<code>X-RateLimit</code> 建议：12 次/分钟）。",
      ep_llms: "面向大模型的精选 Markdown 站点索引（<200 行）",
      ep_aitxt: "AI 爬虫授权范围、署名规范与开源协议声明",
      ep_summary: "覆盖全部 12 个项目的结构化 JSON 摘要",
      ep_faq: "结构化 JSON 常见问题数据集",
      ep_robots: "显式放行 20 个 Tier 1-3 AI 搜索与模型爬虫",
      ep_sitemap: "规范 XML 站点页面索引",
      disc_refs_h3: "权威参考规范与延伸阅读",
      disc_refs_p: "支撑本站内容安全策略、结构化语义与 GEO 审计实践的公开标准与参考资源：",
      ref_nist: "美国国家标准与技术研究院（NIST）Web 安全与密码学参考",
      ref_w3c: "W3C 内容安全策略（CSP Level 3）官方标准规范",
      ref_mdn: "MDN Web Docs 内容安全策略（CSP）浏览器实践指南",
      ref_schema: "Schema.org 结构化 JSON-LD 实体词汇表",
      ref_llmstxt: "/llms.txt 面向大语言模型的站点摘要规范",
      ref_geoscore: "GeoScore 11 维度 AI 搜索可见度扫描与实时审计平台",
      footer_heading: "支持与赞赏开源工作",
      footer_desc:
        "这里展示的所有工具均完全开源且无侵入式统计埋点。如果 <code>antigravity-aistudio</code> 或任一效率工具为你节省了时间或本地配额，欢迎点亮 Star 或请作者喝杯咖啡。",
      footer_gh_profile: "GitHub 主页",
      footer_sponsor_link: "antigravity-aistudio 赞助与二维码入口",
      footer_about_link: "关于与联系",
      footer_privacy_link: "隐私政策",
      footer_terms_link: "使用条款",
      support_usdt_label: "USDT 赞助地址（BNB Smart Chain / BEP-20）",
      copy_addr_btn: "复制地址",
      copy_addr_aria: "复制 USDT (BNB Smart Chain) 收款地址",
      footer_bottom:
        "&copy; 2026 qq136692547-cmyk。零运行时依赖构建，采用原生 CSS <code>light-dark()</code>、subgrid 与容器查询。",
      copy_copied: "已复制！",
      copy_failed: "复制失败",
      usdt_copied_status: "USDT (BEP-20) 收款地址已复制到剪贴板。",
      results_status: (visible, total) => `当前显示 ${visible} / ${total} 个开源项目。`,
      about_eyebrow: "维护者与信任档案",
      about_title: "关于 qq136692547-cmyk 开源实验室",
      about_intro:
        "qq136692547-cmyk 开源实验室专注于务实的 AI 工作流插件、本地优先桌面与浏览器效率工具、生成式引擎优化（GEO）诊断工具以及透明的跨境电商/金融计算器。收录的全部 12 个项目均在 GitHub 公开源码，绝不捆绑闭源二进制或隐蔽统计埋点。",
      about_h2_principles: "工程原则与验证标准",
      about_li_1:
        "防穿透安全边界：旗舰插件（antigravity-aistudio v0.2.2 含 269/269 项通过测试、antigravity-flow v0.3.2 含 38/38 项通过测试）在远程动作前强制执行零重试核验熔断与积分上限控制。",
      about_li_2:
        "本地优先数据托管：QuickNote（SQLite）、bookmark-health-master（Chrome MV3）与 anan-devtools 默认将用户数据完全保存在本地设备。",
      about_li_3:
        "透明基准评测：geo-score v1.9 在浏览器端、CLI 与 MCP 服务中公开执行 11 个维度 85+ 项 AI 搜索可见度检测。",
      about_h2_contact: "公开联系与核验渠道",
      about_contact_p:
        "如需技术交流、安全反馈或提交功能建议，请通过以下经验证的公开渠道提交 Issue 或查阅提交记录：",
      about_link_gh: "GitHub 个人主页与仓库（github.com/qq136692547-cmyk）",
      about_link_issues: "antigravity-aistudio Issue 反馈入口",
      about_link_geoscore: "GeoScore 在线扫描器（geoscore.help）",
      about_link_home: "返回 12 个开源项目导航首页",
      privacy_eyebrow: "数据最小化与零遥测",
      privacy_title: "隐私政策",
      privacy_intro:
        "本静态网站（qq136692547-cmyk.github.io）严格遵循零遥测架构设计。我们不收集个人档案、不植入广告 Cookie、不运行行为分析脚本，也不出售任何访问者元数据。",
      privacy_h2_storage: "浏览器本地存储说明",
      privacy_li_1:
        "localStorage 中的 \"color-scheme\" 与 \"site-lang\" 键仅保存在您的浏览器本地，用于记住深浅色主题与中英文界面偏好。",
      privacy_li_2:
        "sessionStorage 中的 \"gh_repos_stars_v1\" 键仅缓存公开仓库的 Star 数量 10 分钟，以减少重复网络请求。",
      privacy_h2_network: "第三方网络请求说明",
      privacy_li_3:
        "本站由 GitHub Pages（GitHub, Inc.）托管静态 HTML、CSS、JavaScript、JSON 与图片资源，适用 GitHub Pages 标准基础设施日志规范。",
      privacy_li_4:
        "在首页加载时，前端脚本会在严格的内容安全策略（CSP）约束下向 api.github.com 发起一次可选的只读 GET 请求，用于刷新公开仓库 Star 数。",
      privacy_li_5:
        "当您点击跳转至 GitHub 仓库、在线演示站或 geoscore.help 等外部站点时，将适用目标站点各自的隐私政策。",
      terms_eyebrow: "开源协议与负责任使用",
      terms_title: "使用条款",
      terms_intro:
        "访问 qq136692547-cmyk.github.io 或使用本站链接的开源仓库，即表示您同意遵守各仓库声明的开源许可协议及礼貌自动化访问准则。",
      terms_h2_license: "开源协议与免责声明",
      terms_li_1:
        "本站链接的软件仓库均适用其各自仓库发布的开源许可证（主要为 MIT 协议）；除非另有说明，站点文档采用 CC BY-SA 4.0 协议。",
      terms_li_2:
        "所有工具、计算器与工作流插件均按“现状”提供，不附带任何明示或暗示担保；金融复盘与跨境电商测算工具仅作信息辅助参考，不构成投资或法律建议。",
      terms_h2_agents: "自动化爬虫与第三方商标声明",
      terms_li_3:
        "欢迎各类 AI 爬虫与智能体在不超过每 5 秒 1 次请求的速率限制下抓取 /llms.txt、/.well-known/ai.txt、/ai/summary.json 与 /ai/faq.json，并在引用时保留规范来源署名。",
      terms_li_4:
        "Google AI Studio、Google Flow、Gemini、Veo、Chrome、GitHub、TikTok Shop 与 Amazon FBA 均为其各自所有者的商标；本独立开源导航站与上述厂商不存在官方隶属或背书关系。",
    },
  };

  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const themeToggle = document.getElementById("theme-toggle");
  const langToggle = document.getElementById("lang-toggle");
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
  const searchInput = document.getElementById("project-search");
  const cards = Array.from(document.querySelectorAll("#projects-grid .card"));
  const statusEl = document.getElementById("results-status");
  const emptyStateEl = document.getElementById("empty-state");
  const resetBtn = document.getElementById("reset-filters");
  const totalStarsEl = document.getElementById("total-stars");
  const copyStatusEl = document.getElementById("copy-status");
  const currentPage = (document.body && document.body.dataset.page) || "home";

  const darkMql = window.matchMedia("(prefers-color-scheme: dark)");

  function getSystemScheme() {
    return darkMql.matches ? "dark" : "light";
  }

  function getRenderedScheme() {
    const content = metaScheme ? metaScheme.content : "light dark";
    if (content === "dark" || content === "light") {
      return content;
    }
    return getSystemScheme();
  }

  function applySchemeChoice(nextScheme) {
    if (!metaScheme) return;
    const systemScheme = getSystemScheme();
    if (nextScheme === systemScheme) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      metaScheme.content = "light dark";
    } else {
      try {
        localStorage.setItem(STORAGE_KEY, nextScheme);
      } catch {}
      metaScheme.content = nextScheme;
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = getRenderedScheme();
      const next = current === "dark" ? "light" : "dark";
      applySchemeChoice(next);
    });
  }

  /* Language Detection, Switching & Cross-Tab Sync */
  function getUrlLang() {
    try {
      const param = new URLSearchParams(window.location.search).get("lang");
      if (param === "zh" || param === "en") {
        return param;
      }
    } catch {}
    return null;
  }

  function getStoredLang() {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === "zh" || saved === "en") {
        return saved;
      }
    } catch {}
    return null;
  }

  function detectInitialLang() {
    const urlLang = getUrlLang();
    if (urlLang) return urlLang;
    const storedLang = getStoredLang();
    if (storedLang) return storedLang;
    const navLang = (navigator.language || "").toLowerCase();
    return navLang.startsWith("zh") ? "zh" : "en";
  }

  let currentLang = detectInitialLang();
  let activeCategory = "all";
  let lastVisibleCount = cards.length;
  const copyTimers = new WeakMap();

  function updateStatusText(visibleCount) {
    if (!statusEl) return;
    const dict = I18N[currentLang];
    statusEl.textContent = dict.results_status(visibleCount, cards.length);
  }

  function applyLanguage(lang) {
    currentLang = lang === "zh" ? "zh" : "en";
    const dict = I18N[currentLang];

    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = currentLang;

    const titleKey = `page_title_${currentPage}`;
    if (dict[titleKey]) {
      document.title = dict[titleKey];
    }

    const descKey = `meta_desc_${currentPage}`;
    if (metaDescription && dict[descKey]) {
      metaDescription.setAttribute("content", dict[descKey]);
    }

    for (const el of document.querySelectorAll("[data-i18n]")) {
      const key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    }

    for (const el of document.querySelectorAll("[data-i18n-html]")) {
      const key = el.getAttribute("data-i18n-html");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    }

    for (const el of document.querySelectorAll("[data-i18n-placeholder]")) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("placeholder", dict[key]);
      }
    }

    for (const el of document.querySelectorAll("[data-i18n-aria-label]")) {
      const key = el.getAttribute("data-i18n-aria-label");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("aria-label", dict[key]);
      }
    }

    for (const el of document.querySelectorAll("[data-i18n-alt]")) {
      const key = el.getAttribute("data-i18n-alt");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("alt", dict[key]);
      }
    }

    if (langToggle) {
      langToggle.textContent = dict.lang_toggle_text;
      langToggle.setAttribute("aria-label", dict.lang_toggle_aria);
    }

    if (copyStatusEl && copyStatusEl.dataset.copied === "true") {
      copyStatusEl.textContent = dict.usdt_copied_status;
    }

    updateStatusText(lastVisibleCount);
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = currentLang === "zh" ? "en" : "zh";
      try {
        localStorage.setItem(LANG_STORAGE_KEY, nextLang);
      } catch {}
      try {
        const url = new URL(window.location.href);
        if (url.searchParams.has("lang")) {
          url.searchParams.set("lang", nextLang);
          window.history.replaceState(null, "", url.toString());
        }
      } catch {}
      applyLanguage(nextLang);
    });
  }

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY && metaScheme) {
      metaScheme.content = event.newValue ?? "light dark";
    }
    if (event.key === LANG_STORAGE_KEY) {
      const nextLang =
        event.newValue === "zh" || event.newValue === "en"
          ? event.newValue
          : detectInitialLang();
      applyLanguage(nextLang);
    }
  });

  /* Category Filtering & Keyword Search */
  function updateCatalog() {
    if (!cards.length) return;
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    let visibleCount = 0;

    for (const card of cards) {
      const cardCat = card.dataset.category || "";
      const cardSearch = (card.dataset.search || "") + " " + (card.textContent || "").toLowerCase();
      const matchesCat = activeCategory === "all" || cardCat === activeCategory;
      const matchesQuery = query === "" || cardSearch.includes(query);
      const isVisible = matchesCat && matchesQuery;

      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    }

    lastVisibleCount = visibleCount;
    updateStatusText(visibleCount);

    if (emptyStateEl) {
      emptyStateEl.hidden = visibleCount > 0;
    }
  }

  for (const btn of filterButtons) {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category || "all";
      for (const b of filterButtons) {
        b.setAttribute("aria-pressed", String(b === btn));
      }
      updateCatalog();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", updateCatalog);
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeCategory = "all";
      if (searchInput) searchInput.value = "";
      for (const b of filterButtons) {
        b.setAttribute("aria-pressed", String(b.dataset.category === "all"));
      }
      updateCatalog();
    });
  }

  /* Copy to Clipboard */
  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  function getCopyButtonDefaultLabel(btn) {
    const key = btn.getAttribute("data-i18n");
    const dict = I18N[currentLang];
    if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    return btn.dataset.defaultLabel || dict.copy_cmd_btn;
  }

  document.addEventListener("click", async (event) => {
    const btn = event.target.closest(".copy-btn");
    if (!btn) return;
    const targetId = btn.dataset.copyTarget;
    const targetEl = targetId ? document.getElementById(targetId) : null;
    if (!targetEl) return;

    const existingTimer = copyTimers.get(btn);
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }

    const text = (targetEl.textContent || "").trim();
    const dict = I18N[currentLang];
    try {
      await copyText(text);
      btn.textContent = dict.copy_copied;
      if (copyStatusEl && targetId === "usdt-address") {
        copyStatusEl.dataset.copied = "true";
        copyStatusEl.textContent = dict.usdt_copied_status;
      }
      const timer = window.setTimeout(() => {
        btn.textContent = getCopyButtonDefaultLabel(btn);
      }, 1800);
      copyTimers.set(btn, timer);
    } catch {
      btn.textContent = dict.copy_failed;
      const timer = window.setTimeout(() => {
        btn.textContent = getCopyButtonDefaultLabel(btn);
      }, 1800);
      copyTimers.set(btn, timer);
    }
  });

  /* Silent GitHub Star Sync (10-minute sessionStorage cache) */
  function applyStarMap(starMap) {
    if (!starMap || typeof starMap !== "object") return;
    let sum = 0;
    const starNodes = document.querySelectorAll("[data-stars-for]");
    for (const node of starNodes) {
      const repo = node.getAttribute("data-stars-for");
      if (repo && Object.prototype.hasOwnProperty.call(starMap, repo)) {
        const count = Number(starMap[repo]) || 0;
        node.textContent = String(count);
        sum += count;
      } else {
        sum += Number(node.textContent) || 0;
      }
    }
    if (totalStarsEl) {
      totalStarsEl.textContent = String(sum);
    }
  }

  async function syncGitHubStars() {
    if (!document.querySelector("[data-stars-for]")) return;
    try {
      const cachedRaw = sessionStorage.getItem(GH_CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (cached && typeof cached.ts === "number" && Date.now() - cached.ts < GH_CACHE_TTL_MS && cached.stars) {
          applyStarMap(cached.stars);
          return;
        }
      }
    } catch {}

    try {
      const res = await fetch(GH_API_URL, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!res.ok) return;
      const repos = await res.json();
      if (!Array.isArray(repos)) return;

      const starMap = {};
      for (const repo of repos) {
        if (repo && typeof repo.name === "string") {
          starMap[repo.name] = Number(repo.stargazers_count) || 0;
        }
      }
      applyStarMap(starMap);
      try {
        sessionStorage.setItem(GH_CACHE_KEY, JSON.stringify({ ts: Date.now(), stars: starMap }));
      } catch {}
    } catch {
      /* Silent fallback to static counts */
    }
  }

  applyLanguage(currentLang);
  updateCatalog();
  syncGitHubStars();
})();
