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
<p class="eyebrow fade" style="margin-top: 40px; animation-delay: .05s">Maker project · SDP1 · Team build</p>
<h1 class="disp fade" style="margin: 0; font-size: clamp(48px, 7.4vw, 112px); letter-spacing: -0.04em; line-height: .98; font-weight: 700; animation-delay: .1s">Street Light</h1>
<p class="fade" style="margin: 24px 0 0; max-width: 820px; font-size: clamp(22px, 2.2vw, 28px); line-height: 1.35; color: #3D3E43; animation-delay: .2s">A lantern that wakes up when you walk toward it. Our first physical prototype for making poorly lit spots in Brantford feel safer at night.</p>
</section>

<section class="wrap" style="padding-top: 56px">
<img class="hero-photo glow" src="/assets/93ccabec3cc1.jpg" alt="The finished lantern prototype glowing warm orange through its paper front panel" />
<dl style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px; margin: 32px 0 0; padding: 28px 0; border-top: 1px solid #DCDCD8; border-bottom: 1px solid #DCDCD8">
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Course</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">SDP1, Wilfrid Laurier</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Team</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Built with classmates</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Hardware</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Arduino · Ultrasonic sensor · LED</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Materials</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Cardboard frame · Paper panels</dd></div>
</dl>
</section>

<section class="wrap sec reveal" aria-labelledby="tldr">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 56px">
<div>
<p class="eyebrow">Summary</p>
<h2 id="tldr" class="disp h2">We took an idea about safer streets and made something you can stand in front of.</h2>
</div>
<div>
<p class="body" style="margin-top: 0">For SDP1 we built the first version of our motion dimming lamp. It was shaped like a paper lantern, with a cardboard border and thin paper sides that diffused the light. We wired it up with an Arduino, an LED and an ultrasonic sensor so it would turn on when someone walked up to it.</p>
<p class="body">The main thing we accomplished was proving the concept worked: an idea about making poorly lit spots in Brantford safer became something physical you could watch react to you.</p>
</div>
</div>
</section>

<section class="wrap sec" aria-labelledby="how">
<div class="narrow reveal">
<p class="eyebrow">01 · How it works</p>
<h2 id="how" class="disp h2">Sense, decide, glow</h2>
</div>
<ol class="steps reveal" style="margin-top: 48px">
<li><p class="num">STEP 1</p><b>Sense</b><span>An ultrasonic sensor measures how close someone is to the lamp.</span></li>
<li><p class="num">STEP 2</p><b>Decide</b><span>The Arduino reads that distance and turns it into a brightness level.</span></li>
<li><p class="num">STEP 3</p><b>Glow</b><span>The LED brightens behind thin paper, which softens it into a warm glow.</span></li>
</ol>
</section>

<section class="wrap sec" aria-labelledby="build">
<div class="narrow reveal">
<p class="eyebrow">02 · Building it</p>
<h2 id="build" class="disp h2">Hands on, as a team</h2>
<p class="body">We cut and taped the frame, fitted the paper panels, and wired and tested the electronics together at the same table.</p>
</div>
<div class="trio reveal" style="margin-top: 48px">
<figure><img src="/assets/deed0f2c4a82.jpg" alt="Classmates measuring and cutting cardboard panels on a table" /><figcaption><b>Cutting the frame</b>Measuring and cutting cardboard panels.</figcaption></figure>
<figure><img src="/assets/14c9254c1420.jpg" alt="The assembled lantern frame with paper panels on a classroom table" /><figcaption><b>Lantern shell</b>Paper sides set into the cardboard border.</figcaption></figure>
<figure><img src="/assets/eff3cb517ba6.jpg" alt="Hands wiring an Arduino and breadboard lit by a green LED" /><figcaption><b>Wiring and testing</b>Arduino, breadboard and sensor, one piece at a time.</figcaption></figure>
</div>
</section>

