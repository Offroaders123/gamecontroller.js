import { log, error, isGamepadSupported } from './tools.js';
import { MESSAGES } from './constants.js';
import gamepad from './gamepad.js';

import type GamepadPrototype from './gamepad.js';

export type GameControlEvent = 'connect' | 'disconnect' | 'beforeCycle' | 'beforecycle' | 'afterCycle' | 'aftercycle';

class GameControl {
  gamepads: Record<string, GamepadPrototype> = {};
  axeThreshold: [number] = [1.0]; // this is an array so it can be expanded without breaking in the future
  isReady: boolean = isGamepadSupported();

  constructor() {
    window.addEventListener('gamepadconnected', e => {
      const egp: Gamepad = e.gamepad || (e as GamepadEvent & CustomEvent).detail.gamepad;
      log(MESSAGES.ON);
      if (!window.gamepads) window.gamepads = {};
      if (egp) {
        if (!window.gamepads[egp.index]) {
          window.gamepads[egp.index] = egp;
          const gp = new gamepad(egp);
          gp.set('axeThreshold', this.axeThreshold);
          this.gamepads[gp.id] = gp;
          this.onConnect(this.gamepads[gp.id]!);
        }
        if (Object.keys(this.gamepads).length === 1) this.checkStatus();
      }
    });
    window.addEventListener('gamepaddisconnected', e => {
      const egp: Gamepad = e.gamepad || (e as GamepadEvent & CustomEvent).detail.gamepad;
      log(MESSAGES.OFF);
      if (egp) {
        delete window.gamepads[egp.index];
        delete this.gamepads[egp.index];
        this.onDisconnect(egp.index);
      }
    });
  }

  onConnect: (gamepad: GamepadPrototype) => void = () => {};

  onDisconnect: (index: number) => void = () => {};

  onBeforeCycle: () => void = () => {};

  onAfterCycle: () => void = () => {};

  getGamepads(): typeof this['gamepads'] {
    return this.gamepads;
  }

  getGamepad(id: number): GamepadPrototype | null {
    if (this.gamepads[id]) {
      return this.gamepads[id]!;
    }
    return null;
  }

  set<K extends keyof GameControl>(property: K, value: this[K]): void {
    const properties = ['axeThreshold'];
    if (properties.indexOf(property) >= 0) {
      // @ts-expect-error - this seems to be an issue with the code itself, the `value` is actually a tuple with a single number
      if (property === 'axeThreshold' && (!parseFloat(value) || value < 0.0 || value > 1.0)) {
        error(MESSAGES.INVALID_VALUE_NUMBER);
        return;
      }

      this[property] = value;

      if (property === 'axeThreshold') {
        const gps = this.getGamepads();
        const ids = Object.keys(gps);
        for (let x = 0; x < ids.length; x++) {
          gps[ids[x]!]!.set('axeThreshold', this.axeThreshold);
        }
      }
    } else {
      error(MESSAGES.INVALID_PROPERTY);
    }
  }

  checkStatus(): void {
    const requestAnimationFrame =
      window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    const gamepadIds = Object.keys(this.gamepads);

    this.onBeforeCycle();

    for (let x = 0; x < gamepadIds.length; x++) {
      this.gamepads[gamepadIds[x]!]!.checkStatus();
    }

    this.onAfterCycle();

    if (gamepadIds.length > 0) {
      requestAnimationFrame(this.checkStatus);
    }
  }

  on(eventName: GameControlEvent, callback: () => void): this {
    switch (eventName) {
      case 'connect':
        this.onConnect = callback;
        break;
      case 'disconnect':
        this.onDisconnect = callback;
        break;
      case 'beforeCycle':
      case 'beforecycle':
        this.onBeforeCycle = callback;
        break;
      case 'afterCycle':
      case 'aftercycle':
        this.onAfterCycle = callback;
        break;
      default:
        error(MESSAGES.UNKNOWN_EVENT);
        break;
    }
    return this;
  }

  off(eventName: GameControlEvent): this {
    switch (eventName) {
      case 'connect':
        this.onConnect = () => {};
        break;
      case 'disconnect':
        this.onDisconnect = () => {};
        break;
      case 'beforeCycle':
      case 'beforecycle':
        this.onBeforeCycle = () => {};
        break;
      case 'afterCycle':
      case 'aftercycle':
        this.onAfterCycle = () => {};
        break;
      default:
        error(MESSAGES.UNKNOWN_EVENT);
        break;
    }
    return this;
  }
}

export type { GameControl };

export default new GameControl();
