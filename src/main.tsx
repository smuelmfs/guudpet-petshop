'use client';

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Check, Copy, Facebook, Heart, Instagram, MapPin, Menu, MessageCircle, PawPrint, Phone, Plus, Star, X } from 'lucide-react';
import { business, mapsUrl, phoneUrl, whatsappUrl } from './config';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { image: 'gallery-chow-oculos', alt: 'Chow-chow com óculos brancos' },
  { image: 'gallery-gato-bandana', alt: 'Gato com uma bandana amarela' },
  { image: 'gallery-poodle-filhote', alt: 'Cachorrinho de pelo encaracolado branco e caramelo' },
  { image: 'gallery-samoieda', alt: 'Samoieda branco sobre um fundo rosa' },
  { image: 'gallery-gato-cesta', alt: 'Gato de pelo dourado numa cesta' },
  { image: 'gallery-cao-rosa', alt: 'Cão de pelo branco, preto e castanho sobre um fundo rosa' },
];
const links = [['Sobre', 'sobre'], ['Serviços', 'servicos'], ['Galeria', 'galeria'], ['Localização', 'contacto']];
const footerLinks = [['Sobre nós', 'sobre'], ['Nossos serviços', 'servicos'], ['O jeito GuudPet', 'jeito-guudpet'], ['Quem recomenda', 'avaliacoes'], ['Como funciona', 'como-funciona'], ['Galeria', 'galeria'], ['Dúvidas comuns', 'duvidas'], ['Fala connosco', 'contacto']];
function AnimatedText({ text }: { text: string }) {
  return <span className="motion-text"><span className="sr-only">{text}</span><span aria-hidden="true">{text.split(' ').map((word, index) => <React.Fragment key={`${word}-${index}`}>{index > 0 && ' '}<span className="motion-word">{[...word].map((letter, letterIndex) => <span className="motion-char" key={letterIndex}>{letter}</span>)}</span></React.Fragment>)}</span></span>;
}
function Wave({ className = '' }: { className?: string }) {
  return <svg aria-hidden="true" className={`wave ${className}`} viewBox="0 0 1440 70" preserveAspectRatio="none"><path d="M0 34C40 1 75 1 120 34S200 67 240 34S320 1 360 34S440 67 480 34S560 1 600 34S680 67 720 34S800 1 840 34S920 67 960 34S1040 1 1080 34S1160 67 1200 34S1280 1 1320 34S1400 67 1440 34V70H0Z" /></svg>;
}

// The reference HTML uses SVG textPath. Measure one complete phrase in the
// actual font so the loop wraps at precisely the same point on every screen.
function CurvedRibbon({ className = '', words = 'PATAS, MIMOS & MUITO AMOR', editorial = false }: { className?: string; words?: string; editorial?: boolean }) {
  const id = useId().replaceAll(':', '');
  const wrapper = useRef<HTMLDivElement>(null);
  const measure = useRef<SVGTextElement>(null);
  const textPath = useRef<SVGTextPathElement>(null);
  const phrase = `${words}  ·  `;
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    if (!editorial) return;
    const query = window.matchMedia('(max-width: 600px)');
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [editorial]);

  useLayoutEffect(() => {
    let active = true;
    let tween: gsap.core.Tween | undefined;
    let observer: IntersectionObserver | undefined;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const start = () => {
      tween?.kill();
      observer?.disconnect();
      textPath.current?.setAttribute('startOffset', '0');
      if (!active || !measure.current || !textPath.current || preference.matches) return;
      const period = measure.current.getComputedTextLength();
      if (!period) return;
      tween = gsap.fromTo(textPath.current, { attr: { startOffset: 0 } }, {
        attr: { startOffset: -period }, duration: period / 42, ease: 'none', repeat: -1, paused: true,
      });
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !document.hidden) tween?.play(); else tween?.pause();
      });
      if (wrapper.current) observer.observe(wrapper.current);
    };
    const pauseInBackground = () => {
      const rect = wrapper.current?.getBoundingClientRect();
      if (!document.hidden && rect && rect.bottom > 0 && rect.top < window.innerHeight) tween?.play();
      else tween?.pause();
    };
    document.fonts.ready.then(start);
    preference.addEventListener('change', start);
    document.addEventListener('visibilitychange', pauseInBackground);
    return () => {
      active = false;
      tween?.kill();
      observer?.disconnect();
      preference.removeEventListener('change', start);
      document.removeEventListener('visibilitychange', pauseInBackground);
    };
  }, [phrase, compact]);

  return <div ref={wrapper} className={`curved-ribbon ${className}${compact ? ' ribbon-compact' : ''}`} aria-hidden="true">
    <svg viewBox={editorial ? (compact ? '0 0 600 240' : '0 0 1600 600') : '0 0 1600 310'} xmlns="http://www.w3.org/2000/svg">
      <defs><path id={`ribbon-${id}`} d={editorial ? (compact ? 'M-80 75C60 215 220 215 330 120S490 20 680 115' : 'M-120 210C170 590 430 605 770 290S1210 -30 1720 260') : 'M-120 225C180 310 365 25 720 112S1200 300 1720 65'} /></defs>
      <use href={`#ribbon-${id}`} className="ribbon-base" />
      <use href={`#ribbon-${id}`} className="ribbon-band" />
      <text ref={measure} className="ribbon-measure" xmlSpace="preserve">{phrase}</text>
      <text dy=".34em" xmlSpace="preserve"><textPath ref={textPath} href={`#ribbon-${id}`} startOffset="0">{phrase.repeat(12)}</textPath></text>
    </svg>
  </div>;
}