<section class="wrap sec" aria-labelledby="hard">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 56px">
<div class="reveal">
<p class="eyebrow">03 · What was hard</p>
<h2 id="hard" class="disp h2">Most of the problems lived in the code</h2>
<p class="body">Getting the Arduino to read the sensor properly and turn that into a smooth brightness change took a lot more trial and error than we expected. The cardboard frame also gave us trouble: it wasn't very sturdy, and it made the lantern look more like a school project than a real product.</p>
<p class="body">So we kept rewriting the code in small pieces and testing one thing at a time instead of trying to fix everything at once. For the frame, we accepted cardboard as a temporary solution and noted to switch materials in the next round.</p>
</div>
<div class="reveal">
<p class="eyebrow">04 · What worked</p>
<h2 class="disp h2">The shape and the interaction</h2>
<p class="body">The lantern shape worked really well. The thin paper softened the LED into a warm glow instead of a harsh point of light, which matched the calm, welcoming feeling we were going for.</p>
<p class="body">The interaction worked too: people understood it right away, without us having to explain anything.</p>
</div>
</div>
</section>

<section class="wrap sec" aria-labelledby="proto">
<div class="narrow reveal">
<p class="eyebrow">05 · The prototype</p>
<h2 id="proto" class="disp h2">Top, front and side</h2>
</div>
<div class="trio reveal" style="margin-top: 48px">
<figure><img class="glow" src="/assets/44f0e32d74d7.jpg" alt="Prototype seen from above, glowing through the front panel" /><figcaption><b>Top</b>A closed cardboard cap keeps the light directed outward.</figcaption></figure>
<figure><img class="glow" src="/assets/93ccabec3cc1.jpg" alt="Prototype from the front, with the LED glowing through paper" /><figcaption><b>Front</b>The paper panel diffuses the LED into a soft glow.</figcaption></figure>
<figure><img class="glow" src="/assets/b8c445358130.jpg" alt="Prototype from the side, open to show the Arduino and breadboard inside" /><figcaption><b>Side</b>The electronics sit inside, ready for the next build.</figcaption></figure>
</div>
</section>

<section class="wrap sec" aria-labelledby="lessons" style="padding-bottom: 128px">
<div class="reveal" style="padding: 56px 0; border-top: 2px solid #9A4F08; border-bottom: 1px solid #DCDCD8">
<p class="eyebrow">What I learned</p>
<p id="lessons" class="disp quote" style="max-width: 1040px">UX is not just screens. It is also the physical spaces people move through, and how those spaces make them feel.</p>
</div>
<div class="narrow reveal" style="margin-top: 48px">
<p class="body" style="margin-top: 0">This kind of design is far more strategic than most people realize. You have to think about visual and auditory cues at the same time, and about where these lamps would go around a city so they actually help anyone. It isn't about making one lamp work, it's about imagining the whole environment around it.</p>
<p class="body">SDP1 pushed me to put myself in the shoes of someone who might feel unsafe walking at night, looking for safe spots in a dark part of town. Designing for that person changed how I think about the job.</p>
</div>
</section>
</main>

<footer id="contact" style="background: #111113">
<div class="wrap">
<a class="next" href="/concepts">
<span><span style="display: block; font-size: 15px; color: #B4B5B9">Next</span><span class="disp" style="display: block; margin-top: 12px; font-size: clamp(36px, 5.6vw, 80px); font-weight: 650; letter-spacing: -0.035em; line-height: 1">Concept ideas</span></span>
<span class="disp arrow" aria-hidden="true" style="font-size: clamp(36px, 5.6vw, 80px)">→</span>
</a>
<p style="margin: 0; padding: 28px 0 40px; border-top: 1px solid #2E2F33; font-size: 15px; color: #B4B5B9">© 2026 Darryl Hawthorne · <a href="mailto:darrylh1301@gmail.com" style="color: #F6F6F6">darrylh1301@gmail.com</a> · <a href="https://www.linkedin.com/in/darryl-hawthorne/" style="color: #F6F6F6">LinkedIn</a></p>
</div>
</footer>
</div>`;
class Component extends DCLogic {
  renderVals() { return {}; }
}
const __root = document.getElementById('app');
__root.textContent = '';
render(html`<${Component} />`, __root);
