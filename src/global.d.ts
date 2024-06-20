import type { GameControl } from './gamecontrol.js';

declare global {
  var webkitRequestAnimationFrame: typeof requestAnimationFrame;

  interface Gamepad {
    hapticActuators?: (GamepadHapticActuator | null)[];
  }

  interface GamepadHapticActuator {
    pulse(value: number, duration: number): Promise<true>;
  }

  interface Navigator {
    webkitGetGamepads: typeof navigator.getGamepads;
  }

  var gameControl: GameControl;
  var gamepads: Record<number, Gamepad>;
}

export {};