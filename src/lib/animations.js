import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GSAP_DEFAULTS = {
  ease: 'power2.out',
  duration: 0.7,
  stagger: 0.1,
  start: 'top 80%',
};

let pluginsRegistered = false;

export const registerGsapPlugins = () => {
  if (pluginsRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
};

const toArray = (targets) => {
  if (!targets) {
    return [];
  }

  if (typeof targets === 'string') {
    return gsap.utils.toArray(targets);
  }

  if (Array.isArray(targets)) {
    return targets.filter(Boolean);
  }

  if (typeof targets === 'object' && 'length' in targets && !targets.nodeType) {
    return Array.from(targets).filter(Boolean);
  }

  return [targets].filter(Boolean);
};

const makeVisible = (targets) => {
  const nodes = toArray(targets);
  if (nodes.length === 0) {
    return;
  }

  gsap.set(nodes, { autoAlpha: 1, x: 0, y: 0, scale: 1, clearProps: 'transform' });
};

export const safeGsapContext = (scopeRef, setupFn) => {
  const ctx = gsap.context(() => {
    setupFn(gsap);
  }, scopeRef);

  return () => ctx.revert();
};

export const runSectionReveal = ({ trigger, targets, options = {}, reducedMotion = false }) => {
  const nodes = toArray(targets);
  if (nodes.length === 0) {
    return null;
  }

  if (reducedMotion) {
    makeVisible(nodes);
    return null;
  }

  const {
    duration = GSAP_DEFAULTS.duration,
    ease = GSAP_DEFAULTS.ease,
    y = 24,
    x = 0,
    start = GSAP_DEFAULTS.start,
    once = true,
  } = options;

  return gsap.fromTo(
    nodes,
    { autoAlpha: 0, y, x },
    {
      autoAlpha: 1,
      y: 0,
      x: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        start,
        once,
      },
    }
  );
};

export const runStaggerReveal = ({ trigger, targets, options = {}, reducedMotion = false }) => {
  const nodes = toArray(targets);
  if (nodes.length === 0) {
    return null;
  }

  if (reducedMotion) {
    makeVisible(nodes);
    return null;
  }

  const {
    duration = GSAP_DEFAULTS.duration,
    ease = GSAP_DEFAULTS.ease,
    y = 24,
    x = 0,
    stagger = GSAP_DEFAULTS.stagger,
    start = GSAP_DEFAULTS.start,
    once = true,
  } = options;

  return gsap.fromTo(
    nodes,
    { autoAlpha: 0, y, x },
    {
      autoAlpha: 1,
      y: 0,
      x: 0,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger,
        start,
        once,
      },
    }
  );
};

export const runParallax = ({ trigger, target, yRange = 32, start = 'top bottom', end = 'bottom top', reducedMotion = false }) => {
  const nodes = toArray(target);
  if (nodes.length === 0 || reducedMotion) {
    return null;
  }

  return gsap.to(nodes, {
    y: yRange,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub: true,
    },
  });
};
