import type { AxeEvents } from './gamepad.js';

export const log = (message: string, type = 'log'): void => {
  if (type === 'error') {
    if (console && typeof console.error === 'function') console.error(message);
  } else {
    if (console && typeof console.info === 'function') console.info(message);
  }
};

export const error = (message: string): void => log(message, 'error');

export const isGamepadSupported = (): boolean =>
  (navigator.getGamepads && typeof navigator.getGamepads === 'function') ||
  // @ts-expect-error - validation typings
  (navigator.getGamepads && typeof navigator.webkitGetGamepads === 'function') ||
  false;

export const emptyEvents = (): AxeEvents => ({ action: () => {}, after: () => {}, before: () => {} });