function BookingButton({ className = '', label = 'Agendar pelo WhatsApp', onUnavailable }: { className?: string; label?: string; onUnavailable: () => void }) {
  const url = whatsappUrl();
  const content = <><span className="button-shadow" aria-hidden="true" /><span className="button-face"><MessageCircle size={18} />{label}<ArrowUpRight size={18} /></span></>;
  return url
    ? <a className={`button-shell ${className}`} href={url} target="_blank" rel="noopener noreferrer">{content}</a>
    : <button type="button" className={`button-shell ${className}`} onClick={onUnavailable}>{content}</button>;
}

const commonQuestions = [
  { question: 'Onde consulto preços e disponibilidade?', answer: 'Contacta a equipa para consultar valores e vagas. Indica a opção pretendida e o porte do animal para facilitar a resposta.' },
  { question: 'Ainda não sei qual opção escolher. E agora?', answer: 'Explica o que gostarias de resolver. Não precisas de chegar com uma decisão tomada: podes esclarecer as possibilidades primeiro.' },
  { question: 'Devo avisar sobre alergias ou medicação?', answer: 'Sim. Partilha essas informações antes da marcação, incluindo reações anteriores e recomendações do médico veterinário.' },
  { question: 'E para levar um gato?', answer: 'Confirma previamente o atendimento pretendido e os preparativos necessários. Conta também como o felino costuma reagir a ambientes novos.' },
  { question: 'Posso falar sobre receios ou experiências anteriores?', answer: 'Claro. Barulhos, manipulações ou situações que provoquem desconforto são informações úteis para planear a abordagem.' },
];

function CommonQuestions() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const prefix = useId();
  const reduced = useReducedMotion();
  return <section className="faq section" id="duvidas" aria-labelledby="faq-title" tabIndex={-1}>
    <div className="container faq-grid">
      <div className="faq-heading" data-reveal><span className="eyebrow">Bom saber</span><h2 id="faq-title"><AnimatedText text="Dúvidas" /><br /><span><AnimatedText text="comuns." /></span></h2><p>Respostas breves para chegares mais tranquilo.</p></div>
      <div className="faq-list">{commonQuestions.map((item, index) => {
        const open = expanded === index;
        const triggerId = `${prefix}-question-${index}`;
        const panelId = `${prefix}-answer-${index}`;
        return <div className="faq-item" key={item.question}>
          <h3><button type="button" id={triggerId} aria-expanded={open} aria-controls={panelId} onClick={() => setExpanded(open ? null : index)}><span>{item.question}</span><span className="faq-indicator" aria-hidden="true"><Plus size={22} /></span></button></h3>
          <motion.div id={panelId} className="faq-panel" role="region" aria-labelledby={triggerId} aria-hidden={!open} inert={!open} initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: reduced ? 0 : .28, ease: [.22, 1, .36, 1] }}><p>{item.answer}</p></motion.div>
        </div>;
      })}</div>
    </div>
  </section>;
}

