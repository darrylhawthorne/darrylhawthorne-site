import { html, render, Component as PComponent } from '/js/htm-preact.js';
class DCLogic extends PComponent {
  constructor(props) { super(props); this.state = {}; }
  render() { return TEMPLATE(this.renderVals ? this.renderVals() : {}); }
}
const TEMPLATE = (v) => html`<div class=${v.rootCls}>
<div class="grain" aria-hidden="true"></div>
<div class="cur-dot" ref=${v.dotRef} aria-hidden="true"></div>
<div class=${v.ringCls} ref=${v.ringRef} aria-hidden="true"><span>${v.curLabel}</span></div>

<header class="wrap" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 20px; padding-bottom: 20px; flex-wrap: wrap">
<a href="/" class="disp" style="text-decoration: none; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; display: inline-flex; align-items: center; gap: 10px; min-height: 44px; color: #F2F2EF">
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5l2.6 7.2 7.4.3-5.8 4.6 2 7.3L12 16.7l-6.2 4.2 2-7.3L2 9l7.4-.3z" fill="#8EA0FF"></path></svg>
Darryl Hawthorne</a>
<nav aria-label="Primary" style="display: flex; gap: 20px; flex-wrap: wrap">
<a class="navlink" href="#work">Work</a>
<a class="navlink" href="#about">About</a>
<a class="navlink" href="/assets/6276216abfa4.pdf" target="_blank" rel="noopener">Resume</a>
<a class="navlink" href="#contact">Contact</a>
</nav>
</header>

<main>
<section class="wrap hero" aria-labelledby="hero-title">
<div>
<p class="fade muted" style="margin: 0 0 28px; font-size: 15px; font-weight: 500; display: flex; align-items: center; gap: 10px; animation-delay: .1s">
<span style="width: 10px; height: 10px; border-radius: 50%; background: #2BC275; box-shadow: 0 0 0 4px rgba(43,194,117,.2)"></span>
Product designer · Open to internships and new grad roles</p>
<h1 id="hero-title" class="disp" style="margin: 0; font-size: clamp(46px, 6.6vw, 100px); line-height: 1.0; letter-spacing: -0.035em; font-weight: 600">
<span class="w"><span style="animation-delay: .15s">I</span></span>
<span class="w"><span style="animation-delay: .21s">design</span></span>
<span class="w"><span style="animation-delay: .27s">simple</span></span>
<span class="w"><span style="animation-delay: .33s">fixes</span></span>
<span class="w"><span style="animation-delay: .39s">for</span></span>
<span class="w"><span class="serif" style="animation-delay: .45s; color: #8EA0FF; font-size: 1.12em; line-height: .9">everyday</span></span>
<span class="w"><span style="animation-delay: .51s">frustrations.</span></span>
</h1>
<p class="fade" style="margin: 32px 0 0; max-width: 560px; font-size: 19px; line-height: 1.55; color: #C9C9CD; animation-delay: .8s">I'm a product designer and UX Design student at Wilfrid Laurier University. I start with what bugs people, research why, and design until the result shows up in the numbers.</p>
<dl class="stats fade" style="animation-delay: 1s">
<div><dt>Client conversion lift</dt><dd><span class="disp">${v.n1}%</span> in 8 days</dd></div>
<div><dt>Idea to App Store</dt><dd><span class="disp">${v.n2}</span> months</dd></div>
<div><dt>Sortit reviews</dt><dd><span class="disp">${v.n3}★</span> every one</dd></div>
</dl>
</div>

<div class="fade" style="animation-delay: .6s">
<div class="phone" role="group" aria-label="Try a Sortit style cleanup: keep or delete each photo">
<div class="screen">
<img class="head" src="/assets/cefb81abebd9.png" alt="Sortit swipe mode: Recents" />
<div class="stack" data-cur="Swipe" onPointerDown=${v.down} onPointerMove=${v.move} onPointerUp=${v.up} onPointerCancel=${v.up}>
${v.hasNext ? html`<div class="card" style="transform: scale(.96); opacity: .7"><img src=${v.next.src} alt="" /></div>` : null}
${v.hasTop ? html`<div class="card" style=${v.topStyle}><img src=${v.top.src} alt=${v.top.label} /><span class="badge keep" style="opacity: ${v.keepOp}">KEEP</span><span class="badge del" style="opacity: ${v.delOp}">DELETE</span></div>` : null}
${v.finished ? html`<div class="done"><img src="/assets/b1996bb85386.png" alt="" style="width: 56px; height: 56px; border-radius: 22%" /><p class="disp" style="margin: 6px 0 0; font-size: 24px; font-weight: 700">All clean</p><p style="margin: 0; font-size: 14px; color: #A3A3A8">${v.kept} kept · ${v.deleted} deleted</p><button type="button" class="again" onClick=${v.reset}>Try again</button><a href="/sortit" style="color: #8EA0FF; font-weight: 600; font-size: 14px; min-height: 44px; display: inline-flex; align-items: center">See the Sortit case study →</a></div>` : null}
</div>
<div class="thumbs" aria-hidden="true">${(v.thumbs || []).map((t) => html`<img src=${t.src} alt="" />`)}</div>
<div class="acts"><button type="button" class="act del" onClick=${v.doDel} disabled=${v.finished}>DELETE</button><button type="button" class="act keep" onClick=${v.doKeep} disabled=${v.finished}>KEEP</button></div>
<div class="sbar" aria-hidden="true"><div><b>${v.reviewed}</b><i>REVIEWED</i></div><div><b style="color: #C77DFF">${v.deleted}</b><i>DELETED</i></div><div><b style="color: #39D353">${v.kept}</b><i>KEPT</i></div><div><b style="color: #4F8BFF">${v.freed}MB</b><i>FREED</i></div></div>
<img class="tabs" src="/assets/37a899c32990.png" alt="" />
</div>
</div>
<p class="muted" style="text-align: center; font-size: 14px; margin: 16px 0 0">Swipe or tap: a taste of <a href="/sortit">Sortit</a></p>
<p aria-live="polite" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">${v.live}</p>
</div>
</section>

<div aria-hidden="true" style="overflow: hidden; border-top: 1px solid #2A2A2E; border-bottom: 1px solid #2A2A2E; padding: 20px 0">
<div class="marq">
<span class="serif" style="padding-right: 56px; white-space: nowrap; font-size: 30px; color: #C9C9CD">User research ✦ Usability testing ✦ Wireframing ✦ Prototyping ✦ Interaction design ✦ Information architecture ✦ Design systems ✦ Figma ✦ Framer ✦ Journey mapping ✦ Visual design ✦</span>
<span class="serif" style="padding-right: 56px; white-space: nowrap; font-size: 30px; color: #C9C9CD">User research ✦ Usability testing ✦ Wireframing ✦ Prototyping ✦ Interaction design ✦ Information architecture ✦ Design systems ✦ Figma ✦ Framer ✦ Journey mapping ✦ Visual design ✦</span>
</div>
</div>

<section id="work" class="wrap wide" style="padding-top: 128px" aria-labelledby="work-title">
<div style="display: flex; justify-content: space-between; align-items: end; gap: 24px; flex-wrap: wrap; margin-bottom: 56px">
<h2 id="work-title" class="disp" style="margin: 0; font-size: clamp(40px, 5.4vw, 72px); letter-spacing: -0.035em; font-weight: 600; line-height: 1">Selected <span class="serif" style="font-size: 1.1em">work</span></h2>
<p class="muted" style="margin: 0; font-size: 16px">2025 to 2026</p>
</div>
<div class="bento">
<a class="tile t-sortit reveal" href="/sortit" data-cur="View">
<div class="box zoom">
<img src="/assets/020223d88ab6.jpg" alt="" style="height: 82%; width: auto" />
<video class="rnd" ref=${v.v1} src="/assets/4e0efa0286bc.mp4" poster="/assets/da0c0c927bdd.jpg" loop playsinline muted aria-label="Sortit screen recording: finding similar photos and deleting them" style="height: 88%; width: auto"></video>
<img src="/assets/a758598c7e60.jpg" alt="" style="height: 82%; width: auto" />
</div>
<p class="lbl"><b>Sortit</b>A phone cleaner people trust, from Figma to the App Store in three months. <span class="go" aria-hidden="true">→</span></p>
</a>
<a class="tile t-dh reveal" href="/diversihire" data-cur="View">
<div class="box zoom"><img src="/assets/be1bc8344b63.jpg" alt="DiversiHire app screens" style="width: 82%; height: auto" /></div>
<p class="lbl"><b>DiversiHire</b>Job search for people who read and communicate differently. <span class="go" aria-hidden="true">→</span></p>
</a>
<a class="tile t-ac reveal" href="/air-canada" data-cur="View">
<div class="box zoom">
<img src="/assets/0ee827961fd1.png" alt="" style="width: 38%; height: auto; margin-top: 14%" />
<img src="/assets/9f30f3b8b252.png" alt="Redesigned Air Canada assistant answering a bereavement fare question" style="width: 42%; height: auto" />
</div>
<p class="lbl"><b>Air Canada Assistant</b>An airline chatbot that admits when it isn't sure. <span class="go" aria-hidden="true">→</span></p>
</a>
</div>
</section>

<section class="wrap wide" style="padding-top: 160px" aria-labelledby="more-title">
<div class="split">
<div class="panel" aria-hidden="true">
<div class="meta"><span>Waterloo, ON</span><span>${v.clock}</span></div>
<div class=${v.pv0} style="background: #2340E0"><p class="serif idle">Hover a problem<br />to see the fix</p></div>
<div class=${v.pv1} style="background: #9A4F08"><img class="ph" src="/assets/93ccabec3cc1.jpg" alt="" /></div>
<div class=${v.pv2} style="background: #CB570E"><video ref=${v.v2} src="/assets/4a8d2a0c59af.mp4" poster="/assets/f88e73dbad42.jpg" loop playsinline muted></video></div>
<div class=${v.pv3} style="background: #7C47DD"><video ref=${v.v3} src="/assets/cdde944296c5.mp4" poster="/assets/0da42dbc7705.jpg" loop playsinline muted></video></div>
</div>
<div>
<h2 id="more-title" class="disp" style="margin: 0 0 32px; font-size: clamp(40px, 5.4vw, 72px); letter-spacing: -0.035em; font-weight: 600; line-height: 1">More <span class="serif" style="font-size: 1.1em">fixes</span></h2>
<div class="idx" onMouseLeave=${v.h0}>
<a class="row" data-cur="Open" href="/street-light" onMouseEnter=${v.h1} onFocus=${v.h1}><span class="q serif">Street too dark at night?</span><span class="yr">Maker project</span><span class="d">Street Light · a lantern that glows brighter as you walk toward it</span></a>
<a class="row" data-cur="Open" href="/concepts" onMouseEnter=${v.h2} onFocus=${v.h2}><span class="q serif">Drive thru line too slow?</span><span class="yr">Concept</span><span class="d">Instant Assist · order with Siri, powered by <img src="/assets/7c6e24e3d61c.png" alt="Uber" style="height: 12px; width: auto; filter: invert(1)" /></span></a>
<a class="row" data-cur="Open" href="/concepts" onMouseEnter=${v.h3} onFocus=${v.h3}><span class="q serif">Feed showing the same videos?</span><span class="yr">Concept</span><span class="d"><img src="/assets/dd73afcb2fa3.png" alt="" style="height: 16px; width: auto" />Mood Board · a YouTube feed built from how you feel</span></a>
</div>
</div>
</div>
</section>

<section id="about" class="wrap" style="padding-top: 144px; padding-bottom: 128px" aria-labelledby="about-title">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 56px">
<div class="reveal">
<h2 id="about-title" class="disp" style="margin: 0; font-size: clamp(40px, 5.4vw, 72px); letter-spacing: -0.035em; font-weight: 600; line-height: 1"><span class="serif" style="font-size: 1.1em">About</span></h2>
<p style="margin: 28px 0 0; font-size: 20px; line-height: 1.55; color: #C9C9CD; max-width: 520px">I'm Darryl, a product designer who starts with the problem. I've redesigned a retailer's customer journey, helped a client lift conversions 18% in 8 days, and taken my own app from Figma to the App Store.</p>
<p style="margin: 20px 0 0; font-size: 20px; line-height: 1.55; color: #C9C9CD">Based in Waterloo, Ontario. Open to relocation.</p>
</div>
<div class="reveal" style="align-self: end">
<p class="muted" style="margin: 0 0 8px; font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Experience</p>
<div class="exp"><strong style="font-weight: 600">Costco Wholesale</strong><span style="color: #C9C9CD">PM Merchandising Stocker · store layout and flow</span><span class="muted">2026 to now</span></div>
<div class="exp"><strong style="font-weight: 600">Elvanta</strong><span style="color: #C9C9CD">Founder · designed and launched Sortit for iOS</span><span class="muted">2026</span></div>
<div class="exp"><strong style="font-weight: 600">Wilfrid Laurier University</strong><span style="color: #C9C9CD">BA, User Experience Design</span><span class="muted">2024 to 2027</span></div>
<div class="exp"><strong style="font-weight: 600">Mosaic</strong><span style="color: #C9C9CD">UX & Digital Product Advisor</span><span class="muted">2023</span></div>
<div class="exp"><strong style="font-weight: 600">All About Sewing</strong><span style="color: #C9C9CD">UX Designer · customer journey architecture</span><span class="muted">2022 to 2023</span></div>
<div class="exp"><strong style="font-weight: 600">YAAACE</strong><span style="color: #C9C9CD">Product Design Intern</span><span class="muted">2022</span></div>
<div class="exp" style="border-bottom: 1px solid #2A2A2E"><strong style="font-weight: 600">Humber College</strong><span style="color: #C9C9CD">Advertising and Marketing Communications Diploma · Dean's Honour Roll</span><span class="muted">2020 to 2022</span></div>
</div>
</div>
</section>
</main>

<footer id="contact" style="border-top: 1px solid #2A2A2E">
<div class="wrap" style="padding-top: 120px; padding-bottom: 48px">
<p class="reveal muted" style="margin: 0; font-size: 16px">Have a role, a project or a hard problem?</p>
<p class="disp reveal" style="margin: 20px 0 0; font-size: clamp(26px, 6.4vw, 88px); font-weight: 600; letter-spacing: -0.035em; line-height: 1.02; overflow-wrap: anywhere"><a class="mail" href="mailto:darrylh1301@gmail.com">darrylh1301@gmail.com</a></p>
<div style="display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-top: 120px; padding-top: 28px; border-top: 1px solid #2A2A2E; font-size: 15px" class="muted">
<span>© 2026 Darryl Hawthorne</span>
<nav aria-label="Elsewhere" style="display: flex; gap: 24px; flex-wrap: wrap">
<a class="navlink" href="https://www.linkedin.com/in/darryl-hawthorne/">LinkedIn</a>
<a class="navlink" href="/assets/6276216abfa4.pdf" target="_blank" rel="noopener">Resume</a>
<a class="navlink" href="https://apps.apple.com/app/id6800830990">Sortit on the App Store</a>
</nav>
</div>
</div>
</footer>
</div>`;
class Component extends DCLogic {
  constructor(props) {
    super(props);
    const reduce = (() => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
    this.reduce = reduce;
    this.cards = [
      { src: '/assets/93ccabec3cc1.jpg', label: 'Lantern, front' },
      { src: '/assets/44f0e32d74d7.jpg', label: 'Lantern, top (similar)' },
      { src: '/assets/b8c445358130.jpg', label: 'Lantern, side' },
      { src: '/assets/deed0f2c4a82.jpg', label: 'Cutting the frame' },
      { src: '/assets/14c9254c1420.jpg', label: 'Frame test' },
      { src: '/assets/eff3cb517ba6.jpg', label: 'Wiring the Arduino' }
    ];
    this.sizes = [4.2, 3.8, 5.1, 2.9, 3.4, 4.6];
    this.state = { t: reduce ? 1 : 0, i: 0, dx: 0, drag: false, out: false, kept: 0, deleted: 0, freed: 0, hov: 0, clock: '', live: '', curOn: false, curLabel: '', curLink: false };
    this.mx = -100; this.my = -100; this.rx = -100; this.ry = -100;
    this.dotRef = (el) => { this.dot = el; };
    this.ringRef = (el) => { this.ring = el; };
    this.onMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      this.mx = e.clientX; this.my = e.clientY;
      const t = e.target && e.target.closest ? e.target : null;
      const lab = t ? t.closest('[data-cur]') : null;
      const label = lab ? lab.getAttribute('data-cur') : '';
      const link = !lab && t ? !!t.closest('a,button') : false;
      const s = this.state;
      if (!s.curOn || s.curLabel !== label || s.curLink !== link) this.setState({ curOn: true, curLabel: label, curLink: link });
    };
    this.onLeave = () => { if (this.state.curOn) this.setState({ curOn: false }); };
    this.onScroll = () => {
      if (!this.state.curOn) return;
      const el = document.elementFromPoint(this.mx, this.my);
      if (el) this.onMove({ clientX: this.mx, clientY: this.my, target: el });
    };
    this.startX = 0;
    this.vids = [];
    const hook = (i, auto) => (el) => {
      this.vids[i] = el;
      if (!el) return;
      el.muted = true; el.defaultMuted = true; el.playsInline = true;
      if (auto && !reduce) { const p = el.play(); if (p && p.catch) p.catch(() => {}); }
    };
    this.v1 = hook(0, true); this.v2 = hook(1, false); this.v3 = hook(2, false);
    this.decide = (keep) => {
      if (this.state.out || this.state.i >= this.cards.length) return;
      this.setState({ out: true, drag: false, dx: keep ? 520 : -520 });
      setTimeout(() => {
        const s = this.state;
        const kept = s.kept + (keep ? 1 : 0), deleted = s.deleted + (keep ? 0 : 1);
        const freed = Math.round((s.freed + (keep ? 0 : (this.sizes[s.i] || 3))) * 10) / 10;
        this.setState({ i: s.i + 1, out: false, dx: 0, kept, deleted, freed, live: (keep ? 'Kept. ' : 'Deleted. ') + (this.cards.length - s.i - 1) + ' left.' });
      }, this.reduce ? 0 : 280);
    };
    this.down = (e) => {
      if (this.state.out || this.state.i >= this.cards.length) return;
      this.startX = e.clientX;
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
      this.setState({ drag: true });
    };
    this.move = (e) => { if (this.state.drag) this.setState({ dx: e.clientX - this.startX }); };
    this.up = () => {
      if (!this.state.drag) return;
      const dx = this.state.dx;
      if (Math.abs(dx) > 80) this.decide(dx > 0); else this.setState({ drag: false, dx: 0 });
    };
    this.doKeep = () => this.decide(true);
    this.doDel = () => this.decide(false);
    this.reset = () => this.setState({ i: 0, kept: 0, deleted: 0, freed: 0, dx: 0, out: false, live: 'Restarted.' });
    this.hov = [0, 1, 2, 3].map((n) => () => {
      if (this.state.hov === n) return;
      this.setState({ hov: n });
      [1, 2].forEach((k) => { const el = this.vids[k]; if (!el) return; if (k === n - 1 && !this.reduce) { const p = el.play(); if (p && p.catch) p.catch(() => {}); } else el.pause(); });
    });
  }
  tickClock() {
    try { this.setState({ clock: new Date().toLocaleTimeString('en-CA', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Toronto' }) }); } catch (e) {}
  }
  componentDidMount() {
    this.tickClock();
    this.timer = setInterval(() => this.tickClock(), 20000);
    if (this.reduce) return;
    let fine = false;
    try { fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches; } catch (e) {}
    if (fine) {
      window.addEventListener('pointermove', this.onMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', this.onLeave);
      window.addEventListener('scroll', this.onScroll, { passive: true });
      const loop = () => {
        this.rx += (this.mx - this.rx) * 0.16; this.ry += (this.my - this.ry) * 0.16;
        if (this.dot) this.dot.style.transform = 'translate3d(' + this.mx + 'px,' + this.my + 'px,0)';
        if (this.ring) this.ring.style.transform = 'translate3d(' + this.rx + 'px,' + this.ry + 'px,0)';
        this.craf = requestAnimationFrame(loop);
      };
      this.craf = requestAnimationFrame(loop);
    }
    const start = performance.now() + 1200, dur = 1400;
    const tick = (now) => {
      const k = Math.min(1, Math.max(0, (now - start) / dur));
      this.setState({ t: 1 - Math.pow(1 - k, 3) });
      if (k < 1) this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }
  componentWillUnmount() { if (this.raf) cancelAnimationFrame(this.raf); if (this.craf) cancelAnimationFrame(this.craf); if (this.timer) clearInterval(this.timer); window.removeEventListener('pointermove', this.onMove); window.removeEventListener('scroll', this.onScroll); document.documentElement.removeEventListener('mouseleave', this.onLeave); }
  renderVals() {
    const s = this.state, c = this.cards, n = c.length;
    const top = c[s.i] || c[0], next = c[s.i + 1] || c[0], third = c[s.i + 2] || c[0];
    const rot = s.dx / 18;
    const anim = s.drag ? 'none' : 'transform .28s cubic-bezier(.2,.75,.1,1), opacity .28s';
    const topStyle = 'transform: translateX(' + s.dx + 'px) rotate(' + rot + 'deg); transition: ' + anim + '; opacity: ' + (s.out ? 0 : 1) + '; z-index: 3';
    const pv = (k) => 'pv' + (s.hov === k ? ' on' : '');
    return {
      n1: Math.round(18 * s.t), n2: Math.max(1, Math.round(3 * s.t)), n3: Math.max(1, Math.round(5 * s.t)),
      v1: this.v1, v2: this.v2, v3: this.v3,
      top, next, third, topStyle,
      hasTop: s.i < n, hasNext: s.i + 1 < n, hasThird: s.i + 2 < n, finished: s.i >= n,
      keepOp: Math.max(0, Math.min(1, s.dx / 90)), delOp: Math.max(0, Math.min(1, -s.dx / 90)),
      left: Math.max(0, n - s.i), kept: s.kept, deleted: s.deleted, live: s.live,
      down: this.down, move: this.move, up: this.up, doKeep: this.doKeep, doDel: this.doDel, reset: this.reset,
      h0: this.hov[0], h1: this.hov[1], h2: this.hov[2], h3: this.hov[3],
      pv0: pv(0), pv1: pv(1), pv2: pv(2), pv3: pv(3), clock: s.clock,
      thumbs: c.slice(s.i + 1, s.i + 7), reviewed: s.kept + s.deleted, freed: s.freed,
      dotRef: this.dotRef, ringRef: this.ringRef, curLabel: s.curLabel,
      ringCls: 'cur-ring' + (s.curLabel ? ' lab' : (s.curLink ? ' link' : '')),
      rootCls: 'dk' + (s.curOn ? ' cur-on' : '')
    };
  }
}
const __root = document.getElementById('app');
__root.textContent = '';
render(html`<${Component} />`, __root);
