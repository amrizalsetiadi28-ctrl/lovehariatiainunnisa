"use strict";

/* ==========================================================================
   KONFIGURASI — edit bagian ini saja. Semua teks, tanggal, dan foto ada di sini.
   ========================================================================== */
const CONFIG = {
  herName: "Hariati Ainun Nisa",
  herNick: "Ainun",
  myName: "Amrizal Setiadi",

  // Waktu ulang tahun (zona waktu WIB = +07:00). Format: TAHUN-BULAN-TANGGALTJAM:MENIT:DETIK+07:00
  birthday: {
    target: "2026-11-15T00:00:00+07:00",
    birthYear: 2001
  },
  // Tanggal jadian (untuk penghitung "hari bersama")
  anniversary: "2025-11-21T00:00:00+07:00",

  music: {
    volume: 0.5,        // 0 sampai 1
    fadeMs: 3500        // lama fade-in saat musik pertama kali diputar
  },

  splash: {
    kicker: "Sebuah kejutan kecil untuk",
    button: "Buka Kejutan",
    hint: "Nyalakan suara untuk pengalaman terbaik 🎵"
  },

  hero: {
    kicker: "Untuk seseorang yang paling istimewa",
    title: "Selamat Ulang Tahun",
    subtitle: "Terima kasih sudah lahir ke dunia, dan terima kasih sudah memilih untuk berjalan bersamaku."
  },

  countdown: {
    eyebrow: "Menuju Hari Bahagia",
    title: "Hitung Mundur Hari Istimewamu",
    subtitle: "Setiap detik yang berlalu membuatku makin tidak sabar merayakan harimu."
  },
  celebrate: {
    title: "Selamat Ulang Tahun!",
    text: "Hari ini milikmu sepenuhnya. Semoga semua yang kamu doakan menemukan jalannya.",
    button: "Rayakan Lagi 🎆"
  },

  gallery: {
    eyebrow: "Galeri",
    title: "Potongan Kenangan Kita",
    subtitle: "Setiap foto menyimpan cerita kecil yang tidak ingin kulupakan. Ketuk untuk melihat lebih besar."
  },
  // Taruh foto di folder assets/photos/ lalu sesuaikan nama file, caption, dan tanggalnya.
  // Tambah atau hapus baris sesuka hati.
  photos: [
    { src: "assets/photos/foto1.jpg", caption: "Senyum yang kusuka", date: "Kenangan 1" },
    { src: "assets/photos/foto2.jpg", caption: "Hari-hari yang sederhana", date: "Kenangan 2" },
    { src: "assets/photos/foto3.jpg", caption: "Berdua, dunia terasa cukup", date: "Kenangan 3" },
    { src: "assets/photos/foto4.jpg", caption: "Tawa yang tidak bisa dibeli", date: "Kenangan 4" },
    { src: "assets/photos/foto5.jpg", caption: "Perjalanan kecil kita", date: "Kenangan 5" },
    { src: "assets/photos/foto6.jpg", caption: "Momen yang selalu kuingat", date: "Kenangan 6" },
    { src: "assets/photos/foto7.jpg", caption: "Kamu, apa adanya", date: "Kenangan 7" },
    { src: "assets/photos/foto8.jpg", caption: "Untuk semua hari yang akan datang", date: "Kenangan 8" }
  ],

  timeline: {
    eyebrow: "Perjalanan",
    title: "Cerita Kita Sejauh Ini",
    subtitle: "Dari saling menyapa sampai saling menjaga.",
    // highlight: true untuk momen yang ingin ditonjolkan
    items: [
      { date: "Awal cerita", title: "Pertama Kali Bertemu", text: "Dua orang yang belum tahu bahwa pertemuan sederhana itu akan mengubah banyak hal." },
      { date: "Hari-hari berikutnya", title: "Mulai Dekat", text: "Obrolan yang tidak pernah kehabisan bahan dan tawa yang semakin sering terdengar." },
      { date: "21 November 2025", title: "Resmi Menjadi Kita", text: "Hari ketika dua hati sepakat untuk saling menjaga. Hari yang selalu kusyukuri.", highlight: true },
      { date: "Sepanjang perjalanan", title: "Tumbuh Bersama", text: "Belajar saling memahami, saling sabar, dan saling menguatkan di hari yang mudah maupun yang berat." },
      { date: "15 November 2026", title: "Usiamu yang ke-25", text: "Bab baru untukmu, dan aku bersyukur boleh menjadi salah satu orang yang merayakannya bersamamu.", highlight: true }
    ]
  },

  letter: {
    eyebrow: "Dari Hatiku",
    title: "Sepucuk Surat untukmu",
    skip: "Tampilkan semua",
    speedMs: 22,
    greeting: "Ainun sayang,",
    paragraphs: [
      "Ada satu hari dalam setahun yang selalu kutunggu: harimu. Hari ketika dunia mendapatkan seseorang yang membuatnya jauh lebih hangat dan lebih indah.",
      "Sejak 21 November 2025, hari-hariku punya warna baru. Kamu hadir bukan dengan keramaian, melainkan dengan ketulusan yang pelan-pelan menjadi tempat pulang bagi hatiku.",
      "Terima kasih sudah sabar, sudah tertawa bersamaku, dan sudah tetap tinggal di hari-hari yang tidak mudah. Bersamamu, hal-hal sederhana terasa begitu istimewa.",
      "Di usiamu yang ke-25, doaku sederhana: semoga kamu selalu sehat, bahagia, dan dikelilingi orang-orang yang menyayangimu. Semoga satu per satu mimpimu menemukan jalannya, dan semoga aku boleh terus ada di sampingmu untuk melihat semuanya terwujud.",
      "Selamat ulang tahun, Hariati Ainun Nisa. Aku mencintaimu, hari ini dan di semua hari setelahnya."
    ],
    closing: "Dengan seluruh cintaku,"
  },

  closing: {
    text: "Terima kasih sudah menjadi alasan di balik banyak senyumku. Semoga setiap harimu selembut cahaya senja dan sehangat pelukan orang yang menyayangimu.",
    script: "I love you, Ainun",
    button: "Kembali ke Atas ↑",
    footer: "Dibuat dengan ♥ khusus untukmu"
  }
};

