import { html, render, Component as PComponent } from '/js/htm-preact.js';
class DCLogic extends PComponent {
  constructor(props) { super(props); this.state = {}; }
  render() { return TEMPLATE(this.renderVals ? this.renderVals() : {}); }
}
const TEMPLATE = (v) => html`<div class="dh" style="min-height: 100vh; background: #F6F6F6">
<div class="prog" aria-hidden="true"></div>

<header class="wrap" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 20px; padding-bottom: 20px; flex-wrap: wrap">
<a href="/" class="disp" style="text-decoration: none; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; display: inline-flex; align-items: center; gap: 10px; min-height: 44px">
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5l2.6 7.2 7.4.3-5.8 4.6 2 7.3L12 16.7l-6.2 4.2 2-7.3L2 9l7.4-.3z" fill="#2340E0"></path></svg>
Darryl Hawthorne</a>
<nav aria-label="Primary" style="display: flex; gap: 20px; flex-wrap: wrap">
<a class="navlink" href="/#work">Work</a>
<a class="navlink" href="/#about">About</a>
<a class="navlink" href="/assets/6276216abfa4.pdf" target="_blank" rel="noopener">Resume</a>
<a class="navlink" href="#contact">Contact</a>
</nav>
</header>

<main>
<section class="wrap" style="padding-top: 72px">
<a href="/#work" class="fade" style="text-decoration: none; font-size: 15px; font-weight: 500; color: #55565B; display: inline-flex; min-height: 44px; align-items: center">← All work</a>
<div class="hero" style="margin-top: 40px">
<div>
<p class="eyebrow fade" style="animation-delay: .05s">Shipped product · iOS · Live on the App Store</p>
<h1 class="disp fade" style="margin: 0; font-size: clamp(56px, 8.4vw, 128px); letter-spacing: -0.045em; line-height: .95; font-weight: 700; animation-delay: .1s; display: flex; align-items: center; gap: clamp(16px, 2vw, 28px)"><img src="/assets/b1996bb85386.png" alt="Sortit app icon" style="width: clamp(64px, 7vw, 104px); height: auto; border-radius: 22%" />Sortit</h1>
<p class="fade" style="margin: 24px 0 0; max-width: 620px; font-size: clamp(22px, 2.2vw, 28px); line-height: 1.35; color: #3D3E43; animation-delay: .2s">A phone cleaner I designed and launched on the App Store. It clears out photo clutter with AI, lets you swipe to decide, and never sends a single photo off your phone.</p>
<p class="fade" style="margin: 36px 0 0; animation-delay: .3s"><a class="store" href="https://apps.apple.com/app/id6800830990">View on the App Store <span aria-hidden="true">→</span></a></p>
</div>
<div class="fade" style="text-align: center; animation-delay: .35s">
<video class="rnd" ref=${v.vref} src="/assets/4e0efa0286bc.mp4" poster="/assets/da0c0c927bdd.jpg" loop playsinline muted aria-label="Screen recording: Smart Cleaning finds similar photos, the user sorts them, deletes two and sees 14 MB saved"></video>
<button type="button" class="ctl" onClick=${v.toggle}>${v.label}</button>
</div>
</div>
<dl style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px; margin: 64px 0 0; padding: 28px 0; border-top: 1px solid #DCDCD8; border-bottom: 1px solid #DCDCD8">
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Role</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Founder and product designer</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Timeline</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">3 months, idea to launch</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Platform</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">iOS · Designed in Figma</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Reviews</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">5 reviews, all 5 stars</dd></div>
</dl>
</section>

<section class="wrap sec reveal" aria-labelledby="spark">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 56px">
<div>
<p class="eyebrow">The spark</p>
<h2 id="spark" class="disp h2">My phone was full, and no app did everything I wanted.</h2>
</div>
<div>
<p class="body" style="margin-top: 0">When I ran out of storage, I went looking for a cleaner app. Plenty existed, but none combined the three things I wanted: smart AI cleaning, a fast swipe mode, and the privacy of keeping everything on my phone.</p>
<p class="body">So I took the best ideas from across the market and put them into one app.</p>
</div>
</div>
</section>

<section class="sec" aria-labelledby="tour">
<div class="wrap reveal">
<div class="narrow">
<p class="eyebrow">01 · The app</p>
<h2 id="tour" class="disp h2">Every cleanup tool in one place</h2>
<p class="body">Duplicates, similar shots, large videos, cluttered contacts and a swipe mode for everything else.</p>
</div>
</div>
<div class="gal" tabindex="0" role="region" aria-label="Sortit App Store screens" style="margin-top: 48px">
<div class="track">
<img src="/assets/2415445cc1b6.jpg" alt="Clean up iPhone storage: home screen showing 123 GB used and 9.9 GB ready to clean" />
<img src="/assets/70b2659dda73.jpg" alt="AI Smart Clean with one tap: 581 similar photos found" />
<img src="/assets/9d8c6af4a94c.jpg" alt="Delete duplicate photos: 4.1 GB of similar photos with the best shot marked" />
<img src="/assets/ec69750e581b.jpg" alt="Compress large videos: a 437 MB video reduced to 2.9 MB" />
<img src="/assets/020223d88ab6.jpg" alt="Swipe left to delete, right to keep" />
<img src="/assets/ecdaa44a505d.jpg" alt="Merge duplicate contacts" />
<img src="/assets/a758598c7e60.jpg" alt="Private cleanup on the device: your data stays on your iPhone" />
</div>
</div>
</section>

<section class="wrap sec" aria-labelledby="three">
<div class="narrow reveal">
<p class="eyebrow">02 · The combination</p>
<h2 id="three" class="disp h2">Three ideas no other app put together</h2>
</div>
<ol class="three reveal" style="margin-top: 48px">
<li><b>AI Smart Clean</b><span>One tap finds similar photos, duplicates, screenshots and blurry shots, and lines up the safest wins first.</span></li>
<li><b>Swipe to keep or delete</b><span>For everything the AI can't decide, a quick swipe left or right keeps cleanup fast, even fun.</span></li>
<li><b>Private by design</b><span>Scanning and cleaning happen on the phone. No photo or contact is ever uploaded to a server.</span></li>
</ol>
</section>

<section class="wrap sec" aria-labelledby="safe">
<div class="narrow reveal">
<p class="eyebrow">03 · The design challenge</p>
<h2 id="safe" class="disp h2">Making people feel safe pressing Delete</h2>
<p class="body">A cleaner app asks for something personal: access to your photos, and trust that it won't remove anything you care about. Every part of the flow is built to earn that trust.</p>
</div>
<div class="safe reveal" style="margin-top: 48px">
<div><h3>Nothing leaves the phone</h3><p>All scanning and cleanup run locally. Nothing is uploaded to a backend or a third party, so private photos stay private.</p></div>
<div><h3>Mistakes can be undone</h3><p>Deleted photos go to Recently Deleted for 30 days, and iOS shows a preview before anything is removed.</p></div>
<div><h3>Contacts are backed up</h3><p>A backup is created with every contact cleaning, so merging duplicates never loses a number.</p></div>
<div><h3>The app picks the keeper</h3><p>In each group of similar photos, Sortit marks the Best Result, so people confirm a smart default instead of judging every shot.</p></div>
</div>
</section>

<section class="wrap sec" aria-labelledby="hard">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 56px">
<div class="reveal">
<p class="eyebrow">04 · Hardest problem</p>
<h2 id="hard" class="disp h2">Teaching the app what “similar” means</h2>
<p class="body">The trickiest part was getting the app to understand which photos are actually similar to each other: bursts, near repeats and the same moment shot twice, without flagging photos that only look alike at a glance.</p>
<p class="body">Because privacy was a promise, there was no cloud to lean on. All of that comparison had to work on the phone itself.</p>
</div>
<div class="reveal">
<p class="eyebrow">05 · Process</p>
<h2 class="disp h2">Designed in Figma, launched in three months</h2>
<p class="body">I designed the full experience in Figma, from the first scan to the final cleanup screen, and saw it through to launch. Three months after the first idea, Sortit was live on the App Store.</p>
<p class="body">It launched as SwipeClean and was later renamed Sortit.</p>
</div>
</div>
</section>

<section class="wrap sec" aria-labelledby="wild">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 56px; align-items: center">
<div class="reveal" style="text-align: center">
<video class="rnd" ref=${v.vref2} src="/assets/226965215c77.mp4" poster="/assets/d3aefa848161.jpg" loop playsinline muted aria-label="Launch video: a person relaxing outside reviews similar photos, deletes five and watches the cleanup finish" style="display: block; width: min(100%, 360px); height: auto; margin: 0 auto"></video>
<button type="button" class="ctl" onClick=${v.toggle2}>${v.label2}</button>
</div>
<div class="reveal">
<p class="eyebrow">06 · Launch</p>
<h2 id="wild" class="disp h2">Cleanup in a few taps, anywhere</h2>
<p class="body">The launch video shows how quick a cleanup feels in everyday life: pick the similar shots, confirm, done. It dates from launch, when the app was still called SwipeClean.</p>
</div>
</div>
</section>

<section class="wrap sec" aria-labelledby="out" style="padding-bottom: 128px">
<div class="reveal" style="padding: 56px 0; border-top: 2px solid #1D4FC4; border-bottom: 1px solid #DCDCD8">
<p class="eyebrow">Outcome</p>
<p id="out" class="disp" style="margin: 0; max-width: 1000px; font-size: clamp(30px, 3.8vw, 52px); line-height: 1.12; letter-spacing: -0.025em; font-weight: 600">A real product in real hands: live on the App Store, with every review at five stars.</p>
<p style="margin: 32px 0 0"><a class="store" href="https://apps.apple.com/app/id6800830990">Download Sortit <span aria-hidden="true">→</span></a></p>
</div>
</section>
</main>

<footer id="contact" style="background: #111113">
<div class="wrap">
<a class="next" href="/diversihire">
<span><span style="display: block; font-size: 15px; color: #B4B5B9">Next case study</span><span class="disp" style="display: block; margin-top: 12px; font-size: clamp(36px, 5.6vw, 80px); font-weight: 650; letter-spacing: -0.035em; line-height: 1">DiversiHire</span></span>
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
    this.state = { paused: reduce, paused2: reduce };
    this.el = null;
    this.vref = (el) => {
      this.el = el;
      if (!el) return;
      el.muted = true; el.defaultMuted = true; el.playsInline = true;
      if (!this.state.paused) { const p = el.play(); if (p && p.catch) p.catch(() => {}); }
    };
    this.el2 = null;
    this.vref2 = (el) => {
      this.el2 = el;
      if (!el) return;
      el.muted = true; el.defaultMuted = true; el.playsInline = true;
      if (!this.state.paused2) { const p = el.play(); if (p && p.catch) p.catch(() => {}); }
    };
    this.toggle2 = () => {
      const paused2 = !this.state.paused2;
      this.setState({ paused2 });
      if (!this.el2) return;
      if (paused2) this.el2.pause(); else { const p = this.el2.play(); if (p && p.catch) p.catch(() => {}); }
    };
    this.toggle = () => {
      const paused = !this.state.paused;
      this.setState({ paused });
      if (!this.el) return;
      if (paused) this.el.pause(); else { const p = this.el.play(); if (p && p.catch) p.catch(() => {}); }
    };
  }
  renderVals() {
    return { vref: this.vref, toggle: this.toggle, label: this.state.paused ? 'Play demo' : 'Pause demo', vref2: this.vref2, toggle2: this.toggle2, label2: this.state.paused2 ? 'Play launch video' : 'Pause launch video' };
  }
}
const __root = document.getElementById('app');
__root.textContent = '';
render(html`<${Component} />`, __root);
