const s =
		'*{box-sizing:border-box}h2{margin:0;font-size:var(--bsky-text-title)}p{margin:0}a{color:var(--bsky-interactive);text-decoration:none}a:hover{text-decoration:underline}.widget-container{height:100%;position:relative;font-family:Arial,Helvetica,sans-serif,-apple-system,sans-serif;width:100%;text-align:left}.card-content-container{position:relative;font-size:var(--bsky-text-medium);line-height:1.3rem;padding-bottom:24px;opacity:0;transition:opacity .3s ease;border-radius:8px;overflow:auto;background-color:#fff;box-shadow:1px 1px 8px 1px #0002;height:100%;--bsky-interactive: #1185fe;--bsky-interactive-hover: #4ca2fe;--bsky-text-on-theme: #fff;--bsky-text-title: 1.4rem;--bsky-text-medium: 1rem;--bsky-text-small: .9rem}.card-content-container.show{opacity:1}.loading-container{position:absolute;left:0;right:0;top:0;bottom:0;height:100%;width:100%;display:flex;justify-content:center;align-items:center}.avatar-follow-container{display:flex;justify-content:space-between;align-items:flex-end;min-height:50px;flex-grow:0;flex-shrink:0;position:absolute;width:100%;top:-32px}.avatar-follow-container-placeholder{height:48px}.no-banner .avatar-follow-container{position:relative;top:unset;align-items:center;padding-top:12px}.no-banner .avatar-follow-container-placeholder{height:0px}.padded{padding:0 14px}.bsky-button{background-color:var(--bsky-interactive);text-decoration:none!important;color:var(--bsky-text-on-theme);padding:9px 16px;border-radius:18px;font-weight:400;font-size:var(--bsky-text-small);display:flex;align-items:center;gap:6px}.bsky-button:hover{background-color:var(--bsky-interactive-hover)}.banner{width:100%;aspect-ratio:3 / 1;background-size:cover;position:relative;background-color:var(--bsky-interactive)}.profile-header-container{display:flex;gap:6px;flex-direction:column;position:relative}.name-handle-container{display:flex;justify-content:center;flex-direction:column;gap:4px}.followers{display:flex;gap:8px;margin-top:6px}.count{font-weight:700}.avatar{border-radius:100%;border:2px solid #fff}.profile-description-container{padding-top:12px;max-width:calc(100% - 28px)}.logo-anchor{text-decoration:none;position:absolute;bottom:12px;right:14px}.bluesky-flutter{display:inline-flex;gap:.5em;align-items:center}.bluesky-flutter svg{width:2em;height:2em;transition:.2s}.bluesky-flutter .left{transform-origin:center}.bluesky-flutter .right{transform-origin:center;transform:scaleX(-1)}.bluesky-flutter:hover .left,.bluesky-flutter:focus .left{animation:flutter .43s ease-in-out;--flip: 1}.bluesky-flutter:hover .right,.bluesky-flutter:focus .right{animation:flutter .5s ease-in-out;--flip: -1}.bluesky-flutter:hover svg,.bluesky-flutter:focus svg{transform:rotate(-5deg);transition:.5s}@media (prefers-reduced-motion){.bluesky-flutter:hover .left,.bluesky-flutter:focus .left,.bluesky-flutter:hover .right,.bluesky-flutter:focus .right{animation:none}}@keyframes flutter{10%{transform:scale(calc(var(--flip) * 1),.9)}20%{transform:scaleX(calc(var(--flip) * .5))}40%{transform:scale(calc(var(--flip) * .9),.95)}60%{transform:scaleX(calc(var(--flip) * .3))}80%{transform:scale(calc(var(--flip) * .9),.95)}to{transform:scaleX(calc(var(--flip) * 1))}}',
	r = (t) =>
		t == null
			? ''
			: typeof t == 'function'
				? r(t())
				: Array.isArray(t)
					? t.join('')
					: typeof t == 'object'
						? JSON.stringify(t)
						: typeof t == 'string' ||
							  typeof t == 'boolean' || // string, boolean, number can take care of stringifying at the end
							  typeof t == 'number'
							? t
							: String(t);
