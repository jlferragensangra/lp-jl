(function(){
  var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- título do hero palavra por palavra ---- */
  var h1 = document.querySelector('.hero h1');
  if (h1 && !reduzido) {
    var partes = [];
    h1.childNodes.forEach(function(n){
      if (n.nodeType === 3) {
        n.textContent.split(/\s+/).forEach(function(p){ if(p) partes.push({t:p}); });
      } else if (n.nodeType === 1) {
        partes.push({t:n.textContent, em:n.tagName === 'EM'});
      }
    });
    h1.innerHTML = partes.map(function(p,i){
      var interno = p.em ? '<em>'+p.t+'</em>' : p.t;
      return '<span class="w" style="animation-delay:'+(0.18 + i*0.07)+'s">'+interno+'</span>';
    }).join(' ');
  }

  /* ---- reveal ao rolar ---- */
  var alvos = document.querySelectorAll('.sec-head, .sobre-txt, .sobre-foto, .prod, .uni, .horario, details, .cta-final h2, .cta-final p, .cta-final .btn');
  alvos.forEach(function(el,i){ el.classList.add('reveal'); });
  /* cascata nos grupos de cards */
  ['.prod-grid','.uni-grid','.dif-list','.faq-list'].forEach(function(sel){
    var grupo = document.querySelector(sel);
    if (grupo) Array.prototype.forEach.call(grupo.children, function(el,i){
      el.classList.add('reveal');
      el.style.transitionDelay = (i*0.08)+'s';
    });
  });
  if ('IntersectionObserver' in window && !reduzido) {
    var io = new IntersectionObserver(function(entradas){
      entradas.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  /* ---- contadores animados nas estatísticas ---- */
  var stats = document.querySelectorAll('.hero-stats .stat b');
  function animaContador(el){
    var texto = el.textContent.trim();
    var alvo = parseInt(texto, 10);
    var sufixo = texto.replace(/^\d+/,'');
    if (isNaN(alvo)) return;
    var inicio = null, dur = 1400;
    function passo(ts){
      if (!inicio) inicio = ts;
      var p = Math.min((ts - inicio)/dur, 1);
      p = 1 - Math.pow(1 - p, 3); /* ease-out */
      el.textContent = Math.round(alvo * p) + sufixo;
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }
  if (!reduzido) stats.forEach(animaContador);

  /* ---- header encolhe + barra de progresso ---- */
  var header = document.querySelector('header');
  var barra = document.querySelector('.progress-bar');
  function aoRolar(){
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('shrink', y > 60);
    if (barra) {
      var total = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.width = (total > 0 ? (y/total)*100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', aoRolar, {passive:true});
  aoRolar();
})();
