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
<p class="eyebrow fade" style="margin-top: 40px; animation-delay: .05s">Case study · University project · March 2025</p>
<h1 class="disp fade" style="margin: 0; font-size: clamp(48px, 7.4vw, 112px); letter-spacing: -0.04em; line-height: .98; font-weight: 700; animation-delay: .1s">DiversiHire</h1>
<p class="fade" style="margin: 24px 0 0; max-width: 760px; font-size: clamp(22px, 2.2vw, 28px); line-height: 1.35; color: #3D3E43; animation-delay: .2s">Redefining job search through accessibility, so every career has a fair start.</p>
</section>

<section class="wrap" style="padding-top: 56px">
<img class="fade" src="/assets/be1bc8344b63.jpg" alt="DiversiHire screens fanned across a grid: login, dashboard with jobs applied and interviews, search results, saved offers and accessibility settings" style="display: block; width: 100%; height: auto; animation-delay: .3s" />
<dl style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px; margin: 48px 0 0; padding: 28px 0; border-top: 1px solid #DCDCD8; border-bottom: 1px solid #DCDCD8">
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Timeline</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">12 weeks</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Role</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Product Designer</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Course</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">UX307 Designing for EDI</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Team</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Navleen Kingra, Gobina Mathyaparana, Darryl Hawthorne, Evan Gombocz</dd></div>
</dl>
</section>

<section class="wrap sec reveal" aria-labelledby="tldr">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 56px">
<div>
<p class="eyebrow">Long story short</p>
<h2 id="tldr" class="disp h2">Standard job platforms quietly exclude people. We designed one that adapts to them.</h2>
</div>
<div>
<p class="body" style="margin-top: 0">As a student passionate about inclusive design, I worked with my team on the barriers people with communication and physical impairments face when looking for work. Job boards lean on long, dense reading and offer no voice or translation help. People with reading impairments, cognitive limitations or language barriers are shut out before they even apply.</p>
<p class="body">DiversiHire simplifies job descriptions, offers more than one way to communicate, and lets every user tailor the app to their own needs.</p>
</div>
</div>
</section>

<section class="wrap sec reveal" aria-label="Guiding question">
<div style="padding: 56px 0; border-top: 2px solid #2F6B57; border-bottom: 1px solid #DCDCD8">
<p class="eyebrow">How might we</p>
<p class="disp hmw" style="max-width: 1000px">How can we enhance job searching to address all individual needs?</p>
</div>
</section>

<section class="wrap sec" aria-labelledby="problem">
<div class="narrow reveal">
<p class="eyebrow">01 · The problem</p>
<h2 id="problem" class="disp h2">Built for readers, not for people</h2>
<p class="body">Many job seekers struggle with standard job search platforms because of reading impairments, cognitive limitations or language barriers. These platforms emphasize reading, use long and complex descriptions, and offer no voice or translation assistance. A typical real job posting makes the point: walls of copy, jargon and nested bullet lists.</p>
</div>
</section>

<section class="wrap sec" aria-labelledby="goals">
<div class="narrow reveal">
<p class="eyebrow">02 · Goals</p>
<h2 id="goals" class="disp h2">Three goals from the research</h2>
<p class="body">Research into user behaviour, preferences and pain points set the direction for the redesign.</p>
</div>
<div class="reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 40px; margin-top: 56px">
<div class="goal"><p class="disp" style="margin: 0; font-size: 44px; font-weight: 700; color: #2F6B57">1</p><h3 style="margin: 12px 0 0; font-size: 20px">Equitable opportunity</h3><p style="margin: 10px 0 0; font-size: 16px; line-height: 1.55; color: #3D3E43">A job search where people with communication impairments have the same opportunities as everyone else.</p></div>
<div class="goal"><p class="disp" style="margin: 0; font-size: 44px; font-weight: 700; color: #2F6B57">2</p><h3 style="margin: 12px 0 0; font-size: 20px">Simpler information</h3><p style="margin: 10px 0 0; font-size: 16px; line-height: 1.55; color: #3D3E43">Job descriptions and applications that are easier to understand for users with cognitive limitations or language barriers.</p></div>
<div class="goal"><p class="disp" style="margin: 0; font-size: 44px; font-weight: 700; color: #2F6B57">3</p><h3 style="margin: 12px 0 0; font-size: 20px">Accessible by default</h3><p style="margin: 10px 0 0; font-size: 16px; line-height: 1.55; color: #3D3E43">Features that accommodate reading impairments, cognitive limitations and language barriers throughout the search.</p></div>
</div>
</section>

