export interface GameControl {
  gamepads: Record<string, GamepadPrototype>;
  axeThreshold: [number];
  isReady: boolean;
  onConnect(): void;
  onDisconnect(): void;
  onBeforeCycle(): void;
  onAfterCycle(): void;
  getGamepads(): GameControl['gamepads'];
  getGamepad(id: number): GamepadPrototype | null;
  set<K extends keyof GameControl>(property: K, value: GameControl[K]): void;
  checkStatus(): void;
  init(): void;
  on(eventName: GameControlEvent, callback: () => void): void;
  off(eventName: GameControlEvent): void;
}

export type GameControlEvent = 'connect' | 'disconnect' | 'beforeCycle' | 'beforecycle' | 'afterCycle' | 'aftercycle';

export interface GamepadPrototype {
  id: number;
  buttons: number;
  axes: number;
  axeValues: [number, number][];
  axeThreshold: [number];
  hapticActuator: GamepadHapticActuator | null;
  vibrationMode: number;
  vibration: boolean;
  mapping: GamepadMappingType;
  buttonActions: Record<number, AxeEvents>;
  axesActions: Record<number, AxeAction>;
  pressed: Record<string, boolean>;
  set<K extends keyof GamepadPrototype>(property: K, value: GamepadPrototype[K]): void;
  vibrate(value?: number, duration?: number): void;
  triggerDirectionalAction(id: Axe, axe: number, condition: boolean, x: number, index: number): void;
  checkStatus(): void;
  associateEvent(eventName: string, callback: AxeEvent, type: keyof AxeEvents): void;
  on(eventName: string, callback: AxeEvent): void;
  off(eventName: string): void;
  after(eventName: string, callback: AxeEvent): void;
  before(eventName: string, callback: AxeEvent): void;
}

export type Axe = 'right' | 'left' | 'down' | 'up';

export type AxeAction = {
  [K in Axe]: AxeEvents;
}

export interface AxeEvents {
  action: AxeEvent;
  after: AxeEvent;
  before: AxeEvent;
}

export type AxeEvent = () => void;