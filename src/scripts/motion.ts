import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function revealAll() {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
}

export function initMotion() {
  try {
    runMotion();
  } catch (err) {
    // never leave the page blank if motion fails
    console.error('[motion] init failed, revealing all', err);
    revealAll();
  }
}

function runMotion() {
  (window as any).__motionReady = true;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    revealAll();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ---- scroll reveals (batched, with light stagger per row) ----
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.62,
        ease: 'power3.out',
        stagger: 0.08,
        overwrite: true,
        onStart: () => els.forEach((e) => e.classList.add('is-in')),
      }),
  });

  // ---- animated stat counters ----
  document.querySelectorAll<HTMLElement>('.stat__num').forEach((el) => {
    const target = parseFloat(el.dataset.count || '0');
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const decimals = target % 1 !== 0 ? 2 : 0;
    const obj = { n: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          n: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = prefix + obj.n.toFixed(decimals) + suffix;
          },
        }),
    });
  });

  // ---- hero rotating word ----
  const rotor = document.querySelector<HTMLElement>('.hero__rotor');
  if (rotor) {
    let words: string[] = [];
    try { words = JSON.parse(rotor.dataset.words || '[]'); } catch {}
    if (words.length > 1) {
      const inner = rotor.querySelector('.mark') as HTMLElement;
      let i = 0;
      const cycle = () => {
        i = (i + 1) % words.length;
        gsap.to(inner, {
          y: -14, opacity: 0, duration: 0.28, ease: 'power2.in',
          onComplete: () => {
            inner.textContent = words[i];
            gsap.fromTo(inner, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.34, ease: 'power2.out' });
          },
        });
      };
      gsap.delayedCall(1.6, function loop() {
        cycle();
        gsap.delayedCall(1.9, loop);
      });
    }
  }

  // ---- subtle parallax drift on scrapbook stickers ----
  gsap.utils.toArray<HTMLElement>('.hero__sticker, .hero__doodle').forEach((el, idx) => {
    gsap.to(el, {
      y: idx % 2 ? 26 : -22,
      rotation: '+=' + (idx % 2 ? 4 : -4),
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
    });
  });

  // ---- case visuals: gentle parallax of the big label ----
  gsap.utils.toArray<HTMLElement>('.case').forEach((card) => {
    const label = card.querySelector('.case__visual-big');
    if (!label) return;
    gsap.fromTo(
      label,
      { yPercent: 8 },
      { yPercent: -8, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } }
    );
  });
}
