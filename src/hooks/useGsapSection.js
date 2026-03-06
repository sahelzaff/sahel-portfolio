import { useLayoutEffect } from 'react';
import { registerGsapPlugins, safeGsapContext } from '../lib/animations';

const useGsapSection = (scopeRef, setupFn, deps = []) => {
  const depsKey = JSON.stringify(deps);

  useLayoutEffect(() => {
    if (!scopeRef?.current || typeof setupFn !== 'function') {
      return undefined;
    }

    registerGsapPlugins();

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return safeGsapContext(scopeRef, (gsap) => {
      setupFn({ gsap, reducedMotion });
    });
  }, [scopeRef, setupFn, depsKey]);
};

export default useGsapSection;
