// ============================================================
// sections2.jsx — Sobre, Projetos, Depoimentos, Cobertura, Orçamento, Fab, Footer
// ============================================================
(function(){
const React = window.React;
const { useState, useMemo } = React;
const {
  Icon, Placeholder, waLink, WA_NUMBER, WA_BASE, PHONE_DISPLAY, EMAIL, ADDRESS, ADDRESS_SHORT, INSTAGRAM,
  PROJ_CATS, PROJECTS, DEPOIMENTOS, HOODS, SERVICES, NAV_LINKS,
} = window;

// ============================================================
// SOBRE
// ============================================================
function Sobre() {
  const pts = ["Soluções seguras e duráveis","Atendimento transparente","Suporte técnico confiável","Praticidade e tranquilidade"];
  return (
    <section className="sobre sec-pad" id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-art reveal">
          <img src="sobre-foto.jpg" alt="Portão automático moderno instalado pela Ultra Portões" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:12,objectPosition:"center 40%"}} />
          <div className="tag-float"><b>+5</b><span>anos entregando segurança e qualidade</span></div>
        </div>
        <div className="sobre-txt reveal d1">
          <span className="kicker">Quem somos</span>
          <h2 className="head" style={{ fontSize:"clamp(34px,4.4vw,62px)", margin:"16px 0 22px" }}>
            Segurança e tecnologia para o seu acesso
          </h2>
          <p>
            A <strong>Ultra Portões Automáticos</strong> nasceu com o propósito de oferecer soluções
            seguras, modernas e duráveis para residências, empresas e condomínios. Com experiência no
            mercado e uma equipe especializada, buscamos entregar instalações de alta qualidade,
            atendimento transparente e suporte técnico confiável.
          </p>
          <p style={{ marginTop: 14 }}>
            Nosso compromisso é garantir praticidade, segurança e tranquilidade para nossos clientes
            em cada projeto realizado.
          </p>
          <ul className="sobre-list">
            {pts.map((p,i)=>(<li key={i}><Icon.checkCircle />{p}</li>))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROJETOS
// ============================================================
function Projetos() {
  const [cat, setCat] = useState("Todos");
  const shown = useMemo(
    () => cat === "Todos" ? PROJECTS : PROJECTS.filter(p => p.cat === cat),
    [cat]
  );
  return (
    <section className="proj sec-pad" id="projetos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Projetos realizados</span>
          <h2 className="head">Trabalho que fala por nós</h2>
          <p>Uma amostra de instalações, automações e reformas entregues para clientes da região.</p>
        </div>
        <div className="proj-filters reveal">
          {PROJ_CATS.map(c => (
            <button key={c} className={c === cat ? "active" : ""} onClick={()=>setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="proj-grid reveal">
          {shown.map((p, i) => (
            <article className="proj-card" key={p.t + i} style={{ animationDelay: `${i*0.05}s` }}>
              <img
                src={p.img}
                alt={p.t}
                style={{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform .5s ease"}}
                className="proj-img"
              />
              <div className="meta">
                <span className="cat">{p.cat}</span>
                <b>{p.t}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DEPOIMENTOS
// ============================================================
function Depoimentos() {
  return (
    <section className="depo sec-pad" id="depoimentos">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="kicker center">Depoimentos</span>
          <h2 className="head">O que dizem nossos clientes</h2>
          <p>Avaliações reais de quem confiou na Ultra Portões.</p>
        </div>
        <div className="depo-grid reveal">
          {DEPOIMENTOS.map((d, i) => (
            <article className="depo-card" key={i}>
              <div style={{ display:"flex", alignItems:"center" }}>
                <div className="stars">{Array.from({length:5}).map((_,s)=><Icon.star key={s} />)}</div>
                <Icon.google className="g" />
              </div>
              <p className="quote">“{d.q}”</p>
              <div className="who">
                {d.av
                  ? <img src={d.av} alt={d.n} style={{width:44,height:44,borderRadius:"50%",objectFit:"cover",flex:"0 0 auto"}} />
                  : <div className="av">{d.n.split(" ").map(w=>w[0]).slice(0,2).join("")}</div>
                }
                <div><b>{d.n}</b><span>{d.l}</span></div>
              </div>
            </article>
          ))}
        </div>
        <p className="depo-note">Avaliações reais do Google · <a href="https://g.page/r/ultraportoes" target="_blank" rel="noopener" style={{color:"var(--accent)"}}>Ver todas no Google</a></p>
      </div>
    </section>
  );
}

// ============================================================
// COBERTURA
// ============================================================
function Cobertura() {
  const lat = -23.57152, lon = -46.74397;
  const d = 0.010;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-d},${lat-d*0.62},${lon+d},${lat+d*0.62}&layer=mapnik&marker=${lat},${lon}`;
  const gmaps = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  return (
    <section className="cob sec-pad" id="cobertura">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Área de atuação</span>
          <h2 className="head">Atendemos toda a região</h2>
          <p>Base na Vila Butantã, com atendimento ágil na zona oeste de São Paulo e cidades vizinhas.</p>
        </div>
        <div className="cob-grid">
          <div className="cob-info reveal">
            <h3 className="head" style={{ fontSize:28, margin:"0 0 6px" }}>Bairros atendidos</h3>
            <div className="hood-list">
              {HOODS.map(h => <span key={h}>{h}</span>)}
            </div>
            <div className="cob-card">
              <div className="row"><Icon.mapPin /><div><b>Endereço</b><span>{ADDRESS}</span></div></div>
              <div className="row"><Icon.phone /><div><b>Telefone / WhatsApp</b><span>{PHONE_DISPLAY}</span></div></div>
              <div className="row"><Icon.clock /><div><b>Horário</b><span>Seg a Sáb · 8h às 18h · Urgências sob consulta</span></div></div>
            </div>
          </div>
          <div className="cob-map reveal d1">
            <iframe src={mapSrc} title="Mapa Ultra Portões" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <a className="map-cta" href={gmaps} target="_blank" rel="noopener">
              <Icon.mapPin style={{width:16,height:16}} /> Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ORÇAMENTO
// ============================================================
function Orcamento() {
  const [f, setF] = useState({ nome:"", telefone:"", endereco:"", servico:"", mensagem:"" });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF(p => ({ ...p, [k]: e.target.value }));
  const blur = (k) => () => setTouched(p => ({ ...p, [k]: true }));

  const errs = {
    nome: f.nome.trim().length < 2 ? "Informe seu nome" : "",
    telefone: f.telefone.replace(/\D/g,"").length < 10 ? "Telefone inválido" : "",
    servico: !f.servico ? "Selecione um serviço" : "",
  };
  const invalid = (k) => touched[k] && errs[k];

  const submit = (e) => {
    e.preventDefault();
    setTouched({ nome:true, telefone:true, servico:true });
    if (errs.nome || errs.telefone || errs.servico) return;
    const msg =
`Olá, gostaria de solicitar um orçamento.

• Nome: ${f.nome}
• Telefone: ${f.telefone}${f.endereco ? `\n• Endereço: ${f.endereco}` : ""}
• Serviço: ${f.servico}${f.mensagem ? `\n• Mensagem: ${f.mensagem}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
  };

  return (
    <section className="orc sec-pad" id="orcamento">
      <CircuitDeco />
      <div className="wrap orc-grid" style={{ position:"relative", zIndex:2 }}>
        <div className="orc-left reveal">
          <span className="kicker">Orçamento sem compromisso</span>
          <h2 style={{ marginTop: 18 }}>Solicite seu orçamento</h2>
          <p>Conte o que você precisa e nossa equipe retorna com uma proposta clara, rápida e sem taxas escondidas.</p>
          <ul className="perks">
            <li><Icon.checkCircle /> Resposta no mesmo dia útil</li>
            <li><Icon.checkCircle /> Avaliação técnica gratuita</li>
            <li><Icon.checkCircle /> Garantia formal em todos os serviços</li>
          </ul>
          <div className="wa-inline">
            <a className="btn wa lg" href={WA_BASE} target="_blank" rel="noopener">
              <Icon.whatsapp className="ic" /> Falar agora no WhatsApp
            </a>
            <span className="or">ou preencha o formulário →</span>
          </div>
        </div>

        <div className="form-card reveal d1">
          {sent ? (
            <div className="form-success">
              <div className="ok"><Icon.checkCircle style={{width:34,height:34}} /></div>
              <h3>Pedido enviado!</h3>
              <p>Abrimos o WhatsApp com seus dados. É só enviar a mensagem que já vamos te responder.</p>
              <button className="btn" onClick={()=>{setSent(false);setF({nome:"",telefone:"",endereco:"",servico:"",mensagem:""});setTouched({});}}>
                Novo orçamento
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3>Conte sobre seu projeto</h3>
              <p className="fc-sub">Leva menos de 1 minuto.</p>
              <div className={`field ${invalid("nome") ? "invalid" : ""}`}>
                <label>Nome <span className="req">*</span></label>
                <input value={f.nome} onChange={set("nome")} onBlur={blur("nome")} placeholder="Seu nome completo" />
                <div className="err">{errs.nome}</div>
              </div>
              <div className="field row2">
                <div className={`field ${invalid("telefone") ? "invalid" : ""}`} style={{margin:0}}>
                  <label>Telefone <span className="req">*</span></label>
                  <input value={f.telefone} onChange={set("telefone")} onBlur={blur("telefone")} placeholder="(11) 90000-0000" inputMode="tel" />
                  <div className="err">{errs.telefone}</div>
                </div>
                <div className={`field ${invalid("servico") ? "invalid" : ""}`} style={{margin:0}}>
                  <label>Tipo de serviço <span className="req">*</span></label>
                  <select value={f.servico} onChange={set("servico")} onBlur={blur("servico")}>
                    <option value="">Selecione...</option>
                    {SERVICES.map(s => <option key={s.t} value={s.t}>{s.t}</option>)}
                    <option value="Outro">Outro</option>
                  </select>
                  <div className="err">{errs.servico}</div>
                </div>
              </div>
              <div className="field">
                <label>Endereço</label>
                <input value={f.endereco} onChange={set("endereco")} placeholder="Bairro / cidade (opcional)" />
              </div>
              <div className="field">
                <label>Mensagem</label>
                <textarea value={f.mensagem} onChange={set("mensagem")} placeholder="Descreva o portão, a medida aproximada ou o problema..."></textarea>
              </div>
              <button type="submit" className="btn lg">Enviar pelo WhatsApp <Icon.whatsapp className="ic" /></button>
              <p className="fineprint">Ao enviar, você abre uma conversa no WhatsApp com os dados preenchidos.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FLOATING WHATSAPP
// ============================================================
function Fab() {
  return (
    <div className="fab">
      <a className="fab-btn" href={WA_BASE} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        <Icon.whatsapp width={34} height={34} style={{color:"#fff"}} />
      </a>
      <div className="fab-bubble">
        <b>Ultra Portões</b>
        Olá! 👋 Gostaria de solicitar um orçamento?
      </div>
    </div>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  const { Logo } = window;
  const go = (e, href) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior:"smooth" }); };
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <Logo />
          <p className="foot-about">Instalação, automação e manutenção de portões automáticos com segurança, tecnologia e garantia.</p>
          <div className="foot-social">
            <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram"><Icon.instagram /></a>
            <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Facebook"><Icon.facebook /></a>
            <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><Icon.whatsapp /></a>
          </div>
        </div>
        <div>
          <h4>Serviços</h4>
          <ul>{SERVICES.slice(0,5).map(s => <li key={s.t}><a href="#servicos" onClick={(e)=>go(e,"#servicos")}>{s.t}</a></li>)}</ul>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            {NAV_LINKS.map(l => <li key={l.href}><a href={l.href} onClick={(e)=>go(e,l.href)}>{l.t}</a></li>)}
            <li><a href="#orcamento" onClick={(e)=>go(e,"#orcamento")}>Orçamento</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul className="foot-contact">
            <li><Icon.phone /><a href="tel:+5511940403153">{PHONE_DISPLAY}</a></li>
            <li><Icon.whatsapp /><a href={WA_BASE} target="_blank" rel="noopener">WhatsApp direto</a></li>
            <li><Icon.mail /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><Icon.mapPin /><span>{ADDRESS}</span></li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bot">
        <span>© {new Date().getFullYear()} Ultra Portões Automáticos. Todos os direitos reservados.</span>
        <span>Vila Butantã · São Paulo / SP · @ultraportoes</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Sobre, Projetos, Depoimentos, Cobertura, Orcamento, Fab, Footer });
})();