<section class="wrap sec" aria-labelledby="comp">
<div class="narrow reveal">
<p class="eyebrow">03 · Competitive analysis</p>
<h2 id="comp" class="disp h2">Indeed and LinkedIn dominate, and both assume fluent reading and writing</h2>
<p class="body">They offer networking and listings, but they fail people with different communication needs. That is daunting for someone with dyslexia, someone who can't read or write fluently, or someone with a speech impairment. These barriers can keep people from the full experience, and from landing the job.</p>
</div>
</section>

<section class="wrap sec" aria-labelledby="ideation">
<div class="narrow reveal">
<p class="eyebrow">04 · Ideation</p>
<h2 id="ideation" class="disp h2">An affinity map turned needs into features</h2>
<p class="body">Mapping each user group to its needs, ideas and barriers surfaced the crucial gaps and shaped DiversiHire's design and launch strategy.</p>
</div>
<div class="amwrap reveal" style="margin-top: 48px">
<table class="am">
<caption style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Affinity map: user groups with their needs, ideas and barriers</caption>
<thead><tr><th scope="col">User groups</th><th scope="col">Needs</th><th scope="col">Ideas</th><th scope="col">Barriers</th></tr></thead>
<tbody>
<tr><td>Reading impairments, such as dyslexia</td><td>Audio descriptions, simplified language, visual aids, translations</td><td>Job search by voice</td><td>Technical limitations</td></tr>
<tr><td>Cognitive limitations, such as learning disabilities</td><td>Guidance one step at a time, visual cues, applications by voice</td><td>Visual job descriptions with infographics and video</td><td>Information overload, complex language and jargon</td></tr>
<tr><td>Language barriers, such as non native speakers</td><td>Translation, multilingual support, visual aids, culturally sensitive content</td><td>Multilingual support with language selection</td><td>Some language is very hard to simplify</td></tr>
<tr><td>Auditory processing difficulties</td><td>Text based options, visual cues, written instructions</td><td>Interactive tutorials and guided walkthroughs</td><td>Poor audio quality, background noise</td></tr>
</tbody>
</table>
</div>
</section>

<section class="wrap sec" aria-labelledby="journey">
<div class="narrow reveal">
<p class="eyebrow">05 · Journey</p>
<h2 id="journey" class="disp h2">Where the barriers show up</h2>
<p class="body">A typical journey through DiversiHire, step by step, and where each accessibility feature removes friction.</p>
</div>
<div class="jwrap" style="margin-top: 56px; position: relative">
<ol class="steps">
<li>Awareness</li><li>Initial search</li><li>Exploring listings</li><li>Understanding a listing</li><li>Applying</li><li>After applying</li><li>Ongoing engagement</li>
</ol>
<div class="track" aria-hidden="true"></div>
</div>
</section>

<section class="wrap sec" aria-labelledby="features">
<div class="narrow reveal">
<p class="eyebrow">06 · Accessibility features</p>
<h2 id="features" class="disp h2">Four categories, one settings home</h2>
<p class="body">We grouped accessibility into Text and Reading, Visual Display, Navigation and Interaction, and Motion and Distractions. Text to speech connects with users who are visually impaired, and a carefully planned information architecture keeps the visual hierarchy calm to limit cognitive overload.</p>
</div>
<figure class="fig reveal"><img src="/assets/35fa3fa9c1df.jpg" alt="Accessibility settings across three screens: Text and Reading, Visual Display, Navigation and Interaction, and Motion and Distractions" /></figure>
<figure class="fig reveal" style="max-width: 900px"><img src="/assets/1da4196557ee.jpg" alt="Settings screen annotated with Text to Speech, Accessibility Access and Information Architecture callouts" /></figure>
<div class="reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 56px; align-items: center; margin-top: 72px">
<div><h3 class="disp" style="margin: 0; font-size: 28px; letter-spacing: -0.02em">Languages</h3><p class="body" style="margin-top: 12px">Users can browse and apply in their preferred language, switching the whole app from one screen.</p></div>
<img src="/assets/0ca3d0ab12f4.jpg" alt="Language screen before and after choosing from a list of languages" style="display: block; width: 100%; max-width: 520px; height: auto" />
</div>
</section>