function PhotoGallery({ onOpen, modalOpen }: { onOpen: (index: number) => void; modalOpen: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, y: 0, lastX: 0, time: 0, active: false, moved: false });
  const physics = useRef({ velocity: 0, remainder: 0, angle: 0, angularVelocity: 0, period: 0, visible: false, hover: false, focus: false, modal: false, touch: false });
  const reduced = useReducedMotion();
  useEffect(() => { physics.current.modal = modalOpen; if (modalOpen) physics.current.velocity = 0; }, [modalOpen]);
  useEffect(() => {
    const element = viewport.current;
    const strip = track.current;
    if (!element || !strip) return;
    const state = physics.current;
    const wrap = () => {
      if (!state.period) return;
      if (element.scrollLeft < state.period) element.scrollLeft += state.period;
      else if (element.scrollLeft >= state.period * 2) element.scrollLeft -= state.period;
    };
    const measure = () => {
      const cycles = strip.querySelectorAll<HTMLElement>('.gallery-cycle');
      const period = cycles[1].offsetLeft - cycles[0].offsetLeft;
      const phase = state.period ? (element.scrollLeft % state.period) / state.period : 0;
      state.period = period;
      element.scrollLeft = period * (1 + phase);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    const visibility = new IntersectionObserver(([entry]) => { state.visible = entry.isIntersecting; }, { threshold: .05 });
    visibility.observe(element);
    element.addEventListener('scroll', wrap, { passive: true });
    const tick = (_time: number, delta: number) => {
      if (!state.visible || document.hidden || state.modal) return;
      const dt = Math.min(delta / 1000, .032);
      if (!drag.current.active) {
        state.velocity *= Math.exp(-(state.touch ? 3 : 4.4) * dt);
        if (Math.abs(state.velocity) < 1) state.velocity = 0;
        const drift = !state.hover && !state.focus ? 18 : 0;
        state.remainder += (state.velocity + drift) * dt;
        const pixels = Math.trunc(state.remainder);
        element.scrollLeft += pixels;
        state.remainder -= pixels;
      }
      wrap();
      const targetAngle = Math.max(-8, Math.min(8, -state.velocity / 150));
      state.angularVelocity += ((targetAngle - state.angle) * 95 - state.angularVelocity * 14) * dt;
      state.angle += state.angularVelocity * dt;
      strip.style.setProperty('--gallery-sway', `${state.angle}deg`);
      strip.style.setProperty('--gallery-bob', `${Math.abs(state.angle) * .5}px`);
    };
    const hideCursor = () => cursor.current?.classList.remove('is-visible');
    window.addEventListener('scroll', hideCursor, { passive: true });
    window.addEventListener('blur', hideCursor);
    measure();
    if (!reduced) gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick); observer.disconnect(); visibility.disconnect();
      element.removeEventListener('scroll', wrap); window.removeEventListener('scroll', hideCursor); window.removeEventListener('blur', hideCursor);
      strip.style.removeProperty('--gallery-sway'); strip.style.removeProperty('--gallery-bob');
      state.velocity = 0; state.remainder = 0; state.angle = 0; state.angularVelocity = 0;
    };
  }, [reduced]);
  const move = (direction: number) => viewport.current?.scrollBy({ left: direction * viewport.current.clientWidth * .8, behavior: reduced ? 'auto' : 'smooth' });
  const finish = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.timeStamp - drag.current.time > 100 || reduced || event.type === 'pointercancel') physics.current.velocity = 0;
    drag.current.active = false;
    event.currentTarget.classList.remove('is-dragging');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    cursor.current?.classList.remove('is-pressed');
  };
  const positionCursor = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !cursor.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    cursor.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
    cursor.current.classList.toggle('is-visible', event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom);
  };
  return <div className="photo-gallery">
    <div ref={viewport} className="gallery-viewport" role="region" aria-label="Galeria horizontal de fotografias" tabIndex={0}
      onKeyDown={(event) => { if (event.target === event.currentTarget && ['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }}
      onFocusCapture={(event) => { physics.current.focus = event.target.matches(':focus-visible'); physics.current.velocity = 0; }}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) physics.current.focus = false; }}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse') physics.current.hover = true; positionCursor(event); }}
      onPointerDown={(event) => { if (event.button !== 0) return; physics.current.velocity = 0; physics.current.remainder = 0; physics.current.touch = event.pointerType === 'touch'; drag.current = { x: event.clientX, y: event.clientY, lastX: event.clientX, time: event.timeStamp, active: true, moved: false }; cursor.current?.classList.add('is-pressed'); }}
      onPointerMove={(event) => {
        positionCursor(event);
        const gesture = drag.current;
        if (!gesture.active) return;
        const distance = event.clientX - gesture.x;
        const vertical = event.clientY - gesture.y;
        if (!gesture.moved && event.pointerType !== 'mouse' && Math.abs(vertical) > 10 && Math.abs(vertical) > Math.abs(distance)) { finish(event); return; }
        if (!gesture.moved && Math.abs(distance) > (event.pointerType === 'touch' ? 3 : 6)) { gesture.moved = true; event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.classList.add('is-dragging'); }
        if (gesture.moved) {
          event.preventDefault();
          const delta = gesture.lastX - event.clientX;
          const elapsed = Math.max(8, event.timeStamp - gesture.time);
          physics.current.velocity = reduced ? 0 : Math.max(-2600, Math.min(2600, physics.current.velocity * .25 + delta / elapsed * 1000 * .75));
          physics.current.remainder += delta;
          const pixels = Math.trunc(physics.current.remainder);
          event.currentTarget.scrollLeft += pixels;
          physics.current.remainder -= pixels;
          gesture.lastX = event.clientX; gesture.time = event.timeStamp;
        }
      }}
      onPointerUp={finish} onPointerCancel={(event) => { finish(event); cursor.current?.classList.remove('is-visible'); }} onPointerLeave={(event) => { physics.current.hover = false; cursor.current?.classList.remove('is-visible'); if (event.pointerType === 'touch' || !drag.current.active) return; if (!drag.current.moved) finish(event); }} onLostPointerCapture={() => { drag.current.active = false; viewport.current?.classList.remove('is-dragging'); cursor.current?.classList.remove('is-pressed'); }}
      onClickCapture={(event) => { if (drag.current.moved) { event.preventDefault(); event.stopPropagation(); drag.current.moved = false; } }}>
      <div ref={track} className="gallery-track">{[0,1,2].map(cycle => <div className="gallery-cycle" key={cycle} aria-hidden={cycle !== 1 ? true : undefined}>{photos.map((photo, index) => <button key={photo.image} className={`gallery-card gallery-card-${index}`} tabIndex={cycle === 1 ? 0 : -1} aria-label={`Ampliar fotografia: ${photo.alt}`} onClick={() => { cursor.current?.classList.remove('is-visible'); physics.current.velocity = 0; onOpen(index); }}><span className="gallery-image"><img src={`/images/${photo.image}.webp`} alt={photo.alt} width="550" height="700" loading="lazy" draggable={false} /></span></button>)}</div>)}</div>
    </div>
    <div ref={cursor} className="gallery-drag-cursor" aria-hidden="true"><span><ArrowLeft size={18} />Arraste<ArrowRight size={18} /></span></div>
  </div>;
}

