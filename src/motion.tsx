/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Becomes true once the element scrolls into view (and stays true). */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: 'rise' | 'scale';
  className?: string;
}

/** Fades and lifts its content into place the first time it is seen. */
export function Reveal({ children, as: Tag = 'div', delay = 0, variant = 'rise', className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;
  return (
    <Tag ref={ref} data-visible={inView} style={style} className={`reveal ${variant === 'scale' ? 'reveal-scale' : ''} ${className}`}>
      {children}
    </Tag>
  );
}

/** 0 → 1 as the element travels through the viewport (for scroll-linked effects). */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Starts when the top reaches 85% of the viewport, ends when the bottom reaches 45%
      const start = viewport * 0.85;
      const end = viewport * 0.45 - rect.height;
      const value = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
}

/**
 * Counts up the single number inside a stat such as "100k+" or "~60 mil".
 * Values with more than one number (like "15 → 3 days") are shown as they are.
 */
export function CountUp({ value, active }: { value: string; active: boolean }) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const target = match ? Number(match[2]) : 0;
  const [current, setCurrent] = useState(match && !prefersReducedMotion() ? 0 : target);

  useEffect(() => {
    if (!match || !active || prefersReducedMotion()) return;
    let frame = 0;
    const started = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setCurrent(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, target]);

  if (!match) return <>{value}</>;
  return (
    <>
      <span aria-hidden="true">{`${match[1]}${current}${match[3]}`}</span>
      <span className="sr-only">{value}</span>
    </>
  );
}

/** Which section id is currently under the sticky nav. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join('|');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    key.split('|').forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
}

/** True once the page has scrolled past a few pixels (for the nav's frosted state). */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);
  return scrolled;
}
