(() => {
  "use strict";

  const STORAGE_KEY = "color-scheme";
  const GH_CACHE_KEY = "gh_repos_stars_v1";
  const GH_CACHE_TTL_MS = 10 * 60 * 1000;
  const GH_API_URL = "https://api.github.com/users/qq136692547-cmyk/repos?per_page=100";

  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  const themeToggle = document.getElementById("theme-toggle");
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

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY && metaScheme) {
      metaScheme.content = event.newValue ?? "light dark";
    }
  });

  /* Category Filtering & Keyword Search */
  let activeCategory = "all";

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

    if (statusEl) {
      statusEl.textContent = `Showing ${visibleCount} of ${cards.length} open-source projects.`;
    }
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

  document.addEventListener("click", async (event) => {
    const btn = event.target.closest(".copy-btn");
    if (!btn) return;
    const targetId = btn.dataset.copyTarget;
    const targetEl = targetId ? document.getElementById(targetId) : null;
    if (!targetEl) return;

    const text = (targetEl.textContent || "").trim();
    const defaultLabel = btn.dataset.defaultLabel || "Copy";
    try {
      await copyText(text);
      btn.textContent = "Copied!";
      if (copyStatusEl && targetId === "usdt-address") {
        copyStatusEl.textContent = "USDT (BEP-20) address copied to clipboard.";
      }
      window.setTimeout(() => {
        btn.textContent = defaultLabel;
      }, 1800);
    } catch {
      btn.textContent = "Copy failed";
      window.setTimeout(() => {
        btn.textContent = defaultLabel;
      }, 1800);
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

  syncGitHubStars();
})();