function l(t) {
	const e =
		/\b((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9._~:/?#\[\]@!$&'()*+,;=%-]*)?)|@[a-zA-Z0-9._]+/gi;
	let n = t.replace(e, (a) =>
		a.startsWith('@')
			? `<a href="${`https://bsky.app/profile/${a.slice(1)}`}" target="_blank" rel="noopener noreferrer">${a}</a>`
			: `<a href="${a.startsWith('http') ? a : `https://${a}`}" target="_blank" rel="noopener noreferrer">${a.length > 24 ? `${a.slice(0, 24)}...` : a}</a>`
	);
	return (n = n.replace(/\n/g, '<br />')), n;
}
const c = (t = {}) => `
<div class="card-content-container ${r(t.banner ? 'has-banner' : 'no-banner')}">
  ${r(
		t.banner
			? /* html */
				`<div class="banner" style="background-image: url('${t.banner}');"></div>`
			: null
	)}
  <div class="profile-header-container">
    <div class="avatar-follow-container-placeholder"></div>
    <div class="avatar-follow-container padded">
      <div style="height: 80px">
        <img class="avatar" alt="${r(t.displayName)}'s Profile Picture"  src="${r(t.avatar)}" width="80px" height="80px" />
      </div>
      <a class="bsky-button follow-button" href="https://bsky.app/profile/${r(t.handle)}" target="_blank">
        <svg fill="none" width="16" viewBox="0 0 24 24" height="16" style="color: rgb(241, 243, 245); pointer-events: none;"><path fill="hsl(211, 20%, 95.3%)" fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1Z"></path></svg>
        <span class="text">Follow</span>
      </a>
    </div>
    <div class="name-handle-container padded">
      <h2>${r(t.displayName)}</h2>
      <p class="handle">@${r(t.handle)}</p>
      <div class="followers">
        <p><span class="count">${r(t.followersCount)}</span> Followers</p>
        <p><span class="count">${r(t.followsCount)}</span> Following</p>
      </div>
    </div>
  </div>
  ${r(
		t.description
			? /* html */
				`
      <div class="profile-description-container padded">
        <p>${l(t.description)}</p>
      </div>
    `
			: null
	)}

  <a
    class="logo-anchor bluesky-flutter"
    href="https://bsky.app/profile/${r(t.handle)}"
    target="_blank" rel="noreferrer noopener"
    aria-label="View ${r(t.handle)}'s bluesky profile">
    <svg id="flutterby" class="bluesky-flutter" viewBox="0 0 566 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="wing" fill="currentColor" d="M 123.244 35.008 C 188.248 83.809 283.836 176.879 283.836 235.857 C 283.836 316.899 283.879 235.845 283.836 376.038 C 283.889 375.995 282.67 376.544 280.212 383.758 C 266.806 423.111 214.487 576.685 94.841 453.913 C 31.843 389.269 61.013 324.625 175.682 305.108 C 110.08 316.274 36.332 297.827 16.093 225.504 C 10.271 204.699 0.343 76.56 0.343 59.246 C 0.343 -27.451 76.342 -0.206 123.244 35.008 Z" />
      </defs>
      <use xlink:href="#wing" class="left" />
      <use xlink:href="#wing" class="right" />
    </svg>
  </a>
</div>
`,
	d = ['0px', 'none'];
class f extends HTMLElement {
	constructor() {
		super(),
			this.attachShadow({ mode: 'open' }),
			(this.shadowRoot.innerHTML = `
      <style>
      ${s}
      </style>
      <div class="widget-container"></div>
    `);
	}
	async connectedCallback() {
		if (this.dataset.handle)
			try {
				this.setCardDefaultBounds();
				const e = await this.fetchProfile();
				if (e.error) throw new Error(e.message);
				this.render(e);
			} catch (e) {
				this.renderError(e);
			}
	}
	static get observedAttributes() {
		return ['data-handle', 'data-show-description', 'data-show-banner'];
	}
	attributeChangedCallback(e, n, a) {
		['data-handle', 'data-show-description', 'data-show-banner'].includes(e) &&
			n != a &&
			(this.setCardDefaultBounds(), this.connectedCallback());
	}
	setStyleIfNotDefined(e, n) {
		const a = getComputedStyle(this)[e];
		!this.style[e] && d.includes(a) && (this.style[e] = n);
	}
	setCardDefaultBounds() {
		this.setStyleIfNotDefined('width', '350px'),
			this.setStyleIfNotDefined('maxWidth', '100%'),
			this.setStyleIfNotDefined('minHeight', '170px'),
			(this.style.display = 'inline-block');
	}
	setHeight(e) {
		this.style.minHeight = e;
	}
	async fetchProfile() {
		return await (
			await fetch(
				`https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${this.dataset.handle}`
			)
		).json();
	}
	formatNumber(e) {
		return e >= 1e6
			? (e / 1e6).toFixed(1) + 'M'
			: e >= 1e3
				? (e / 1e3).toFixed(1) + 'K'
				: e.toString();
	}
	render(e) {
		const n = this.shadowRoot.querySelector('.widget-container'),
			a = this.dataset.showBanner !== 'false',
			i = this.dataset.showDescription !== 'false';
		n.innerHTML = c({
			displayName: e.displayName,
			handle: e.handle,
			description: i ? e.description : void 0,
			avatar: e.avatar,
			banner: a ? e.banner : void 0,
			followersCount: e.followersCount,
			followsCount: e.followsCount
		});
		const o = n.querySelector('.card-content-container');
		o.offsetHeight,
			o.classList.add('show'),
			this.setAttribute('data-rendered', 'true');
	}
	renderError(e) {
		const n = this.shadowRoot.querySelector('.widget-container');
		n.innerHTML = `
      <div class="error">
        ${e}
      </div>
    `;
	}
}
customElements.define('bsky-widget', f);
