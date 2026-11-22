(() => {
  "use strict";

  const STORAGE_KEY = "color-scheme";
  const LANG_STORAGE_KEY = "site-lang";
  const GH_CACHE_KEY = "gh_repos_stars_v1";
  const GH_CACHE_TTL_MS = 10 * 60 * 1000;
  const GH_API_URL = "https://api.github.com/users/qq136692547-cmyk/repos?per_page=100";

  const I18N = {
    en: {
      page_title: "qq136692547-cmyk | Open-Source Hub & Antigravity AI Studio",
      meta_description:
        "Official open-source hub for qq136692547-cmyk: 12 original projects across Antigravity AI & Gemini plugins, local-first developer tools, AI Search (GEO), and commerce analytics.",
      lang_toggle_text: "中文",
      lang_toggle_aria: "切换为中文",
      skip_link: "Skip to projects",
      brand_aria: "qq136692547-cmyk Open-Source Hub home",
      brand_subtitle: "Open-Source Lab",
      nav_aria: "Primary navigation",
      nav_flagship: "Flagship",
      nav_projects: "Projects (12)",
      nav_support: "Support",
      nav_github: "GitHub",
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
        "Hand-drawn technical showcase banner for Antigravity AI Studio v0.2.0 Pure Gemini 4 cloud offloading architecture",
      spotlight_badges_aria: "Flagship highlights",
      badge_context: "1M Context",
      badge_tests: "278/278 Tests",
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
      card_flow_note: "v0.3.1 · 29/29 Tests",
      card_01_sub: "Pure Gemini 4 Cloud Offloading Plugin",
      card_01_desc:
        "Cloud offloading and workflow automation for Google AI Studio via Antigravity browser subagent. Preserve local IDE quota with Pure Gemini 4 (1M context, Thinking High+).",
      card_01_note: "v0.2.0 · 255/255 Tests",
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
      footer_heading: "Support Open-Source Work",
      footer_desc:
        "Every tool listed here is open source and built without invasive analytics. If <code>antigravity-aistudio</code> or any utility saved you time or quota, consider starring the repository or buying a coffee.",
      footer_gh_profile: "GitHub Profile",
      footer_sponsor_link: "antigravity-aistudio Sponsor & QR Codes",
      support_usdt_label: "USDT (BNB Smart Chain / BEP-20)",
      copy_addr_btn: "Copy Address",
      copy_addr_aria: "Copy USDT BNB Smart Chain wallet address",
      footer_bottom:
        "&copy; 2026 qq136692547-cmyk. Built with zero dependencies, native CSS <code>light-dark()</code>, subgrid, and container queries.",
      copy_copied: "Copied!",
      copy_failed: "Copy failed",
      usdt_copied_status: "USDT (BEP-20) address copied to clipboard.",
      results_status: (visible, total) => `Showing ${visible} of ${total} open-source projects.`,
    },
    zh: {
      page_title: "qq136692547-cmyk | 开源导航官网 & Antigravity AI Studio",
      meta_description:
        "qq136692547-cmyk 官方开源项目导航：涵盖 Antigravity AI 与 Gemini 插件、本地优先开发者工具、AI 搜索 (GEO) 与跨境电商/金融分析等 12 个原创开源项目。",
      lang_toggle_text: "EN",
      lang_toggle_aria: "Switch to English",
      skip_link: "跳过导航直达项目",
      brand_aria: "qq136692547-cmyk 开源实验室首页",
      brand_subtitle: "开源实验室",
      nav_aria: "主导航",
      nav_flagship: "旗舰项目",
      nav_projects: "开源矩阵 (12)",
      nav_support: "支持作者",
      nav_github: "GitHub 主页",
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
        "Antigravity AI Studio v0.2.0 Pure Gemini 4 云端卸载架构手绘技术展示横幅",
      spotlight_badges_aria: "旗舰项目亮点",
      badge_context: "1M 上下文",
      badge_tests: "278/278 测试通过",
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
      card_flow_note: "v0.3.1 · 29/29 测试全通",
      card_01_sub: "Google AI Studio 云端推理卸载插件",
      card_01_desc:
        "通过 Antigravity 内置浏览器子智能体，将重度推理与百万字文档分析卸载至 Google AI Studio 纯 Gemini 4（1M 上下文，Thinking High+），零消耗本地 IDE 配额。",
      card_01_note: "v0.2.0 · 255/255 测试通过",
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
      footer_heading: "支持与赞赏开源工作",
      footer_desc:
        "这里展示的所有工具均完全开源且无侵入式统计埋点。如果 <code>antigravity-aistudio</code> 或任一效率工具为你节省了时间或本地配额，欢迎点亮 Star 或请作者喝杯咖啡。",
      footer_gh_profile: "GitHub 主页",
      footer_sponsor_link: "antigravity-aistudio 赞助与二维码入口",
      support_usdt_label: "USDT 赞助地址（BNB Smart Chain / BEP-20）",
      copy_addr_btn: "复制地址",
      copy_addr_aria: "复制 USDT (BNB Smart Chain) 收款地址",
      footer_bottom:
        "&copy; 2026 qq136692547-cmyk。零运行时依赖构建，采用原生 CSS <code>light-dark()</code>、subgrid 与容器查询。",
      copy_copied: "已复制！",
      copy_failed: "复制失败",
      usdt_copied_status: "USDT (BEP-20) 收款地址已复制到剪贴板。",
      results_status: (visible, total) => `当前显示 ${visible} / ${total} 个开源项目。`,
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
    document.title = dict.page_title;

    if (metaDescription && dict.meta_description) {
      metaDescription.setAttribute("content", dict.meta_description);
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
