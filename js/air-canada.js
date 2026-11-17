import { html, render, Component as PComponent } from '/js/htm-preact.js';
class DCLogic extends PComponent {
  constructor(props) { super(props); this.state = {}; }
  render() { return TEMPLATE(this.renderVals ? this.renderVals() : {}); }
}
const TEMPLATE = (v) => html`<div class="dh" style="min-height: 100vh; background: #F6F6F6">
<div class="prog" aria-hidden="true"></div>

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
<section class="wrap" style="padding-top: 72px">
<a href="/#work" class="fade" style="text-decoration: none; font-size: 15px; font-weight: 500; color: #55565B; display: inline-flex; min-height: 44px; align-items: center">← All work</a>
<p class="eyebrow fade" style="margin-top: 40px; animation-delay: .05s">Case study · Human centred AI · March 2026</p>
<h1 class="disp fade" style="margin: 0; font-size: clamp(48px, 7.4vw, 112px); letter-spacing: -0.04em; line-height: .98; font-weight: 700; animation-delay: .1s; display: flex; align-items: center; gap: clamp(16px, 2vw, 28px); flex-wrap: wrap"><img src="/assets/09506334be36.png" alt="Air Canada logo" style="width: clamp(60px, 6.4vw, 96px); height: auto" />Air Canada Assistant</h1>
<p class="fade" style="margin: 24px 0 0; max-width: 820px; font-size: clamp(22px, 2.2vw, 28px); line-height: 1.35; color: #3D3E43; animation-delay: .2s">An airline chatbot invented a refund policy for a grieving passenger. We redesigned it to cite its sources, admit when it isn't sure, and hand off to a person.</p>
</section>

<section class="wrap" style="padding-top: 32px">
<div class="hero-fan" role="img" aria-label="Three screens of the redesigned assistant: onboarding that lists what it can help with, a bereavement answer with a verified policy source, and a low confidence reply that offers a live agent">
<img class="f1" src="/assets/0ee827961fd1.png" alt="" />
<img class="f2" src="/assets/9f30f3b8b252.png" alt="" />
<img class="f3" src="/assets/50538ce9dc16.png" alt="" />
</div>
<dl style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px; margin: 32px 0 0; padding: 28px 0; border-top: 1px solid #DCDCD8; border-bottom: 1px solid #DCDCD8">
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Course</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">UX410E Human Centred AI, Wilfrid Laurier</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Team</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Olivia Bartlett, Darryl Hawthorne, Zim Nnadozie</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">My role</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Product Designer and Researcher</dd></div>
<div><dt style="font-size: 13px; color: #55565B; font-weight: 600; letter-spacing: .06em; text-transform: uppercase">Tools</dt><dd style="margin: 8px 0 0; font-size: 18px; font-weight: 500">Figma · Microsoft HAX Workbook</dd></div>
</dl>
</section>

<section class="wrap sec reveal" aria-labelledby="ctx">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 56px">
<div>
<p class="eyebrow">The incident</p>
<h2 id="ctx" class="disp h2">“Book now, claim the bereavement discount later.” There was no such policy.</h2>
</div>
<div>
<p class="body" style="margin-top: 0">In November 2022, Jake Moffatt asked Air Canada's chatbot about bereavement fares before flying to a family funeral. It told him he could buy a full price ticket and apply for the discount afterwards. The real policy said otherwise, and he had no way to check.</p>
<p class="body">A tribunal later held the airline liable for its chatbot's advice. Our brief was to redesign an AI interface. We chose this one because it fails in exactly the ways human centred AI guidelines warn about.</p>
</div>
</div>
</section>

<section class="wrap sec" aria-labelledby="fails">
<div class="narrow reveal">
<p class="eyebrow">01 · What went wrong</p>
<h2 id="fails" class="disp h2">Six failures we found with the HAX toolkit</h2>
</div>
<div class="reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px 32px; margin-top: 56px">
<div class="fail"><h3>No stated limits</h3><p>Nothing told users what it couldn't reliably answer, so people trusted it with policy decisions.</p></div>
<div class="fail"><h3>No sources</h3><p>Answers sounded official but never linked the policy they came from, so there was nothing to verify.</p></div>
<div class="fail"><h3>Automation bias</h3><p>Every reply was equally confident, right or wrong, so users acted on misinformation.</p></div>
<div class="fail"><h3>No empathy</h3><p>People asking about grief or emergency travel got the same flat tone as a baggage question.</p></div>
<div class="fail"><h3>Loops, no exit</h3><p>Repeated generic answers and no clear way to reach a human left people feeling trapped.</p></div>
<div class="fail"><h3>Stale policy</h3><p>Answers weren't synced to live policy pages, and nothing flagged wrong replies.</p></div>
</div>
</section>

<section class="wrap sec" aria-labelledby="haxh">
<div class="narrow reveal">
<p class="eyebrow">02 · Guidelines</p>
<h2 id="haxh" class="disp h2">We applied 14 of Microsoft's 18 HAX guidelines</h2>
<p class="body">We scored every guideline as a team. Four didn't fit a chatbot that only speaks when spoken to. Select any guideline to see how it shaped the design.</p>
</div>
<div class="reveal" style="margin-top: 40px">
<div style="display: flex; gap: 24px; flex-wrap: wrap; font-size: 14px; color: #3D3E43; margin-bottom: 18px">
<span style="display: inline-flex; align-items: center; gap: 8px"><span style="width: 14px; height: 14px; background: #A61E26"></span>Top priority</span>
<span style="display: inline-flex; align-items: center; gap: 8px"><span style="width: 14px; height: 14px; border: 1px solid #9A9A95; background: #F6F6F6"></span>Applied</span>
<span style="display: inline-flex; align-items: center; gap: 8px"><span style="width: 14px; height: 14px; border: 1px solid #9A9A95; background: repeating-linear-gradient(135deg,#F6F6F6 0 3px,#C9C9C4 3px 4px)"></span>Not applicable</span>
</div>
<div class="hax">
${(v.guides || []).map((g) => html`
<button type="button" class=${g.cls} aria-pressed=${g.pressed} onClick=${g.pick}><span>G${g.n}</span><small>${g.short}</small></button>
`)}
</div>
<div class="detail" aria-live="polite" style="margin-top: 32px; padding-top: 28px; border-top: 2px solid #111113; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 32px">
<div><p style="margin: 0; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: #A61E26; font-weight: 600">Guideline ${v.cur.n} · ${v.cur.status}</p><p class="disp" style="margin: 10px 0 0; font-size: 28px; font-weight: 600; line-height: 1.2">${v.cur.name}</p></div>
<p style="margin: 0; font-size: 18px; line-height: 1.6; color: #3D3E43">${v.cur.how}</p>
</div>
</div>
</section>

<section class="wrap sec" aria-labelledby="sys">
<div class="narrow reveal">
<p class="eyebrow">03 · The system</p>
<h2 id="sys" class="disp h2">Retrieve first, answer second, or don't answer</h2>
<p class="body">A language model on its own produces answers that sound right but aren't grounded. We built the redesign around retrieval augmented generation (RAG): the assistant may only answer from verified policy pages and flagged terms of service files, checked by rules, with context kept for the session only.</p>
</div>
<ol class="flow reveal" style="margin-top: 56px" aria-label="How a question is answered">
<li><p class="num">STEP 1</p><b>Question</b><span>“Can I get a bereavement refund after I've flown?”</span></li>
<li><p class="num">STEP 2</p><b>Retrieve</b><span>Search live, verified Air Canada policy pages</span></li>
<li><p class="num">STEP 3</p><b>Check confidence</b><span>Rules block invalid policy claims and score the match</span></li>
<li><p class="num">STEP 4</p><b>Confident</b><span>Answer, cite the policy, link the page, mark it Verified</span><b style="margin-top: 16px">Not sure</b><span>Say so plainly and offer a live agent. Never guess.</span></li>
</ol>
</section>

<section class="wrap sec" aria-labelledby="scr">
<div class="narrow reveal">
<p class="eyebrow">04 · The redesign</p>
<h2 id="scr" class="disp h2">Eight moments, one honest assistant</h2>
<p class="body">Each screen answers one of the failures, and every one keeps a person a tap away.</p>
</div>
<div class="scr reveal" style="margin-top: 56px">
<figure><img src="/assets/67e1eb219699.png" alt="Air Canada homepage with a chat button in the corner" /><figcaption><b>Always findable</b>The chat entry sits on every page, not only in support.<span class="hx">HAX G7</span></figcaption></figure>
<figure><img src="/assets/0ee827961fd1.png" alt="Onboarding message listing what the assistant can help with and a note to verify policy decisions" /><figcaption><b>Says what it can do</b>Onboarding lists its scope and when to verify with an agent.<span class="hx">HAX G1</span></figcaption></figure>
<figure><img src="/assets/9f30f3b8b252.png" alt="Bereavement fare answer with a Verified policy badge and a link to the full policy" /><figcaption><b>Shows its source</b>Policy answers carry a Verified badge and a link to the page.<span class="hx">HAX G4 · G11</span></figcaption></figure>
<figure><img src="/assets/9142a28b6cec.png" alt="Follow up question answered while continuing from the earlier bereavement inquiry" /><figcaption><b>Remembers the thread</b>No repeating your situation. Context holds for the session.<span class="hx">HAX G12</span></figcaption></figure>
<figure><img src="/assets/50538ce9dc16.png" alt="Low confidence warning: the assistant says it is not sure and recommends an agent" /><figcaption><b>Admits uncertainty</b>Below the confidence threshold it says “I'm not sure” and offers an agent.<span class="hx">HAX G2 · G10</span></figcaption></figure>
<figure><img src="/assets/e7fda59c027d.png" alt="Warning before purchasing to confirm fare and policy details on the official booking page" /><figcaption><b>Warns before you act</b>Before a purchase, it reminds you this is guidance, not a binding quote.<span class="hx">HAX G16</span></figcaption></figure>
<figure><img src="/assets/adc1bdc6d633.png" alt="A This doesn't seem right flag on a response and the assistant acknowledging the confusion" /><figcaption><b>Easy to correct</b>“This doesn't seem right” on every reply logs it and offers a person.<span class="hx">HAX G9 · G15</span></figcaption></figure>
<figure><img src="/assets/4801892e47c4.png" alt="Softer, empathetic response to a message about a grandmother passing away" /><figcaption><b>Reads the room</b>Sensitive topics switch to a softer tone and calmer colours.<span class="hx">HAX G5</span></figcaption></figure>
</div>
</section>

<section class="wrap sec" aria-labelledby="iter">
<div class="narrow reveal">
<p class="eyebrow">05 · Iteration</p>
<h2 id="iter" class="disp h2">Escalation moved from buried to always there</h2>
<p class="body">In our first pass, reaching a human depended on the bot offering it. The final design pins “Need a real person? Speak to an Agent” to the top of every conversation, so leaving is always one tap.</p>
</div>
<div class="reveal iter" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 40px; margin-top: 48px; max-width: 860px">
<figure style="margin: 0"><img src="/assets/c1dc5c781301.png" alt="Early version of the bereavement answer with no agent button" style="display: block; width: 100%; height: auto" /><figcaption style="margin-top: 14px; font-size: 15px; color: #55565B"><b style="color: #111113">Before.</b> No visible way out.</figcaption></figure>
<figure style="margin: 0"><img src="/assets/9f30f3b8b252.png" alt="Final version with a persistent Speak to an Agent bar above the conversation" style="display: block; width: 100%; height: auto" /><figcaption style="margin-top: 14px; font-size: 15px; color: #55565B"><b style="color: #111113">After.</b> A person is always one tap away.</figcaption></figure>
</div>
</section>

<section class="wrap sec" aria-labelledby="out" style="padding-bottom: 128px">
<div class="narrow reveal">
<p class="eyebrow">Outcome</p>
<h2 id="out" class="disp h2">Safer for travellers, safer for the airline</h2>
<p class="body">By tracing each failure back to a HAX guideline, we turned a confident guesser into an assistant that answers from verified sources, shows its work, flags its own uncertainty and always offers a human. The redesign protects people making real financial decisions at hard moments, and it protects Air Canada from the legal risk of its own chatbot.</p>
</div>
</section>
</main>

<footer id="contact" style="background: #111113">
<div class="wrap">
<a class="next" href="/street-light">
<span><span style="display: block; font-size: 15px; color: #B4B5B9">Next</span><span class="disp" style="display: block; margin-top: 12px; font-size: clamp(36px, 5.6vw, 80px); font-weight: 650; letter-spacing: -0.035em; line-height: 1">Street Light</span></span>
<span class="disp arrow" aria-hidden="true" style="font-size: clamp(36px, 5.6vw, 80px)">→</span>
</a>
<p style="margin: 0; padding: 28px 0 40px; border-top: 1px solid #2E2F33; font-size: 15px; color: #B4B5B9">© 2026 Darryl Hawthorne · <a href="mailto:darrylh1301@gmail.com" style="color: #F6F6F6">darrylh1301@gmail.com</a> · <a href="https://www.linkedin.com/in/darryl-hawthorne/" style="color: #F6F6F6">LinkedIn</a></p>
</div>
</footer>
</div>`;
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { sel: 10 };
    this.data = [
      [1, 'Make clear what the system can do', 'Scope', 'p', 'Onboarding lists exactly what the assistant can help with, and says that refunds, bereavement and legal questions should be verified on the policy page or with an agent. This alone could have prevented the Moffatt incident.'],
      [2, 'Make clear how well the system can do what it can do', 'Confidence', 'p', 'Policy answers carry confidence disclaimers and a visible prompt to confirm with a person. Honest expectations come before anyone makes a financial decision.'],
      [3, 'Time services based on context', 'Timing', 'n', 'Not applicable. The chatbot only responds when a customer starts the conversation, so there are no interruptions to time.'],
      [4, 'Show contextually relevant information', 'Context', 'p', 'Every policy answer includes a direct link to the official page. In the original, the correct bereavement policy existed on the site, but the bot never surfaced it.'],
      [5, 'Match relevant social norms', 'Tone', 'a', 'Messages about grief or emergency travel are detected and answered in a softer tone, with calmer colours, so the bot never sounds dismissive.'],
      [6, 'Mitigate social biases', 'Bias', 'a', 'Applied in our HAX workbook evaluation. See the full report for detail.'],
      [7, 'Support efficient invocation', 'Invoke', 'a', 'The chat entry point is visible on every page, not only on Contact Us, so people no longer have to stumble onto it.'],
      [8, 'Support efficient dismissal', 'Dismiss', 'p', 'A Speak to an Agent button stays visible for the whole conversation, so nobody is trapped in a loop with the bot.'],
      [9, 'Support efficient correction', 'Correct', 'p', 'This doesn’t seem right appears on every response. It logs the answer for review and offers to connect a live agent.'],
      [10, 'Scope services when in doubt', 'Doubt', 'p', 'Arguably the most important. Below a confidence threshold, the assistant says it is unsure and offers someone who can give a definitive answer, instead of inventing a policy.'],
      [11, 'Make clear why the system did what it did', 'Explain', 'a', 'Answers cite where the information came from, so users can trace every claim back to a source.'],
      [12, 'Remember recent interactions', 'Memory', 'a', 'Memory that lasts for the session keeps the conversation’s context so people don’t repeat themselves, and nothing is stored after it ends.'],
      [13, 'Learn from user behaviour', 'Learn', 'n', 'Not applicable, by choice. In customer service, consistent answers for everyone matter more than personalization.'],
      [14, 'Update and adapt cautiously', 'Adapt', 'a', 'Live policy retrieval keeps answers in sync with the website, so a policy change never leaves the bot giving outdated information.'],
      [15, 'Encourage granular feedback', 'Feedback', 'a', 'Thumbs up and down on every reply let the team monitor which answers work, instead of relying on complaints to find errors.'],
      [16, 'Convey the consequences of user actions', 'Consequence', 'p', 'Before someone books based on chatbot advice, a confirmation reminds them to verify details on the official booking page.'],
      [17, 'Provide global controls', 'Controls', 'n', 'Not applicable. Global controls don’t fit a support chat people open for one question.'],
      [18, 'Notify users about changes', 'Notify', 'n', 'Not applicable. There are no ongoing behaviour changes to announce in a single support session.']
    ];
    this.picks = this.data.map((d) => () => this.setState({ sel: d[0] }));
  }
  renderVals() {
    const sel = this.state.sel;
    const label = { p: 'Top priority', a: 'Applied', n: 'Not applicable' };
    const guides = this.data.map((d, i) => ({
      n: d[0], short: d[2],
      cls: 'tile' + (d[3] === 'p' ? ' pri' : d[3] === 'n' ? ' na' : '') + (d[0] === sel ? ' sel' : ''),
      pressed: d[0] === sel ? 'true' : 'false',
      pick: this.picks[i]
    }));
    const c = this.data[sel - 1];
    return { guides, cur: { n: c[0], name: c[1], status: label[c[3]], how: c[4] } };
  }
}
const __root = document.getElementById('app');
__root.textContent = '';
render(html`<${Component} />`, __root);
