const log = (/** @type {string} */ message, type = 'log') => {
  if (type === 'error') {
    if (console && typeof console.error === 'function') console.error(message);
  } else {
    if (console && typeof console.info === 'function') console.info(message);
  }
};

const error = (/** @type {string} */ message) => log(message, 'error');

const isGamepadSupported = () =>
  (navigator.getGamepads && typeof navigator.getGamepads === 'function') ||
  (navigator.getGamepads && typeof navigator.webkitGetGamepads === 'function') ||
  false;

/** @returns {import("./gamepad-types.d.ts").AxeEvents} */
const emptyEvents = () => ({ action: () => {}, after: () => {}, before: () => {} });

export { isGamepadSupported, log, error, emptyEvents };
