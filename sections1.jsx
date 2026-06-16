// ============================================================
// sections1.jsx — LogoMark, Placeholder, CircuitDeco, Nav, Hero, Services, Diferenciais
// ============================================================
(function(){
const React = window.React;
const { useState, useEffect, useRef } = React;
const { Icon, waLink, WA_BASE, PHONE_DISPLAY, NAV_LINKS, SERVICES, DIFERENCIAIS } = window;

// ---- Logo with real image ----
function Logo({ onClick }) {
  return (
    <div className="logo" onClick={onClick} style={{cursor:"pointer"}}>
      <img
        src="logo.png"
        alt="Ultra Portões Automáticos"
        style={{height:42, width:"auto", display:"block", borderRadius:7}}
      />
    </div>
  );
}

// ---- striped captioned placeholder ----
function Placeholder({ label, dark, corners = true, style }) {
  return (
    <div className={dark ? "ph dark" : "ph"} style={style}>
      {corners && <><i className="corner tl" /><i className="corner tr" /><i className="corner br" /></>}
      <span className="ph-tag">{label}</span>
    </div>
  );
}

// ---- circuit line decoration ----
function CircuitDeco({ light }) {
  const c = light ? "rgba(0,148,232,.5)" : "rgba(0,148,232,.55)";
  const c2 = light ? "rgba(10,10,10,.06)" : "rgba(255,255,255,.06)";
  return (
    <svg className="circuit" viewBox="0 0 1200 800" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <g stroke={c2} strokeWidth="1">
        {Array.from({ length: 7 }).map((_, i) => <line key={i} x1="0" y1={100 * i + 60} x2="1200" y2={100 * i + 60} />)}
      </g>
      <g fill="none" stroke={c} strokeWidth="1.4">
        <path className="ln" d="M820 0 V120 H980 V260 H1120" />
        <path className="ln b" d="M1080 80 H920 V200 H760 V360 H1010" />
        <path className="ln c" d="M900 800 V640 H1060 V520 H1200" />
      </g>
      <g fill={c}>
        {[[980,120],[1120,260],[760,200],[1010,360],[1060,520],[920,200]].map(([x,y],i)=>(
          <circle key={i} className="nd" cx={x} cy={y} r="4" style={{animationDelay:`${1+i*.18}s`}} />
        ))}
      </g>
    </svg>
  );
}

// ============================================================
// NAV
// ============================================================
function Nav({ variant }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  // dark text-on-transparent only over the escuro hero, at top
  const onDark = variant === "escuro" && !scrolled;
  // split/escuro-scrolled use the solid bar; claro & split stay light/solid
  const solid = scrolled || variant === "split";
  const cls = ["nav", solid && "scrolled", onDark && "on-dark"].filter(Boolean).join(" ");
  const go = (e, href) => { e.preventDefault(); setMenu(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <header className={cls}>
        <div className="nav-inner">
          <Logo onClick={top} />
          <nav className="nav-links">
            {NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={(e)=>go(e,l.href)}>{l.t}</a>)}
          </nav>
          <div className="nav-cta">
            <a className="nav-phone" href={`tel:+${"5511940403153"}`}><Icon.phone />{PHONE_DISPLAY}</a>
            <button className="nav-btn" onClick={(e)=>go(e,"#orcamento")}>Solicitar Orçamento</button>
            <button className="nav-burger" aria-label="Menu" onClick={()=>setMenu(m=>!m)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={menu ? "m-menu open" : "m-menu"}>
        {NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={(e)=>go(e,l.href)}>{l.t}</a>)}
        <a href={`tel:+5511940403153`}>{PHONE_DISPLAY}</a>
        <button className="btn" onClick={(e)=>go(e,"#orcamento")}>Solicitar Orçamento <Icon.arrowRight className="ic" /></button>
      </div>
    </>
  );
}

// ============================================================
// HERO
// ============================================================
const HeroCopy = ({ light, stats = true }) => {
  const scroll = () => document.querySelector("#orcamento")?.scrollIntoView({ behavior:"smooth" });
  return (
    <div className="hero-copy">
      <span className="kicker">Automação · Segurança · Tecnologia</span>
      <h1 className="head" style={{ marginTop: 22 }}>
        Portões automáticos com <span className="accent">segurança, tecnologia e qualidade</span>
      </h1>
      <p className="sub" style={{ marginTop: 24 }}>
        Instalação, manutenção e automação de portões residenciais, comerciais e industriais —
        com equipe especializada e garantia em cada projeto.
      </p>
      <div className="cta-row">
        <button className="btn lg" onClick={scroll}>Solicitar Orçamento <Icon.arrowRight className="ic" /></button>
        <a className="btn lg wa" href={WA_BASE} target="_blank" rel="noopener">
          <Icon.whatsapp className="ic" /> Falar no WhatsApp
        </a>
      </div>
      {stats && (
        <div className="hero-stats">
          <div className="s"><b>+5</b><span>Anos de mercado</span></div>
          <div className="s"><b>100%</b><span>Serviços com garantia</span></div>
          <div className="s"><b>24h</b><span>Atendimento ágil</span></div>
        </div>
      )}
    </div>
  );
};

function Hero({ variant }) {
  if (variant === "split") {
    return (
      <section className="hero" data-screen-label="Hero (Split)">
        <div className="hero-grid wrap" style={{ maxWidth: "none", padding: 0 }}>
          <div className="hero-left">
            <CircuitDeco />
            <div style={{ position:"relative", zIndex:2, maxWidth:560, marginLeft:"auto", paddingRight:"clamp(0px,2vw,40px)" }}>
              <HeroCopy />
            </div>
          </div>
          <div className="hero-right">
            <span className="seam" />
            <img src="hero-foto.jpg" alt="Ultra Portões Automáticos" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
          </div>
        </div>
      </section>
    );
  }
  const dark = variant === "escuro";
  return (
    <section className="hero" data-screen-label={`Hero (${dark ? "Escuro" : "Claro"})`}>
      {dark && <span className="hero-glow" />}
      <CircuitDeco light={!dark} />
      <div className="hero-grid wrap">
        <HeroCopy />
        <div className="hero-art">
          <img src="hero-foto.jpg" alt="Ultra Portões Automáticos — sede e portão moderno" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 30%",borderRadius:12}} />
          <div className="hero-badge">
            <Icon.shieldCheck style={{ width:38, height:38, color:"var(--accent)" }} />
            <div><b>5★</b><span>Clientes satisfeitos na região</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SERVICES
// ============================================================
function Services() {
  return (
    <section className="services sec-pad" id="servicos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">O que fazemos</span>
          <h2 className="head">Soluções completas em portões automáticos</h2>
          <p>Do projeto à manutenção, cuidamos de cada etapa com técnica, peças originais e acabamento profissional.</p>
        </div>
        <div className="svc-grid reveal">
          {SERVICES.map((s, i) => {
            const Ic = Icon[s.ic];
            return (
              <article className="svc" key={i}>
                <span className="num">{String(i+1).padStart(2,"0")}</span>
                <div className="ic-wrap"><Ic /></div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="arr">Saiba mais <Icon.arrowRight style={{width:15,height:15}} /></span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DIFERENCIAIS
// ============================================================
function Diferenciais() {
  return (
    <section className="dif sec-pad" id="diferenciais">
      <CircuitDeco />
      <div className="wrap" style={{ position:"relative", zIndex:2 }}>
        <div className="sec-head reveal" style={{ maxWidth: 720 }}>
          <span className="kicker">Por que a Ultra Portões</span>
          <h2 className="head">Confiança que se vê em cada detalhe</h2>
          <p>Trabalho técnico, transparência no orçamento e suporte que continua depois da instalação.</p>
        </div>
        <div className="dif-grid">
          {DIFERENCIAIS.map((d, i) => {
            const Ic = Icon[d.ic];
            return (
              <div className={`dif-item reveal d${(i%3)}`.replace("d0","")} key={i}>
                <span className="n">{String(i+1).padStart(2,"0")}</span>
                <div className="ic"><Ic /></div>
                <h3>{d.t}</h3>
                <p>{d.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Logo, Placeholder, CircuitDeco, Nav, Hero, Services, Diferenciais });
})();