<section class="wrap sec" aria-labelledby="wire">
<div class="narrow reveal">
<p class="eyebrow">07 · Wireframes</p>
<h2 id="wire" class="disp h2">Making the journey tangible</h2>
<p class="body">Low fidelity wireframes mapped structure, layout and the overall flow, from the dashboard and search through a listing, the application, saved offers and notifications. Medium fidelity then added real content, brand colour and the accessibility options, so we could test contrast and clarity before the final visuals.</p>
</div>
<div class="reveal wf" style="display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: 48px; align-items: end; margin-top: 56px">
<figure style="margin: 0"><img src="/assets/5d1328e92573.jpg" alt="Eight low fidelity wireframes: user dashboard, accessibility options, search results, job listing, job application, saved offers and notifications" style="display: block; width: 100%; height: auto" /><figcaption style="margin-top: 14px; font-size: 15px; color: #55565B"><b style="color: #111113">Low fidelity.</b> Structure, layout and flow in greyscale.</figcaption></figure>
<figure style="margin: 0"><img src="/assets/46c8100f782c.jpg" alt="Medium fidelity dashboard with jobs applied, interviews and job accessibility options" style="display: block; width: 100%; max-width: 300px; height: auto" /><figcaption style="margin-top: 14px; font-size: 15px; color: #55565B"><b style="color: #111113">Medium fidelity.</b> Brand colour, real content and accessibility options.</figcaption></figure>
</div>
</section>

<section class="wrap sec" aria-labelledby="key">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 56px; align-items: center">
<div class="reveal">
<p class="eyebrow">08 · Key feature</p>
<h2 id="key" class="disp h2">A dashboard that fits the person</h2>
<p class="body">Ideation showed that people on similar platforms can't reach the accessibility options they personally need. So DiversiHire is fully customizable: a dashboard tailored to each profile that also matches people with companies that meet their needs.</p>
<p class="body" style="font-weight: 600; color: #2F6B57">DiversiHire breaks down accessibility barriers by creating a fully personal experience for every user.</p>
</div>
<div class="reveal" style="display: flex; justify-content: center">
<img src="/assets/30b174d81459.jpg" alt="Profile screen and its Accessibility Needs page, listing needs such as automatic doors, braille support and service dog friendly, plus tools like NVDA, JAWS, zoom and braille" style="width: min(100%, 560px); height: auto" />
</div>
</div>
</section>

<section class="sec" aria-labelledby="final">
<div class="wrap reveal">
<div class="narrow">
<p class="eyebrow">09 · Final designs</p>
<h2 id="final" class="disp h2">From sign in to interview</h2>
<p class="body">The final mockups deliver a friendly, accessible interface for people with communication impairments. Scroll sideways through the flow.</p>
</div>
</div>
<div class="strip" tabindex="0" role="region" aria-label="Final designs, scrolls horizontally" style="margin-top: 48px">
<figure><img src="/assets/2f918efe64a5.jpg" alt="Login, home dashboard with jobs applied and interviews, and recommended jobs" /></figure>
<figure><img src="/assets/5355ec5747cf.jpg" alt="Search results with accessibility filters, a job description and its requirements" /></figure>
<figure><img src="/assets/17085792b15a.jpg" alt="Company about page, role description and apply form" /></figure>
<figure><img src="/assets/c771686ac012.jpg" alt="Saved offers, notifications and settings" /></figure>
<figure><img src="/assets/30b174d81459.jpg" alt="Profile and accessibility needs" /></figure>
</div>
</section>

<section class="wrap sec" aria-labelledby="outcome" style="padding-bottom: 128px">
<div class="narrow reveal">
<p class="eyebrow">Outcome</p>
<h2 id="outcome" class="disp h2">An equal shot at the job market</h2>
<p class="body">Grounded in user research and inclusive design principles, DiversiHire simplifies job descriptions, offers several ways to communicate and personalizes the search. By putting accessibility first, it gives a wide range of people the confidence to navigate the job market and an equal opportunity to reach their career goals.</p>
</div>
</section>
</main>

<footer id="contact" style="background: #111113">
<div class="wrap">
<a class="next" href="/air-canada">
<span><span style="display: block; font-size: 15px; color: #B4B5B9">Next case study</span><span class="disp" style="display: block; margin-top: 12px; font-size: clamp(36px, 5.6vw, 80px); font-weight: 650; letter-spacing: -0.035em; line-height: 1">Air Canada Assistant</span></span>
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
