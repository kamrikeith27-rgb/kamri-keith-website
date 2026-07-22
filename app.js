/* ============================================================================
   Skye Hebert — Recruit Spotlight · runtime
   Ported 1:1 from the Claude Design .dc.html DCLogic component. Same behavior:
   sticky nav, scroll-progress bar, hero entrance, scroll reveals + staggers,
   count-up numerals, GSAP parallax, mobile menu, gallery hover + lightbox, and
   the recruiter inquiry form (validation, honeypot, success state, POST to
   Formspree which emails the family — set FORMSPREE_ENDPOINT below).
   ============================================================================ */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var EASE = "cubic-bezier(0.22,1,0.36,1)";

  document.title = "Kamri Keith · 2027 Softball Recruit — Utility / C / CF / IF · #00";

  /* ---- Sticky nav + scroll-progress bar ---- */
  var nav = $("[data-kamri-nav]");
  var bar = $("[data-kamri-progress]");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    if (nav) {
      var solid = y > 40;
      nav.style.background = solid ? "rgba(11,14,19,0.92)" : "transparent";
      nav.style.borderBottomColor = solid ? "var(--line)" : "transparent";
      nav.style.backdropFilter = solid ? "blur(10px)" : "none";
      nav.style.webkitBackdropFilter = solid ? "blur(10px)" : "none";
    }
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(1, y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var overlay = $("[data-menu-overlay]");
  function openMenu() { if (overlay) { overlay.hidden = false; overlay.style.display = "flex"; } }
  function closeMenu() { if (overlay) { overlay.hidden = true; overlay.style.display = "none"; } }
  var mo = $("[data-menu-open]"); if (mo) mo.addEventListener("click", openMenu);
  var mc = $("[data-menu-close]"); if (mc) mc.addEventListener("click", closeMenu);
  $$("[data-menu-nav]").forEach(function (a) { a.addEventListener("click", closeMenu); });

  /* ---- Count-up numerals ---- */
  function runCount(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    var target = (el.dataset.count || "").trim();
    var dec = (target.split(".")[1] || "").length;
    var leadingDot = target.charAt(0) === ".";
    var val = parseFloat(target);
    if (reduce || isNaN(val)) { el.textContent = target; return; }
    var dur = 1100, start = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - start) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      var cur = (val * e).toFixed(dec);
      if (leadingDot && cur.charAt(0) === "0") cur = cur.slice(1);
      el.textContent = cur;
      if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  /* ---- Entrance + scroll animations ---- */
  var heroLines = $$(".kamri-line");
  var heroFades = $$(".kamri-fade");
  var reveals = $$("[data-reveal]");
  var staggers = $$("[data-stagger]");
  var counts = $$("[data-count]");
  var ios = [];

  // Check if GSAP and ScrollTrigger are available
  var hasGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (hasGSAP) {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (reduce) {
    counts.forEach(runCount);
    heroFades.forEach(function (el) { el.style.opacity = "1"; });
  } else {
    // Hero entrance — masked-line reveal + staggered fades.
    heroLines.forEach(function (el) { el.style.transform = "translateY(120%)"; el.style.transition = "transform .95s " + EASE; });
    heroFades.forEach(function (el, i) {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition = "opacity .7s " + EASE + ", transform .7s " + EASE;
      el.style.transitionDelay = (0.34 + i * 0.09) + "s";
    });
    setTimeout(function () {
      heroLines.forEach(function (el, i) { el.style.transitionDelay = (i * 0.09) + "s"; el.style.transform = "none"; });
      heroFades.forEach(function (el) { el.style.opacity = "1"; el.style.transform = "none"; });
    }, 60);

    // Scroll reveals (fade + slide-up, once)
    var revIO = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.style.opacity = "1"; en.target.style.transform = "none";
        revIO.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) {
      el.style.opacity = "0"; el.style.transform = "translateY(30px)";
      el.style.transition = "opacity .7s " + EASE + ", transform .7s " + EASE;
      revIO.observe(el);
    });
    ios.push(revIO);

    // Grouped staggers
    var stagIO = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        Array.prototype.forEach.call(en.target.children, function (ch, i) {
          ch.style.transitionDelay = (i * 0.07) + "s";
          ch.style.opacity = "1"; ch.style.transform = "none";
        });
        stagIO.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -4% 0px" });
    staggers.forEach(function (c) {
      Array.prototype.forEach.call(c.children, function (ch) {
        ch.style.opacity = "0"; ch.style.transform = "translateY(26px)";
        ch.style.transition = "opacity .6s " + EASE + ", transform .6s " + EASE;
      });
      stagIO.observe(c);
    });
    ios.push(stagIO);

    // Count-ups + subtle pop on scroll-in
    var cntIO = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        runCount(el);
        el.style.transition = "transform .55s " + EASE;
        el.style.transform = "scale(.82)";
        setTimeout(function () { el.style.transform = "none"; }, 40);
        cntIO.unobserve(el);
      });
    }, { threshold: 0.6 });
    counts.forEach(function (el) { cntIO.observe(el); });
    ios.push(cntIO);
  }

  /* ---- Card hover lift ---- */
  $$(".rs-card").forEach(function (el) {
    el.addEventListener("mouseenter", function () { el.style.transform = "translateY(-3px)"; el.style.boxShadow = "var(--shadow-glow)"; });
    el.addEventListener("mouseleave", function () { el.style.transform = "translateY(0)"; el.style.boxShadow = "var(--shadow-card)"; });
  });

  /* ---- Social icon hover ---- */
  $$(".rs-social").forEach(function (el) {
    el.addEventListener("mouseenter", function () { el.style.color = "var(--accent-bright)"; el.style.borderColor = "var(--accent)"; });
    el.addEventListener("mouseleave", function () { el.style.color = "var(--text-subtle)"; el.style.borderColor = "var(--line-strong)"; });
  });

  /* ---- Input focus ring ---- */
  $$(".rs-input").forEach(function (el) {
    el.addEventListener("focus", function () { el.style.borderColor = "var(--accent)"; el.style.boxShadow = "0 0 0 4px var(--focus-ring)"; });
    el.addEventListener("blur", function () { el.style.borderColor = "var(--line-strong)"; el.style.boxShadow = "none"; });
  });

  /* ---- Gallery hover + lightbox ---- */
  var lightbox = $("[data-lightbox]");
  var lightboxImg = $("[data-lightbox-img]");
  function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.hidden = false; lightbox.style.display = "grid";
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true; lightbox.style.display = "none";
    if (lightboxImg) lightboxImg.removeAttribute("src");
  }
  $$(".rs-gallery-item").forEach(function (btn) {
    var img = btn.querySelector("img");
    var tint = btn.querySelector("[data-tint]");
    btn.addEventListener("mouseenter", function () {
      if (img) { img.style.transform = "scale(1.06)"; img.style.filter = "saturate(1) contrast(1.05) brightness(1)"; }
      if (tint) tint.style.opacity = "1";
    });
    btn.addEventListener("mouseleave", function () {
      if (img) { img.style.transform = "scale(1)"; img.style.filter = "saturate(.72) contrast(1.08) brightness(.92)"; }
      if (tint) tint.style.opacity = "0";
    });
    btn.addEventListener("click", function () { openLightbox(btn.dataset.src); });
  });
  if (lightbox) lightbox.addEventListener("click", closeLightbox);
  var lbc = $("[data-lightbox-close]"); if (lbc) lbc.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeLightbox(); closeMenu(); }
  });

  /* ---- Recruiter inquiry form (Formspree) ----
     Submissions POST to Formspree, which emails Skye's family (no API keys, no
     server env vars, PII stays private). To connect: create a Formspree form,
     then paste its endpoint URL below (looks like https://formspree.io/f/abcxyz).
     Until it's filled in, the form shows a friendly "not connected yet" notice. */
  var FORMSPREE_ENDPOINT = "https://formspree.io/f/xykqlenj";

  var form = $("[data-inquiry-form]");
  var success = $("[data-form-success]");
  var errEl = $("[data-form-error]");
  var submitBtn = $("[data-submit-btn]");

  function showError(msg) {
    if (!errEl) return;
    errEl.textContent = msg;
    errEl.hidden = false;
  }
  function clearError() { if (errEl) { errEl.hidden = true; errEl.textContent = ""; } }

  function showSuccess() {
    if (form) form.style.display = "none";
    if (success) { success.hidden = false; success.style.display = "flex"; }
  }
  function resetForm() {
    if (success) { success.hidden = true; success.style.display = "none"; }
    if (form) { form.reset(); form.style.display = "flex"; }
    clearError();
  }
  var fr = $("[data-form-reset]"); if (fr) fr.addEventListener("click", resetForm);

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearError();

      // Honeypot — silently accept bots (mirror the source's success path).
      if (form.company && form.company.value) { showSuccess(); return; }

      if (form.checkValidity && !form.checkValidity()) {
        if (form.reportValidity) form.reportValidity();
        return;
      }

      var data = {
        name: form.name.value.trim(),
        school: form.school.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
        // Formspree niceties: subject line + reply-to set to the coach's email.
        _subject: "Recruiter inquiry — Skye Hebert (2028) — " + form.name.value.trim(),
        _replyto: form.email.value.trim()
      };

      if (!FORMSPREE_ENDPOINT) {
        showError("The inquiry form isn't connected yet. Please check back shortly.");
        return;
      }

      if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = "0.6"; submitBtn.firstChild.textContent = "Sending… "; }

      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed (" + res.status + ")");
          return res.json().catch(function () { return {}; });
        })
        .then(function () { showSuccess(); })
        .catch(function () {
          showError("Something went wrong sending your message. Please try again in a moment.");
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = "1"; submitBtn.firstChild.textContent = "Send Inquiry "; }
        });
    });
  }

  /* ---- Video: Season Reels + tabbed game-film browser ----
     Lite embed = poster thumbnail + play button; the iframe only loads on click.
     CURATED_CLIPS drives the tabs + grid (category: pitching | batting | fielding).
     To add a clip: append {id, label, cat}. To feature a different default clip,
     change DEFAULT_FEATURED. */
  var YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@SkyeHebert2028";

  // Curated best game clips (real uploads from @SkyeHebert2028).
  var CURATED_CLIPS = [
    {id:"CxcovXYk0s4", label:"Pitching Strikeout · LA Lady Dukes", cat:"pitching"},
    {id:"FtbUBBMMeVk", label:"Pitching Strikeout · Gulf Coast Wave", cat:"pitching"},
    {id:"4BquEi1Y-4I", label:"Pitching Strikeout · St. Joseph's", cat:"pitching"},
    {id:"DWDHPbXL2Xc", label:"Pitching Highlight · Brusly Varsity", cat:"pitching"},
    {id:"wXRrKecvMAs", label:"Pitching Strikeout · Prairieville Varsity", cat:"pitching"},
    {id:"6NhfiuUzNRI", label:"Inside-the-Park Home Run · Riverside", cat:"batting"},
    {id:"F_sSkZLIln8", label:"Sacrifice Bunt · Vandals", cat:"batting"},
    {id:"PwANFNyozD0", label:"Sacrifice Bunt · LA Thunderbolts 18U", cat:"batting"},
    {id:"fK2Kpj5pv2c", label:"At-Bat · Karma 16U", cat:"batting"},
    {id:"aVDpclD_i9Y", label:"Double Play · SoLA HYPE 16U", cat:"fielding"},
    {id:"Rsf_XtlxsCw", label:"Infield Out · Karma 16U", cat:"fielding"},
    {id:"WpVSLWsAXmY", label:"Infield Out · LA Hotshots 18U", cat:"fielding"},
    {id:"9FxsFs7D96I", label:"Outfield Out · vs Void", cat:"fielding"}
  ];
  var DEFAULT_FEATURED = CURATED_CLIPS[0]; // Pitching Strikeout · LA Lady Dukes

  function ytPoster(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }
  function ytPosterHd(id) { return "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"; }

  // Channel buttons/links
  $$("[data-youtube-channel]").forEach(function (el) {
    if (YOUTUBE_CHANNEL_URL) el.href = YOUTUBE_CHANNEL_URL;
    else el.setAttribute("aria-disabled", "true");
  });

  // Lite embed wiring for a .rs-video box: poster + play button -> iframe on click.
  function wireVideo(box) {
    var id = box.getAttribute("data-video-id");
    if (!id) return;
    box.innerHTML = "";
    var playBtn = document.createElement("button");
    playBtn.type = "button";
    playBtn.className = "rs-video-play";
    playBtn.setAttribute("aria-label", "Play video");
    var img = document.createElement("img");
    img.loading = "lazy"; img.alt = "";
    img.src = ytPosterHd(id);
    img.onerror = function () { img.src = ytPoster(id); };
    var scrim = document.createElement("span"); scrim.className = "rs-video-scrim";
    var btn = document.createElement("span"); btn.className = "rs-video-btn";
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
    playBtn.appendChild(img); playBtn.appendChild(scrim); playBtn.appendChild(btn);
    playBtn.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.src = "https://www.youtube.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1";
      frame.title = "Skye Hebert video";
      frame.loading = "lazy";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      box.innerHTML = "";
      box.appendChild(frame);
    });
    box.appendChild(playBtn);
  }

  // Season reels (the two fixed .rs-video[data-video-id] boxes in the reels band).
  $$(".kamri-reels .rs-video[data-video-id]").forEach(wireVideo);

  /* ---- Tabbed film browser ---- */
  var featuredBox = $("[data-featured-player]");
  var featuredLabel = $("[data-featured-label]");
  var filmGrid = $("[data-film-grid]");
  var tabs = $$(".rs-tab");

  function setFeatured(clip) {
    if (!featuredBox) return;
    featuredBox.setAttribute("data-video-id", clip.id);
    wireVideo(featuredBox); // resets to poster+play for the new clip
    if (featuredLabel) featuredLabel.textContent = clip.label;
  }

  function renderGrid(cat) {
    if (!filmGrid) return;
    filmGrid.innerHTML = "";
    var list = CURATED_CLIPS.filter(function (c) { return cat === "all" || c.cat === cat; });
    list.forEach(function (clip) {
      var card = document.createElement("button");
      card.type = "button";
      card.className = "rs-film-card";
      card.setAttribute("aria-label", "Feature: " + clip.label);
      var thumb = document.createElement("div");
      thumb.className = "rs-film-card-thumb";
      var img = document.createElement("img");
      img.loading = "lazy"; img.alt = "";
      img.src = ytPoster(clip.id);
      thumb.appendChild(img);
      var play = document.createElement("span"); play.className = "rs-film-card-play";
      play.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
      thumb.appendChild(play);
      var lab = document.createElement("div");
      lab.className = "rs-display rs-film-card-label";
      lab.textContent = clip.label;
      card.appendChild(thumb); card.appendChild(lab);
      card.addEventListener("click", function () {
        setFeatured(clip);
        if (featuredBox) featuredBox.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      });
      filmGrid.appendChild(card);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active"); tab.setAttribute("aria-selected", "true");
      renderGrid(tab.getAttribute("data-tab"));
    });
  });

  if (featuredBox) {
    // initial featured clip + default "All" tab
    setFeatured(DEFAULT_FEATURED);
    var firstTab = tabs[0];
    if (firstTab) { firstTab.classList.add("is-active"); }
    renderGrid("all");
  }

  /* ---- GSAP scrubbed parallax — progressive enhancement ---- */
  function initParallax() {
    var g = window.gsap, ST = window.ScrollTrigger;
    if (reduce || !g || !ST) return;
    g.registerPlugin(ST);
    var hs = $("[data-hero-section]");
    var bg = $("[data-hero-bg]");
    var ghost = $("[data-hero-ghost]");
    if (hs && bg) g.to(bg, { yPercent: 12, ease: "none", scrollTrigger: { trigger: hs, start: "top top", end: "bottom top", scrub: true } });
    if (hs && ghost) g.to(ghost, { yPercent: -18, ease: "none", scrollTrigger: { trigger: hs, start: "top top", end: "bottom top", scrub: true } });
    $$(".rs-ghost-numeral").forEach(function (el) {
      var sec = el.closest("section");
      if (sec) g.fromTo(el, { yPercent: -8 }, { yPercent: 12, ease: "none", scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true } });
    });
    requestAnimationFrame(function () { ST.refresh(); });
  }
  /* ---- Enhanced scroll animations with GSAP ---- */
  function initScrollAnimations() {
    if (!hasGSAP) return;

    // Sections fade in with scale
    $$("section").forEach(function (section, idx) {
      gsap.fromTo(section,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: EASE,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true
          }
        }
      );
    });

    // Elements slide in from left
    $$("[data-reveal]").forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: EASE,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true
          }
        }
      );
    });

    // Staggered children slide up
    $$("[data-stagger]").forEach(function (parent) {
      Array.prototype.forEach.call(parent.children, function (child, i) {
        gsap.fromTo(child,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: EASE,
            delay: i * 0.12,
            scrollTrigger: {
              trigger: parent,
              start: "top 75%",
              once: true
            }
          }
        );
      });
    });

    // Gallery items rotate and scale in
    $$(".rs-gallery-item").forEach(function (item, idx) {
      gsap.fromTo(item,
        { opacity: 0, scale: 0.8, rotation: -8 + (idx % 3) * 4 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: EASE,
          delay: idx * 0.08,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            once: true
          }
        }
      );
    });

    // Position cards slide in from bottom with lift
    $$(".rs-card").forEach(function (card, idx) {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EASE,
          delay: idx * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    // Headings scale up and fade in
    $$("h1, h2, h3").forEach(function (heading) {
      if (heading.classList.contains("kamri-line")) return; // Skip already animated
      gsap.fromTo(heading,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: EASE,
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            once: true
          }
        }
      );
    });
  }

  var tries = 50;
  (function waitG() {
    if (window.gsap && window.ScrollTrigger) {
      initScrollAnimations();
      initParallax();
    }
    else if (tries-- > 0) setTimeout(waitG, 60);
  })();
})();
