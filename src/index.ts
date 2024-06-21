// This file is the entry point
import { error, isGamepadSupported } from './tools.js';
import { MESSAGES } from './constants.js';
import GameControl from './gamecontrol.js';

if (!isGamepadSupported()) {
  // I wanted to add a `throw` keyword here, but Jest doesn't seem to test correctly when that's the case.
  error(MESSAGES.NO_SUPPORT);
}

export default new GameControl();