/* ==========================================================================
   Kode di bawah ini tidak perlu diubah
   ========================================================================== */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const params = new URLSearchParams(location.search);
  const FORCE_BIRTHDAY = params.get("test") === "ultah"; // pratinjau tampilan perayaan: ...index.html?test=ultah

  const target = new Date(CONFIG.birthday.target).getTime();
  const anniversary = new Date(CONFIG.anniversary).getTime();
  const turningAge = new Date(CONFIG.birthday.target).getFullYear() - CONFIG.birthday.birthYear;

  let opened = false;

  /* ---------- Isi teks dari CONFIG ---------- */
  function fillText() {
    $$("[data-bind]").forEach(el => {
      const v = get(CONFIG, el.dataset.bind);
      if (v != null) el.textContent = v;
    });
    document.title = "Selamat Ulang Tahun, " + CONFIG.herNick;
    $("#chipAge").textContent = "✦ Menuju usia ke-" + turningAge;
  }

  function updateDaysTogether() {
    const days = Math.floor((Date.now() - anniversary) / 864e5);
    $("#chipDays").textContent = days >= 0 ? "♥ " + days.toLocaleString("id-ID") + " hari bersama" : "";
  }

  /* ---------- Scroll reveal ---------- */
  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" })
    : null;
  function observeReveals(root = document) {
    $$(".reveal", root).forEach(el => (revealObserver ? revealObserver.observe(el) : el.classList.add("in")));
  }

  /* ---------- Partikel latar (kelopak & hati) ---------- */
  const Petals = (() => {
    const c = $("#bgCanvas"), ctx = c.getContext("2d");
    const palette = ["#e8a3ad", "#f2c1c6", "#d98896", "#e9c981", "#f6d9d9"];
    let W, H, dpr, list = [], raf = 0;

    function make(initial) {
      return {
        x: rand(0, W), y: initial ? rand(0, H) : rand(-40, -10),
        s: rand(7, 15), vy: rand(0.25, 0.7), vx: rand(-0.15, 0.3),
        rot: rand(0, 6.28), vr: rand(-0.012, 0.012), sway: rand(0, 6.28), swayS: rand(0.006, 0.015),
        a: rand(0.28, 0.6), heart: Math.random() < 0.42, col: pick(palette)
      };
    }
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      c.width = W * dpr; c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = reduceMotion ? 14 : Math.max(16, Math.min(44, Math.round(W / 30)));
      while (list.length < n) list.push(make(true));
      list.length = n;
      if (reduceMotion) draw();
    }
    function shape(p) {
      ctx.beginPath();
      if (p.heart) {
        const s = p.s * 0.75;
        ctx.moveTo(0, s * 0.9);
        ctx.bezierCurveTo(-s * 1.4, -s * 0.1, -s * 0.6, -s * 1.1, 0, -s * 0.4);
        ctx.bezierCurveTo(s * 0.6, -s * 1.1, s * 1.4, -s * 0.1, 0, s * 0.9);
      } else {
        ctx.ellipse(0, 0, p.s * 0.45, p.s, 0, 0, Math.PI * 2);
      }
      ctx.fill();
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of list) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.col;
        shape(p);
        ctx.restore();
      }
    }
    function step() {
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        p.sway += p.swayS;
        p.x += p.vx + Math.sin(p.sway) * 0.45;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > H + 30 || p.x > W + 40 || p.x < -40) list[i] = make(false);
      }
      draw();
      raf = requestAnimationFrame(step);
    }
    function start() { if (!reduceMotion && !raf) raf = requestAnimationFrame(step); }
    function stop() { cancelAnimationFrame(raf); raf = 0; }
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    resize();
    return { start };
  })();

  /* ---------- Confetti & kembang api ---------- */
  const FX = (() => {
    const c = $("#fxCanvas"), ctx = c.getContext("2d");
    const colors = ["#b76e79", "#e8c4c4", "#c9a24b", "#f3dfa2", "#ffffff", "#e39aa6", "#d98896"];
    let W, H, dpr, confetti = [], sparks = [], raf = 0, endAt = 0, nextFw = 0, nextCf = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      c.width = W * dpr; c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function addConfetti(n) {
      for (let i = 0; i < n; i++) {
        confetti.push({
          x: rand(0, W), y: rand(-H * 0.25, -10), vx: rand(-1, 1), vy: rand(2, 5),
          w: rand(6, 11), h: rand(8, 15), rot: rand(0, 6.28), vr: rand(-0.2, 0.2),
          sway: rand(0, 6.28), col: pick(colors)
        });
      }
    }
    function firework() {
      const x = rand(W * 0.15, W * 0.85), y = rand(H * 0.12, H * 0.5), col = pick(colors);
      const n = reduceMotion ? 18 : 52;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2, sp = rand(1.4, 4.4);
        sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: rand(0.011, 0.02), col });
      }
    }
    function loop(t) {
      ctx.clearRect(0, 0, W, H);
      if (t < endAt) {
        if (t > nextFw) { firework(); nextFw = t + rand(550, 950); }
        if (t < endAt - 3500 && t > nextCf) { addConfetti(reduceMotion ? 4 : 14); nextCf = t + 260; }
      }
      for (let i = confetti.length - 1; i >= 0; i--) {
        const p = confetti[i];
        p.sway += 0.06;
        p.x += p.vx + Math.sin(p.sway) * 0.8;
        p.y += p.vy; p.rot += p.vr;
        if (p.y > H + 24) { confetti.splice(i, 1); continue; }
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.col; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= 0.985; s.vy = s.vy * 0.985 + 0.045;
        s.x += s.vx; s.y += s.vy; s.life -= s.decay;
        if (s.life <= 0) { sparks.splice(i, 1); continue; }
        ctx.globalAlpha = Math.max(0, s.life);
        ctx.fillStyle = s.col;
        ctx.beginPath(); ctx.arc(s.x, s.y, 2.2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (t < endAt || confetti.length || sparks.length) raf = requestAnimationFrame(loop);
      else { raf = 0; ctx.clearRect(0, 0, W, H); }
    }
    function celebrate() {
      const now = performance.now();
      endAt = now + 9000; nextFw = now; nextCf = now;
      addConfetti(reduceMotion ? 30 : 140);
      if (!raf) raf = requestAnimationFrame(loop);
    }
    window.addEventListener("resize", resize);
    resize();
    return { celebrate };
  })();

  /* ---------- Countdown ---------- */
  let celebrated = false, fxPlayed = false;
  const el = id => document.getElementById(id);
  const prev = {};
  function setNum(id, val, pad) {
    const text = String(val).padStart(pad, "0");
    if (prev[id] === text) return;
    prev[id] = text;
    const node = el(id);
    node.textContent = text;
    if (id === "cdSecs" || id === "cdMins") {
      node.classList.remove("tick"); void node.offsetWidth; node.classList.add("tick");
    }
  }
  function playCelebration() {
    if (!opened || fxPlayed) return;
    fxPlayed = true;
    FX.celebrate();
  }
  function updateCountdown() {
    const diff = FORCE_BIRTHDAY ? 0 : target - Date.now();
    if (diff <= 0) {
      if (!celebrated) {
        celebrated = true;
        $("#countdown").classList.add("is-birthday");
        if (opened && isInView($("#countdown"))) playCelebration();
      }
      return;
    }
    setNum("cdDays", Math.floor(diff / 864e5), 2);
    setNum("cdHours", Math.floor((diff % 864e5) / 36e5), 2);
    setNum("cdMins", Math.floor((diff % 36e5) / 6e4), 2);
    setNum("cdSecs", Math.floor((diff % 6e4) / 1e3), 2);
  }
  function isInView(node) {
    const r = node.getBoundingClientRect();
    return r.top < window.innerHeight * 0.8 && r.bottom > 0;
  }
  function setupCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    $("#replayFx").addEventListener("click", () => { fxPlayed = false; playCelebration(); });
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => {
        es.forEach(e => { if (e.isIntersecting && celebrated) playCelebration(); });
      }, { threshold: 0.35 });
      io.observe($("#countdown"));
    }
  }

  /* ---------- Galeri & lightbox ---------- */
  function placeholder(i) {
    const svg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'>" +
      "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#f6d9d9'/><stop offset='1' stop-color='#e2aab3'/></linearGradient></defs>" +
      "<rect width='800' height='1000' fill='url(#g)'/>" +
      "<path fill='#fff' fill-opacity='.75' d='M400 560C300 480 260 430 260 380a70 70 0 0 1 140-20 70 70 0 0 1 140 20c0 50-40 100-140 180z'/>" +
      "<text x='400' y='680' text-anchor='middle' font-family='Georgia,serif' font-size='46' fill='#8d4a58'>Foto " + (i + 1) + "</text>" +
      "<text x='400' y='735' text-anchor='middle' font-family='Arial,sans-serif' font-size='26' fill='#8d4a58' fill-opacity='.85'>Taruh fotomu di assets/photos/</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  const lb = { root: null, img: null, cap: null, date: null, idx: 0, imgs: [] };
  function renderGallery() {
    const grid = $("#galleryGrid");
    CONFIG.photos.forEach((p, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "g-item reveal";
      btn.style.setProperty("--d", (i % 4) * 90 + "ms");
      btn.setAttribute("aria-label", "Buka foto: " + p.caption);

      const img = new Image();
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = p.caption;
      img.addEventListener("error", () => { img.src = placeholder(i); }, { once: true });
      img.src = p.src;

      const cap = document.createElement("div");
      cap.className = "g-cap";
      const strong = document.createElement("strong"); strong.textContent = p.caption;
      const small = document.createElement("small"); small.textContent = p.date;
      cap.append(strong, small);

      btn.append(img, cap);
      btn.addEventListener("click", () => openLightbox(i));
      grid.append(btn);
      lb.imgs.push(img);
    });
  }
  function showLightbox(i) {
    const n = CONFIG.photos.length;
    lb.idx = (i + n) % n;
    const p = CONFIG.photos[lb.idx];
    lb.img.src = lb.imgs[lb.idx].currentSrc || lb.imgs[lb.idx].src;
    lb.img.alt = p.caption;
    lb.cap.textContent = p.caption;
    lb.date.textContent = p.date;
  }
  function openLightbox(i) {
    showLightbox(i);
    lb.root.classList.add("open");
    lb.root.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.root.classList.remove("open");
    lb.root.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function setupLightbox() {
    lb.root = $("#lightbox"); lb.img = $("#lbImg"); lb.cap = $("#lbCaption"); lb.date = $("#lbDate");
    $(".lb-close").addEventListener("click", closeLightbox);
    $(".lb-prev").addEventListener("click", () => showLightbox(lb.idx - 1));
    $(".lb-next").addEventListener("click", () => showLightbox(lb.idx + 1));
    lb.root.addEventListener("click", e => { if (e.target === lb.root) closeLightbox(); });
    document.addEventListener("keydown", e => {
      if (!lb.root.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showLightbox(lb.idx - 1);
      if (e.key === "ArrowRight") showLightbox(lb.idx + 1);
    });
    let x0 = null;
    lb.root.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.root.addEventListener("touchend", e => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) showLightbox(lb.idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  /* ---------- Timeline ---------- */
  function renderTimeline() {
    const wrap = $("#timelineList");
    CONFIG.timeline.items.forEach((it, i) => {
      const item = document.createElement("div");
      item.className = "tl-item reveal" + (it.highlight ? " highlight" : "");
      item.style.setProperty("--d", "60ms");
      const dot = document.createElement("div"); dot.className = "tl-dot"; dot.textContent = "♥";
      const card = document.createElement("div"); card.className = "tl-card glass";
      const d = document.createElement("div"); d.className = "tl-date"; d.textContent = it.date;
      const h = document.createElement("h3"); h.textContent = it.title;
      const p = document.createElement("p"); p.textContent = it.text;
      card.append(d, h, p);
      item.append(dot, card);
      wrap.append(item);
    });
  }

  /* ---------- Surat (efek mengetik) ---------- */
  function setupLetter() {
    const L = CONFIG.letter, body = $("#letterBody"), card = $("#letterCard");
    const nodes = [];
    [L.greeting, ...L.paragraphs].forEach((txt, idx) => {
      const p = document.createElement("p");
      if (idx === 0) p.className = "greeting";
      const done = document.createElement("span");
      const rest = document.createElement("span"); rest.className = "t-rest"; rest.textContent = txt;
      p.append(done, rest);
      body.append(p);
      nodes.push({ done, rest, txt });
    });
    let started = false, finished = false, timer = 0, ni = 0, ci = 0;

    function finish() {
      finished = true; clearTimeout(timer);
      nodes.forEach(n => { n.done.textContent = n.txt; n.done.classList.remove("caret"); n.rest.textContent = ""; });
      card.classList.add("done");
    }
    function step() {
      if (finished) return;
      const n = nodes[ni];
      ci++;
      n.done.textContent = n.txt.slice(0, ci);
      n.rest.textContent = n.txt.slice(ci);
      n.done.classList.add("caret");
      const ch = n.txt[ci - 1];
      let delay = L.speedMs;
      if (ch === "," ) delay = L.speedMs * 5;
      if (ch === "." || ch === "!" || ch === "?") delay = L.speedMs * 12;
      if (ci >= n.txt.length) {
        n.done.classList.remove("caret");
        ni++; ci = 0; delay = 500;
        if (ni >= nodes.length) { finish(); return; }
      }
      timer = setTimeout(step, delay);
    }
    function start() {
      if (started) return;
      started = true;
      if (reduceMotion) { finish(); return; }
      step();
    }
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => {
        es.forEach(e => { if (e.isIntersecting) { start(); io.disconnect(); } });
      }, { threshold: 0.3 });
      io.observe(card);
    } else start();
    $("#skipType").addEventListener("click", () => { started = true; finish(); });
  }

  /* ---------- Musik ---------- */
  const audio = $("#bgm"), musicBtn = $("#musicBtn");
  let fadeRaf = 0;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 4200);
  }
  function fadeTo(vol, ms, done) {
    cancelAnimationFrame(fadeRaf);
    const from = audio.volume, t0 = performance.now();
    const step = now => {
      const k = Math.min(1, (now - t0) / ms);
      try { audio.volume = Math.max(0, Math.min(1, from + (vol - from) * k)); } catch (_) {}
      if (k < 1) fadeRaf = requestAnimationFrame(step); else if (done) done();
    };
    fadeRaf = requestAnimationFrame(step);
  }
  function startMusic() {
    try { audio.volume = 0; } catch (_) {}
    const pr = audio.play();
    if (pr && pr.then) {
      pr.then(() => { musicBtn.classList.remove("paused"); fadeTo(CONFIG.music.volume, CONFIG.music.fadeMs); })
        .catch(() => { musicBtn.classList.add("paused"); toast("Ketuk ikon musik di pojok untuk menyalakan lagu 🎵"); });
    }
  }
  function setupMusic() {
    audio.addEventListener("error", () => {
      musicBtn.classList.add("paused");
      toast("File lagu belum ditemukan. Taruh lagu.mp3 di assets/music/");
    });
    musicBtn.addEventListener("click", () => {
      if (audio.paused) {
        try { audio.volume = 0; } catch (_) {}
        audio.play().then(() => { musicBtn.classList.remove("paused"); fadeTo(CONFIG.music.volume, 1200); }).catch(() => {});
      } else {
        musicBtn.classList.add("paused");
        fadeTo(0, 500, () => audio.pause());
      }
    });
  }

  /* ---------- Layar pembuka ---------- */
  function setupSplash() {
    const btn = $("#openBtn"), env = $("#envelope"), splash = $("#splash");
    btn.addEventListener("click", () => {
      btn.disabled = true;
      env.classList.add("open");
      startMusic(); // harus dipanggil langsung dari klik agar browser mengizinkan audio
      setTimeout(() => {
        splash.classList.add("hide");
        document.body.classList.remove("locked");
        document.body.classList.add("opened");
        opened = true;
        window.scrollTo(0, 0);
        if (celebrated && isInView($("#countdown"))) playCelebration();
      }, reduceMotion ? 200 : 1700);
      setTimeout(() => splash.remove(), reduceMotion ? 800 : 2900);
    });
  }

  /* ---------- Parallax halus & tombol atas ---------- */
  function setupScrollFx() {
    $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
    if (reduceMotion) return;
    const glow = $("#heroGlow"), content = $("#heroContent");
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          glow.style.transform = "translate(-50%, calc(-50% + " + y * 0.25 + "px))";
          content.style.transform = "translateY(" + y * 0.08 + "px)";
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Mulai ---------- */
  function init() {
    fillText();
    updateDaysTogether();
    setInterval(updateDaysTogether, 60000);
    renderGallery();
    renderTimeline();
    setupLetter();
    setupLightbox();
    setupCountdown();
    setupMusic();
    setupSplash();
    setupScrollFx();
    observeReveals();
    Petals.start();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
