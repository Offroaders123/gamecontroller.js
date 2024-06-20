import type { AxeEvents } from './gamepad.js';

const log = (message: string, type = 'log'): void => {
  if (type === 'error') {
    if (console && typeof console.error === 'function') console.error(message);
  } else {
    if (console && typeof console.info === 'function') console.info(message);
  }
};

const error = (message: string): void => log(message, 'error');

const isGamepadSupported = (): boolean =>
  (navigator.getGamepads && typeof navigator.getGamepads === 'function') ||
  // @ts-expect-error - validation typings
  (navigator.getGamepads && typeof navigator.webkitGetGamepads === 'function') ||
  false;

const emptyEvents = (): AxeEvents => ({ action: () => {}, after: () => {}, before: () => {} });

export { isGamepadSupported, log, error, emptyEvents };
