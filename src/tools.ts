import type { AxeEvents } from './gamepad.js';

export function log(message: string, type = 'log'): void {
  if (type === 'error') {
    if (console && typeof console.error === 'function') console.error(message);
  } else {
    if (console && typeof console.info === 'function') console.info(message);
  }
}

export function error(message: string): void {
  return log(message, 'error');
}

export function isGamepadSupported(): boolean {
  return (navigator.getGamepads && typeof navigator.getGamepads === 'function') ||
  // @ts-expect-error - validation typings
  (navigator.getGamepads && typeof navigator.webkitGetGamepads === 'function') ||
  false;
}

export function emptyEvents(): AxeEvents {
  return ({ action: () => {}, after: () => {}, before: () => {} });
}
