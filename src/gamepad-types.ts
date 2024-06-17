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
  on(eventName: GameControlEvent, callback: () => void): this;
  off(eventName: GameControlEvent): this;
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
  associateEvent(eventName: string, callback: AxeEvent, type: keyof AxeEvents): this;
  on(eventName: string, callback: AxeEvent): this;
  off(eventName: string): this;
  after(eventName: string, callback: AxeEvent): this;
  before(eventName: string, callback: AxeEvent): this;
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