function InteractiveReviews({ children }: { children: React.ReactNode }) {
  const cards = useRef<{ element: HTMLElement; bounds: DOMRect }[]>([]);
  const reduced = useReducedMotion();
  const reset = () => {
    cards.current.forEach(({ element }) => {
      element.style.removeProperty('--review-repel-x');
      element.style.removeProperty('--review-repel-y');
    });
    cards.current = [];
  };
  return <div className="reviews-fan"
    onPointerEnter={(event) => {
      if (reduced || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      cards.current = [...event.currentTarget.querySelectorAll<HTMLElement>('.review-card')].map(element => ({ element, bounds: element.getBoundingClientRect() }));
    }}
    onPointerMove={(event) => {
      if (reduced || event.pointerType !== 'mouse') return;
      cards.current.forEach(({ element, bounds }) => {
        const dx = bounds.left + bounds.width / 2 - event.clientX;
        const dy = bounds.top + bounds.height / 2 - event.clientY;
        const distance = Math.hypot(dx, dy);
        const strength = Math.max(0, 1 - distance / 360) * 32;
        const direction = Math.hypot(dx, dy, 64);
        element.style.setProperty('--review-repel-x', `${dx / direction * strength}px`);
        element.style.setProperty('--review-repel-y', `${dy / direction * strength}px`);
      });
    }}
    onPointerLeave={reset}
    onPointerCancel={reset}
    onScroll={reset}
  >{children}</div>;
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLElement>(null);
  const pendingAnchor = useRef<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState<'contact' | number | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const map = mapsUrl();
  const telephone = phoneUrl();
  const services = business.services.slice(0, 3);
  const modalOpen = modal !== null;

  const openModal = (value: 'contact' | number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setModal(value);
    setCopied(false);
    setCopyError(false);
  };
  const closeModal = () => setModal(null);

  useEffect(() => {
    if (!menu) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuPanel.current?.querySelector<HTMLElement>('a')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenu(false);
        menuButton.current?.focus();
      }
      if (event.key === 'Tab' && menuPanel.current) {
        const items = [...menuPanel.current.querySelectorAll<HTMLElement>('a, button')];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menu]);

  useEffect(() => {
    if (menu || !pendingAnchor.current) return;
    const id = pendingAnchor.current;
    pendingAnchor.current = null;
    const timer = window.setTimeout(() => {
      window.history.pushState(null, '', `#${id}`);
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      target?.focus({ preventScroll: true });
    }, reduced ? 0 : 280);
    return () => window.clearTimeout(timer);
  }, [menu, reduced]);

  useEffect(() => {
    if (!modalOpen) return;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog.current?.close();
      lastFocus.current?.focus();
    };
  }, [modalOpen]);

  useEffect(() => {
    const element = root.current;
    const hero = element?.querySelector('.hero');
    if (!element || !hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      element.classList.toggle('hero-in-view', entry.isIntersecting);
    }, { rootMargin: '-88px 0px 0px 0px' });
    observer.observe(hero);
    const contactAction = element.querySelector('.contact-head > .button-shell');
    const contactObserver = new IntersectionObserver(([entry]) => {
      element.classList.toggle('contact-action-in-view', entry.isIntersecting);
    }, { rootMargin: '-88px 0px -86px 0px' });
    if (contactAction) contactObserver.observe(contactAction);
    return () => { observer.disconnect(); contactObserver.disconnect(); };
  }, []);

  useEffect(() => {
    const element = header.current;
    if (!element) return;
    let compact = window.scrollY > 80;
    let frame = 0;
    element.classList.toggle('is-scrolled', compact);
    const update = () => {
      frame = 0;
      // Separate thresholds prevent the cartoon gesture repeating near its edge.
      const next = compact ? window.scrollY > 12 : window.scrollY > 80;
      if (next === compact) return;
      compact = next;
      element.classList.toggle('is-scrolled', compact);
      element.dataset.navMotion = compact ? 'shrink' : 'expand';
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(frame);
      delete element.dataset.navMotion;
    };
  }, []);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        const textEntry = { x: -18, y: 8, scale: .62, autoAlpha: 0, transformOrigin: 'left bottom', duration: .54, stagger: .014, ease: 'back.out(1.2)' };
        const blockEntry = { x: -28, y: 8, scale: .96, autoAlpha: 0, transformOrigin: 'left center', duration: .65, ease: 'power3.out' };
        intro.from(header.current, { y: -20, autoAlpha: 0, duration: 0.5 }, 0);
        intro.from('.hero-char, .hero-title-follow .motion-char', { ...textEntry, stagger: .018 }, .18);
        intro.from('.hero-seal', { rotation: -18, y: -12, scale: .75, autoAlpha: 0, duration: .8, ease: 'back.out(1.6)' }, .55);
        intro.from('.hero-description', blockEntry, .45);
        intro.from('.hero-actions', { ...blockEntry, scale: .9, duration: .5 }, .6);
        intro.from('.hero-pets', { y: 40, scale: .95, duration: .75, ease: 'power3.out' }, .5);

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          const letters = element.querySelectorAll('.motion-char');
          const sequence = gsap.timeline({ scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
          if (letters.length) {
            sequence.from(letters, textEntry, .05)
              .from(element.querySelectorAll('.eyebrow, p:not(.footer-title), .button-shell'), { ...blockEntry, stagger: .08 }, .12);
          } else sequence.from(element, blockEntry);
        });
        gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
          gsap.from(group.children, {
            ...blockEntry, stagger: .1,
            scrollTrigger: { trigger: group, start: 'top 87%', once: true },
          });
        });
        gsap.timeline({ scrollTrigger: { trigger: '.contact-note', start: 'top 86%', once: true } })
          .from('.note-heading .motion-char', textEntry)
          .from('.note-heading .eyebrow, .note-details article', { ...blockEntry, stagger: .1 }, .12);
        gsap.timeline({ scrollTrigger: { trigger: '.about-art', start: 'top 80%', once: true }, defaults: { ease: 'power3.out', duration: .75, transformOrigin: 'left center' } })
          .from('.about-photo-frame', { x: -40, y: 16, scale: .92, autoAlpha: 0 })
          .from('.about-photo-back', { x: -26, scale: .96, autoAlpha: 0 }, .08);
        gsap.from('.about-secondary', { x: -40, scale: .92, autoAlpha: 0, transformOrigin: 'left center', duration: .75, scrollTrigger: { trigger: '.about-secondary', start: 'top 85%', once: true } });
        gsap.timeline({ scrollTrigger: { trigger: '.guudpet-way-grid', start: 'top 80%', once: true }, defaults: { ease: 'power3.out' } })
          .from('.guudpet-way-title .motion-char', textEntry)
          .from('.guudpet-way-copy > .eyebrow, .guudpet-way-list li', { ...blockEntry, stagger: .1 }, .15)
          .from('.guudpet-way-image img', { x: -32, y: 22, scale: .9, autoAlpha: 0, duration: .8 }, .1)
          .from('.guudpet-way-seal', { rotation: -14, scale: .8, autoAlpha: 0, duration: .65, ease: 'back.out(1.4)' }, .45);
        gsap.from('.review-card', {
          x: -48, y: 22, scale: .86, transformOrigin: 'left center', autoAlpha: 0, rotation: (index) => [-7, 6, -6, 7][index % 4],
          duration: .8, stagger: .12, ease: 'back.out(1.15)', clearProps: 'transform,opacity,visibility',
          scrollTrigger: { trigger: '.reviews-fan', start: 'top 84%', once: true },
        });
        const processWrap = root.current?.querySelector<HTMLElement>('.process-list-wrap');
        const processPath = root.current?.querySelector<SVGPathElement>('.process-route-fill');
        const processMarker = root.current?.querySelector<HTMLElement>('.process-traveller');
        const processSteps = gsap.utils.toArray<HTMLElement>('.process-step');
        let routeLength = 0;
        let stepStops: number[] = [];
        const measureRoute = () => {
          if (!processWrap || !processPath) return;
          const centres = processSteps.map(step => {
            const badge = step.querySelector<HTMLElement>('.process-step-number')!;
            return step.offsetTop + badge.offsetTop + badge.offsetHeight / 2;
          });
          const height = processWrap.offsetHeight;
          const width = window.innerWidth <= 600 ? 58 : window.innerWidth <= 800 ? 72 : 80;
          const centre = width / 2;
          let path = `M${centre} ${centres[0]}`;
          centres.slice(1).forEach((end, index) => {
            const start = centres[index];
            const bend = index % 2 === 0 ? 12 : -12;
            path += ` C${centre + bend} ${start + (end - start) * .33} ${centre + bend} ${start + (end - start) * .67} ${centre} ${end}`;
          });
          processWrap.querySelector('svg')?.setAttribute('viewBox', `0 0 ${width} ${height}`);
          processWrap.querySelectorAll<SVGPathElement>('.process-route').forEach(element => element.setAttribute('d', path));
          routeLength = processPath.getTotalLength();
          gsap.set(processPath, { strokeDasharray: routeLength });
          stepStops = centres.map(y => (y - centres[0]) / (centres[centres.length - 1] - centres[0]));
        };
        const updateRoute = (progress: number) => {
          if (!processPath || !processMarker || !routeLength) return;
          gsap.set(processPath, { strokeDashoffset: routeLength * (1 - progress) });
          const point = processPath.getPointAtLength(routeLength * progress);
          gsap.set(processMarker, { x: point.x, y: point.y, xPercent: -50, yPercent: -50, rotation: progress * 24 - 12 });
          processSteps.forEach((step, index) => step.classList.toggle('is-reached', progress >= stepStops[index] - .035));
        };
        measureRoute();
        gsap.to({ progress: 0 }, {
          progress: 1, ease: 'none',
          onUpdate: function () { updateRoute(this.targets()[0].progress); },
          scrollTrigger: { trigger: '.process-list', start: 'top 70%', end: 'bottom 55%', scrub: .55, invalidateOnRefresh: true, onRefresh: self => { measureRoute(); updateRoute(self.progress); } },
        });
        gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
          gsap.fromTo(step.querySelector('.process-step-number'), { rotation: -12, scale: .82 }, {
            keyframes: [{ rotation: 6, scale: 1.12 }, { rotation: -3, scale: 1 }], ease: 'none',
            scrollTrigger: { trigger: step, start: 'top 78%', end: 'top 48%', scrub: .45 },
          });
          gsap.timeline({ scrollTrigger: { trigger: step, start: 'top 84%', once: true }, defaults: { ease: 'power3.out' } })
            .from(step.querySelector('.process-step-number'), { x: -24, autoAlpha: 0, duration: .65 })
            .from(step.querySelectorAll('.motion-char'), textEntry, .1)
            .from(step.querySelector('.process-step-copy p'), blockEntry, .2);
        });
        gsap.timeline({ scrollTrigger: { trigger: '.contact-head', start: 'top 85%', once: true }, defaults: { ease: 'power3.out' } })
          .from('.contact-title-line .motion-char', textEntry)
          .from('.contact-head > .eyebrow, .contact-head > .button-shell', { ...blockEntry, stagger: .08 }, .15);
        gsap.from('.gallery-cycle > button', { x: -46, y: 16, scale: .86, autoAlpha: 0, transformOrigin: 'left center', duration: .75, stagger: .04, ease: 'back.out(1.15)', clearProps: 'transform,opacity,visibility', scrollTrigger: { trigger: '.gallery-viewport', start: 'top 85%', once: true } });
        gsap.utils.toArray<HTMLElement>('.faq-item').forEach((item, index) => {
          gsap.from(item, { ...blockEntry, delay: index * .045, scrollTrigger: { trigger: item, start: 'top 89%', once: true } });
        });
        gsap.utils.toArray<HTMLElement>('.service-card').forEach((card, index) => {
          gsap.timeline({ delay: (index % 3) * .1, scrollTrigger: { trigger: card, start: 'top 86%', once: true } })
            .from(card, { x: -46, y: 16, scale: .86, autoAlpha: 0, transformOrigin: 'left center', duration: .8, ease: 'back.out(1.15)', clearProps: 'transform,opacity,visibility' })
            .from(card.querySelector('.service-card-art img'), { y: 22, scale: .95, duration: .65, ease: 'power3.out' }, .1)
            .from(card.querySelectorAll('.motion-char'), textEntry, .18)
            .from(card.querySelector('.service-card-copy p'), { ...blockEntry, x: -16 }, .25);
        });
      }, root);
      let contextActive = true;
      const refreshMeasurements = () => { if (contextActive) ScrollTrigger.refresh(); };
      // Image frames have explicit dimensions. Refreshing for every lazy image
      // would interrupt an anchor's smooth scroll as the next section loads.
      document.fonts?.ready.then(refreshMeasurements);
      return () => {
        contextActive = false;
        ctx.revert();
      };
    });
    return () => media.revert();
  }, []);

  return <MotionConfig reducedMotion="user"><div ref={root} className="hero-in-view">
    <a className="skip" href="#main">Saltar para o conteúdo</a>
    <header className="header-wrap" ref={header}>
      <div className="navbar-surface">
      <div className="header container">
        <a className="brand" href="#inicio" aria-label="GuudPet — início"><img src="/images/logo.webp" width="190" height="63" alt="GuudPet" /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="header-actions">
          <BookingButton className="header-booking" label="Agendar" onUnavailable={() => openModal('contact')} />
          <button ref={menuButton} className="icon-button menu-toggle" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence initial={false}>{menu && <motion.nav ref={menuPanel} id="mobile-menu" className="mobile-menu" aria-label="Navegação móvel" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2, ease: 'easeOut' }}>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={(event) => { event.preventDefault(); pendingAnchor.current = id; setMenu(false); }}>{label}<ArrowUpRight size={18} /></a>)}
        <BookingButton className="mobile-menu-booking" label="Agendar pelo WhatsApp" onUnavailable={() => { setMenu(false); menuButton.current?.focus(); openModal('contact'); }} />
      </motion.nav>}</AnimatePresence>
      </div>
    </header>

    <main id="main" tabIndex={-1}>
      <section className="hero" id="inicio" tabIndex={-1} aria-labelledby="hero-title">
        <div className="hero-copy container">
          <div className="hero-headline">
            <span className="hero-seal" aria-hidden="true"><span className="hero-seal-face"><span>GUUDPET</span><PawPrint size={22} /><span>COM AMOR</span></span></span>
            <h1 id="hero-title" aria-label="O cuidado que faz o teu pet sorrir."><span className="hero-title-line" aria-hidden="true">{'O cuidado'.split(' ').map((word, index) => <React.Fragment key={word}>{index > 0 && ' '}<span className="hero-word">{[...word].map((char, charIndex) => <span className="hero-char" key={charIndex}>{char}</span>)}</span></React.Fragment>)}</span><span className="hero-title-line hero-title-follow" aria-hidden="true"><span><AnimatedText text="que faz o teu" /></span></span><span className="hero-title-line hero-title-follow" aria-hidden="true"><span><em><AnimatedText text="pet sorrir." /></em></span></span></h1>
          </div>
          <p className="hero-description"><strong>A vida sabe melhor com eles.</strong> Entre focinhos curiosos e caudas a abanar, recebemos cães e gatos com a dedicação que esta ligação merece.</p>
          <div className="hero-actions"><BookingButton className="hero-booking" label="Agendar um horário" onUnavailable={() => openModal('contact')} /></div>
        </div>
        <div className="hero-art" aria-label="Ilustração de um cão e um gato" role="img">
          <img className="hero-pets" src="/images/pair.webp" width="512" height="384" alt="" fetchPriority="high" />
        </div>
      </section>

      <section className="contact-note container" aria-labelledby="contact-note-title">
        <div className="note-heading"><span className="eyebrow">Vem conhecer-nos</span><h2 id="contact-note-title"><AnimatedText text="Tem carinho" /><br /><AnimatedText text="por aqui." /></h2></div>
        <div className="note-details">
          <article><span className="note-icon"><MapPin aria-hidden="true" /></span><div><h3>Onde estamos</h3><p>{business.address || 'Endereço a confirmar.'}</p>{map && <a className="text-link" href={map} target="_blank" rel="noopener noreferrer">Abrir no mapa <ArrowUpRight size={16} /></a>}</div></article>
          <article><span className="note-icon"><Phone aria-hidden="true" /></span><div><h3>Preferes ligar?</h3><p>Uma chamada basta para tratar da marcação.</p>{telephone ? <a className="text-link note-phone" href={telephone}>{business.phone}<ArrowUpRight size={16} /></a> : <span className="microcopy">Telefone a confirmar.</span>}</div></article>
        </div>
      </section>

      <section className="services section" id="servicos" tabIndex={-1}>
        <div className="container">
          <div className="section-heading services-heading" data-reveal><div><span className="eyebrow">Nossos serviços</span><h2><AnimatedText text="Essenciais de" /><br /><span><AnimatedText text="quatro patas." /></span></h2><p>Três formas de simplificar o dia a dia.</p></div></div>
          <div className="service-grid">{services.map((service, index) => <article className={`service-card service-card-${index}`} key={service.title}><div className="service-card-art"><img src={service.image} alt="" width="800" height="800" loading="lazy" /></div><div className="service-card-copy"><div className="service-meta"><span className="service-index">{String(index + 1).padStart(2, '0')}</span></div><h3><AnimatedText text={service.title} /></h3><p>{service.description}</p></div></article>)}</div>
        </div>
      </section>

      <section className="about" id="sobre" tabIndex={-1}>
        <div className="container about-grid">
          <div className="about-copy about-heading" data-reveal><span className="eyebrow">Mais que um petshop</span><h2><AnimatedText text="Cada detalhe" /><br /><span><AnimatedText text="conta." /></span></h2></div>
          <div className="about-panel">
            <div className="about-art"><div className="about-photo-back" aria-hidden="true" /><div className="about-photo-frame"><img className="about-photo" src="/images/care.webp" width="1200" height="800" alt="Cuidado atento durante o corte das unhas de um cão" loading="lazy" /></div></div>
            <div className="about-story">
              <div className="about-copy" data-reveal><h3><AnimatedText text="Um espaço" /><br /><AnimatedText text="com alma." /></h3><p>O vínculo que tens em casa inspira a forma como recebemos os animais. Gostamos de descobrir as suas manias, os brinquedos favoritos e o que os deixa à vontade.</p><p>Também há lugar para ti: para perguntar, partilhar histórias e conhecer quem vai estar ao lado do teu companheiro.</p><BookingButton label="Escolher um horário" onUnavailable={() => openModal('contact')} /></div>
              <CurvedRibbon editorial className="about-ribbon" words="BIGODES · LAMBIDELAS · RONRONS · GUUDPET" />
              <div className="about-kindness" data-reveal><span className="about-kindness-seal" aria-hidden="true"><Heart size={38} /></span><p className="about-kindness-title"><AnimatedText text="Laços que" /><br /><AnimatedText text="vão além" /><br /><AnimatedText text="da trela." /></p><p>O melhor desta história<br />é vivê-la juntos.</p></div>
            </div>
            <figure className="about-secondary"><img src="/images/family.webp" width="1200" height="800" alt="Um cão a receber carinho junto da sua família" loading="lazy" /></figure>
          </div>
        </div>
      </section>

      <section className="guudpet-way section" id="jeito-guudpet" aria-labelledby="guudpet-way-title" tabIndex={-1}>
        <div className="container guudpet-way-grid">
          <div className="guudpet-way-copy">
            <span className="eyebrow">O jeito GuudPet</span>
            <h2 className="guudpet-way-title" id="guudpet-way-title"><span><AnimatedText text="Ao ritmo" /></span><span><AnimatedText text="de cada um." /></span></h2>
            <ol className="guudpet-way-list">
              <li><span className="guudpet-way-number" aria-hidden="true">01</span><div><h3>Personalidade primeiro</h3><p>Há os destemidos e os mais reservados. A abordagem respeita essa diferença.</p></div></li>
              <li><span className="guudpet-way-number" aria-hidden="true">02</span><div><h3>Escolhas com critério</h3><p>A pelagem, a pele e eventuais sensibilidades orientam os produtos utilizados.</p></div></li>
              <li><span className="guudpet-way-number" aria-hidden="true">03</span><div><h3>Comunicação clara</h3><p>Explicamos os procedimentos e esclarecemos o que podes fazer para manter os resultados.</p></div></li>
            </ol>
          </div>
          <motion.div className="guudpet-way-image" initial={false} animate={{ y: 0, rotate: .7, transition: { duration: .4 } }} whileInView={reduced ? undefined : { y: [0, -12, 0], rotate: [.7, -.7, .7], transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' } }} viewport={{ amount: .15 }}>
            <div className="guudpet-way-seal" aria-hidden="true"><Heart size={27} /><span>À sua<br />medida.</span></div>
            <img src="/images/guudpet-way.webp" width="744" height="1017" alt="Cão de pelo branco e castanho com a língua de fora" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="reviews section" id="avaliacoes" aria-labelledby="reviews-title" tabIndex={-1}>
        <div className="container">
          <div className="reviews-heading" data-reveal><span className="eyebrow">Experiências partilhadas</span><h2 id="reviews-title"><AnimatedText text="Quem veio" /><br /><span><AnimatedText text="conta melhor." /></span></h2>{!business.reviews.length && <p className="microcopy">Avaliações por confirmar.</p>}</div>
          <InteractiveReviews>
            {business.reviews.length ? business.reviews.map((review, index) => <article className={`review-card review-card-${index % 4}`} key={`${review.name}-${index}`}>
              <div className="review-stars" role="img" aria-label={`${review.rating} de 5 estrelas`}>{Array.from({length:5}, (_, star) => <Star key={star} size={21} fill={star < review.rating ? 'currentColor' : 'none'} aria-hidden="true" />)}</div>
              <blockquote><p>“{review.text}”</p></blockquote>
              <div className="review-author"><span className="review-avatar" aria-hidden="true">{review.name.split(' ').filter(part => part && !['de','da','do','dos','das','e'].includes(part.toLowerCase())).slice(0,2).map(part => part[0]).join('')}</span><div><h3>{review.name}</h3>{review.source && <p>{review.source}</p>}</div></div>
            </article>) : Array.from({length:4}, (_, index) => <article className={`review-card review-card-${index} review-card-pending`} key={index} aria-label="Avaliação por confirmar">
              <div className="review-stars" aria-hidden="true">{Array.from({length:5}, (_, star) => <Star key={star} size={21} />)}</div>
              <div className="review-pending-copy"><PawPrint size={32} aria-hidden="true" /><h3>Uma história<br />por contar.</h3><p>Este espaço aguarda uma avaliação confirmada.</p></div>
              <div className="review-author"><span className="review-avatar" aria-hidden="true"><Heart size={23} /></span><p>Depoimento a confirmar</p></div>
            </article>)}
          </InteractiveReviews>
        </div>
      </section>

      <section className="process section" id="como-funciona" aria-labelledby="process-title" tabIndex={-1}>
        <div className="container">
          <div className="process-heading" data-reveal><span className="eyebrow">Simples assim</span><h2 id="process-title"><AnimatedText text="Uma mensagem." /><br /><span><AnimatedText text="Um encontro." /></span></h2></div>
          <div className="process-list-wrap"><div className="process-rail" aria-hidden="true"><svg viewBox="0 0 80 550" preserveAspectRatio="none"><path className="process-route process-route-base" d="M40 73C52 140 52 200 40 265S28 390 40 457" /><path className="process-route process-route-fill" d="M40 73C52 140 52 200 40 265S28 390 40 457" /></svg><span className="process-traveller"><PawPrint size={19} /></span></div><ol className="process-list">
            <li className="process-step"><span className="process-step-number" aria-hidden="true">01</span><div className="process-step-copy"><h3><AnimatedText text="Diz-nos o que procuras" /></h3><p>Apresenta-nos o teu amigo e explica o motivo do contacto.</p></div></li>
            <li className="process-step"><span className="process-step-number" aria-hidden="true">02</span><div className="process-step-copy"><h3><AnimatedText text="Acertamos a data" /></h3><p>Consulta as vagas e escolhe um dia que encaixe na tua agenda.</p></div></li>
            <li className="process-step"><span className="process-step-number" aria-hidden="true">03</span><div className="process-step-copy"><h3><AnimatedText text="O resto acontece aqui" /></h3><p>Recebemos-vos e damos início ao atendimento combinado.</p></div></li>
          </ol></div>
        </div>
      </section>

      <section className="gallery section" id="galeria" tabIndex={-1}><div className="container">
        <div className="section-heading" data-reveal><div><span className="eyebrow">Prontos para a fotografia</span><h2><AnimatedText text="Fofura em" /><br /><span><AnimatedText text="movimento." /></span></h2></div></div>
        <PhotoGallery onOpen={openModal} modalOpen={modalOpen} />
      </div></section>

      <CommonQuestions />

      <section className="contact" id="contacto" tabIndex={-1} aria-labelledby="contact-title"><Wave /><div className="container">
        <div className="contact-head"><span className="eyebrow">O próximo passo</span><h2 id="contact-title"><span className="contact-title-line"><AnimatedText text="Começa com" /></span><span className="contact-title-line"><AnimatedText text="um olá." /></span></h2><BookingButton label="Falar no WhatsApp" onUnavailable={() => openModal('contact')} /></div>
      </div><Wave className="wave-bottom" /></section>
    </main>

    <footer className="site-footer" id="rodape">
      <div className="footer-surface">
        <div className="footer-top">
          <div className="footer-farewell" data-reveal><span className="eyebrow">A porta fica aberta</span><p className="footer-title"><AnimatedText text="Volta" /><br /><span><AnimatedText text="sempre!" /></span></p><p className="footer-tagline">GuudPet. Já és de casa.</p></div>
          <nav className="footer-directory" aria-label="Navegação do rodapé"><span className="eyebrow">Por aqui</span><div>{footerLinks.map(([label, id]) => <a key={id} href={`#${id}`}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</div></nav>
        </div>
        <div className="footer-signature">
          <a href="#inicio" aria-label="GuudPet — voltar ao início"><img src="/images/logo.webp" width="240" height="80" alt="GuudPet" loading="lazy" /></a>
          <div className="footer-socials"><h2>Redes sociais</h2><div className="footer-social-icons"><span role="img" aria-label="Instagram"><Instagram size={23} aria-hidden="true" /></span><span role="img" aria-label="Facebook"><Facebook size={23} aria-hidden="true" /></span></div></div>
          <img className="footer-cat" src="/images/footer-cat.webp" width="720" height="396" alt="" aria-hidden="true" loading="lazy" />
        </div>
        <div className="footer-end"><span>© {new Date().getFullYear()} GuudPet</span><a className="footer-to-top" href="#inicio"><span>Voltar ao topo</span><span className="footer-top-icon"><ArrowUp size={20} aria-hidden="true" /></span></a></div>
      </div>
    </footer>

    {modal !== null && <dialog ref={dialog} className={typeof modal === 'number' ? 'photo-dialog' : 'contact-dialog'} onCancel={closeModal} onClick={(event) => { if (event.target === event.currentTarget) closeModal(); }} onKeyDown={(event) => { if (typeof modal === 'number' && event.key === 'ArrowRight') setModal((modal + 1) % photos.length); if (typeof modal === 'number' && event.key === 'ArrowLeft') setModal((modal + photos.length - 1) % photos.length); }} aria-labelledby="dialog-title"><motion.div className="dialog-content" initial={reduced ? false : { opacity: 0, y: 14, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduced ? 0 : 0.2 }}><button className="icon-button dialog-close" aria-label="Fechar janela" onClick={closeModal} autoFocus><X /></button>{typeof modal === 'number' ? <><h2 id="dialog-title" className="sr-only">Fotografia ampliada</h2><img className="enlarged-photo" src={`/images/${photos[modal].image}.webp`} alt={photos[modal].alt} /><div className="photo-controls"><button className="icon-button" aria-label="Fotografia anterior" onClick={() => setModal((modal + photos.length - 1) % photos.length)}><ArrowLeft /></button><p>{modal + 1} / {photos.length}</p><button className="icon-button" aria-label="Fotografia seguinte" onClick={() => setModal((modal + 1) % photos.length)}><ArrowRight /></button></div></> : <><PawPrint className="dialog-paw" size={34} /><h2 id="dialog-title">Contacto<br /><span>em atualização.</span></h2><p>O WhatsApp será publicado assim que estiver confirmado. Guarda o texto abaixo para o enviares quando o número estiver disponível.</p><blockquote>{business.message}</blockquote><button className="button-copy" onClick={async () => { try { await navigator.clipboard.writeText(business.message); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }}>{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? 'Mensagem copiada' : 'Copiar mensagem'}</button><p role="status" className="microcopy">{copied ? 'A mensagem está pronta para colar.' : copyError ? 'Não foi possível copiar. Seleciona o texto acima e copia manualmente.' : 'Copiar o texto não inicia uma conversa.'}</p></>}</motion.div></dialog>}
  </div></MotionConfig>;
}



