/* ============================================================
   Blockchain mid-sem drill — app logic
   Screens: home (test builder) → quiz → results
   ============================================================ */
(function () {
  "use strict";

  var $ = function (s) { return document.querySelector(s); };
  var BANK = (window.Q_BANK || []).slice();
  var TYPE_LABEL = { mcq: "MCQ", msq: "MSQ", fib: "Fill in the blank" };
  var TYPE_SHORT = { mcq: "MCQ", msq: "MSQ", fib: "Blank" };
  var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var UNIT_NAMES = {
    1: "Introduction to compilers & lexical analysis"
  };
  /* units actually present in this question bank, in order */
  var UNITS = Object.keys(UNIT_NAMES)
    .map(Number)
    .filter(function (u) { return BANK.some(function (q) { return q.unit === u; }); })
    .sort(function (a, b) { return a - b; });
  var KEY = "bc-drill.v1";

  /* ---------------- storage ---------------- */
  var S = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* private mode, corrupt data — start fresh */ }
    return { seen: {}, history: [] };
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  }

  function record(id, correct) {
    var r = S.seen[id] || { n: 0, c: 0, w: 0 };
    r.n += 1;
    if (correct) r.c += 1; else r.w += 1;
    r.last = !!correct;
    S.seen[id] = r;
    save();
  }

  function isMissed(id) {
    var r = S.seen[id];
    return !!(r && r.last === false);
  }

  /* ---------------- helpers ---------------- */
  function norm(s) {
    return String(s == null ? "" : s)
      .toLowerCase()
      .replace(/[.,;:'"!?]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  function loose(s) { return norm(s).replace(/[\s-]/g, ""); }

  /* Raw comparison — used when the answer is itself punctuation, e.g. "?" or ",".
     norm() strips punctuation, which would otherwise empty out such answers. */
  function raw(s) {
    return String(s == null ? "" : s).toLowerCase().replace(/\s+/g, " ").trim();
  }

  function gradeFib(q, val) {
    var v = norm(val), lv = loose(val);
    if (!v) {
      return q.answer.some(function (a) { return raw(a) === raw(val); });
    }
    return q.answer.some(function (a) { return norm(a) === v || loose(a) === lv; });
  }

  function gradeMsq(q, picked) {
    if (!picked || picked.length !== q.answer.length) return false;
    var a = q.answer.slice().sort().join(","), b = picked.slice().sort().join(",");
    return a === b;
  }

  function hx(str, seed) {
    var h = seed >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return ("00000000" + h.toString(16)).slice(-8);
  }
  function hash16(str) {
    return hx(str, 0x811c9dc5) + hx(str + "|salt", 0x01000193);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- filters ---------------- */
  var TOPICS = [];
  (function () {
    var seen = {};
    BANK.forEach(function (q) {
      if (!seen[q.topic]) { seen[q.topic] = true; TOPICS.push({ name: q.topic, unit: q.unit }); }
    });
  })();

  var COUNTS = { mcq: 0, msq: 0, fib: 0, byTopic: {} };
  BANK.forEach(function (q) {
    COUNTS[q.type] += 1;
    COUNTS.byTopic[q.topic] = (COUNTS.byTopic[q.topic] || 0) + 1;
  });

  var F = {
    units: UNITS.reduce(function (o, u) { o[u] = true; return o; }, {}),
    topics: {},
    types: { mcq: true, msq: true, fib: true },
    len: "20",
    order: "shuffle",
    mode: "practice",
    missedOnly: false
  };
  TOPICS.forEach(function (t) { F.topics[t.name] = true; });

  /* ---------------- home screen ---------------- */
  function renderTopics() {
    var wrap = $("#f-topics");
    wrap.innerHTML = "";
    UNITS.forEach(function (u) {
      var list = TOPICS.filter(function (t) { return t.unit === u; });
      if (!list.length) return;

      if (UNITS.length > 1) {
        var h = document.createElement("p");
        h.className = "topic-head" + (F.units[u] ? "" : " is-off");
        h.textContent = "Unit " + u + " \u00b7 " + UNIT_NAMES[u];
        wrap.appendChild(h);
      }

      var row = document.createElement("div");
      row.className = "chips" + (F.units[u] ? "" : " is-off");

      list.forEach(function (t) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "chip" + (F.topics[t.name] ? " is-on" : "");
        b.innerHTML = '<span class="dot"></span>' + esc(t.name) +
          ' <span class="n">' + COUNTS.byTopic[t.name] + "</span>";
        b.addEventListener("click", function () {
          F.topics[t.name] = !F.topics[t.name];
          renderTopics();
          renderPreview();
        });
        row.appendChild(b);
      });
      wrap.appendChild(row);
    });

  }

  function renderTypes() {
    var wrap = $("#f-types");
    wrap.innerHTML = "";
    ["mcq", "msq", "fib"].forEach(function (ty) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (F.types[ty] ? " is-on" : "");
      b.innerHTML = '<span class="dot"></span>' + TYPE_LABEL[ty] +
        ' <span class="n">' + COUNTS[ty] + "</span>";
      b.addEventListener("click", function () {
        F.types[ty] = !F.types[ty];
        renderTypes();
        renderPreview();
      });
      wrap.appendChild(b);
    });
  }

  function matches(q) {
    if (!F.units[q.unit]) return false;
    if (!F.topics[q.topic]) return false;
    if (!F.types[q.type]) return false;
    if (F.missedOnly && !isMissed(q.id)) return false;
    return true;
  }

  function selectedList() {
    var pool = BANK.filter(matches);
    if (F.order === "shuffle") pool = shuffle(pool);
    if (F.len !== "all") {
      var n = parseInt(F.len, 10);
      pool = pool.slice(0, n);
    }
    return pool;
  }

  function renderPreview() {
    var pool = BANK.filter(matches);
    var want = F.len === "all" ? pool.length : parseInt(F.len, 10);
    var show = Math.min(want, pool.length);
    var out;

    if (pool.length === 0) {
      out = F.missedOnly
        ? "No questions match — you have not missed any in this selection yet."
        : "Nothing matches — tick another topic or format.";
    } else if (want >= pool.length) {
      out = "All " + pool.length + " matching question" + (pool.length === 1 ? "" : "s") + " selected";
    } else {
      out = "Picking " + show + " of the " + pool.length +
        " question" + (pool.length === 1 ? "" : "s") + " that match";
    }
    if (F.missedOnly && pool.length) out += " · answered wrong before";
    $("#f-preview").textContent = out;
    $("#btn-start").disabled = show === 0;
    $("#btn-start").textContent = F.mode === "mock" ? "Start mock test" : "Start practice";
  }

  function renderMast() {
    var ids = Object.keys(S.seen);
    var n = 0, c = 0;
    ids.forEach(function (id) { n += S.seen[id].n; c += S.seen[id].c; });
    $("#m-count").textContent = BANK.length;
    $("#m-tried").textContent = ids.length;
    $("#m-acc").textContent = n ? Math.round((c / n) * 100) + "%" : "—";
  }

  function renderRecap() {
    var box = $("#recap");
    var ids = Object.keys(S.seen);
    var n = 0, c = 0;
    ids.forEach(function (id) { n += S.seen[id].n; c += S.seen[id].c; });
    var missed = ids.filter(isMissed).length;
    var h = S.history || [];

    if (!n) {
      box.innerHTML = '<p class="empty">Nothing recorded yet. Your record starts with the first test you finish.</p>';
      return;
    }
    box.innerHTML =
      item("Questions seen", ids.length + "/" + BANK.length) +
      item("Answers given", n) +
      item("Accuracy", Math.round((c / n) * 100) + "%") +
      item("To rehearse", missed) +
      item("Tests finished", h.length);
  }

  function item(k, v) {
    return '<div><span class="k">' + esc(k) + '</span><span class="v">' + esc(v) + "</span></div>";
  }

  /* ---------------- quiz ---------------- */
  var Q = null;
  var timerId = null;

  function showScreen(id) {
    ["s-home", "s-quiz", "s-result"].forEach(function (s) {
      $("#" + s).hidden = s !== id;
    });
    window.scrollTo(0, 0);
  }

  function start(list, mode) {
    if (!list.length) return;
    Q = {
      list: list,
      mode: mode,
      idx: 0,
      visited: 0,
      picked: list.map(blankPick),
      status: list.map(function () { return null; }),
      correct: 0,
      t0: Date.now(),
      justRecorded: list.map(function () { return false; })
    };
    buildChain();
    showScreen("s-quiz");
    tickTime();
    if (timerId) clearInterval(timerId);
    timerId = setInterval(tickTime, 1000);
    renderQ();
  }

  function blankPick(q) {
    if (q.type === "mcq") return null;
    if (q.type === "msq") return [];
    return "";
  }

  function tickTime() {
    if (!Q) return;
    var s = Math.floor((Date.now() - Q.t0) / 1000);
    var m = Math.floor(s / 60);
    $("#q-time").textContent =
      (m < 10 ? "0" : "") + m + ":" + ((s % 60) < 10 ? "0" : "") + (s % 60);
  }

  function buildChain() {
    var wrap = $("#chain");
    wrap.innerHTML = "";
    wrap.classList.toggle("is-dense", Q.list.length > 34);
    Q.list.forEach(function (q, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "lk";
      b.title = "Question " + (i + 1) + " — " + q.topic;
      b.setAttribute("aria-label", "Go to question " + (i + 1));
      b.addEventListener("click", function () {
        if (i <= Q.visited) { Q.idx = i; renderQ(); }
      });
      wrap.appendChild(b);
    });
    paintChain();
  }

  function paintChain() {
    var links = $("#chain").children;
    for (var i = 0; i < links.length; i++) {
      var el = links[i];
      el.className = "lk";
      var st = Q.status[i];
      if (i === Q.idx) el.className += " is-cur";
      if (st === true) el.className += " is-ok";
      else if (st === false) el.className += " is-no";
      else if (st === "skip") el.className += " is-skip";
      if (i <= Q.visited) el.classList.add("is-visited");
    }
    var pos = (Q.idx + 1) + " / " + Q.list.length;
    $("#q-pos").textContent = pos;
    if (Q.mode === "mock") {
      var done = Q.status.filter(function (s) { return s === true || s === false; }).length;
      $("#q-score").textContent = done + " answered";
    } else {
      $("#q-score").textContent = Q.correct + " correct";
    }
  }

  function renderQ() {
    var q = Q.list[Q.idx];
    var checked = Q.status[Q.idx] === true || Q.status[Q.idx] === false;

    $("#b-num").textContent = "BLOCK #" + ("000" + (Q.idx + 1)).slice(-4);
    $("#b-prev").textContent = "PREV 0x" +
      (Q.idx === 0 ? "0000000000000000" : hash16(Q.list[Q.idx - 1].id));
    $("#b-hash").textContent = "HASH 0x" + hash16(q.id);
    $("#b-type").textContent = TYPE_LABEL[q.type];
    $("#b-topic").textContent = "Unit " + q.unit + " · " + q.topic;
    $("#q-stem").textContent = q.q;

    var area = $("#q-area");
    area.innerHTML = "";

    if (q.type === "fib") renderFib(q, area, checked);
    else renderOptions(q, area, checked);

    renderFeedback(q, checked);
    renderFoot(q, checked);

    $("#q-hint").textContent = hintFor(q);
    paintChain();
    Q.visited = Math.max(Q.visited, Q.idx);
  }

  function hintFor(q) {
    if (q.type === "fib") return "Type your answer, then press Enter";
    if (q.type === "msq") return "Keys 1–" + q.options.length + " toggle a choice · Enter checks";
    return "Keys 1–" + q.options.length + " pick a choice · Enter checks";
  }

  function renderOptions(q, area, checked) {
    var picked = Q.picked[Q.idx];
    q.options.forEach(function (text, i) {
      var lab = document.createElement("label");
      lab.className = "opt";
      var input = document.createElement("input");
      input.type = q.type === "msq" ? "checkbox" : "radio";
      input.name = "opt-" + Q.idx;
      input.value = String(i);

      var key = document.createElement("span");
      key.className = "key";
      key.textContent = LETTERS[i];

      var txt = document.createElement("span");
      txt.className = "txt";
      txt.textContent = text;

      lab.appendChild(input);
      lab.appendChild(key);
      lab.appendChild(txt);

      var isPicked = q.type === "msq"
        ? picked.indexOf(i) !== -1
        : picked === i;
      if (isPicked) lab.classList.add("is-sel");

      if (checked) {
        input.disabled = true;
        lab.classList.add("is-locked");
        var right = q.type === "msq"
          ? q.answer.indexOf(i) !== -1
          : q.answer === i;
        if (isPicked && right) lab.classList.add("is-right");
        else if (isPicked && !right) lab.classList.add("is-wrong");
        else if (!isPicked && right) lab.classList.add("is-miss");
      } else {
        input.addEventListener("change", function () { pick(i); });
      }

      area.appendChild(lab);
    });
  }

  function renderFib(q, area, checked) {
    var wrap = document.createElement("div");
    wrap.className = "fib-row";
    var input = document.createElement("input");
    input.type = "text";
    input.className = "fib-input";
    input.placeholder = "Type the missing word or value…";
    input.setAttribute("autocomplete", "off");
    input.setAttribute("spellcheck", "false");
    input.value = Q.picked[Q.idx];

    var note = document.createElement("p");
    note.className = "fib-note";
    note.textContent = q.answer.length > 1
      ? "More than one wording is accepted."
      : "Capital letters and punctuation are ignored.";

    if (checked) {
      input.disabled = true;
      input.classList.add(Q.status[Q.idx] ? "is-right" : "is-wrong");
    } else {
      input.addEventListener("input", function () { Q.picked[Q.idx] = input.value; });
    }

    wrap.appendChild(input);
    wrap.appendChild(note);
    area.appendChild(wrap);
    if (!checked) setTimeout(function () { input.focus(); }, 40);
  }

  function pick(i) {
    if (!Q) return;
    var q = Q.list[Q.idx];
    var st = Q.status[Q.idx];
    if (st === true || st === false) return;

    if (q.type === "mcq") {
      Q.picked[Q.idx] = i;
    } else {
      var arr = Q.picked[Q.idx];
      var at = arr.indexOf(i);
      if (at === -1) arr.push(i); else arr.splice(at, 1);
    }
    var opts = $("#q-area").children;
    for (var k = 0; k < opts.length; k++) {
      var on = q.type === "msq"
        ? Q.picked[Q.idx].indexOf(k) !== -1
        : Q.picked[Q.idx] === k;
      opts[k].classList.toggle("is-sel", on);
      var inp = opts[k].querySelector("input");
      if (inp) inp.checked = on;
    }
  }

  function renderFeedback(q, checked) {
    var fb = $("#feedback");
    if (!checked || Q.mode === "mock") { fb.hidden = true; fb.innerHTML = ""; return; }

    var ok = Q.status[Q.idx] === true;
    var html = '<p class="verdict ' + (ok ? "ok" : "no") + '">' +
      '<span class="mark">' + (ok ? "✓" : "✗") + "</span>" +
      (ok ? "Correct" : "Not quite") + "</p>";

    if (!ok) {
      if (q.type === "mcq") {
        html += '<p class="ans-line"><span class="lbl">Answer</span>' +
          LETTERS[q.answer] + " — " + esc(q.options[q.answer]) + "</p>";
      } else if (q.type === "msq") {
        html += '<p class="ans-line"><span class="lbl">Answer</span>' +
          q.answer.map(function (i) { return LETTERS[i] + " — " + esc(q.options[i]); }).join(" &nbsp; ") + "</p>";
      } else {
        html += '<p class="ans-line"><span class="lbl">Answer</span>' + esc(q.answer[0]) + "</p>";
      }
    }
    html += '<p class="why">' + esc(q.explain) + "</p>";
    fb.innerHTML = html;
    fb.hidden = false;
  }

  function renderFoot(q, checked) {
    var primary = $("#btn-check");
    var skip = $("#btn-skip");
    var last = Q.idx === Q.list.length - 1;

    if (checked || (Q.mode === "mock" && Q.status[Q.idx] !== null)) {
      primary.textContent = last ? (Q.mode === "mock" ? "See results" : "Finish") : "Next question";
      primary.dataset.act = "next";
      skip.style.display = "none";
    } else if (Q.mode === "mock") {
      primary.textContent = last ? "See results" : "Next question";
      primary.dataset.act = "next";
      skip.style.display = "";
    } else {
      primary.textContent = "Check answer";
      primary.dataset.act = "check";
      skip.style.display = "";
    }
  }

  function primaryAction() {
    if (!Q) return;
    var act = $("#btn-check").dataset.act;
    if (act === "check") check();
    else next();
  }

  function check() {
    var q = Q.list[Q.idx];
    var correct;

    if (q.type === "mcq") correct = Q.picked[Q.idx] === q.answer;
    else if (q.type === "msq") correct = gradeMsq(q, Q.picked[Q.idx]);
    else correct = gradeFib(q, Q.picked[Q.idx]);

    Q.status[Q.idx] = correct;
    if (correct) Q.correct += 1;
    if (!Q.justRecorded[Q.idx]) {
      record(q.id, correct);
      Q.justRecorded[Q.idx] = true;
    }
    renderQ();
  }

  function next() {
    if (Q.idx === Q.list.length - 1) { finish(); return; }
    Q.idx += 1;
    renderQ();
  }

  function skip() {
    if (Q.status[Q.idx] === null) Q.status[Q.idx] = "skip";
    if (Q.idx === Q.list.length - 1) { finish(); return; }
    Q.idx += 1;
    renderQ();
  }

  function finish() {
    if (Q.mode === "mock" && !Q.graded) gradeAll();
    endSession();
  }

  /* One exit path for both "Finish" and "End test". The results screen is
     always revealed, even if something in the review list fails to render. */
  function endSession() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    var total = Q.list.length;
    var correct = Q.correct;

    S.history = (S.history || []).concat([{
      ts: Date.now(), correct: correct, total: total, mode: Q.mode
    }]);
    if (S.history.length > 40) S.history = S.history.slice(-40);
    save();

    try {
      renderResults();
      renderMast();
      renderRecap();
    } catch (err) {
      if (window.console) console.error("Could not build the review list:", err);
      $("#r-label").textContent = Q.mode === "mock" ? "Mock test result" : "Practice result";
      $("#r-big").textContent = correct + " / " + total;
      $("#r-sub").textContent = total
        ? Math.round((correct / total) * 100) + "% accuracy"
        : "";
      $("#r-break").innerHTML = "";
      $("#review-panel").hidden = true;
    } finally {
      showScreen("s-result");
    }
  }

  function gradeAll() {
    if (Q.graded) return;
    Q.graded = true;
    Q.list.forEach(function (q, i) {
      if (Q.status[i] === "skip" || Q.status[i] === null) {
        Q.status[i] = false;
        return;
      }
      var correct;
      if (q.type === "mcq") correct = Q.picked[i] === q.answer;
      else if (q.type === "msq") correct = gradeMsq(q, Q.picked[i]);
      else correct = gradeFib(q, Q.picked[i]);
      Q.status[i] = correct;
      if (correct) Q.correct += 1;
      if (!Q.justRecorded[i]) { record(q.id, correct); Q.justRecorded[i] = true; }
    });
  }

  /* ---------------- results ---------------- */
  var reviewFilter = "missed";

  function renderResults() {
    var total = Q.list.length;
    var correct = Q.correct;
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var skipped = Q.list.filter(function (q, i) {
      return Q.status[i] !== true && Q.status[i] !== false;
    }).length;

    $("#r-label").textContent = Q.mode === "mock" ? "Mock test result" : "Practice result";
    $("#r-big").textContent = correct + " / " + total;
    $("#r-sub").textContent =
      pct + "% accuracy · " + (total - correct) + " to revisit" +
      (skipped ? " · " + skipped + " skipped" : "") +
      " · " + $("#q-time").textContent + " taken";

    /* breakdown tiles: by unit, then by format */
    var tiles = [];
    UNITS.forEach(function (u) {
      var idxs = [];
      Q.list.forEach(function (q, i) { if (q.unit === u) idxs.push(i); });
      if (idxs.length) tiles.push(tile("Unit " + u, idxs));
    });
    ["mcq", "msq", "fib"].forEach(function (t) {
      var idxs = [];
      Q.list.forEach(function (q, i) { if (q.type === t) idxs.push(i); });
      if (idxs.length) tiles.push(tile(TYPE_LABEL[t], idxs));
    });

    $("#r-break").innerHTML = tiles.join("");

    var missed = [];
    Q.list.forEach(function (q, i) { if (Q.status[i] !== true) missed.push(i); });

    var btn = $("#btn-review");
    if (missed.length) {
      btn.hidden = false;
      btn.textContent = "Rehearse the " + missed.length + " I missed";
      btn.onclick = function () {
        var list = missed.map(function (i) { return Q.list[i]; });
        start(shuffle(list), "practice");
      };
    } else {
      btn.hidden = true;
    }

    $("#btn-again").onclick = function () { start(Q.list.slice(), Q.mode); };

    reviewFilter = missed.length ? "missed" : "all";
    renderReview();
    $("#review-panel").hidden = false;
  }

  function tile(label, idxs) {
    var ok = idxs.filter(function (i) { return Q.status[i] === true; }).length;
    var pct = Math.round((ok / idxs.length) * 100);
    return '<div class="bd"><span class="k">' + esc(label) + "</span>" +
      '<span class="v">' + ok + "/" + idxs.length + "</span>" +
      '<span class="bar"><i style="width:' + pct + '%"></i></span></div>';
  }

  function renderReview() {
    var host = $("#r-review");
    var shown = [];
    Q.list.forEach(function (q, i) {
      var wrong = Q.status[i] !== true;
      if (reviewFilter === "all" || wrong) shown.push(i);
    });

    var toggles =
      '<div class="seg seg-sm" style="margin-bottom:16px">' +
      '<button type="button" class="seg-b' + (reviewFilter === "missed" ? " is-on" : "") +
      '" data-rf="missed">Wrong &amp; skipped only</button>' +
      '<button type="button" class="seg-b' + (reviewFilter === "all" ? " is-on" : "") +
      '" data-rf="all">Show every question</button></div>';

    host.innerHTML = toggles;
    Array.prototype.forEach.call(host.querySelectorAll("[data-rf]"), function (b) {
      b.addEventListener("click", function () {
        reviewFilter = b.dataset.rf;
        renderReview();
      });
    });

    if (!shown.length) {
      var p = document.createElement("p");
      p.className = "why";
      p.textContent = "Nothing to review — every question was answered correctly.";
      host.appendChild(p);
      return;
    }

    shown.forEach(function (i) {
      host.appendChild(reviewItem(i));
    });
  }

  function reviewItem(i) {
    var q = Q.list[i];
    var st = Q.status[i];
    var cls = st === true ? "ok" : (st === false ? "wrong" : "skip");
    var label = st === true ? "Correct"
      : st === false ? "Wrong"
      : st === "skip" ? "Skipped" : "Not attempted";

    var d = document.createElement("div");
    d.className = "rev-item " + cls;

    var head = document.createElement("div");
    head.className = "rev-top";
    head.innerHTML = '<span class="rev-state">' + label + "</span>" +
      '<span class="rev-topic">' + esc(TYPE_SHORT[q.type]) + " · Unit " + q.unit + " · " + esc(q.topic) + "</span>";
    d.appendChild(head);

    var stem = document.createElement("p");
    stem.className = "rev-q";
    stem.textContent = q.q;
    d.appendChild(stem);

    d.insertAdjacentHTML("beforeend", answerBlock(q, i));
    d.insertAdjacentHTML("beforeend", '<p class="rev-why">' + esc(q.explain) + "</p>");
    return d;
  }

  function answerBlock(q, i) {
    if (q.type === "fib") {
      var mine = Q.picked[i] ? String(Q.picked[i]) : "(nothing typed)";
      var out = "";
      if (Q.status[i] !== true) {
        out += '<p class="rev-ans mine"><span class="lbl">You</span>' + esc(mine) + "</p>";
      }
      out += '<p class="rev-ans right"><span class="lbl">Answer</span>' + esc(q.answer[0]) + "</p>";
      return out;
    }
    var picked = Q.picked[i];
    var arr = q.type === "msq" ? picked : (picked === null ? [] : [picked]);
    var mineTxt = arr.length
      ? arr.slice().sort(function (a, b) { return a - b; })
          .map(function (k) { return LETTERS[k] + " — " + q.options[k]; }).join(" · ")
      : "(nothing selected)";
    /* MCQ stores a single index; MSQ stores an array */
    var rightIdx = q.type === "msq" ? q.answer : [q.answer];
    var right = rightIdx.map(function (k) {
      return LETTERS[k] + " — " + q.options[k];
    }).join(" · ");

    var out2 = "";
    if (Q.status[i] !== true) {
      out2 += '<p class="rev-ans mine"><span class="lbl">You</span>' + esc(mineTxt) + "</p>";
    }
    out2 += '<p class="rev-ans right"><span class="lbl">Answer</span>' + esc(right) + "</p>";
    return out2;
  }

  /* ---------------- wiring ---------------- */
  function segment(sel, attr, apply) {
    var box = $(sel);
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b || !b.dataset[attr]) return;
      Array.prototype.forEach.call(box.querySelectorAll("button"), function (x) {
        x.classList.remove("is-on");
      });
      b.classList.add("is-on");
      apply(b.dataset[attr]);
      renderPreview();
    });
  }

  function init() {
    renderMast();
    renderRecap();
    renderTopics();
    renderTypes();
    renderPreview();

    // unit buttons toggle independently — only when the build has several units
    var unitBox = $("#f-unit");
    if (unitBox && UNITS.length > 1) {
      unitBox.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b || !b.dataset.unit) return;
        var v = b.dataset.unit;
        F.units[v] = !F.units[v];
        b.classList.toggle("is-on", F.units[v]);
        renderTopics();
        renderPreview();
      });
    }

    segment("#f-len", "len", function (v) { F.len = v; });
    segment("#f-order", "order", function (v) { F.order = v; });
    segment("#f-mode", "mode", function (v) { F.mode = v; });

    $("#topics-all").addEventListener("click", function () {
      TOPICS.forEach(function (t) { F.topics[t.name] = true; });
      renderTopics(); renderPreview();
    });
    $("#topics-none").addEventListener("click", function () {
      TOPICS.forEach(function (t) { F.topics[t.name] = false; });
      renderTopics(); renderPreview();
    });
    $("#f-missed").addEventListener("change", function (e) {
      F.missedOnly = e.target.checked;
      renderPreview();
    });

    $("#btn-start").addEventListener("click", function () {
      var list = selectedList();
      start(list, F.mode);
    });

    $("#btn-check").addEventListener("click", primaryAction);
    $("#btn-skip").addEventListener("click", skip);
    $("#btn-quit").addEventListener("click", function () {
      if (Q.mode === "mock") gradeAll();
      endSession();
    });
    $("#btn-home").addEventListener("click", function () {
      Q = null;
      renderMast(); renderRecap(); renderPreview();
      showScreen("s-home");
    });
    $("#btn-reset").addEventListener("click", function () {
      if (confirm("Erase every saved answer and test record?")) {
        S = { seen: {}, history: [] };
        save(); renderMast(); renderRecap(); renderPreview();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (!Q || $("#s-quiz").hidden) return;
      var inField = e.target && e.target.classList && e.target.classList.contains("fib-input");

      if (e.key === "Enter") {
        e.preventDefault();
        primaryAction();
        return;
      }
      if (inField) return;
      if (/^[1-9]$/.test(e.key)) {
        var i = parseInt(e.key, 10) - 1;
        var q = Q.list[Q.idx];
        if (q.options && i < q.options.length) {
          e.preventDefault();
          pick(i);
        }
        return;
      }
      if (e.key === "ArrowRight" && (Q.status[Q.idx] === true || Q.status[Q.idx] === false)) {
        e.preventDefault();
        next();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
