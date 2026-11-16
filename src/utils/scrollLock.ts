let lockCount = 0;

export function acquireScrollLock(): () => void {
  if (typeof document === 'undefined') {
    return () => {};
  }

  lockCount += 1;
  if (lockCount === 1) {
    document.documentElement.classList.add('scroll-locked');
    document.body.style.overflow = 'hidden';
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.documentElement.classList.remove('scroll-locked');
      document.body.style.overflow = '';
    }
  };
}
