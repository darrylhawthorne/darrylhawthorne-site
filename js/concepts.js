import { html, render, Component as PComponent } from '/js/htm-preact.js';
class DCLogic extends PComponent {
  constructor(props) { super(props); this.state = {}; }
  render() { return TEMPLATE(this.renderVals ? this.renderVals() : {}); }
}
const TEMPLATE = (v) => html`<div class="dh" style="min-height: 100vh; background: #F6F6F6">

<header class="wrap" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 20px; padding-bottom: 20px; flex-wrap: wrap">
<a href="/" class="disp" style="text-decoration: none; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; display: inline-flex; align-items: center; gap: 10px; min-height: 44px">
Darryl Hawthorne</a>
<nav aria-label="Primary" style="display: flex; gap: 20px; flex-wrap: wrap">
<a class="navlink" href="/#work">Work</a>
<a class="navlink" href="/#about">About</a>
<a class="navlink" href="/assets/6276216abfa4.pdf" target="_blank" rel="noopener">Resume</a>
<a class="navlink" href="#contact">Contact</a>
</nav>
</header>

<main>
<section class="wrap" style="padding-top: 72px; padding-bottom: 72px">
<a href="/#work" class="fade" style="text-decoration: none; font-size: 15px; font-weight: 500; color: #55565B; display: inline-flex; min-height: 44px; align-items: center">← All work</a>
<p class="eyebrow fade" style="margin-top: 40px; animation-delay: .05s">Speculative · My own ideas</p>
<h1 class="disp fade" style="margin: 0; font-size: clamp(48px, 7.4vw, 112px); letter-spacing: -0.04em; line-height: .98; font-weight: 700; animation-delay: .1s">Concept ideas</h1>
<p class="fade" style="margin: 24px 0 0; max-width: 720px; font-size: clamp(22px, 2.2vw, 28px); line-height: 1.35; color: #3D3E43; animation-delay: .2s">Features I wish existed in apps I use every day. Each one is a small fix to a real frustration. Let me know what you think.</p>
</section>

<section class="wrap" aria-labelledby="c1" style="padding-bottom: 128px">
<div class="concept reveal">
<div class="stage">
<video ref=${v.v1} src="/assets/e251a750fa79.mp4" poster="/assets/d79a919d70e0.jpg" loop playsinline muted aria-label="Instant Assist: Siri takes a McDonald's order and starts directions to pick it up"></video>
<button type="button" class="ctl" onClick=${v.t1}>${v.l1}</button>
</div>
<div class="copy">
<p class="eyebrow" style="display: flex; align-items: center; gap: 12px">01 · Apple Siri, powered by <img src="/assets/7c6e24e3d61c.png" alt="Uber" style="height: 14px; width: auto" /></p>
<h2 id="c1" class="disp" style="margin: 0; font-size: clamp(34px, 4vw, 52px); letter-spacing: -0.03em; line-height: 1.02; font-weight: 650">Instant Assist</h2>
<p style="margin: 14px 0 0; font-size: 21px; font-weight: 500">Have Siri place your order while you're on the go.</p>
<p style="margin: 20px 0 0; font-size: 18px; line-height: 1.6; color: #3D3E43">Drivers short on time want food but find busy drive thrus slow. Instant Assist extends Siri to take a food order by voice through Uber, confirm it in one tap and start directions to the pickup, keeping hands off the screen.</p>
</div>
</div>
</section>

<section class="wrap" aria-labelledby="c2" style="padding-bottom: 128px">
<div class="concept flip reveal">
<div class="stage">
<video ref=${v.v2} src="/assets/7a796cdb5a3b.mp4" poster="/assets/63e738fffb16.jpg" loop playsinline muted aria-label="Mood Board: the viewer tells YouTube how they feel and gets a feed built for that mood"></video>
<button type="button" class="ctl" onClick=${v.t2}>${v.l2}</button>
</div>
<div class="copy">
<p class="eyebrow" style="color: #8A4B12; display: flex; align-items: center; gap: 12px"><img src="/assets/dd73afcb2fa3.png" alt="" style="height: 22px; width: auto" />02 · YouTube</p>
<h2 id="c2" class="disp" style="margin: 0; font-size: clamp(34px, 4vw, 52px); letter-spacing: -0.03em; line-height: 1.02; font-weight: 650">Mood Board</h2>
<p style="margin: 14px 0 0; font-size: 21px; font-weight: 500">Connect with YouTube on a more personal level.</p>
<p style="margin: 20px 0 0; font-size: 18px; line-height: 1.6; color: #3D3E43">The recommendation algorithm can feel overwhelming, like it keeps pushing the same content. Mood Board lets you tell YouTube how you feel right now, then builds a feed for that exact vibe. For YouTube, it's a way to build a deeper connection with viewers.</p>
</div>
</div>
</section>
</main>

<footer id="contact" style="background: #111113">
<div class="wrap">
<a class="next" href="/diversihire">
<span><span style="display: block; font-size: 15px; color: #B4B5B9">Back to the case studies</span><span class="disp" style="display: block; margin-top: 12px; font-size: clamp(36px, 5.6vw, 80px); font-weight: 650; letter-spacing: -0.035em; line-height: 1">DiversiHire</span></span>
<span class="disp arrow" aria-hidden="true" style="font-size: clamp(36px, 5.6vw, 80px)">→</span>
</a>
<p style="margin: 0; padding: 28px 0 40px; border-top: 1px solid #2E2F33; font-size: 15px; color: #B4B5B9">© 2026 Darryl Hawthorne · <a href="mailto:darrylh1301@gmail.com" style="color: #F6F6F6">darrylh1301@gmail.com</a> · <a href="https://www.linkedin.com/in/darryl-hawthorne/" style="color: #F6F6F6">LinkedIn</a></p>
</div>
</footer>
</div>`;
class Component extends DCLogic {
  constructor(props) {
    super(props);
    const reduce = (() => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
    this.state = { a: reduce, b: reduce };
    this.vids = [];
    const hook = (i, key) => (el) => {
      this.vids[i] = el;
      if (!el) return;
      el.muted = true; el.defaultMuted = true; el.playsInline = true;
      if (!this.state[key]) { const p = el.play(); if (p && p.catch) p.catch(() => {}); }
    };
    this.v1 = hook(0, 'a');
    this.v2 = hook(1, 'b');
    const toggle = (i, key) => () => {
      const paused = !this.state[key];
      this.setState({ [key]: paused });
      const el = this.vids[i];
      if (!el) return;
      if (paused) el.pause(); else { const p = el.play(); if (p && p.catch) p.catch(() => {}); }
    };
    this.t1 = toggle(0, 'a');
    this.t2 = toggle(1, 'b');
  }
  renderVals() {
    const s = this.state;
    return {
      v1: this.v1, v2: this.v2, t1: this.t1, t2: this.t2,
      l1: s.a ? 'Play Instant Assist video' : 'Pause Instant Assist video',
      l2: s.b ? 'Play Mood Board video' : 'Pause Mood Board video'
    };
  }
}
const __root = document.getElementById('app');
__root.textContent = '';
render(html`<${Component} />`, __root);
